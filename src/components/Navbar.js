import React from "react";
import "./Navbar.css";

function Navbar({ darkMode, setDarkMode, setIsLoggedIn }) {

  // toggle theme
  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  // logout function
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="navbar">
      <h2>College Admin</h2>

      <div>
        <button className="theme-btn" onClick={toggleTheme}>
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;