import FadeIn from "../../components/ui/FadeIn.jsx";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard.jsx";
import ChevronUp from "../../assets/data/chevron-up.svg";
import ChevronDown from "../../assets/data/chevron-down.svg";

export default function YearSection({
  data,
  isActive,
  onToggle,
  onProjectHover,
  onProjectClick,
  lockedProjectId,
}) {
  // Split main vs coursework
  const mainProjects =
    data.projects?.filter((p) => p.kind !== "coursework") ?? [];

  const courseProjects =
    data.projects?.filter((p) => p.kind === "coursework") ?? [];

  return (
    <FadeIn delay={0.1}>
      <div
        id={`year-${data.year}`}
        onClick={onToggle}
        style={{
          background: "rgba(8, 10, 16, 0.5)",
          border: "1px solid rgba(255,255,255,0.18)",
          backdropFilter: "blur(12px)",
          borderRadius: "18px",
          padding: "20px 24px",
          marginBottom: "26px",
          cursor: "pointer",
          transition: "all 0.25s ease",
          width: "100%",
          boxShadow: "0 14px 44px rgba(0, 0, 0, 0.35)",
        }}
      >
        {/* Header row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
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

          <img
            src={isActive ? ChevronUp : ChevronDown}
            alt=""
            style={{
              width: "18px",
              opacity: 0.4,
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Highlight project */}
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
                "linear-gradient(to right, #78f3ff, #80d0ff)",
              backgroundSize: "100% 3px",
              backgroundPosition: "0 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            {data.highlight.title}
          </Link>

          {/* Featured tag */}
          <div
            style={{
              marginTop: "6px",
              fontSize: "0.75rem",
              background: "rgba(255,255,255,0.12)",
              borderRadius: "6px",
              padding: "2px 6px",
              opacity: 0.75,
              display: "inline-block",
            }}
          >
            Featured Project
          </div>
        </div>

        {/* Collapsible content */}
        <div
          style={{
            maxHeight: isActive ? "900px" : "0px",
            opacity: isActive ? 1 : 0,
            overflow: "hidden",
            transition: "max-height 0.45s ease, opacity 0.35s ease",
            maskImage: isActive
              ? "none"
              : "linear-gradient(to bottom, black 60%, transparent 100%)",
            WebkitMaskImage: isActive
              ? "none"
              : "linear-gradient(to bottom, black 60%, transparent 100%)",
          }}
        >
          {/* MAIN PROJECTS */}
          {mainProjects.length > 0 && (
            <div style={{ marginTop: "10px", marginBottom: "10px" }}>
              <div
                style={{
                  fontSize: "0.78rem",
                  opacity: 0.55,
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                Projects
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                {mainProjects.map((p) => (
                  <ProjectCard
                    key={p.id}
                    project={p}
                    isLocked={lockedProjectId === p.id}
                    onHover={onProjectHover}
                    onClick={onProjectClick}
                  />
                ))}
              </div>
            </div>
          )}

          {/* COURSE PROJECTS */}
          {courseProjects.length > 0 && (
            <div style={{ marginTop: "20px", marginBottom: "10px" }}>
              {/* separation line */}
              <div
                style={{
                  height: "1px",
                  background:
                    "linear-gradient(to right, transparent, rgba(255,255,255,0.25), transparent)",
                  marginBottom: "12px",
                }}
              />

              <div
                style={{
                  fontSize: "0.78rem",
                  opacity: 0.55,
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                Course Projects
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                {courseProjects.map((p) => (
                  <ProjectCard
                    key={p.id}
                    project={p}
                    isLocked={lockedProjectId === p.id}
                    onHover={onProjectHover}
                    onClick={onProjectClick}
                  />
                ))}
              </div>
            </div>
          )}

          {/* EXPERIENCE */}
          {data.experience?.length > 0 && (
            <div style={{ marginBottom: "20px", marginTop: "22px" }}>
              <div
                style={{
                  fontSize: "0.78rem",
                  opacity: 0.55,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  marginBottom: "6px",
                }}
              >
                Work Experience
              </div>

              <div
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  borderRadius: "16px",
                  padding: "16px 20px",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "white",
                    marginBottom: "6px",
                  }}
                >
                  Database Intern @ 365 Retail Markets
                </div>

                <div
                  style={{
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.75)",
                    marginBottom: "12px",
                  }}
                >
                  May – Aug 2025
                </div>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  {[
                    "SQL tuning",
                    "Replication",
                    "Optimization",
                    "Plan Cache",
                    "Execution Plans",
                  ].map((skill) => (
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

          {/* SKILLS */}
          {data.skills?.length > 0 && (
            <div style={{ marginTop: "16px" }}>
              <div
                style={{
                  fontSize: "0.78rem",
                  opacity: 0.55,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  marginBottom: "8px",
                }}
              >
                Skills Gained
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
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

      {/* Divider between years */}
      <div
        style={{
          height: "1px",
          width: "100%",
          background:
            "linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)",
          margin: "20px 0",
        }}
      />
    </FadeIn>
  );
}
