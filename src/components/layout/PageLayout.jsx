import { Outlet, useLocation } from "react-router-dom";
import LightRays from "../../assets/backgroundM/LightRays.jsx";
import Silk from "../../assets/backgroundM/Silk.jsx";
import Navbar from "./Navbar.jsx";

const projectsBackdrop = {
  position: "fixed",
  inset: 0,
  zIndex: -1,
  background:
    "radial-gradient(circle at 20% 0%, rgba(120, 243, 255, 0.1), transparent 40%), #06070a",
};

export default function PageLayout() {
  const { pathname } = useLocation();

  const renderBackground = () => {
    if (pathname === "/") {
      return (
        <div
          style={{
            position: "absolute",
            inset: 0,
            height: "100vh",
            overflow: "hidden",
            zIndex: -1,
          }}
        >
          <LightRays />
        </div>
      );
    }

    if (pathname === "/timeline") return <Silk />;
    if (pathname === "/projects") return <div style={projectsBackdrop} />;
    return null;
  };

  return (
    <div>
      {renderBackground()}
      <Navbar />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
}
