import { Link, useLocation } from "react-router-dom";
import { FaTachometerAlt, FaUserGraduate, FaChalkboardTeacher, FaBook, FaCog } from "react-icons/fa";
import "./Sidebar.css";

function Sidebar() {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/", icon: <FaTachometerAlt /> },
    { name: "Students", path: "/students", icon: <FaUserGraduate /> },
    { name: "Teachers", path: "/teachers", icon: <FaChalkboardTeacher /> },
    { name: "Courses", path: "/courses", icon: <FaBook /> },
    { name: "Settings", path: "/settings", icon: <FaCog /> },
  ];

  return (
    <div className="sidebar">
      <div className="logo">
        <div className="avatar">👤</div>
        <h2>Admin</h2>
        <p>Administrator</p>
      </div>

      <ul className="menu">
        {menu.map((item) => (
          <li key={item.path} className={location.pathname === item.path ? "active" : ""}>
            <Link to={item.path}>
              <span className="icon">{item.icon}</span>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;