import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Courses from "./pages/Courses";
import Settings from "./pages/Settings";
import Login from "./pages/Login";

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  // If NOT logged in → show login page
  if (!isLoggedIn) {
    return <Login />;
  }

  return (
    <Router>
      <div className="app">
        <Sidebar />

        <div className="main">
          <Navbar />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;