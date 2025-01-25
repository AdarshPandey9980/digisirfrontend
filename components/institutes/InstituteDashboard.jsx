import React, { useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { PieChart, Users, GraduationCap, UserPlus, Calendar } from "lucide-react";
import CalendarComponent from "../ui/Calendar";

const attendanceData = [
  { day: "Mon", present: 60, absent: 50 },
  { day: "Tue", present: 70, absent: 60 },
  { day: "Wed", present: 85, absent: 75 },
  { day: "Thu", present: 75, absent: 70 },
  { day: "Fri", present: 65, absent: 55 },
];

const financeData = Array.from({ length: 12 }, (_, i) => ({
  month: i + 1,
  income: Math.floor(Math.random() * (3600 - 2700) + 2700),
  expense: Math.floor(Math.random() * (3000 - 2400) + 2400),
}));

const events = [
  {
    title: "Book Fair",
    description: "Browse and purchase books at our annual school Book Fair.",
    time: "09:00 - 15:00",
  },
  {
    title: "Sports Day",
    description: "A fun-filled day of athletic events and team competitions.",
    time: "10:00 - 17:00",
  },
  {
    title: "Art Exhibition",
    description: "Display your artwork for the school community to admire.",
    time: "13:00 - 16:00",
  },
];

const Card = ({ children, className }) => (
  <div className={`rounded-lg shadow p-4 ${className}`}>{children}</div>
);

const CardHeader = ({ children, className }) => (
  <div className={`mb-4 ${className}`}>{children}</div>
);

const CardTitle = ({ children }) => (
  <h3 className="text-lg font-bold">{children}</h3>
);

const CardContent = ({ children }) => <div>{children}</div>;

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const handleSidebarClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="hidden w-64 bg-white border-r md:block">
        <nav className="p-4 space-y-2">
          <div
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg ${
              activeSection === "dashboard" ? "bg-gray-100" : ""
            }`}
            onClick={() => handleSidebarClick("dashboard")}
          >
            <PieChart className="w-4 h-4" />
            Dashboard
          </div>
          <div
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100 ${
              activeSection === "teachers" ? "bg-gray-100" : ""
            }`}
            onClick={() => handleSidebarClick("teachers")}
          >
            <Users className="w-4 h-4" />
            Teachers
          </div>
          <div
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100 ${
              activeSection === "students" ? "bg-gray-100" : ""
            }`}
            onClick={() => handleSidebarClick("students")}
          >
            <GraduationCap className="w-4 h-4" />
            Students
          </div>
          <div
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100 ${
              activeSection === "parents" ? "bg-gray-100" : ""
            }`}
            onClick={() => handleSidebarClick("parents")}
          >
            <UserPlus className="w-4 h-4" />
            Parents
          </div>
          {/* Add more sidebar items similarly */}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {activeSection === "dashboard" && (
          <>
            {/* Stats Cards */}
            <div className="grid gap-4 mb-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-purple-100">
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle>Admins</CardTitle>
                  <Users className="w-4 h-4 text-purple-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-gray-600">2024/25</p>
                </CardContent>
              </Card>
              <Card className="bg-yellow-100">
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle>Teachers</CardTitle>
                  <Users className="w-4 h-4 text-yellow-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-gray-600">2024/25</p>
                </CardContent>
              </Card>
              <Card className="bg-purple-100">
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle>Students</CardTitle>
                  <GraduationCap className="w-4 h-4 text-purple-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">460</div>
                  <p className="text-xs text-gray-600">2024/25</p>
                </CardContent>
              </Card>
              <Card className="bg-yellow-100">
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle>Parents</CardTitle>
                  <UserPlus className="w-4 h-4 text-yellow-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">382</div>
                  <p className="text-xs text-gray-600">2024/25</p>
                </CardContent>
              </Card>
            </div>

            {/* Charts and Calendar Grid */}
            <div className="grid gap-8 mb-8 lg:grid-cols-2">
              {/* Attendance Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Attendance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={attendanceData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Bar dataKey="present" fill="#818CF8" />
                        <Bar dataKey="absent" fill="#FCD34D" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Finance Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Finance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={financeData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Line type="monotone" dataKey="income" stroke="#818CF8" />
                        <Line type="monotone" dataKey="expense" stroke="#FCD34D" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Calendar and Events */}
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Calendar */}
              <Card>
                <CardHeader>
                  <CardTitle>Calendar</CardTitle>
                </CardHeader>
                <CardContent>
                  <CalendarComponent />
                </CardContent>
              </Card>

              {/* Events */}
              <Card>
                <CardHeader>
                  <CardTitle>Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {events.map((event, index) => (
                      <div key={index} className="flex flex-col space-y-1">
                        <h3 className="font-medium">{event.title}</h3>
                        <p className="text-sm text-gray-500">{event.description}</p>
                        <p className="text-xs text-gray-400">{event.time}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        )}

        {activeSection === "teachers" && (
          <div>
            <h2 className="text-xl font-bold">Teachers Section</h2>
            {/* Render teacher-specific content here */}
          </div>
        )}

        {activeSection === "students" && (
          <div>
            <h2 className="text-xl font-bold">Students Section</h2>
            {/* Render student-specific content here */}
          </div>
        )}

        {activeSection === "parents" && (
          <div>
            <h2 className="text-xl font-bold">Parents Section</h2>
            {/* Render parent-specific content here */}
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
