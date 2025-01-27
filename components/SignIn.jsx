import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showForgotPasswordForm, setShowForgotPasswordForm] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false); // Track OTP verification status
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [encryptedOtp, setEncryptedOtp] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in both fields.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/tempLogin/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );
      if (response.status === 200) {
        const token = response.data?.userId;
        Cookies.set("userId", token, { expires: 1 });
        toast.success("Login successful!");
        navigate("/");
      }
    } catch (err) {
      toast.error(err.response?.data?.error || "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    setShowForgotPasswordForm(true);
    setOtpSent(false);
    setOtpVerified(false); // Reset OTP verification
  };

  const handleSendOtp = async () => {
    if (!email || !name) {
      toast.error("Please enter your name and email.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/templogin/resendotp",
        { name, email },
        { headers: { "Content-Type": "application/json" } }
      );
      setEncryptedOtp(response.data.otp);
      setUserId(response.data.userId);
      if (response.status === 200) {
        toast.success("OTP sent to your email.");
        setOtpSent(true); // Show OTP field
      }
    } catch (err) {
      toast.error(err.response?.data?.error || "Failed to send OTP.");
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp) {
      toast.error("Please enter the OTP.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/templogin/verify",
        JSON.stringify({ userotp: otp, encryptedOtp, userId }),
        { headers: { "Content-Type": "application/json" } }
      );
      if (response.status === 200) {
        toast.success("OTP verified successfully.");
        setOtpVerified(true); // Mark OTP as verified
        const userId = response.data.userId;
      }
    } catch (err) {
      toast.error(err.response?.data?.error || "Failed to verify OTP.");
    }
  };

  const handleChangePassword = async () => {
    if (!newPassword) {
      toast.error("Please enter a new password.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/templogin/changePassword",
        { userId, password:newPassword },
        { headers: { "Content-Type": "application/json" } }
      );
      if (response.status === 200) {
        toast.success("Password changed successfully. Please log in.");
        setShowForgotPasswordForm(false); // Reset the form
      }
    } catch (err) {
      toast.error(err.response?.data?.error || "Failed to change password.");
    }
  };

  return (
    <section className="min-h-screen bg-[#002B5B] flex items-center justify-center">
      <div className="bg-blue-950 p-8 rounded-3xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Welcome Back!
        </h2>

        {!showForgotPasswordForm ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-emerald-50 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-slate-900 text-white focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-emerald-50 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-slate-900 text-white focus:outline-none"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-500 text-white py-3 rounded-lg"
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>
        ) : (
          <div className="space-y-6">
            <div>
              <label className="block text-emerald-50 mb-2">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-slate-900 text-white focus:outline-none"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-emerald-50 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-slate-900 text-white focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            {otpSent && !otpVerified && (
              <>
                <div>
                  <label className="block text-emerald-50 mb-2">OTP</label>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-slate-900 text-white focus:outline-none"
                    placeholder="Enter OTP"
                  />
                </div>
                <button
                  onClick={handleVerifyOtp}
                  className="w-full bg-emerald-500 text-white py-3 rounded-lg"
                >
                  Verify OTP
                </button>
              </>
            )}

            {otpVerified && (
              <>
                <div>
                  <label className="block text-emerald-50 mb-2">New Password</label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-slate-900 text-white focus:outline-none"
                    placeholder="Enter new password"
                  />
                </div>
                <button
                  onClick={handleChangePassword}
                  className="w-full bg-emerald-500 text-white py-3 rounded-lg mt-4"
                >
                  Change Password
                </button>
              </>
            )}

            {!otpSent && (
              <button
                onClick={handleSendOtp}
                className="w-full bg-emerald-500 text-white py-3 rounded-lg"
              >
                Send OTP
              </button>
            )}
          </div>
        )}

{!showForgotPasswordForm && (
  <>
    <button
      onClick={handleForgotPassword}
      className="w-full mt-4 bg-transparent border border-emerald-500 text-emerald-500 py-2 rounded-lg"
    >
      Forgot Password?
    </button>
    <div className="text-center mt-4">
      <span className="text-white">Don't have an account? </span>
      <a
        href="/sign-up"
        className="text-emerald-500 hover:underline"
      >
        Sign Up
      </a>
    </div>
  </>
)}


        <ToastContainer />
      </div>
    </section>
  );
};

export default SignIn;
