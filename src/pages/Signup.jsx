import { useState, useEffect } from "react";
import { auth, db } from "../firebase.js";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  RecaptchaVerifier,
  fetchSignInMethodsForEmail,
  signInWithPhoneNumber,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { saveUserToDB } from "../utils/saveUserToDB";
import { useNavigate, Link, useLocation } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectMsg = location.state?.message;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "", // Stores only 10 digits
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [otpSent, setOtpSent] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  const [googleUser, setGoogleUser] = useState(null);
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [modalPhone, setModalPhone] = useState(""); // Stores only 10 digits
  const [modalOtp, setModalOtp] = useState("");
  const [modalOtpSent, setModalOtpSent] = useState(false);
  const [modalCooldown, setModalCooldown] = useState(0);
  const [modalError, setModalError] = useState("");

  // Timer Effects
  useEffect(() => {
    if (cooldown <= 0) return;
    const t = setTimeout(() => setCooldown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [cooldown]);

  useEffect(() => {
    if (modalCooldown <= 0) return;
    const t = setTimeout(() => setModalCooldown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [modalCooldown]);

  // Recaptcha Logic
  const resetRecaptcha = (containerId = "recaptcha-container") => {
    if (window.recaptchaVerifier) {
      window.recaptchaVerifier.clear();
      window.recaptchaVerifier = null;
    }
    const container = document.getElementById(containerId);
    if (container) {
      const parent = container.parentNode;
      const newContainer = document.createElement("div");
      newContainer.id = containerId;
      parent.replaceChild(newContainer, container);
    }
  };

  const setupRecaptcha = async (containerId = "recaptcha-container") => {
    resetRecaptcha(containerId);
    try {
      const verifier = new RecaptchaVerifier(auth, containerId, {
        size: "invisible",
        callback: () => console.log("reCAPTCHA verified"),
        "expired-callback": () => resetRecaptcha(containerId),
      });
      await verifier.render();
      window.recaptchaVerifier = verifier;
      return verifier;
    } catch (err) {
      console.error("Recaptcha Init Error:", err);
      return null;
    }
  };

  // Logic to handle "Send OTP" for standard form
  const sendOTP = async () => {
    setError("");
    if (form.phone.length !== 10) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    const fullPhone = `+91${form.phone}`;

    try {
      setLoading(true);
      const methods = await fetchSignInMethodsForEmail(auth, form.email);
      if (methods.length > 0) {
        setError("Email already exists. Please login.");
        setLoading(false);
        return;
      }

      const appVerifier = await setupRecaptcha();
      if (!appVerifier) throw new Error("reCAPTCHA failed.");

      const confirmation = await signInWithPhoneNumber(
        auth,
        fullPhone,
        appVerifier,
      );
      setConfirmationResult(confirmation);
      setOtpSent(true);
      setCooldown(30);
    } catch (err) {
      setError(err.message || "Failed to send OTP");
      resetRecaptcha();
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
      await confirmationResult.confirm(otp);
      const res = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password,
      );
      await updateProfile(res.user, { displayName: form.name });
      await saveUserToDB(res.user, {
        name: form.name,
        phone: `+91${form.phone}`,
      });
      navigate("/");
    } catch (err) {
      setError("Signup failed. Check details or OTP.");
    } finally {
      setLoading(false);
    }
  };

  // Google Flow
  const handleGoogleSignup = async () => {
    setError("");
    try {
      setLoading(true);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      if (!result._tokenResponse?.isNewUser) {
        // Existing user — just go home
        navigate("/");
        return;
      }

      // ✅ Sign out immediately — don't let them in until phone is verified
      await signOut(auth);

      // Store user data temporarily in state (not in Firebase)
      setGoogleUser({
        displayName: result.user.displayName,
        email: result.user.email,
        uid: result.user.uid,
        photoURL: result.user.photoURL,
      });
      setShowPhoneModal(true);
    } catch (err) {
      if (err.code !== "auth/popup-closed-by-user")
        setError("Google sign-in failed.");
    } finally {
      setLoading(false);
    }
  };

  const sendModalOTP = async () => {
    setModalError("");
    if (modalPhone.length !== 10) return setModalError("Enter 10 digits.");

    const fullPhone = `+91${modalPhone}`;
    if (modalCooldown > 0) return;

    try {
      setLoading(true);
      const appVerifier = await setupRecaptcha("recaptcha-container-modal");
      if (!appVerifier) throw new Error("reCAPTCHA failed.");

      const confirmation = await signInWithPhoneNumber(
        auth,
        fullPhone,
        appVerifier,
      );
      setConfirmationResult(confirmation);
      setModalOtpSent(true);
      setModalCooldown(30);
    } catch (err) {
      setModalError(err.message || "Failed to send OTP");
      resetRecaptcha("recaptcha-container-modal");
    } finally {
      setLoading(false);
    }
  };

  const handleModalVerify = async () => {
    setModalError("");
    if (!confirmationResult || !modalOtp) {
      setModalError("Enter OTP first.");
      return;
    }

    try {
      setLoading(true);

      // 1. Verify OTP
      await confirmationResult.confirm(modalOtp);

      // 2. Sign back in with Google to restore the session
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      // 3. Save to DB now that phone is verified
      await saveUserToDB(result.user, {
        name: googleUser.displayName,
        phone: `+91${modalPhone}`,
      });

      setShowPhoneModal(false);
      navigate("/");
    } catch (err) {
      if (err.code === "auth/invalid-verification-code") {
        setModalError("Invalid OTP. Please try again.");
      } else {
        setModalError("Verification failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-6">
      <div className="max-w-md mx-auto w-full bg-white border border-gray-100 p-8 rounded-2xl shadow-xl transition-all">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Create Account
          </h2>
          <p className="text-gray-500 mt-2">Join us today to get started.</p>
        </div>

        {redirectMsg && (
          <div className="bg-blue-50 text-blue-700 text-sm p-4 rounded-lg border border-blue-100 mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            {redirectMsg}
          </div>
        )}

        {error && (
          <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg border border-red-100 mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSignup} className="space-y-5">
          {/* Name & Email */}
          <input
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            type="text"
            placeholder="Full Name"
            required
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            type="email"
            placeholder="Email Address"
            required
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          {/* 📱 Prefixed Phone Input */}
          <div>
            <div className="flex shadow-sm">
              <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 font-semibold">
                +91
              </span>
              <input
                className="flex-1 border border-gray-300 p-3 rounded-r-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                type="tel"
                maxLength="10"
                placeholder="10-digit number"
                required
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value.replace(/\D/g, "") })
                }
              />
            </div>
          </div>

          <input
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          {/* OTP Handling */}
          <div className="space-y-3">
            <button
              type="button"
              onClick={sendOTP}
              disabled={loading || cooldown > 0 || form.phone.length !== 10}
              className="w-full bg-blue-50 text-blue-600 font-bold p-3 rounded-lg hover:bg-blue-100 disabled:opacity-50 transition-all"
            >
              {cooldown > 0
                ? `Resend in ${cooldown}s`
                : otpSent
                  ? "Resend OTP"
                  : "Send OTP"}
            </button>

            {otpSent && (
              <input
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-center tracking-widest font-bold"
                type="text"
                maxLength="6"
                placeholder="Enter 6-digit OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            )}
          </div>

          <button
            disabled={loading || !otpSent}
            className="w-full bg-gray-900 text-white p-4 rounded-lg font-bold shadow-lg hover:bg-black active:scale-[0.98] transition-all disabled:opacity-50"
          >
            {loading ? "Processing..." : "Sign Up"}
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-8 text-center">
          <hr className="border-gray-200" />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-gray-400 text-sm">
            OR
          </span>
        </div>

        <button
          onClick={handleGoogleSignup}
          disabled={loading}
          className="w-full border border-gray-200 p-3 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50 active:scale-[0.98] transition-all font-semibold text-gray-700"
        >
          <svg viewBox="0 0 48 48" className="w-5 h-5">
            <path
              fill="#FFC107"
              d="M43.6 20H24v8h11.3C33.6 33.1 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.1-4z"
            />
            <path
              fill="#FF3D00"
              d="M6.3 14.7l6.6 4.8C14.5 15.1 18.9 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
            />
            <path
              fill="#4CAF50"
              d="M24 44c5.2 0 9.9-1.9 13.5-5l-6.2-5.2C29.4 35.6 26.8 36 24 36c-5.2 0-9.6-2.9-11.3-7.1l-6.5 5C9.5 39.6 16.2 44 24 44z"
            />
            <path
              fill="#1976D2"
              d="M43.6 20H24v8h11.3c-.9 2.4-2.5 4.4-4.6 5.8l6.2 5.2C40.7 35.7 44 30.3 44 24c0-1.3-.1-2.7-.4-4z"
            />
          </svg>
          Continue with Google
        </button>

        <p className="text-center text-sm text-gray-600 mt-8">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-bold hover:underline">
            Login
          </Link>
        </p>

        <div id="recaptcha-container"></div>
      </div>

      {/* ------------------ MODERN PHONE MODAL ------------------ */}
      {showPhoneModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-sm shadow-2xl scale-in-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Complete Profile
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Enter your phone number to secure your account.
            </p>

            {modalError && (
              <p className="text-red-500 text-xs mb-3 font-medium">
                {modalError}
              </p>
            )}

            <div className="flex mb-4">
              <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 font-bold">
                +91
              </span>
              <input
                className="flex-1 border border-gray-300 p-3 rounded-r-lg focus:ring-2 focus:ring-blue-500 outline-none"
                type="tel"
                maxLength="10"
                placeholder="00000 00000"
                value={modalPhone}
                onChange={(e) =>
                  setModalPhone(e.target.value.replace(/\D/g, ""))
                }
                disabled={modalOtpSent}
              />
            </div>

            <button
              onClick={sendModalOTP}
              disabled={
                loading || modalCooldown > 0 || modalPhone.length !== 10
              }
              className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 transition-all mb-4"
            >
              {modalCooldown > 0
                ? `Resend in ${modalCooldown}s`
                : modalOtpSent
                  ? "Resend OTP"
                  : "Send OTP"}
            </button>

            {modalOtpSent && (
              <div className="space-y-4">
                <input
                  className="w-full border border-gray-300 p-3 rounded-lg text-center tracking-widest font-bold focus:ring-2 focus:ring-blue-500 outline-none"
                  type="text"
                  maxLength="6"
                  placeholder="OTP"
                  value={modalOtp}
                  onChange={(e) => setModalOtp(e.target.value)}
                />
                <button
                  onClick={handleModalVerify}
                  disabled={loading}
                  className="w-full bg-black text-white p-3 rounded-lg font-bold hover:bg-gray-800 transition-all"
                >
                  {loading ? "Verifying..." : "Verify & Finish"}
                </button>
              </div>
            )}

            <button
              onClick={async () => {
                await signOut(auth).catch(() => {});
                setGoogleUser(null);
                setShowPhoneModal(false);
                setModalPhone("");
                setModalOtp("");
                setModalOtpSent(false);
                setModalError("");
                resetRecaptcha("recaptcha-container-modal");
              }}
              className="w-full text-xs text-gray-400 mt-4 hover:text-gray-600"
            >
              Cancel
            </button>

            <div id="recaptcha-container-modal"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
