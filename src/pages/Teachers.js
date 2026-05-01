import { useState } from "react";
import "./Students.css"; // reuse same table styling

function Teachers() {
  const [teachers, setTeachers] = useState([
    { id: 1, name: "Dr. Sharma", dept: "Computer Science", email: "sharma@clg.com" },
    { id: 2, name: "Prof. Mehta", dept: "Mathematics", email: "mehta@clg.com" },
    { id: 3, name: "Dr. Rao", dept: "Physics", email: "rao@clg.com" },
  ]);

  const [search, setSearch] = useState("");
  const [form, setForm] = useState({
    name: "",
    dept: "",
    email: ""
  });

  // Add Teacher
  const addTeacher = () => {
    if (!form.name || !form.dept || !form.email) return;

    const newTeacher = {
      id: Date.now(),
      ...form
    };

    setTeachers([...teachers, newTeacher]);
    setForm({ name: "", dept: "", email: "" });
  };

  // Delete Teacher
  const deleteTeacher = (id) => {
    setTeachers(teachers.filter(t => t.id !== id));
  };

  // Filter Search
  const filteredTeachers = teachers.filter(t =>
    t.name.toLowerCase().includes(search.toLowerCase()) ||
    t.dept.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <h1>Teachers Management</h1>

      {/* SEARCH */}
      <input
        className="search-box"
        placeholder="Search teacher..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* ADD FORM */}
      <div className="form-card">
        <input
          placeholder="Teacher Name"
          value={form.name}
          onChange={(e)=>setForm({...form,name:e.target.value})}
        />
        <input
          placeholder="Department"
          value={form.dept}
          onChange={(e)=>setForm({...form,dept:e.target.value})}
        />
        <input
          placeholder="Email"
          value={form.email}
          onChange={(e)=>setForm({...form,email:e.target.value})}
        />
        <button onClick={addTeacher}>Add Teacher</button>
      </div>

      {/* TABLE */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredTeachers.map(t => (
              <tr key={t.id}>
                <td>{t.name}</td>
                <td>{t.dept}</td>
                <td>{t.email}</td>
                <td>
                  <button 
                    className="delete-btn"
                    onClick={()=>deleteTeacher(t.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Teachers;