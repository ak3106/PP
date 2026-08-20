const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");

const admin = require("firebase-admin");
const { Resend } = require("resend");
const Razorpay = require("razorpay");
const crypto = require("crypto");

admin.initializeApp();

const resendKey = defineSecret("RESEND_API_KEY");

/**
 * 1. Firestore Trigger: Send Welcome Email
 */
exports.sendWelcomeEmail = onDocumentCreated(
  {
    document: "users/{uid}",
    region: "asia-south1",
    secrets: [resendKey],
  },
  async (event) => {
    const user = event.data.data();

    if (!user) return;

    const resend = new Resend(resendKey.value());

    const email = user.email;
    const phone = user.phone;
    const name = user.name || "Print Lover";

    // EMAIL
    if (email) {
      try {
        const response = await resend.emails.send({
          from: "PragyaPrint <mail@mail.pragyaprint.com>",
          to: email,
          subject: "Welcome to the PragyaPrint Family! 🎨📓",
          html: `
            <div style="font-family:sans-serif;max-width:600px;margin:auto">
              <h2>Hello ${name} 👋</h2>

              <p>Welcome to <b>PragyaPrint</b>.</p>

              <p>Your account has been created successfully.</p>

              <p>
                Use coupon
                <strong>FIRST10</strong>
                to get 10% OFF.
              </p>

              <hr>

              <small>
                Built with ❤️ by PragyaPrint
              </small>
            </div>
          `,
        });

        console.log("Email sent:", response);
      } catch (err) {
        console.error("Resend Error:", err);
      }
    }

    // WHATSAPP (Later)
  }
);

/**
 * 2. Callable Function: Create Razorpay Order
 */
exports.createRazorpayOrder = onCall(
  { region: "asia-south1", cors: true },
  async (request) => {
    try {
      const keyId = process.env.RAZORPAY_KEY_ID;
      const keySecret = process.env.RAZORPAY_KEY_SECRET;

      if (!keyId || !keySecret) {
        throw new HttpsError(
          "internal",
          "Razorpay credentials missing from environment variables."
        );
      }

      const razorpay = new Razorpay({ key_id: keyId, key_secret: keySecret });
      const { amount, currency = "INR", receipt } = request.data;

      if (!amount || amount < 100) {
        throw new HttpsError(
          "invalid-argument",
          "Minimum amount required is 100 paise (₹1)."
        );
      }

      const options = {
        amount: parseInt(amount, 10),
        currency,
        receipt: receipt || `receipt_${Date.now()}`,
      };

      const order = await razorpay.orders.create(options);

      return {
        order_id: order.id,
        amount: order.amount,
        currency: order.currency,
      };
    } catch (error) {
      console.error("Razorpay Create Order Error:", error);
      throw new HttpsError("internal", error.message);
    }
  }
);

/**
 * 3. Callable Function: Verify Razorpay Payment
 */
exports.verifyRazorpayPayment = onCall(
  { region: "asia-south1", cors: true },
  async (request) => {
    try {
      const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
        request.data;

      if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
        throw new HttpsError(
          "invalid-argument",
          "Missing required signature parameters."
        );
      }

      const keySecret = process.env.RAZORPAY_KEY_SECRET;
      if (!keySecret) {
        throw new HttpsError("internal", "Razorpay secret missing.");
      }

      const body = `${razorpay_order_id}|${razorpay_payment_id}`;
      const expectedSignature = crypto
        .createHmac("sha256", keySecret)
        .update(body.toString())
        .digest("hex");

      if (expectedSignature === razorpay_signature) {
        return {
          status: "success",
          message: "Payment verified successfully",
          order_id: razorpay_order_id,
          payment_id: razorpay_payment_id,
        };
      } else {
        throw new HttpsError("unauthenticated", "Invalid payment signature.");
      }
    } catch (error) {
      console.error("Razorpay Verification Error:", error);
      throw new HttpsError("internal", error.message);
    }
  }
);