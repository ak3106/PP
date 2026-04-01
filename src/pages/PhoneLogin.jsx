import { useState } from "react";
import { auth, db } from "../firebase";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signOut,
} from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const PhoneLogin = () => {
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // ---------------------------------------
  // RECAPTCHA HANDLING
  // ---------------------------------------
  const resetRecaptcha = () => {
    if (window.recaptchaVerifier) {
      window.recaptchaVerifier.clear();
      window.recaptchaVerifier = null;
    }
  };

  const setupRecaptcha = async () => {
    resetRecaptcha();

    const verifier = new RecaptchaVerifier(auth, "recaptcha-container", {
      size: "invisible",
      callback: () => console.log("Recaptcha verified"),
    });

    await verifier.render();
    window.recaptchaVerifier = verifier;
    return verifier;
  };

  // ---------------------------------------
  // CHECK USER EXISTS
  // ---------------------------------------
  const checkUserExists = async (phoneNumber) => {
    const q = query(collection(db, "users"), where("phone", "==", phoneNumber));

    const snapshot = await getDocs(q);
    return !snapshot.empty;
  };

  // ---------------------------------------
  // SEND OTP
  // ---------------------------------------
  const sendOTP = async () => {
    setError("");

    const cleanedPhone = phone.replace(/[\s\-()]/g, "");

    if (!cleanedPhone.startsWith("+") || cleanedPhone.length < 11) {
      setError("Invalid format. Use +91XXXXXXXXXX");
      return;
    }

    try {
      setLoading(true);

      // 🔥 CHECK USER FIRST
      const exists = await checkUserExists(cleanedPhone);

      if (!exists) {
        setError("User not found. Please signup first.");
        setLoading(false);
        return;
      }

      const appVerifier = await setupRecaptcha();

      const confirmation = await signInWithPhoneNumber(
        auth,
        cleanedPhone,
        appVerifier
      );

      setConfirmationResult(confirmation);
      alert("OTP Sent!");
    } catch (err) {
      console.error("OTP ERROR:", err);
      setError("Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  // ---------------------------------------
  // VERIFY OTP
  // ---------------------------------------
  const verifyOTP = async () => {
    setError("");

    if (!otp || !confirmationResult) {
      setError("Enter OTP first");
      return;
    }

    try {
      setLoading(true);

      const res = await confirmationResult.confirm(otp);

      // 🔥 DOUBLE CHECK USER EXISTS
      const exists = await checkUserExists(res.user.phoneNumber);

      if (!exists) {
        await signOut(auth);
        setError("User not found. Please signup.");
        return;
      }

      alert("Login Successful");
      navigate("/");
    } catch (err) {
      console.log(err);
      setError("Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 border p-6 rounded-xl shadow bg-white">
      <h2 className="text-2xl font-bold mb-4">Phone Login</h2>

      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

      {!confirmationResult ? (
        <>
          <input
            className="w-full border p-3 rounded mb-4"
            type="tel"
            placeholder="+91XXXXXXXXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button
            onClick={sendOTP}
            disabled={loading}
            className="w-full bg-black text-white p-3 rounded disabled:opacity-50"
          >
            {loading ? "Sending OTP..." : "Send OTP"}
          </button>
        </>
      ) : (
        <>
          <input
            className="w-full border p-3 rounded mb-4"
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />

          <button
            onClick={verifyOTP}
            disabled={loading}
            className="w-full bg-black text-white p-3 rounded disabled:opacity-50"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </>
      )}

      <div id="recaptcha-container"></div>

      <p className="text-md mt-4">
        Prefer email login?{" "}
        <Link to="/login" className="text-blue-500">
          Login with Email
        </Link>
      </p>
    </div>
  );
};

export default PhoneLogin;
