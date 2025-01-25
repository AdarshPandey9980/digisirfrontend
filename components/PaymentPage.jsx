import React, { useState, useEffect } from "react";
import axios from "axios";

const PaymentPage = () => {
  const [loading, setLoading] = useState(false);

  // Dynamically load the Razorpay script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = async () => {
    setLoading(true);
    try {
      // Step 1: Create an order on the server
      const { data: order } = await axios.post("http://localhost:8000/api/payment/create-order", {
        amount: 500, // Amount in INR
        currency: "INR",
      });

      // Step 2: Configure Razorpay options
      const options = {
        key: "YOUR_TEST_KEY_ID", // Replace with your Razorpay Test Key ID
        amount: order.amount,
        currency: order.currency,
        name: "Digisir",
        description: "Upgrade to Premium",
        image: "https://your-digisir-logo-url.com/logo.png", // Digisir-themed logo
        order_id: order.id,
        handler: async (response) => {
          // Step 3: Verify payment on the server
          const { data } = await axios.post("http://localhost:8000/api/payment/verify-payment", {
            order_id: response.razorpay_order_id,
            payment_id: response.razorpay_payment_id,
            signature: response.razorpay_signature,
          });

          if (data.message === "Payment verified successfully!") {
            alert("Payment Successful! Welcome to Digisir Premium.");
          } else {
            alert("Payment Verification Failed!");
          }
        },
        prefill: {
          name: "Your Name",
          email: "youremail@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#0077ff", // Digisir's theme color
        },
      };

      // Step 4: Open Razorpay Checkout
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md bg-white rounded-2xl shadow-lg p-6 text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome to Digisir</h1>
        <p className="text-gray-600 mb-6">
          Upgrade to <span className="font-semibold">Premium</span> and unlock exclusive features.
        </p>
        <button
          onClick={handlePayment}
          disabled={loading}
          className={`px-6 py-3 rounded-xl text-white font-semibold transition ${
            loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Processing..." : "Pay ₹500 Now"}
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
