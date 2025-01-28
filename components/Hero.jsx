import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import About from "./About";
import Features from "./Features";
import Pricing from "./Pricing";
import Contact from "./ContactUs";
import FAQ from "./Faq";
import Footer from "./Footer";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // For modal visibility
  const [joiningCode, setJoiningCode] = useState(""); // To store joining code
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const userId = Cookies.get("userId");
      const response = await axios.post('http://localhost:8000/api/auth/tempLogin/getCurrentUser', { userId }, {
        headers: {
          "Content-Type": "application/json",
        }
      });

      const userData = response.data.user;
      if (userData) {
        setEmail(userData.email);
        setName(userData.name);
      }
      console.log("User Data:", userData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  const handleJoinClass = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/instituteAdmin/addMembers", {
        key: joiningCode, // Updated from joiningKey to joiningCode
      });
      alert("Member added successfully!");
      const keyName = response.data.result?.[0]?.key_name;
      console.log("Key Name:", keyName);
      if (keyName === "studentKey") {
        navigate("/student-login");
      } else if (keyName === "parentKey") {
        navigate("/parent-login");
      } else {
        navigate("/teacher-login");
      }
      setIsModalOpen(false); // Close the modal after successful submission
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert("Failed to add member. Please try again.");
    }
  };
  
  const handleCreateClass = () => {
    // Redirect to the pricing section
    window.location.href = "#pricing";
  };

  return (
    <>
      <Navbar email={email} name={name} />
      <section id="home">
        <main className="mt-18 bg-[#002B5B]">
          {/* Hero Section */}
          <div className="container mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-950 px-4 py-2 rounded-full text-emerald-50">
                <span className="animate-bounce">🚀</span>
                <span>ENHANCE YOUR LEARNING EXPERIENCE</span>
              </div>

              <h1 className="text-5xl font-bold text-white leading-tight">
                Access the world's best school app with DigiSir.
              </h1>

              <p className="text-emerald-50 text-lg">
                Discover a world of knowledge with our cutting-edge online app.
                Empower yourself to succeed in your career, passions, and personal growth journey.
              </p>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsModalOpen(true)} // Open modal for "Join a Class"
                  // onSubmit={handleJoinClass}
                  className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <span>Join a Class</span>
                </button>
                <button
                  onClick={handleCreateClass} // Redirect to pricing section
                  className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <span>Create a Class</span>
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/t.jpg"
                alt="App Preview"
                width={600}
                height={800}
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </main>
      </section>

      {/* Modal for joining a class */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-xl font-semibold mb-4">Join a Class</h3>
            <input
              type="text"
              value={joiningCode}
              onChange={(e) => setJoiningCode(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="Enter Joining Code"
            />
            <div className="flex justify-between gap-4">
              <button
                onClick={handleJoinClass}
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Join
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <About />
      <Features />
      <Pricing name={name} email={email} />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
