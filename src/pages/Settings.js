import React from "react";

function Settings() {
  const user = localStorage.getItem("user");

  return (
    <div>
      <h2>Settings</h2>

      <div style={card}>
        <h3>Admin Info</h3>
        <p><strong>Email:</strong> {user}</p>
        <p><strong>Role:</strong> Administrator</p>
      </div>

      <div style={card}>
        <h3>System Info</h3>
        <p>College Admin Panel v1.0</p>
        <p>Frontend Project (No Backend)</p>
      </div>
    </div>
  );
}

const card = {
  background:"white",
  padding:"20px",
  borderRadius:"12px",
  marginTop:"20px",
  boxShadow:"0 2px 10px rgba(0,0,0,0.08)"
};

export default Settings;