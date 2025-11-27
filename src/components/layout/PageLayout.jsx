import { Outlet, useLocation } from "react-router-dom";
import LightRays from "../../assets/backgroundM/LightRays.jsx";
import Silk from "../../assets/backgroundM/Silk.jsx";
import Navbar from "./Navbar.jsx";
import LightRaysWrapper from "../../assets/backgroundM/LightRaysWrapper.jsx"; // for full page light rays

const grainStyle = {
  background: "url('/grain.png') repeat",
  backgroundSize: "300px",
  position: "fixed",
  inset: 0,
  zIndex: -1,
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
        height: "100vh", // ⭐ LIMITS LIGHTRAYS TO HERO ONLY
        overflow: "hidden",
        zIndex: -1,
      }}
    >
      <LightRays />
    </div>
);
  // grain is handled by HomePage.jsx 
      }
    if (pathname === "/timeline") return <Silk />;
      if (pathname === "/projects") {
          return <div style={grainStyle}></div>;
      };
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
