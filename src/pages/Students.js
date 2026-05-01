import React, { useState } from "react";
import "./Students.css";

function Students() {
  const [students, setStudents] = useState([
    { id: 1, name: "John Silva", course: "IT", year: "2nd Year" },
    { id: 2, name: "Amal Perera", course: "Business", year: "1st Year" },
    { id: 3, name: "Nadeesha Fernando", course: "Engineering", year: "3rd Year" },
  ]);

  const addStudent = () => {
    const newStudent = {
      id: students.length + 1,
      name: "New Student " + (students.length + 1),
      course: "New Course",
      year: "1st Year",
    };

    setStudents([...students, newStudent]);
  };

  return (
    <div>
      <h2>Students</h2>

      <button className="add-btn" onClick={addStudent}>
        + Add Student
      </button>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Course</th>
              <th>Year</th>
            </tr>
          </thead>

          <tbody>
            {students.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.course}</td>
                <td>{s.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Students;