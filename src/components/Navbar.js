import "./Navbar.css";

function Navbar() {

  // 🌙 Toggle Dark / Light Theme
  const toggleTheme = () => {
    const currentTheme = localStorage.getItem("theme") || "light";
    const newTheme = currentTheme === "light" ? "dark" : "light";

    localStorage.setItem("theme", newTheme);
    document.body.className = newTheme;
  };

  // 🔓 Logout
  const logout = () => {
    localStorage.removeItem("auth");
    window.location.reload();
  };

  return (
    <div className="navbar">
      <h2 className="logo-title">College Admin Panel</h2>

      <div className="nav-right">

        {/* 🔍 Search */}
        <input 
          type="text" 
          placeholder="Search..." 
          className="search"
        />

        {/* 🌙 Theme Toggle */}
        <button className="theme-btn" onClick={toggleTheme}>
          🌙 / ☀️
        </button>

        {/* 👤 Profile */}
        <div className="profile">
          <div className="avatar">👤</div>
          <span>sahana</span>
        </div>

        {/* 🚪 Logout */}
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>

      </div>
    </div>
  );
}

export default Navbar
