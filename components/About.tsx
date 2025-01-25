import React from "react";

export default function Home() {
  return (
    <section id="about">
      <main className="min-h-screen bg-white p-2">
        {/* First Hero Section */}
        <div className="container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Right Column - App Screenshots */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/online-class.jpg"
                  alt="App Preview"
                  width={700}
                  height={1000}
                  className="rounded-3xl shadow-2xl"
                />
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-teal-100 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute bottom-0 left-0 transform -translate-x-1/2 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-30"></div>
            </div>

            {/* Left Column - Content */}
            <div className="space-y-6">
              <h1 className="text-6xl font-bold text-[#002B5B] leading-tight">
                Our Mission!
              </h1>
              <p className="text-lg text-slate-600">
                At DigiSir, we are transforming the educational experience with
                cutting-edge technology that streamlines school operations. Our
                platform facilitates seamless communication between teachers,
                students, and parents while simplifying tasks like attendance,
                assignments, and schedules. We empower schools to be more
                efficient, allowing educators to focus on what truly
                matters—student success.
              </p>
            </div>
          </div>
        </div>

        {/* Second Hero Section (Swapped Content and Image) */}
        <div className="container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <h1 className="text-6xl font-bold text-[#002B5B] leading-tight">
                Empowering Education
              </h1>
              <p className="text-lg text-slate-600">
                Driven by a passion for innovation, DigiSir provides tools that
                improve collaboration, engagement, and productivity within
                educational institutions. We help teachers manage classrooms
                better, keep parents connected, and support students in
                achieving their full potential. With DigiSir, we are shaping the
                future of education, one school at a time.
              </p>
            </div>

            {/* Right Column - App Screenshots */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/online-class.jpg"
                  alt="App Preview"
                  width={800}
                  height={1000}
                  className="rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
