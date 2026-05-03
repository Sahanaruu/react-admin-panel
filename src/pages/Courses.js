import React, { useState } from "react";
import "./Courses.css";

const Courses = () => {
  const [courses, setCourses] = useState([
    { id: 1, name: "BCA", duration: "3 Years", seats: 60 },
    { id: 2, name: "BBA", duration: "3 Years", seats: 50 }
  ]);

  const [form, setForm] = useState({
    name: "",
    duration: "",
    seats: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add Course
  const addCourse = (e) => {
    e.preventDefault();
    if (!form.name || !form.duration || !form.seats) return;

    const newCourse = {
      id: Date.now(),
      ...form
    };

    setCourses([...courses, newCourse]);
    setForm({ name: "", duration: "", seats: "" });
  };

  // Delete Course
  const deleteCourse = (id) => {
    setCourses(courses.filter((c) => c.id !== id));
  };

  return (
    <div className="courses-page">
      <h1>Courses Management</h1>

      {/* Add Course Form */}
      <form className="course-form" onSubmit={addCourse}>
        <input
          type="text"
          name="name"
          placeholder="Course Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="duration"
          placeholder="Duration"
          value={form.duration}
          onChange={handleChange}
        />

        <input
          type="number"
          name="seats"
          placeholder="Seats"
          value={form.seats}
          onChange={handleChange}
        />

        <button type="submit">Add Course</button>
      </form>

      {/* Table */}
      <table className="courses-table">
        <thead>
          <tr>
            <th>Course</th>
            <th>Duration</th>
            <th>Seats</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {courses.map((c) => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.duration}</td>
              <td>{c.seats}</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => deleteCourse(c.id)}
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

export default Courses;