"use client";

import { BookOpen, Calendar, User, BarChart2, Briefcase, CreditCard } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#002B5B] mb-12">
          Highlights of DigiSir.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#002B5B] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <BookOpen className="text-white w-12 h-12" />
              <h3 className="text-xl font-semibold text-white ml-4">Academic Management</h3>
            </div>
            <p className="text-white mt-2">
              Streamline academic operations with ease, including managing class schedules, grading, and more, ensuring smooth workflows for students and faculty alike.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#002B5B] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <Calendar className="text-white w-12 h-12" />
              <h3 className="text-xl font-semibold text-white ml-4">Timetable Generation</h3>
            </div>
            <p className="text-white mt-2">
              Automatically generate class timetables based on teacher availability and room capacity, making the scheduling process quick and efficient.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#002B5B] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <User className="text-white w-12 h-12" />
              <h3 className="text-xl font-semibold text-white ml-4">Student Database</h3>
            </div>
            <p className="text-white mt-2">
              Maintain an organized and easily accessible student database, ensuring all student information is secure and readily available for administrative use.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#002B5B] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <BarChart2 className="text-white w-12 h-12" />
              <h3 className="text-xl font-semibold text-white ml-4">Performance Analytics</h3>
            </div>
            <p className="text-white mt-2">
              Analyze student performance through detailed reports and data visualization, helping educators and administrators track progress and improve outcomes.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-[#002B5B] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <Briefcase className="text-white w-12 h-12" />
              <h3 className="text-xl font-semibold text-white ml-4">Staff Management</h3>
            </div>
            <p className="text-white mt-2">
              Manage staff schedules, tasks, and profiles seamlessly, ensuring a balanced workload and better coordination among faculty members and staff.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-[#002B5B] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <CreditCard className="text-white w-12 h-12" />
              <h3 className="text-xl font-semibold text-white ml-4">Fee Management</h3>
            </div>
            <p className="text-white mt-2">
              Simplify the fee tracking process by automating payment collection, fee generation, and reporting, ensuring financial operations run smoothly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
