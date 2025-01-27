import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";  // Assuming you are using js-cookie to manage cookies

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [joiningKey, setJoiningKey] = useState("");
  const [incomingRequests, setIncomingRequests] = useState([]);  // State to store incoming requests

  const handleSidebarClick = (section) => {
    setActiveSection(section);
  };

  const handleJoinClick = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/instituteAdmin/addMembers", {
        key: joiningKey,
      });
      alert("Member added successfully!");
      const keyName = response.data.result?.[0]?.key_name;
      console.log("Key Name:", keyName);
      if (keyName === "studentKey") {
        alert("Student Added");
      } else if (keyName === "parentKey") {
        alert("Parent Added");
      } else {
        alert("Teacher Added");
      }
      setIsModalOpen(false);  // Close the modal after successful submission
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert("Failed to add member. Please try again.");
    }
  };

  // Fetch incoming requests when the "Incoming Requests" tab is clicked
  useEffect(() => {
    if (activeSection === "incomingRequests") {
      const fetchRequests = async () => {
        try {
          const instituteId = Cookies.get("instituteId");
          const response = await axios.post(
            "http://localhost:8000/api/instituteAdmin/get-joining-request",
            { userId:instituteId },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          // Assuming the response structure is { request: [...] }
          setIncomingRequests(response.data.request || []); // Store incoming requests
        } catch (error) {
          console.error("Error fetching incoming requests:", error);
        }
      };
      fetchRequests();
    }
  }, [activeSection]); // Trigger when the active section changes

  // Approve request handler
  const handleApproveRequest = (requestId) => {
    // Handle approval logic here, e.g., update the database
    alert(`Request with ID ${requestId} approved`);
  };

  // Reject request handler
  const handleRejectRequest = (requestId) => {
    // Handle rejection logic here, e.g., remove from list or update the database
    alert(`Request with ID ${requestId} rejected`);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="hidden w-64 bg-white border-r md:block">
        <nav className="p-4 space-y-2">
          <div
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all ${
              activeSection === "dashboard" ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => handleSidebarClick("dashboard")}
          >
            Dashboard
          </div>
          <div
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all ${
              activeSection === "incomingRequests"
                ? "bg-blue-100 text-blue-600"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => handleSidebarClick("incomingRequests")}
          >
            Incoming Requests
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header with Logo and Add Member Button */}
        <div className="flex justify-center items-center mb-8">
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="w-12 h-12" />
            <span className="ml-2 text-2xl font-bold">DigiSir</span>
          </div>

          <div className="mb-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ml-6"
            >
              Add Member
            </button>
          </div>
        </div>

        {/* Modal for Joining Key */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
              <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Join with Joining Key</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-2">Joining Key</label>
                <input
                  type="text"
                  value={joiningKey}
                  onChange={(e) => setJoiningKey(e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter joining key"
                />
              </div>
              <div className="flex justify-between">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Cancel
                </button>
                <button
                  onClick={handleJoinClick}
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Incoming Requests Section */}
        {activeSection === "incomingRequests" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Incoming Requests</h2>
            {incomingRequests.length > 0 ? (
              <div className="space-y-4">
                {incomingRequests.map((request) => (
                  <div key={request._id} className="border p-4 rounded-lg shadow-lg">
                    <p><strong>Name:</strong> {request.name}</p>
                    <p><strong>Email:</strong> {request.email}</p>
                    <p><strong>Type:</strong> {request.type}</p>
                    {/* Render more fields as necessary */}
                    <button
                      onClick={() => handleApproveRequest(request._id)}
                      className="bg-green-500 text-white py-2 px-4 rounded mt-2"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleRejectRequest(request._id)}
                      className="bg-red-500 text-white py-2 px-4 rounded mt-2 ml-2"
                    >
                      Reject
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p>No incoming requests.</p>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
