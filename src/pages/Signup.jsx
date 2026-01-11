import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
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

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (!form.phone.startsWith("+")) {
        setError("Phone must include country code. Example: +91XXXXXXXXXX");
        setLoading(false);
        return;
      }

      const res = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password,

      );

      await updateProfile(res.user, {
        displayName: form.name,
      });

      await saveUserToDB(res.user, {
        name: form.name,
        phone: form.phone,
      });

      navigate("/");
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError("This email is already registered. Please login instead.");
      } else {
        setError(err.message);
      }
    }
      

    setLoading(false);
  };


  return (
    <div className="max-w-md mx-auto mt-20 border p-6 rounded-xl shadow bg-white">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">
        Create Account
      </h2>

      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

      <form onSubmit={handleSignup} className="space-y-3">
        <input
          className="w-full border p-2 rounded"
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          className="w-full border p-2 rounded"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          className="w-full border p-2 rounded"
          type="tel"
          name="phone"
          placeholder="+91XXXXXXXXXX"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <input
          className="w-full border p-2 rounded"
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button
          disabled={loading}
          className="w-full bg-gray-900 text-white p-2 rounded disabled:opacity-60"
        >
          {loading ? "Creating Account..." : "Sign Up"}
        </button>
      </form>

      <p className="text-sm mt-3">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
