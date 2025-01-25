import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 

const PaymentPage = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();  
  const navigate = useNavigate();

  const { price } = location.state || { price: 500 };

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
      const { data: order } = await axios.post("http://localhost:8000/api/payment/create-order", {
        amount: price,
        currency: "INR",
        name:"Mithilesh",
        email:"youremail@example.com"
      });

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Digisir",
        description: "Upgrade to Premium",
        image: "/logo.png",
        order_id: order.id,
        handler: async (response) => {
          const { data } = await axios.post("http://localhost:8000/api/payment/verify-payment", {
            order_id: response.razorpay_order_id,
            payment_id: response.razorpay_payment_id,
            signature: response.razorpay_signature
          });
          console.log(response.razorpay_payment_id)

          if (data.message === "Payment verified successfully!") {
            toast.success("Payment Successful! Welcome to Digisir Premium.");
            navigate("/institute-setup");
          } else {
            toast.error("Payment Verification Failed!");
          }
        },
        prefill: {
          name: "Mithilesh",
          email: "youremail@example.com",
          contact: "9321621339",
        },
        theme: {
          color: "#0077ff",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full">
        <div className="flex justify-center mb-8">
          <img src="/logo.png" alt="Digisir Logo" className="w-20 h-20" />
        </div>
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-4">Upgrade to Digisir Premium</h1>
        <p className="text-lg text-center text-gray-600 mb-6">
          Unlock exclusive features and take your learning journey to the next level.
        </p>
        <p className="text-xl font-semibold text-center text-gray-800 mb-6">Selected Plan Price: ₹{price}</p>
        
        <div className="flex justify-center">
          <button
            onClick={handlePayment}
            disabled={loading}
            className={`px-8 py-4 rounded-full text-white font-semibold transition duration-300 ${
              loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Processing..." : `Pay ₹${price} Now`}
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-500">Secure Payment Powered by Razorpay</p>
        </div>
      </div>

      <ToastContainer position="bottom-center" autoClose={5000} hideProgressBar />
    </div>
  );
};

export default PaymentPage;
