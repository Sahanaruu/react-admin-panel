import Sidebar from "../components/Sidebar";

const layoutStyle = {
  display: "flex",
};

const contentStyle = {
  padding: "20px",
  width: "100%",
};

function MainLayout({ children }) {
  return (
    <div style={layoutStyle}>
      <Sidebar />
      <div style={contentStyle}>{children}</div>
    </div>
  );
}

export default MainLayout;