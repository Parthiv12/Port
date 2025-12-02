import FadeIn from "../../components/ui/FadeIn.jsx";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard.jsx";

export default function YearSection({
  data,
  isActive,
  onToggle,
  onProjectHover,
  onProjectLeave,
  onProjectClick,
  lockedProjectId,
}) {
  return (
    <FadeIn delay={0.1}>
      <div
        id={`year-${data.year}`}
        style={{
          background: "rgba(255, 255, 255, 0.07)",
          border: "1px solid rgba(255,255,255,0.15)",
          backdropFilter: "blur(12px)",
          borderRadius: "18px",
          padding: "20px 24px",
          marginBottom: "32px",
          cursor: "pointer",
          transition: "border-color 0.25s ease, background 0.25s ease",
          maxWidth: "720px",
        }}
        onClick={onToggle}
      >
        {/* Header row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: isActive ? "14px" : "6px",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              color: "white",
              fontWeight: 700,
            }}
          >
            {data.year}
          </h2>

          <span
            style={{
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.6)",
              userSelect: "none",
            }}
          >
            {isActive ? "▲" : "▼"}
          </span>
        </div>

        {/* Highlight project – gradient underline */}
        <div style={{ marginBottom: isActive ? "16px" : 0 }}>
          <Link
            to={`/projects/${data.highlight.slug}`}
            onClick={(e) => e.stopPropagation()}
            style={{
              textDecoration: "none",
              color: "#e9fbff",
              fontSize: "1.1rem",
              fontWeight: 600,
              display: "inline-block",
              paddingBottom: "6px",
              backgroundImage:
                "linear-gradient(to right, #78f3ff, #9d7eff)",
              backgroundSize: "100% 3px",
              backgroundPosition: "0 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            {data.highlight.title}
          </Link>
        </div>

        {/* Collapsible content */}
        <div
          style={{
            maxHeight: isActive ? "900px" : "0px",
            opacity: isActive ? 1 : 0,
            overflow: "hidden",
            transition: "max-height 0.45s ease, opacity 0.35s ease",
          }}
        >
          {/* Projects */}
          <div style={{ marginTop: "10px", marginBottom: "16px" }}>
            <h3
              style={{
                fontSize: "1.05rem",
                color: "rgba(255,255,255,0.9)",
                marginBottom: "10px",
              }}
            >
              Projects
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {data.projects.map((p) => (
                <ProjectCard
                  key={p.id}
                  project={p}
                  isLocked={lockedProjectId === p.id}
                  onHover={onProjectHover}
                  onLeave={onProjectLeave}
                  onClick={onProjectClick}
                />
              ))}
            </div>
          </div>

          {/* Experience */}
          {data.experience?.length > 0 && (
            <div style={{ marginBottom: "20px" }}>
              <h3 style={{
                fontSize: "1.1rem",
                color: "rgba(255,255,255,0.9)",
                marginBottom: "10px",
                fontWeight: 600,
              }}>
                Work Experience
              </h3>

              <div
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "16px",
                  padding: "16px 20px",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div style={{ fontSize: "1rem", fontWeight: 600, color: "white", marginBottom: "6px" }}>
                  Database Intern @ 365 Retail Markets
                </div>

                <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.75)", marginBottom: "12px" }}>
                  May – Aug 2025
                </div>

                {/* Skill bubbles inside experience card */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {["SQL tuning", "Replication", "Optimization", "Plan Cache", "Execution Plans"].map(skill => (
                    <span
                      key={skill}
                      style={{
                        padding: "6px 12px",
                        borderRadius: "12px",
                        background: "rgba(255,255,255,0.15)",
                        color: "white",
                        fontSize: "0.78rem",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
)}

          {/* Skills gained */}
          {data.skills?.length > 0 && (
            <div style={{ marginTop: "4px" }}>
              <h3
                style={{
                  fontSize: "1.05rem",
                  color: "rgba(255,255,255,0.9)",
                  marginBottom: "6px",
                }}
              >
                Skills Gained
              </h3>
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                marginTop: "10px"
              }}>
                {data.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: "8px 14px",
                      background: "rgba(255,255,255,0.14)",
                      borderRadius: "18px",
                      color: "white",
                      fontSize: "0.85rem",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          )}
        </div>
      </div>
    </FadeIn>
  );
}
