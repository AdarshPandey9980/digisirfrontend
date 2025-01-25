import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the Toastify styles
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [otpDialogOpen, setOtpDialogOpen] = useState(false);
  const [otp, setOtp] = useState("");
  const [encryptedOtp, setEncryptedOtp] = useState({});
  const [userId, setUserId] = useState({});
  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  // Handle OTP input change
  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  // Handle form submission for sign-up using axios
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/tempLogin/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const resData = response.data;

      if (response.status === 200) {
        setEncryptedOtp(resData.otp);
        setUserId(resData.userId);
        setOtpDialogOpen(true); // Open OTP dialog
        toast.success("OTP sent! Please verify.");
      } else {
        setError(resData.message || "Something went wrong. Please try again.");
        toast.error(resData.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Handle OTP verification using axios
  const handleOtpSubmit = async (e) => {
    e.preventDefault();

    if (!otp) {
      setError("Please enter the OTP.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/tempLogin/verify",
        { userotp: otp, encryptedOtp, userId },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        toast.success("OTP verified successfully! Welcome to DigiSir.");
        navigate('/sign-in')
        setOtpDialogOpen(false); // Close OTP dialog
        setFormData({ name: "", email: "", password: "" }); // Clear form
      } else {
        setError(response.data.message || "Invalid OTP. Please try again.");
        toast.error(response.data.message || "Invalid OTP. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="sign-up"
      className="min-h-screen bg-[#002B5B] flex items-center justify-center"
    >
      <div className="bg-blue-950 p-8 rounded-3xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Create Your Account
        </h2>
        <p className="text-emerald-50 text-center mb-8">
          Join DigiSir and start your journey to better learning today!
        </p>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {!otpDialogOpen ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-emerald-50 mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-slate-900 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-emerald-50 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
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
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-slate-900 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Create a password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-400 transition-colors"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>
        ) : (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white text-center mb-4">
              Enter OTP
            </h3>
            <p className="text-emerald-50 text-center">
              A 6-digit OTP has been sent to {formData.email}.
            </p>
            <form onSubmit={handleOtpSubmit}>
              <div>
                <label className="block text-emerald-50 mb-2" htmlFor="otp">
                  OTP
                </label>
                <input
                  type="text"
                  id="otp"
                  value={otp}
                  onChange={handleOtpChange}
                  className="w-full px-4 py-2 rounded-lg bg-slate-900 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Enter OTP"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-400 transition-colors mt-4"
                disabled={loading}
              >
                {loading ? "Verifying OTP..." : "Verify OTP"}
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Toast container */}
      <ToastContainer />
    </section>
  );
};

export default SignUp;
