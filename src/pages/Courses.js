import React, { useState } from "react";
import "./Courses.css";

function Courses() {
  const [courses, setCourses] = useState([
    { id: 1, name: "Information Technology", duration: "3 Years" },
    { id: 2, name: "Business Management", duration: "3 Years" },
    { id: 3, name: "Engineering", duration: "4 Years" },
  ]);

  const addCourse = () => {
    const newCourse = {
      id: courses.length + 1,
      name: "New Course " + (courses.length + 1),
      duration: "3 Years",
    };
    setCourses([...courses, newCourse]);
  };

  return (
    <div>
      <h2>Courses</h2>

      <button className="add-btn" onClick={addCourse}>
        + Add Course
      </button>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Course Name</th>
              <th>Duration</th>
            </tr>
          </thead>

          <tbody>
            {courses.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>{c.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Courses;