import React, { useState, createContext, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Login from "./pages/Login";

import "./App.css";

/* ================= THEME CONTEXT ================= */

export const ThemeContext = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const themeValue = useMemo(
    () => ({ darkMode, setDarkMode }),
    [darkMode]
  );

  return (
    <ThemeContext.Provider value={themeValue}>
      <Router>
        <div className={darkMode ? "app dark" : "app"}>
          
          {!isLoggedIn ? (
            <Login setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <div className="mainLayout">
              
              {/* Sidebar */}
              <Sidebar />

              {/* Right Content Area */}
              <div className="contentArea">
                <Navbar />

                <div className="pageContainer">
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/students" element={<Students />} />
                    <Route path="/teachers" element={<Teachers />} />
                    <Route path="*" element={<Navigate to="/" />} />
                  </Routes>
                </div>

              </div>
            </div>
          )}

        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;