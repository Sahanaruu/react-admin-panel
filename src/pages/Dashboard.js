import React from "react";
import "../App.css";
import {
  LineChart, Line, XAxis, YAxis, Tooltip,
  BarChart, Bar, PieChart, Pie, Cell
} from "recharts";

function Dashboard() {

  // dummy data
  const data = [
    { name: "Jan", students: 30 },
    { name: "Feb", students: 45 },
    { name: "Mar", students: 60 },
    { name: "Apr", students: 80 },
    { name: "May", students: 95 }
  ];

  const deptData = [
    { dept: "CSE", students: 120 },
    { dept: "ECE", students: 90 },
    { dept: "MECH", students: 70 }
  ];

  const pieData = [
    { name: "Male", value: 60 },
    { name: "Female", value: 40 }
  ];

  return (
    <div className="page">
      <h1>Dashboard</h1>

      {/* STATS */}
      <div className="cards">
        <div className="card">
          <h3>Total Students</h3>
          <h2>320</h2>
        </div>

        <div className="card">
          <h3>Total Teachers</h3>
          <h2>25</h2>
        </div>

        <div className="card">
          <h3>Total Courses</h3>
          <h2>18</h2>
        </div>
      </div>

      {/* CHARTS IN ONE ROW */}
      <div className="charts-row">

        {/* Line Chart */}
        <div className="card chart-card">
          <h3>Admissions Growth</h3>
          <LineChart width={250} height={150} data={data}>
            <Line type="monotone" dataKey="students" stroke="#3b82f6" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>

        {/* Bar Chart */}
        <div className="card chart-card">
          <h3>Department Students</h3>
          <BarChart width={250} height={150} data={deptData}>
            <Bar dataKey="students" fill="#22c55e" />
            <XAxis dataKey="dept" />
            <YAxis />
            <Tooltip />
          </BarChart>
        </div>

        {/* Pie Chart */}
        <div className="card chart-card">
          <h3>Gender Ratio</h3>
          <PieChart width={250} height={150}>
            <Pie data={pieData} dataKey="value" outerRadius={60}>
              {pieData.map((entry, index) => (
                <Cell key={index} fill={["#3b82f6", "#f43f5e"][index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;