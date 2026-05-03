import React, { useState } from "react";
import "../pages/Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "/";
  };

  return (
    <div className="login-page">
      <div className="overlay">
        <form className="login-card" onSubmit={handleLogin}>
          <h1>KR Mangalam University</h1>
          <p>College Admin Panel</p>

          <input
            type="text"
            placeholder="Username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;