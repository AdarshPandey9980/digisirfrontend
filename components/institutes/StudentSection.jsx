import React, { useState } from "react";

const StudentSection = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", photo: "https://via.placeholder.com/50", class: "10A" },
    { id: 2, name: "Jane Smith", photo: "https://via.placeholder.com/50", class: "9B" },
    { id: 3, name: "Sam Wilson", photo: "https://via.placeholder.com/50", class: "8C" },
    { id: 4, name: "Chris Evans", photo: "https://via.placeholder.com/50", class: "7A" },
    { id: 5, name: "Emma Watson", photo: "https://via.placeholder.com/50", class: "6B" },
    { id: 6, name: "Tom Hanks", photo: "https://via.placeholder.com/50", class: "5C" },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [newStudent, setNewStudent] = useState({ name: "", photo: "", class: "" });
  const [editingStudent, setEditingStudent] = useState(null);
  const studentsPerPage = 3;

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);

  const currentStudents = filteredStudents.slice(
    (currentPage - 1) * studentsPerPage,
    currentPage * studentsPerPage
  );

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleDelete = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const handleAddStudent = () => {
    setStudents([...students, { id: Date.now(), ...newStudent }]);
    setNewStudent({ name: "", photo: "", class: "" });
  };

  const handleEditStudent = () => {
    setStudents(students.map(student => student.id === editingStudent.id ? editingStudent : student));
    setEditingStudent(null);
  };

  return (
    <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <input
          type="text"
          placeholder="Search students..."
          value={searchQuery}
          onChange={handleSearch}
          style={{ padding: "8px", width: "30%", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        <button
          onClick={() => setEditingStudent({ id: null, ...newStudent })}
          style={{ padding: "8px 16px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
        >
          Add Student
        </button>
      </div>

      {(editingStudent !== null) && (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", border: "1px solid #ccc", padding: "16px", borderRadius: "4px" }}>
          <input
            type="text"
            placeholder="Name"
            value={editingStudent.name}
            onChange={(e) => setEditingStudent({ ...editingStudent, name: e.target.value })}
            style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
          <input
            type="text"
            placeholder="Photo URL"
            value={editingStudent.photo}
            onChange={(e) => setEditingStudent({ ...editingStudent, photo: e.target.value })}
            style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
          <input
            type="text"
            placeholder="Class"
            value={editingStudent.class}
            onChange={(e) => setEditingStudent({ ...editingStudent, class: e.target.value })}
            style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
            <button
              onClick={() => setEditingStudent(null)}
              style={{ padding: "8px 16px", backgroundColor: "#6c757d", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
            >
              Cancel
            </button>
            <button
              onClick={editingStudent.id ? handleEditStudent : handleAddStudent}
              style={{ padding: "8px 16px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
            >
              {editingStudent.id ? "Update Student" : "Add Student"}
            </button>
          </div>
        </div>
      )}

      <div style={{ border: "1px solid #ccc", borderRadius: "4px", padding: "16px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Photo</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Name</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Class</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentStudents.map(student => (
              <tr key={student.id}>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  <img
                    src={student.photo}
                    alt={student.name}
                    style={{ width: "48px", height: "48px", borderRadius: "50%" }}
                  />
                </td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>{student.name}</td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>{student.class}</td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  <button
                    onClick={() => setEditingStudent(student)}
                    style={{ marginRight: "8px", padding: "4px 8px", backgroundColor: "#6c757d", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(student.id)}
                    style={{ padding: "4px 8px", backgroundColor: "#dc3545", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            style={{
              padding: "8px 12px",
              backgroundColor: currentPage === index + 1 ? "#007bff" : "#f8f9fa",
              color: currentPage === index + 1 ? "white" : "black",
              border: "1px solid #ccc",
              borderRadius: "4px",
              cursor: "pointer"
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StudentSection;
