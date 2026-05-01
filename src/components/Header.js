import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const Header = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="header">
      <h2>Dashboard</h2>

      <div className="header-right">
        <input placeholder="Search..." />

        <button className="theme-btn" onClick={toggleTheme}>
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>

        <div className="admin-info">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="admin"
          />
          <span>Admin</span>
        </div>
      </div>
    </div>
  );
};

export default Header;