import React from "react";

function Settings(){
  return(
    <div className="page">
      <h2 style={{marginBottom:"20px"}}>Settings</h2>

      <div className="card" style={{marginBottom:"20px"}}>
        <p><b>Email:</b> admin@college.com</p>
        <p><b>Role:</b> Administrator</p>
      </div>

      <div className="card">
        <p>College Admin Panel v1.0</p>
        <p>Frontend Project (No Backend)</p>
      </div>
    </div>
  )
}

export default Settings;