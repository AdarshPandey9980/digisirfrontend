import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const InstituteWelcome = () => {
  const [logo, setLogo] = useState(null);
  const [className, setClassName] = useState("");
  const [courseInput, setCourseInput] = useState("");
  const [courses, setCourses] = useState([]);
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogo(file);
    }
  };

  const handleAddCourse = () => {
    if (courseInput.trim() && !courses.includes(courseInput)) {
      setCourses([...courses, courseInput.trim()]);
      setCourseInput("");
    }
  };

  const handleRemoveCourse = (course) => {
    setCourses(courses.filter((c) => c !== course));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!className || courses.length === 0 || !location || !logo) {
      alert("Please fill in all the details.");
      return;
    }

    const formData = new FormData();
    formData.append("logo", logo);
    formData.append("className", className);
    formData.append("courses", JSON.stringify(courses));
    formData.append("location", location);

    // Replace with actual API call
    console.log("Submitted Data:", {
      className,
      courses,
      location,
      logo: logo.name,
    });

    alert("Details submitted successfully!");
    navigate("/institute-dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-3xl p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome, Institute!</h1>
        <p className="text-center text-gray-600 mb-8">
          Please provide your class details to get started.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Class Logo</label>
            <div className="flex items-center gap-4">
              <label
                htmlFor="fileInput"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition"
              >
                Choose File
              </label>
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={handleLogoUpload}
                className="hidden"
              />
              {logo && (
                <span className="text-gray-600 text-sm truncate">
                  {logo.name}
                </span>
              )}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Class Name</label>
            <input
              type="text"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              placeholder="Enter class name"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Courses Offering</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={courseInput}
                onChange={(e) => setCourseInput(e.target.value)}
                placeholder="Type a course and press enter"
                className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), handleAddCourse())}
              />
              <button
                type="button"
                onClick={handleAddCourse}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Add
              </button>
            </div>
            {courses.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-2">
                {courses.map((course, index) => (
                  <li
                    key={index}
                    className="flex items-center bg-gray-200 px-3 py-1 rounded-lg text-sm"
                  >
                    {course}
                    <button
                      type="button"
                      onClick={() => handleRemoveCourse(course)}
                      className="ml-2 text-red-500 hover:text-red-700"
                    >
                      ✕
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Submit Details
          </button>
        </form>

        {logo && (
          <div className="mt-6 text-center">
            <p className="text-gray-600">Uploaded Logo:</p>
            <img
              src={URL.createObjectURL(logo)}
              alt="Class Logo Preview"
              className="mt-2 mx-auto h-20 w-20 rounded-full object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default InstituteWelcome;
