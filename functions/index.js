const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");

const admin = require("firebase-admin");
const { Resend } = require("resend");
const Razorpay = require("razorpay");
const crypto = require("crypto");

admin.initializeApp();

const resendKey = defineSecret("RESEND_API_KEY");
const razorpayKeyId = defineSecret("RAZORPAY_KEY_ID");
const razorpayKeySecret = defineSecret("RAZORPAY_KEY_SECRET");

// ----------------
//  RAZORPAY: CREATE ORDER
// ----------------
exports.createRazorpayOrder = onCall(
  {
    region: "asia-south1",
    secrets: [razorpayKeyId, razorpayKeySecret],
    cors: true,
  },
  async (request) => {
    if (!request.auth) {
      throw new HttpsError("unauthenticated", "You must be signed in to create an order.");
    }

    const { amount, currency, receipt } = request.data;
    if (!Number.isInteger(amount) || amount < 100) {
      throw new HttpsError(
        "invalid-argument",
        "Amount must be an integer of at least 100 paise (₹1).",
      );
    }
    try {
      const razorpay = new Razorpay({
        key_id: razorpayKeyId.value(),
        key_secret: razorpayKeySecret.value(),
      });
      const order = await razorpay.orders.create({
        amount,
        currency: currency || "INR",
        receipt: receipt || "receipt_" + Date.now(),
        payment_capture: 1,
      });
      return {
        order_id: order.id,
        amount: order.amount,
        currency: order.currency,
      };
    } catch (error) {
      console.error("Razorpay Create Order Error:", error);
      if (error.statusCode === 401) {
        throw new HttpsError(
          "unauthenticated",
          "Razorpay authentication failed. Check the server credentials.",
        );
      }
      throw new HttpsError("internal", "Could not create the Razorpay order.");
    }
  }
);

// ----------------
//  RAZORPAY: VERIFY PAYMENT
// ----------------
exports.verifyRazorpayPayment = onCall(
  { region: "asia-south1", secrets: [razorpayKeySecret], cors: true },
  async (request) => {
    if (!request.auth) {
      throw new HttpsError("unauthenticated", "You must be signed in to verify a payment.");
    }

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = request.data;
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      throw new HttpsError("invalid-argument", "Missing required payment fields.");
    }
    try {
      const body = razorpay_order_id + "|" + razorpay_payment_id;
      const expectedSignature = crypto
        .createHmac("sha256", razorpayKeySecret.value())
        .update(body.toString())
        .digest("hex");
      const expectedBuffer = Buffer.from(expectedSignature, "utf8");
      const receivedBuffer = Buffer.from(razorpay_signature, "utf8");
      const isVerified =
        expectedBuffer.length === receivedBuffer.length &&
        crypto.timingSafeEqual(expectedBuffer, receivedBuffer);
      if (!isVerified) {
        throw new HttpsError(
          "invalid-argument",
          "Payment signature verification failed.",
        );
      }
      return {
        verified: true,
        order_id: razorpay_order_id,
        payment_id: razorpay_payment_id,
      };
    } catch (error) {
      if (error instanceof HttpsError) throw error;
      console.error("Razorpay Verify Error:", error);
      throw new HttpsError("internal", "Could not verify the payment signature.");
    }
  }
);

// ----------------
//  WELCOME EMAIL
// ----------------
exports.sendWelcomeEmail = onDocumentCreated(
  { document: "users/{uid}", region: "asia-south1", secrets: [resendKey] },
  async (event) => {
    const user = event.data.data();
    if (!user) return;
    const resend = new Resend(resendKey.value());
    const email = user.email;
    const name = user.name || "Print Lover";
    if (email) {
      try {
        await resend.emails.send({
          from: "PragyaPrint <mail@mail.pragyaprint.com>",
          to: email,
          subject: "Welcome to the PragyaPrint Family! 🎨📓",
          html: '<div style="font-family:sans-serif;max-width:600px;margin:auto"><h2>Hello ' + name + ' 👋</h2><p>Welcome to <b>PragyaPrint</b>.</p><p>Your account has been created successfully.</p><p>Use coupon <strong>FIRST10</strong> to get 10% OFF.</p><hr><small>Built with ❤️ by PragyaPrint</small></div>',
        });
        console.log("Email sent to:", email);
      } catch (err) {
        console.error("Resend Error:", err);
      }
    }
  }
);
