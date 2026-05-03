import React, { useState } from "react";
import "../pages/Login.css";

function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true); // allow any login
  };

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleLogin}>
        <h2>College Admin Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;