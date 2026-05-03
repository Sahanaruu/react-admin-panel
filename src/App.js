import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Courses from "./pages/Courses";
import Settings from "./pages/Settings";
import Login from "./pages/Login";

import "./App.css";

function App() {
  // ✅ LOGIN STATE
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ THEME STATE
  const [darkMode, setDarkMode] = useState(true);

  // 👉 show login page first
  if (!isLoggedIn) {
    return <Login setIsLoggedIn={setIsLoggedIn} />;
  }

  return (
    <Router>
      <div className={darkMode ? "app dark" : "app light"}>
        
        {/* Sidebar */}
        <Sidebar />

        <div className="main">
          {/* Navbar */}
          <Navbar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            setIsLoggedIn={setIsLoggedIn}
          />

          {/* Pages */}
          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/students" element={<Students />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>

      </div>
    </Router>
  );
}

export default App;