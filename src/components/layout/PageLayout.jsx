import { Outlet, useLocation } from "react-router-dom";
import LightRays from "../../assets/backgroundM/LightRays.jsx";
import Silk from "../../assets/backgroundM/Silk.jsx";
import Navbar from "./Navbar.jsx";

export default function PageLayout() {
  const { pathname } = useLocation();
  const isProjectsRoute = pathname.startsWith("/projects");
  const isReadingRoute = ["/stack", "/about", "/contact"].some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );

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

    if (pathname === "/timeline") {
      return (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: -1,
            overflow: "hidden",
            pointerEvents: "none",
          }}
        >
          <Silk speed={4.1} scale={1.1} color="#667082" noiseIntensity={1.25} />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 20% 8%, rgba(170, 200, 210, 0.09), transparent 44%), linear-gradient(180deg, rgba(4, 7, 12, 0.34), rgba(4, 8, 12, 0.72))",
            }}
          />
        </div>
      );
    }

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
              opacity: 0.36,
              filter: "saturate(0.72) brightness(0.8)",
            }}
          >
            <LightRays />
          </div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 18% 2%, rgba(170, 198, 205, 0.08), transparent 42%), rgba(6, 8, 13, 0.62)",
            }}
          />
        </div>
      );
    }

    if (isReadingRoute) {
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
              opacity: 0.26,
              filter: "saturate(0.68) brightness(0.78)",
            }}
          >
            <LightRays />
          </div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(5, 8, 12, 0.58), rgba(6, 9, 14, 0.76))",
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
