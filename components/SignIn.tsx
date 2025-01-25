import React, { useState } from "react";

const SignIn = () => {
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
      return;
    }

    setError(""); // Reset previous error
    setLoading(true); // Show loading state

    try {
      // Simulate API request (replace with actual API endpoint)
      const response = await fetch("https://example.com/api/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful!"); // Handle successful login
        // Redirect logic (if required)
        // window.location.href = "/dashboard";
      } else {
        setError(data.error || "Invalid email or password.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
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
    </section>
  );
};

export default SignIn;
