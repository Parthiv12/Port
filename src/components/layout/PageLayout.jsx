import { lazy, Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar.jsx";

// Heavy WebGL backgrounds lazy-loaded so they don't block the initial bundle
const LightRays = lazy(() => import("../../assets/backgroundM/LightRays.jsx"));
const Beams = lazy(() => import("../../assets/backgroundM/Beams.jsx"));

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

    if (pathname === "/t2") {
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
          <Beams
            beamWidth={1.5}
            beamHeight={40}
            beamNumber={35}
            lightColor="#e2e8f0"
            speed={1.2}
            noiseIntensity={1.1}
            scale={0.15}
            rotation={-25}
          />
        </div>
      );
    }

    // Default calm, deep dark background for all content pages
    return (
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          background: "#040508", // Base dark
          pointerEvents: "none"
        }}
      >
        {/* Faint subtle gradient wash */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at 50% -20%, rgba(20, 25, 35, 0.4), transparent 70%)"
          }}
        />
      </div>
    );
  };

  return (
    <div>
      <Suspense fallback={null}>{renderBackground()}</Suspense>
      <Navbar />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
}
