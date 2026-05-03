import React, { useState, useEffect } from "react";

function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.reload(); // go back to login page
  };

  return (
    <div className="navbar">
      <h2>College Admin</h2>

      <div className="nav-right">
        <button onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark" : "☀ Light"}
        </button>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;