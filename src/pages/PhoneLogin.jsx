    import { useState } from "react";
    import { auth } from "../firebase";
    import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
    import { saveUserToDB } from "../utils/saveUserToDB";
    import { Link, useNavigate } from "react-router-dom";

    const PhoneLogin = () => {
    const navigate = useNavigate();
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // Setup Recaptcha
    const setupRecaptcha = () => {
        if (!window.recaptchaVerifier) {
          window.recaptchaVerifier = new RecaptchaVerifier(
            auth,
            "recaptcha-container",
            { size: "invisible" }
          );
        }
      };
      
      

      const sendOTP = async () => {
        setError("");
      
        if (!phone.startsWith("+")) {
          setError("Include country code. Example: +91XXXXXXXXXX");
          return;
        }
      
        try {
          setLoading(true);
      
          setupRecaptcha();
          const appVerifier = window.recaptchaVerifier;
      
          const confirmation = await signInWithPhoneNumber(
            auth,
            phone,
            appVerifier
          );
      
          setResult(confirmation);
          alert("OTP Sent!");
        } catch (err) {
          console.log(err);
          setError(err.message || "Failed to send OTP. Try again.");
        }
      
        setLoading(false);
      };
      

    const verifyOTP = async () => {
        setError("");

        if (!otp) return;

        try {
        setLoading(true);

        const res = await result.confirm(otp);

        await saveUserToDB(res.user, {
            phone: res.user.phoneNumber,
        });

        alert("Login Successful");
        navigate("/");
        } catch (err) {
        setError("Invalid OTP");
        console.log(err);
        }

        setLoading(false);
    };

    return (
        <div className="max-w-md mx-auto mt-20 border p-6 rounded-xl shadow bg-white">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Phone OTP Login
        </h2>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        {!result ? (
            <>
            <input
                className="w-full border p-2 rounded mb-3"
                type="tel"
                value={phone}
                placeholder="+91XXXXXXXXXX"
                onChange={(e) => setPhone(e.target.value)}
            />

            <button
                onClick={sendOTP}
                disabled={loading}
                className="w-full bg-gray-900 text-white p-2 rounded disabled:opacity-60"
            >
                {loading ? "Sending OTP..." : "Send OTP"}
            </button>
            </>
        ) : (
            <>
            <input
                className="w-full border p-2 rounded mb-3"
                type="text"
                value={otp}
                placeholder="Enter OTP"
                onChange={(e) => setOtp(e.target.value)}
            />

            <button
                onClick={verifyOTP}
                disabled={loading}
                className="w-full bg-gray-900 text-white p-2 rounded disabled:opacity-60"
            >
                {loading ? "Verifying..." : "Verify OTP"}
            </button>
            </>
        )}

        <div id="recaptcha-container"></div>

        <p className="text-sm mt-3">
            Prefer email login?{" "}
            <Link to="/login" className="text-blue-500">
            Login with Email
            </Link>
        </p>
        </div>
    );
    };

    export default PhoneLogin;
