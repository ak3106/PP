// import { useState, useEffect } from "react";
// import { auth, db } from "../firebase";
// import {
//   RecaptchaVerifier,
//   signInWithPhoneNumber,
//   signOut,
// } from "firebase/auth";
// import { collection, query, where, getDocs } from "firebase/firestore";
// import { useNavigate, Link } from "react-router-dom";

// const PhoneLogin = () => {
//   const navigate = useNavigate();

//   const [phone, setPhone] = useState("");
//   const [otp, setOtp] = useState("");
//   const [confirmationResult, setConfirmationResult] = useState(null);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [cooldown, setCooldown] = useState(0);
//   const [otpSent, setOtpSent] = useState(false);

//   // Cooldown timer
//   useEffect(() => {
//     if (cooldown <= 0) return;
//     const t = setTimeout(() => setCooldown((c) => c - 1), 1000);
//     return () => clearTimeout(t);
//   }, [cooldown]);

//   // ---------------------------------------
//   // RECAPTCHA HANDLING
//   // ---------------------------------------
//   const resetRecaptcha = () => {
//     if (window.recaptchaVerifier) {
//       window.recaptchaVerifier.clear();
//       window.recaptchaVerifier = null;
//     }
//     // ✅ Clear DOM too to allow re-render
//     const container = document.getElementById("recaptcha-container");
//     if (container) container.innerHTML = "";
//   };

//   const setupRecaptcha = async () => {
//     resetRecaptcha();

//     const verifier = new RecaptchaVerifier(auth, "recaptcha-container", {
//       size: "invisible",
//       callback: () => console.log("Recaptcha verified"),
//       "expired-callback": () => resetRecaptcha(),
//     });

//     await verifier.render();
//     window.recaptchaVerifier = verifier;
//     return verifier;
//   };

//   // ---------------------------------------
//   // CHECK USER EXISTS IN FIRESTORE
//   // ---------------------------------------
//   const checkUserExists = async (phoneNumber) => {
//     const q = query(collection(db, "users"), where("phone", "==", phoneNumber));
//     const snapshot = await getDocs(q);
//     return !snapshot.empty;
//   };

//   // ---------------------------------------
//   // SEND OTP
//   // ---------------------------------------
//   const sendOTP = async () => {
//     setError("");

//     const cleanedPhone = phone.replace(/[\s\-()]/g, "");

//     if (!cleanedPhone.startsWith("+") || cleanedPhone.length < 11) {
//       setError("Invalid format. Use +91XXXXXXXXXX");
//       return;
//     }

//     if (cooldown > 0) return;

//     try {
//       setLoading(true);

//       // ✅ Check Firestore BEFORE touching reCAPTCHA
//       const exists = await checkUserExists(cleanedPhone);
//       if (!exists) {
//         setError("No account found with this number. Please signup first.");
//         return;
//       }

//       const appVerifier = await setupRecaptcha();

//       if (!appVerifier) {
//         throw new Error("reCAPTCHA failed to initialize. Please refresh.");
//       }

//       const confirmation = await signInWithPhoneNumber(
//         auth,
//         cleanedPhone,
//         appVerifier
//       );

//       setConfirmationResult(confirmation);
//       setOtpSent(true);
//       setCooldown(30);
//       alert("OTP Sent!");
//     } catch (err) {
//       console.error("OTP ERROR:", err);
//       setError(err.message || "Failed to send OTP");
//       resetRecaptcha();
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ---------------------------------------
//   // VERIFY OTP
//   // ---------------------------------------
//   const verifyOTP = async () => {
//     setError("");

//     if (!otp || !confirmationResult) {
//       setError("Enter OTP first");
//       return;
//     }

//     try {
//       setLoading(true);

//       const res = await confirmationResult.confirm(otp);

//       // ✅ Double check in Firestore after confirm
//       const exists = await checkUserExists(res.user.phoneNumber);
//       if (!exists) {
//         await signOut(auth);
//         setError("User not found. Please signup.");
//         return;
//       }

//       navigate("/");
//     } catch (err) {
//       console.error(err);
//       if (err.code === "auth/invalid-verification-code") {
//         setError("Invalid OTP. Please try again.");
//       } else if (err.code === "auth/code-expired") {
//         setError("OTP expired. Please resend.");
//         setConfirmationResult(null); // ✅ go back to send OTP screen
//         setOtpSent(false);
//       } else {
//         setError("Verification failed. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-20 border p-6 rounded-xl shadow bg-white">
//       <h2 className="text-2xl font-bold mb-4">Phone Login</h2>

//       {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

//       {!confirmationResult ? (
//         <>
//           <input
//             className="w-full border p-3 rounded mb-4"
//             type="tel"
//             placeholder="+91XXXXXXXXXX"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />
//           <button
//             onClick={sendOTP}
//             disabled={loading || cooldown > 0}
//             className="w-full bg-black text-white p-3 rounded disabled:opacity-50"
//           >
//             {loading
//               ? "Sending OTP..."
//               : cooldown > 0
//               ? `Resend in ${cooldown}s`
//               : otpSent
//               ? "Resend OTP"
//               : "Send OTP"}
//           </button>
//         </>
//       ) : (
//         <>
//           <p className="text-sm text-gray-500 mb-3">OTP sent to {phone}</p>
//           <input
//             className="w-full border p-3 rounded mb-4"
//             type="text"
//             placeholder="Enter OTP"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//           />
//           <button
//             onClick={verifyOTP}
//             disabled={loading}
//             className="w-full bg-black text-white p-3 rounded disabled:opacity-50 mb-3"
//           >
//             {loading ? "Verifying..." : "Verify OTP"}
//           </button>

//           {/* ✅ Resend option on OTP screen too */}
//           <button
//             onClick={() => {
//               setConfirmationResult(null);
//               setOtp("");
//             }}
//             disabled={cooldown > 0}
//             className="w-full border p-3 rounded disabled:opacity-50 text-sm"
//           >
//             {cooldown > 0 ? `Resend in ${cooldown}s` : "Resend OTP"}
//           </button>
//         </>
//       )}

//       <div id="recaptcha-container"></div>

//       <p className="text-md mt-4">
//         Prefer email login?{" "}
//         <Link to="/login" className="text-blue-500">
//           Login with Email
//         </Link>
//       </p>
//     </div>
//   );
// };

// export default PhoneLogin;