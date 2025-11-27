import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import FadeIn from "../../components/ui/FadeIn.jsx";
import PlaygroundHome from "./PlaygroundHome.jsx";
import PlaygroundEngineering from "./PlaygroundEngineering.jsx";
import PlaygroundML from "./PlaygroundML.jsx";

export default function PlaygroundPage() {
  const { pathname } = useLocation();

  return (
    <div
      style={{
        paddingTop: "120px",
        paddingBottom: "80px",
        paddingInline: "5%",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <FadeIn>
        <h1
          style={{
            color: "white",
            fontSize: "3rem",
            fontWeight: 700,
            marginBottom: "10px",
          }}
        >
          Playground
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: "1.05rem",
            maxWidth: "650px",
            lineHeight: 1.7,
            marginBottom: "30px",
          }}
        >
          A space for interactive experiments — from UI interactions and system
          visualizations to ML demos and agent prototypes.
        </p>
      </FadeIn>

      {/* Internal tab nav */}
      <div
        style={{
          display: "flex",
          gap: "14px",
          marginBottom: "30px",
          flexWrap: "wrap",
        }}
      >
        <PlaygroundTab
          to="/playground"
          label="Overview"
          active={pathname === "/playground"}
        />
        <PlaygroundTab
          to="/playground/engineering"
          label="Interactive Engineering"
          active={pathname.startsWith("/playground/engineering")}
        />
        <PlaygroundTab
          to="/playground/ml"
          label="ML Playground"
          active={pathname.startsWith("/playground/ml")}
        />
      </div>

      {/* Nested routes */}
      <Routes>
        <Route index element={<PlaygroundHome />} />
        <Route path="engineering" element={<PlaygroundEngineering />} />
        <Route path="ml" element={<PlaygroundML />} />
      </Routes>
    </div>
  );
}

function PlaygroundTab({ to, label, active }) {
  return (
    <NavLink to={to} style={{ textDecoration: "none" }}>
      <div
        style={{
          padding: "8px 16px",
          borderRadius: "999px",
          border: "1px solid rgba(255,255,255,0.2)",
          background: active
            ? "rgba(255,255,255,0.18)"
            : "rgba(0,0,0,0.2)",
          color: "white",
          fontSize: "0.95rem",
          backdropFilter: "blur(10px)",
          cursor: "pointer",
          transition: "0.25s ease",
          opacity: active ? 1 : 0.7,
        }}
      >
        {label}
      </div>
    </NavLink>
  );
}
