import { useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import { saveUserToDB } from "../utils/saveUserToDB";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetMsg, setResetMsg] = useState("");
  const [resetLoading, setResetLoading] = useState(false);


  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // ---------------------------------------
  // EMAIL LOGIN
  // ---------------------------------------
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      navigate("/");
    } catch (err) {
      if (
        err.code === "auth/user-not-found" ||
        err.code === "auth/wrong-password" ||
        err.code === "auth/invalid-credential"
      ) {
        setError("Invalid email or password.");
      } else if (err.code === "auth/too-many-requests") {
        setError("Too many attempts. Please try again later or reset your password.");
      } else {
        setError("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // ---------------------------------------
  // GOOGLE LOGIN
  // ✅ If new user → sign them out and send to /signup
  // ✅ If existing user → go home
  // ---------------------------------------
  const handleGoogleLogin = async () => {
    setError("");
    setLoading(true);

    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const isNewUser = result._tokenResponse?.isNewUser;

      if (isNewUser) {
        // They don't have an account yet — send to signup
        await signOut(auth);
        navigate("/signup", {
          state: { message: "Please sign up first to create your account." },
        });
        return;
      }

      // Existing user — go home
      navigate("/");
    } catch (err) {
      if (err.code !== "auth/popup-closed-by-user") {
        setError("Google sign-in failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // ---------------------------------------
  // FORGOT PASSWORD
  // ---------------------------------------
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setResetMsg("");
    setError("");
    setResetLoading(true);

    try {
      await sendPasswordResetEmail(auth, resetEmail);
      setResetMsg("Reset link sent! Check your inbox.");
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        setError("No account found with this email.");
      } else if (err.code === "auth/invalid-email") {
        setError("Invalid email address.");
      } else {
        setError("Failed to send reset email. Try again.");
      }
    } finally {
      setResetLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 border p-6 rounded-xl shadow bg-white min-h-[50vh]">

      {/* ------------------ FORGOT PASSWORD VIEW ------------------ */}
      {showForgot ? (
        <>
          <button
            onClick={() => {
              setShowForgot(false);
              setResetMsg("");
              setError(""); 
              setResetEmail("");
            }}
            className="text-sm text-gray-500 mb-4 flex items-center gap-1 hover:text-gray-800"
          >
            ← Back to Login
          </button>

          <h2 className="text-2xl font-bold mb-1 text-gray-900">Reset Password</h2>
          <p className="text-sm text-gray-500 mb-4">
            Enter your email and we'll send you a reset link.
          </p>

          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
          {resetMsg && <p className="text-green-600 text-sm mb-3">{resetMsg}</p>}

          <form onSubmit={handleForgotPassword} className="space-y-4">
            <input
              className="w-full border p-3 rounded"
              type="email"
              placeholder="Your email"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
              required
            />
            <button
              disabled={resetLoading}
              className="w-full bg-gray-900 text-white p-3 rounded disabled:opacity-60"
            >
              {resetLoading ? "Sending..." : "Send Reset Link"}
            </button>
          </form>
        </>
      ) : (

        /* ------------------ LOGIN VIEW ------------------ */
        <>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Login</h2>

          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              className="w-full border p-3 rounded"
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              className="w-full border p-3 rounded"
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <div className="text-right">
              <button
                type="button"
                onClick={() => {
                  setShowForgot(true);
                  setError("");
                  setResetEmail(form.email);
                }}
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot password?
              </button>
            </div>

            <button
              disabled={loading}
              className="w-full bg-gray-900 text-white p-3 rounded disabled:opacity-60"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-4">
            <hr className="flex-1 border-gray-300" />
            <span className="text-sm text-gray-400">or</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full border border-gray-300 p-3 rounded flex items-center justify-center gap-3 hover:bg-gray-50 disabled:opacity-60"
          >
            <svg viewBox="0 0 48 48" className="w-5 h-5">
              <path fill="#FFC107" d="M43.6 20H24v8h11.3C33.6 33.1 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.1-4z"/>
              <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 15.1 18.9 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
              <path fill="#4CAF50" d="M24 44c5.2 0 9.9-1.9 13.5-5l-6.2-5.2C29.4 35.6 26.8 36 24 36c-5.2 0-9.6-2.9-11.3-7.1l-6.5 5C9.5 39.6 16.2 44 24 44z"/>
              <path fill="#1976D2" d="M43.6 20H24v8h11.3c-.9 2.4-2.5 4.4-4.6 5.8l6.2 5.2C40.7 35.7 44 30.3 44 24c0-1.3-.1-2.7-.4-4z"/>
            </svg>
            <span className="text-sm font-medium text-gray-700">
              Continue with Google
            </span>
          </button>

          <p className="text-md mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500">Sign Up</Link>
          </p>
          <p className="text-md mt-3">
            {/* Login using phone?{" "}
            <Link to="/phone-login" className="text-blue-500">Click Here</Link> */}
          </p>
        </>
      )}
    </div>
  );
};

export default Login;