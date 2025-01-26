import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
import Cookies from 'js-cookie'; // Import js-cookie

const SignIn = () => {
  const navigate = useNavigate(); // Hook for navigation

  // State to manage form fields and errors
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Simple validation
    if (!email || !password) {
      setError("Please fill in both fields.");
      toast.error("Please fill in both fields."); // Show toast error
      return;
    }
  
    setError(""); // Reset previous error
    setLoading(true); // Show loading state
    console.log(email);
  
    try {
      // Send login request to API
      const response = await axios.post(
        "http://localhost:8000/api/auth/tempLogin/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
  
      if (response.data.userToken) {
        toast.success("Loggd in Succesfully");
                // Set the userToken cookie
        Cookies.set('userToken', response.data.userToken, {
          expires: 1, // Cookie expiration in days
          secure: process.env.NODE_ENV === 'production',  // Ensure cookie is sent over HTTPS in production
          sameSite: 'Strict', // CSRF protection
        });
  
        // Redirect to home page after successful login
        navigate("/");
      } else {
        setError(response.data.message);
        toast.error(response.data.message); // Show toast error
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.error || "Invalid email or password.");
        toast.error(err.response.data.error || "Invalid email or password."); // Show toast error
      } else {
        setError("An error occurred. Please try again later.");
        toast.error("An error occurred. Please try again later."); // Show toast error
      }
    } finally {
      setLoading(false); // Hide loading state after request
    }
  };
    
  return (
    <section
      id="sign-in"
      className="min-h-screen bg-[#002B5B] flex items-center justify-center"
    >
      <div className="bg-blue-950 p-8 rounded-3xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Welcome Back!
        </h2>
        <p className="text-emerald-50 text-center mb-8">
          Sign in to access your account and continue your learning journey.
        </p>

        {/* Error message */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-emerald-50 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-slate-900 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-emerald-50 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-slate-900 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-400 transition-colors"
            disabled={loading} // Disable the button while loading
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <p className="text-center text-emerald-50 mt-6">
          Don&apos;t have an account?{" "}
          <a href="/sign-up" className="text-emerald-400 underline">
            Sign Up
          </a>
        </p>
      </div>

      {/* Toast container to display the toast notifications */}
      <ToastContainer />
    </section>
  );
};

export default SignIn;
