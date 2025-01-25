import React from "react";
import { Play, Apple } from "lucide-react";
import Navbar from "./Navbar";
import About from "./About";
import Features from "./Features";
import Pricing from "./Pricing";
import Contact from "./ContactUs";
import FAQ from "./FAQ";
import Footer from "./Footer";
export default function Home() {
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
                <Play size={20} />
                <span>Play Store</span>
              </button>
              <button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors">
                <Apple size={20} />
                <span>App Store</span>
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
    <About/>
    <Features/>
    <Pricing/>
    <FAQ/>
    <Contact/>
    <Footer/>
    </>
  );
}
