import { Link } from "react-router-dom";

export default function PreviewPanel({ project, year }) {
  if (!project) return null;

  const isCourse = project.kind === "coursework";
  const hash = project.title
    .split("")
    .reduce((acc, c) => acc + c.charCodeAt(0), 0);

  const gradientColors = [
    ["#8ba4b0", "#5f7687"],
    ["#9f8fae", "#677c95"],
    ["#7f9ea1", "#5e728a"],
    ["#8e8778", "#756a60"],
    ["#8f99ad", "#6f8298"],
  ];

  const colors = gradientColors[hash % gradientColors.length];

  return (
    <div
      style={{
        borderRadius: "18px",
        padding: "18px 22px",
        background: "rgba(6, 8, 12, 0.62)",
        border: isCourse
          ? "1px solid rgba(250, 204, 120, 0.45)"
          : "1px solid rgba(255,255,255,0.18)",
        backdropFilter: "blur(12px)",
        minHeight: "270px",
        transition: "all 0.25s ease",
        ...(isCourse && {
          boxShadow: "0 0 22px rgba(250, 204, 120, 0.22)",
        }),
      }}
    >
      <div
        style={{
          fontSize: "0.8rem",
          color: "rgba(255,255,255,0.6)",
          marginBottom: "6px",
          letterSpacing: "0.4px",
        }}
      >
        Highlight Preview · {year}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "12px",
        }}
      >
        <div
          style={{
            fontSize: "1.15rem",
            color: "white",
            fontWeight: 700,
          }}
        >
          {project.title}
        </div>

        {isCourse && (
          <span
            style={{
              padding: "3px 10px",
              fontSize: "0.75rem",
              borderRadius: "10px",
              background: "rgba(250, 204, 120, 0.15)",
              border: "1px solid rgba(250, 204, 120, 0.35)",
              color: "rgba(255,255,255,0.9)",
              whiteSpace: "nowrap",
            }}
          >
            Coursework
          </span>
        )}
      </div>

      <Link
        to={`/projects/${project.slug}`}
        style={{
          display: "block",
          textDecoration: "none",
          borderRadius: "14px",
          overflow: "hidden",
          height: "168px",
          marginBottom: "20px",
          background: `
            linear-gradient(120deg, ${colors[0]} 0%, transparent 40%),
            linear-gradient(240deg, ${colors[1]} 0%, transparent 45%)
          `,
          position: "relative",
          border: "1px solid rgba(255,255,255,0.16)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 14px",
            textAlign: "center",
            fontSize: "0.85rem",
            color: "rgba(255,255,255,0.85)",
          }}
        >
          Open project page →
        </div>
      </Link>

      <div style={{ marginTop: "-8px", marginBottom: "14px" }}>
        <Link
          to={`/projects/${project.slug}`}
          style={{
            color: "rgba(224,236,242,0.92)",
            textDecoration: "none",
            fontSize: "0.88rem",
            fontWeight: 600,
          }}
        >
          Open project page
        </Link>
      </div>

      {project.techStack && (
        <div>
          <div
            style={{
              fontSize: "0.78rem",
              color: "rgba(255,255,255,0.65)",
              marginBottom: "6px",
            }}
          >
            Tech Stack
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            {project.techStack.map((tech) => (
              <div
                key={tech.title}
                style={{
                  padding: "6px 12px",
                  borderRadius: "12px",
                  background: "rgba(255,255,255,0.14)",
                  backdropFilter: "blur(10px)",
                  color: "white",
                  fontSize: "0.8rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span style={{ fontSize: "1rem", display: "flex" }}>
                  {tech.node && <tech.node />}
                </span>
                {tech.title}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
