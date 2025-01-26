import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import About from "./About";
import Features from "./Features";
import Pricing from "./Pricing";
import Contact from "./ContactUs";
import FAQ from "./Faq";
import Footer from "./Footer";

export default function Home() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // useEffect(() => {
  //   const fetchCurrentUser = async () => {
  //     try {
  //       // Make API call to fetch current user data
  //       const response = await axios.get(
  //         "http://localhost:8000/api/auth/templogin/getCurrentUser",
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //             // No authorization or other headers, just empty
  //           },
  //         }
  //       );
  
  //       setCurrentUser(response.data.user); // Set user data to state
  //       console.log(response.data); // Log the response data inside the try block
  //     } catch (err) {
  //       setError("Failed to fetch current user.");
  //       console.error("Error fetching current user:", err);
  //     } finally {
  //       setLoading(false); // Set loading to false after the API call
  //     }
  //   };
  //   console.log(response.data)
  //   fetchCurrentUser(); // Call the function to fetch user data
  // }, []); // Empty dependency array ensures this runs once when the component mounts
  
  return (
    <>
      <Navbar />
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
                <button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors">
                  <span>Join a Class</span>
                </button>
                <button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors">
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

      {/* User info or loading/error state */}
      {loading && <p className="text-white text-center">Loading user data...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}
      {currentUser && (
        <div className="text-white text-center">
          <h2>Welcome, {currentUser.name}!</h2>
          <p>{currentUser.email}</p>
        </div>
      )}

      <About />
      <Features />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
