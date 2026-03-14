import { Outlet, useLocation } from "react-router-dom";
import LightRays from "../../assets/backgroundM/LightRays.jsx";
import Silk from "../../assets/backgroundM/Silk.jsx";
import Navbar from "./Navbar.jsx";

export default function PageLayout() {
  const { pathname } = useLocation();
  const isProjectsRoute = pathname.startsWith("/projects");

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

    if (isProjectsRoute) {
      return (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: -1,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.42,
              filter: "saturate(0.85) brightness(0.85)",
            }}
          >
            <LightRays />
          </div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 18% 2%, rgba(60, 225, 210, 0.09), transparent 42%), rgba(6, 8, 13, 0.6)",
            }}
          />
        </div>
      );
    }

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
