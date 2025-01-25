import React, { useState } from "react";

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

  // Handle form submission for sign-up
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "https://api.test.hellodigisir.in/api/auth/tempLogin/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setOtpDialogOpen(true); // Open OTP dialog
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Handle OTP verification
  const handleOtpSubmit = async (e) => {
    e.preventDefault();

    if (!otp) {
      setError("Please enter the OTP.");
      return;
    }

    setError("");
    setLoading(true);
    console.log(otp);
    try {
      const response = await fetch(
        "https://api.test.hellodigisir.in/api/auth/tempLogin/verify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userotp: otp }),
        }
      );

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        alert("OTP verified successfully! Welcome to DigiSir.");
        setOtpDialogOpen(false); // Close OTP dialog
        setFormData({ name: "", email: "", password: "" }); // Clear form
      } else {
        setError(data.message || "Invalid OTP. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
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
    </section>
  );
};

export default SignUp;
