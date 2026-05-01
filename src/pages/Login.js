import React, { useState } from "react";
import "./Login.css";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // No backend → allow any login
    if (email.trim() !== "" && password.trim() !== "") {
      setIsLoggedIn(true);
    } else {
      alert("Enter email & password");
    }
  };

  return (
    <div className="loginPage">
      <form className="loginBox" onSubmit={handleLogin}>
        <h2>College Admin Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
