import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="page">
      <h1>Dashboard Overview</h1>

      {/* TOP STATS */}
      <div className="cards">
        <div className="card">
          <h3>Total Students</h3>
          <h1>120</h1>
        </div>

        <div className="card">
          <h3>Total Teachers</h3>
          <h1>25</h1>
        </div>

        <div className="card">
          <h3>Total Courses</h3>
          <h1>12</h1>
        </div>

        <div className="card">
          <h3>Departments</h3>
          <h1>6</h1>
        </div>
      </div>

      {/* CHART AREA */}
      <div className="charts">
        <div className="card chart-card">
          <h3>Admissions Growth</h3>
          <img
            src="https://quickchart.io/chart?c={type:'line',data:{labels:['Jan','Feb','Mar','Apr','May','Jun'],datasets:[{label:'Admissions',data:[50,80,120,180,250,320]}]}}"
            alt="chart"
          />
        </div>

        <div className="card chart-card">
          <h3>Department Students</h3>
          <img
            src="https://quickchart.io/chart?c={type:'bar',data:{labels:['CS','Math','Physics','Commerce'],datasets:[{label:'Students',data:[80,60,50,65]}]}}"
            alt="chart"
          />
        </div>

        <div className="card chart-card">
          <h3>Gender Ratio</h3>
          <img
            src="https://quickchart.io/chart?c={type:'pie',data:{labels:['Male','Female'],datasets:[{data:[60,40]}]}}"
            alt="chart"
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
