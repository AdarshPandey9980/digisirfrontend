import React from "react";

import { Card, CardContent } from "./ui/card";

export default function Home() {
  return (
    <section id="about">
      <main className="min-h-screen bg-white px-4 lg:px-8">
        {/* About Us Section */}
        <div className="container mx-auto py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-[#002B5B] leading-tight">
                About Us
              </h1>
              <p className="text-base lg:text-lg text-slate-600 leading-relaxed">
                Hello Digi Sir is a comprehensive platform connecting education and training institutions, teachers, and technology. We empower educators with innovative EdTech solutions, enhancing productivity and academic excellence
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="relative flex justify-center">
              <img
                src="/About.webp"
                alt="About Us"
                // height={100}
                className="rounded-3xl shadow-2xl  max-h-[500px] "
              />
            </div>
          </div>
        </div>

        {/* First Hero Section */}
        <div className="container mx-auto py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Right Column - App Screenshots */}
            <div className="relative flex justify-center">
              <div className="relative z-10">
                <img
                  src="/banner.png"
                  alt="App Preview"
                  className="rounded-3xl shadow-2xl max-w-full max-h-[500px]"
                />
              </div>
              {/* Background Decorative Elements */}
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-teal-100 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute bottom-0 left-0 transform -translate-x-1/2 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-30"></div>
            </div>

            {/* Left Column - Content */}
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-[#002B5B] leading-tight">
                Our Mission!
              </h1>
              <p className="text-base lg:text-lg text-slate-600 leading-relaxed">
                To empower educational institutions, educators, and learners by providing comprehensive, innovative, and user-friendly EduTech solutions that simplify administrative tasks, enhance teaching and learning experiences, and foster academic excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Our Vision Section */}
        <div className="container mx-auto py-16 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-[#002B5B] leading-tight">
            Our Vision!
          </h1>
          <p className="text-base lg:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mt-4">
            To establish Hello Digi Sir as the leading EduTech platform, connecting millions of educators, learners, and institutions worldwide, and becoming the trusted destination for quality education, skill development, and innovation in learning.
          </p>
        </div>
      </main>
    </section>
  );
}