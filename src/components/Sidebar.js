import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div>
        <h2>Admin</h2>

        <Link to="/">Dashboard</Link>
        <Link to="/students">Students</Link>
        <Link to="/teachers">Teachers</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/settings">Settings</Link>
      </div>

      <p>© 2025 College Admin</p>
    </div>
  );
}

export default Sidebar;