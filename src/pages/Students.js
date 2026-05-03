import React, { useState } from "react";
import "./Students.css";

const Students = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Rahul", department: "CS", year: "1st" },
    { id: 2, name: "Anjali", department: "Math", year: "2nd" }
  ]);

  const [form, setForm] = useState({
    name: "",
    department: "",
    year: ""
  });

  // handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // add student
  const addStudent = (e) => {
    e.preventDefault();
    if (!form.name || !form.department || !form.year) return;

    const newStudent = {
      id: Date.now(),
      ...form
    };

    setStudents([...students, newStudent]);

    // clear form
    setForm({ name: "", department: "", year: "" });
  };

  // delete student
  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <div className="students-page">
      <h1>Students Management</h1>

      {/* Add Form */}
      <form className="student-form" onSubmit={addStudent}>
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={form.department}
          onChange={handleChange}
        />
        <input
          type="text"
          name="year"
          placeholder="Year"
          value={form.year}
          onChange={handleChange}
        />

        <button type="submit">Add Student</button>
      </form>

      {/* Students Table */}
      <table className="students-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Year</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.department}</td>
              <td>{s.year}</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => deleteStudent(s.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;