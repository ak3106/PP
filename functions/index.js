const { auth, region } = require("firebase-functions/v1"); // Clean, reliable 1st-Gen Auth Trigger
const admin = require("firebase-admin");
const { Resend } = require("resend");
const axios = require("axios");


admin.initializeApp();

// Create the background onboarding task trigger
exports.sendWelcomeCommunications = region("asia-south1").auth.user().onCreate(
  {
    // Securely binds these Secret Manager parameters to this cloud container execution space
    secrets: ["RESEND_API_KEY", "INTERAKT_API_KEY"],
  },
  async (user) => {
    // Read secrets directly out of securely injected environment memory slots
    const resend = new Resend(process.env.RESEND_API_KEY);
    const whatsappKey = process.env.INTERAKT_API_KEY;

    const email = user.email;
    const phoneNumber = user.phoneNumber; // Format: +91XXXXXXXXXX
    const displayName = user.displayName || "Print Lover";

    // 1. Dispatch Branded Onboarding Email
    if (email) {
      try {
        await resend.emails.send({
          from: "PragyaPrint <hello@pragyaprint.com>",
          to: [email],
          subject: "Welcome to the PragyaPrint Family! 🎨📓",
          html: `
          <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: 0 auto; line-height: 1.6;">
            <h2 style="color: #111;">Hey ${displayName}, welcome aboard!</h2>
            <p>Your official account for <strong>pragyaprint.com</strong> is active.</p>
            <p>Get ready to elevate your creative workspace. We design and print premium planners, aesthetic spiral journals, custom sticker sheets, and crisp wall posters entirely in-house.</p>
            <p>As an early family member, use code <strong>FIRST10</strong> to grab 10% off your initial checkout bundle.</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 25px 0;" />
            <p style="font-size: 11px; color: #777;">In-House Production Infrastructure Since 2006. Built for Creators.</p>
          </div>
        `,
        });
        console.log(`Successfully dispatched transactional welcome email to ${email}`);
      } catch (error) {
        console.error("Email API Processing Error:", error);
      }
    }

    // 2. Dispatch Automated Welcome WhatsApp
    if (phoneNumber) {
      try {
        await axios.post(
          "https://api.interakt.ai/v1/public/message/",
          {
            countryCode: "+91",
            phoneNumber: phoneNumber.replace("+91", ""),
            callbackData: "welcome_onboarding",
            type: "Template",
            template: {
              name: "pragyaprint_welcome", // Must match your approved template name in Interakt/AiSensy
              languageCode: "en",
              headerValues: [],
              bodyValues: [displayName],
            },
          },
          {
            headers: { Authorization: `Basic ${whatsappKey}` },
          }
        );
        console.log(`Successfully dispatched onboarding WhatsApp message to ${phoneNumber}`);
      } catch (error) {
        console.error("WhatsApp API Processing Error:", error);
      }
    }

    return null;
  }
);