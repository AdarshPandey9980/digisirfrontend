import { useState } from "react";
import { Search, Plus, Filter, Download } from "lucide-react";

// Sample data
const students = [
  { id: "S203847", name: "Evan Ward", grade: "2", phone: "987-654-321", address: "456 Oak Ave, Maplewood", avatar: "/placeholder.svg", section: "2A" },
  { id: "S817384", name: "Elena Thompson", grade: "5", phone: "839-483-223", address: "468 Fir Ave, Meadowbrook", avatar: "/placeholder.svg", section: "5A" },
  // Add more students here...
];

export default function StudentsSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [studentData, setStudentData] = useState(students);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);

  // Filter students based on search term
  const filteredStudents = studentData.filter((student) =>
    Object.values(student).some((value) => value.toString().toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Pagination
  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentStudents = filteredStudents.slice(startIndex, endIndex);

  const openEditDialog = (student) => {
    setEditingStudent(student);
    setIsEditDialogOpen(true);
  };

  const handleSave = () => {
    setStudentData((prev) =>
      prev.map((student) =>
        student.id === editingStudent.id ? editingStudent : student
      )
    );
    setIsEditDialogOpen(false);
  };

  return (
    <div className="w-full bg-white min-h-screen p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">All Students</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-4 px-4 font-medium text-gray-500">Info</th>
              <th className="text-left py-4 px-4 font-medium text-gray-500">Student ID</th>
              <th className="text-left py-4 px-4 font-medium text-gray-500">Grade</th>
              <th className="text-left py-4 px-4 font-medium text-gray-500">Phone</th>
              <th className="text-left py-4 px-4 font-medium text-gray-500">Address</th>
              <th className="text-left py-4 px-4 font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentStudents.map((student) => (
              <tr key={student.id} className="border-b hover:bg-gray-50">
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <img src={student.avatar} alt={student.name} className="w-10 h-10 rounded-full" />
                    <div>
                      <div className="font-medium">{student.name}</div>
                      <div className="text-sm text-gray-500">{student.section}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">{student.id}</td>
                <td className="py-4 px-4">{student.grade}</td>
                <td className="py-4 px-4">{student.phone}</td>
                <td className="py-4 px-4">{student.address}</td>
                <td className="py-4 px-4">
                  <button
                    className="p-2 text-blue-500 hover:bg-blue-50 rounded-full"
                    onClick={() => openEditDialog(student)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          className="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <div className="flex gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`w-8 h-8 rounded-lg ${currentPage === page ? "bg-blue-500 text-white" : "hover:bg-gray-100"}`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
        </div>
        <button
          className="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {/* Edit Dialog */}
      {isEditDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-lg font-semibold mb-4">Edit Student</h2>
            <div className="space-y-4">
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                placeholder="Name"
                value={editingStudent.name}
                onChange={(e) =>
                  setEditingStudent({ ...editingStudent, name: e.target.value })
                }
              />
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                placeholder="Grade"
                value={editingStudent.grade}
                onChange={(e) =>
                  setEditingStudent({ ...editingStudent, grade: e.target.value })
                }
              />
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                placeholder="Phone"
                value={editingStudent.phone}
                onChange={(e) =>
                  setEditingStudent({ ...editingStudent, phone: e.target.value })
                }
              />
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                placeholder="Address"
                value={editingStudent.address}
                onChange={(e) =>
                  setEditingStudent({ ...editingStudent, address: e.target.value })
                }
              />
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button
                className="px-4 py-2 border rounded"
                onClick={() => setIsEditDialogOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
