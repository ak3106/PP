const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const { defineSecret } = require("firebase-functions/params");

const admin = require("firebase-admin");
const { Resend } = require("resend");
const axios = require("axios");

admin.initializeApp();

const resendKey = defineSecret("RESEND_API_KEY");
// const interaktKey = defineSecret("INTERAKT_API_KEY");

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