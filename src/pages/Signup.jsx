import { useState, useEffect } from "react";
import { auth } from "../firebase.js";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { saveUserToDB } from "../utils/saveUserToDB";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);

  // Helper to clean up Recaptcha
  const resetRecaptcha = () => {
    if (window.recaptchaVerifier) {
      window.recaptchaVerifier.clear();
      window.recaptchaVerifier = null;
    }
  };

  const setupRecaptcha = () => {
    const container = document.getElementById("recaptcha-container");
    if (!container) return;

    if (!window.recaptchaVerifier) {
      try {
        window.recaptchaVerifier = new RecaptchaVerifier(auth, container, {
          size: "invisible",
          sitekey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
          callback: () => console.log("reCAPTCHA verified"),
        });

        // Add this line to ensure the verifier is ready for production
        window.recaptchaVerifier.render();
      } catch (err) {
        console.error("Recaptcha Init Error:", err);
      }
    }
  };

  const sendOTP = async () => {
    setError("");

    // 1. Clean the phone number (remove spaces, dashes, parentheses)
    // Users often type "+91 98765-43210", which Firebase rejects.
    const cleanedPhone = form.phone.replace(/[\s\-()]/g, "");

    // 2. Strict Validation
    if (!cleanedPhone.startsWith("+")) {
      setError(
        "Please include '+' and your country code (e.g., +919876543210)"
      );
      return;
    }

    // Usually, + (1) + Country (1-3) + Number (10) means length should be 12-14
    if (cleanedPhone.length < 11) {
      setError("Phone number is too short. Please check again.");
      return;
    }

    try {
      setLoading(true);

      // 3. Clear and Re-initialize reCAPTCHA
      // This prevents "Verifier not ready" errors on second attempts
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
        window.recaptchaVerifier = null;
      }

      setupRecaptcha();

      const appVerifier = window.recaptchaVerifier;
      if (!appVerifier) throw new Error("reCAPTCHA failed to initialize.");

      // 4. Send OTP using the CLEANED number
      const confirmation = await signInWithPhoneNumber(
        auth,
        cleanedPhone,
        appVerifier
      );

      setConfirmationResult(confirmation);
      alert("OTP Sent Successfully to " + cleanedPhone);
    } catch (err) {
      console.error("Full OTP Error Object:", err);

      // 5. User-Friendly Error Messages
      if (err.code === "auth/too-many-requests") {
        setError(
          "Too many attempts. Please wait 30 minutes or use a test number."
        );
      } else if (err.code === "auth/invalid-phone-number") {
        setError("The phone number is invalid. Check the country code.");
      } else if (err.code === "auth/captcha-check-failed") {
        setError("reCAPTCHA expired or failed. Please try again.");
      } else {
        setError("Failed to send OTP: " + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!confirmationResult || !otp)
      return setError("Please verify OTP first.");

    try {
      setLoading(true);
      // 1. Verify OTP
      await confirmationResult.confirm(otp);

      // 2. Create Auth User
      const res = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      // 3. Update Profile & DB
      await updateProfile(res.user, { displayName: form.name });
      await saveUserToDB(res.user, { name: form.name, phone: form.phone });

      navigate("/");
    } catch (err) {
      setError(
        err.code === "auth/invalid-verification-code"
          ? "Invalid OTP"
          : "Signup failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 border p-6 rounded-xl shadow bg-white">
      <h2 className="text-2xl font-bold mb-4">Create Account</h2>
      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

      <form onSubmit={handleSignup} className="space-y-4">
        <input
          className="w-full border p-3 rounded"
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          className="w-full border p-3 rounded"
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          className="w-full border p-3 rounded"
          type="tel"
          name="phone"
          placeholder="+91..."
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          required
        />
        <input
          className="w-full border p-3 rounded"
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />

        <button
          type="button"
          onClick={sendOTP}
          className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
        >
          Send OTP
        </button>

        <input
          className="w-full border p-3 rounded"
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        <button
          disabled={loading}
          className="w-full bg-black text-white p-3 rounded disabled:opacity-50"
        >
          {loading ? "Processing..." : "Sign Up"}
        </button>
      </form>
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default Signup;
