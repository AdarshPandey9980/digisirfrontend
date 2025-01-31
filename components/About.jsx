import React from "react";

import { Card, CardContent } from "./ui/card";

export default function Home() {
  return (
    <section id="about">
      <main className="min-h-screen bg-white px-4 lg:px-8">
        {/* First Hero Section */}
        <div className="container mx-auto py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Right Column - App Screenshots */}
            <div className="relative flex justify-center">
              <div className="relative z-10">
                <img
                  src="/online-class.jpg"
                  alt="App Preview"
                  className="rounded-3xl shadow-2xl max-w-full"
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
                At DigiSir, we are transforming the educational experience with
                cutting-edge technology that streamlines institute operations. Our
                platform facilitates seamless communication between teachers,
                students, and parents while simplifying tasks like attendance,
                assignments, and schedules. We empower schools to be more
                efficient, allowing educators to focus on what truly
                matters—student success.
              </p>
            </div>
          </div>
        </div>

        {/* Second Hero Section */}
        <div className="container mx-auto py-16">
        <section>
        <h1 className="text-4xl lg:text-6xl font-bold text-[#002B5B] leading-tight text-center mb-12">
                Our Values
              </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Innovation",
              description: "We constantly seek new ways to improve the educational experience through technology.",
            },
            {
              title: "Accessibility",
              description:
                "We believe in making quality education tools available to all, regardless of location or resources.",
            },
            {
              title: "Integrity",
              description: "We uphold the highest standards of honesty and ethics in all our operations.",
            },
            {
              title: "Collaboration",
              description:
                "We foster partnerships with educators, institutions, and tech experts to create the best solutions.",
            },
            {
              title: "User-Centric",
              description:
                "We put the needs of students, teachers, and institutions at the heart of our design process.",
            },
            {
              title: "Continuous Learning",
              description:
                "We are committed to ongoing improvement and adaptation in the ever-evolving field of education.",
            },
          ].map((value, index) => (
            <Card key={index} className="border border-gray-100 shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-[#002B5B]">{value.title}</h3>
                <p className="text-muted-foreground text-[#004a9f]">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-[#002B5B]">Join Us in Shaping the Future of Education</h2>
        <p className="text-lg text-muted-foreground mb-6 text-[#004a9f]">
          Whether you're an educational institution looking to modernize your processes, a teacher seeking innovative
          tools, or a student eager to enhance your learning journey, Digisir's Solutions is here to support you every
          step of the way.
        </p>
        <button className="bg-primary  px-6 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors text-[#002B5B]">
          Learn More About Our Solutions
        </button>
      </section>
        </div>
      </main>
    </section>
  );
}
