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
  onProjectLeave,
  onProjectClick,
  lockedProjectId,
}) {
  const mainProjects = data.projects?.filter((p) => p.kind !== "coursework") ?? [];
  const courseProjects = data.projects?.filter((p) => p.kind === "coursework") ?? [];

  const groupedMainProjects = mainProjects.reduce((acc, project) => {
    const groupKey = project.kind || "other";
    if (!acc[groupKey]) acc[groupKey] = [];
    acc[groupKey].push(project);
    return acc;
  }, {});

  const projectTypeOrder = ["hackathon", "personal", "open-source", "other"];
  const sortedTypeKeys = Object.keys(groupedMainProjects).sort(
    (left, right) => projectTypeOrder.indexOf(left) - projectTypeOrder.indexOf(right)
  );

  return (
    <FadeIn delay={0.08}>
      <div
        id={`year-${data.year}`}
        onClick={onToggle}
        style={{
          background: "rgba(8, 10, 16, 0.53)",
          border: "1px solid rgba(255,255,255,0.19)",
          backdropFilter: "blur(10px)",
          borderRadius: "18px",
          padding: "20px 22px",
          marginBottom: "18px",
          cursor: "pointer",
          transition: "all 0.25s ease",
          width: "100%",
          boxShadow: "0 14px 40px rgba(0, 0, 0, 0.32)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: isActive ? "14px" : "8px",
          }}
        >
          <h2 style={{ fontSize: "2rem", color: "white", fontWeight: 700 }}>
            {data.year}
          </h2>

          <img
            src={isActive ? ChevronUp : ChevronDown}
            alt=""
            style={{ width: "18px", opacity: 0.5, pointerEvents: "none" }}
          />
        </div>

        <div style={{ marginBottom: isActive ? "14px" : 0 }}>
          <Link
            to={`/projects/${data.highlight.slug}`}
            onClick={(e) => e.stopPropagation()}
            style={{
              textDecoration: "none",
              color: "rgba(233, 242, 247, 0.96)",
              fontSize: "1.08rem",
              fontWeight: 600,
              display: "inline-block",
              paddingBottom: "6px",
              backgroundImage: "linear-gradient(to right, rgba(184, 207, 216, 0.8), rgba(168, 194, 206, 0.6))",
              backgroundSize: "100% 3px",
              backgroundPosition: "0 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            {data.highlight.title}
          </Link>

          <div
            style={{
              marginTop: "6px",
              fontSize: "0.75rem",
              background: "rgba(255,255,255,0.12)",
              borderRadius: "6px",
              padding: "2px 6px",
              opacity: 0.8,
              display: "inline-block",
            }}
          >
            Featured Project
          </div>
        </div>

        <div
          style={{
            maxHeight: isActive ? "1400px" : "0px",
            opacity: isActive ? 1 : 0,
            overflow: "hidden",
            transition: "max-height 0.45s ease, opacity 0.3s ease",
          }}
        >
          {data.experience?.length > 0 && (
            <Section title="Work Experience">
              {data.experience.map((exp) => (
                <div
                  key={`${exp.company}-${exp.period}`}
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    borderRadius: "14px",
                    padding: "14px 16px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1rem",
                      fontWeight: 650,
                      color: "white",
                      marginBottom: "4px",
                    }}
                  >
                    {exp.role} @ {exp.company}
                  </div>
                  <div
                    style={{
                      fontSize: "0.84rem",
                      color: "rgba(255,255,255,0.74)",
                      marginBottom: "10px",
                    }}
                  >
                    {exp.period}
                  </div>
                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: "18px",
                      color: "rgba(255,255,255,0.83)",
                      fontSize: "0.9rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {exp.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <div
                    style={{
                      marginTop: "10px",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "7px",
                    }}
                  >
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          padding: "5px 10px",
                          borderRadius: "11px",
                          background: "rgba(255,255,255,0.14)",
                          color: "white",
                          fontSize: "0.75rem",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </Section>
          )}

          {mainProjects.length > 0 && (
            <Section title="Projects by Type">
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {sortedTypeKeys.map((type) => (
                  <div key={type}>
                    <div
                      style={{
                        fontSize: "0.72rem",
                        letterSpacing: "0.4px",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.58)",
                        marginBottom: "4px",
                      }}
                    >
                      {formatProjectType(type)}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      {groupedMainProjects[type].map((p) => (
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
                ))}
              </div>
            </Section>
          )}

          {courseProjects.length > 0 && (
            <Section title="Course Projects">
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                {courseProjects.map((p) => (
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
            </Section>
          )}
        </div>
      </div>
    </FadeIn>
  );
}

function formatProjectType(type) {
  if (type === "hackathon") return "Hackathons";
  if (type === "personal") return "Personal Projects";
  if (type === "open-source") return "Open Source";
  return "Other";
}

function Section({ title, children }) {
  return (
    <div style={{ marginTop: "16px" }}>
      <div
        style={{
          fontSize: "0.78rem",
          opacity: 0.6,
          textTransform: "uppercase",
          letterSpacing: "0.5px",
          marginBottom: "8px",
        }}
      >
        {title}
      </div>
      {children}
    </div>
  );
}
