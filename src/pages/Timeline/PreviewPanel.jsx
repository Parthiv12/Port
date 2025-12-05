import FadeIn from "../../components/ui/FadeIn.jsx";

export default function PreviewPanel({ project, year }) {
  if (!project) return null;

  const isCourse = project.kind === "coursework";

  // Generate a simple gradient background based on title hash
  const hash = project.title
    .split("")
    .reduce((acc, c) => acc + c.charCodeAt(0), 0);

  const gradientColors = [
    ["#78f3ff", "#9d7eff"],
    ["#ffb8ff", "#7ea4ff"],
    ["#7dffdb", "#4dc7ff"],
    ["#ffcf71", "#f76b1c"],
    ["#b471ff", "#71eaff"],
  ];

  const colors = gradientColors[hash % gradientColors.length];

  return (
    <div
      style={{
        borderRadius: "18px",
        padding: "16px 20px 20px",
        background: "rgba(0,0,0,0.45)",
        border: isCourse
          ? "1px solid rgba(250, 204, 120, 0.45)" // gold border
          : "1px solid rgba(255,255,255,0.16)",
        backdropFilter: "blur(12px)",
        minHeight: "240px",

        // ⭐ Soft glow for coursework preview ONLY
        ...(isCourse && {
          boxShadow: "0 0 18px rgba(250, 204, 120, 0.22)",
        }),
      }}
    >
      {/* Header */}
      <div
        style={{
          fontSize: "0.85rem",
          color: "rgba(255,255,255,0.6)",
          marginBottom: "4px",
        }}
      >
        Preview · {year ?? ""}
      </div>

      {/* Title + Coursework pill */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            fontSize: "1.05rem",
            color: "white",
            fontWeight: 600,
          }}
        >
          {project.title}
        </div>

        {/* coursework pill only */}
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

      {/* Visual Preview Card */}
      <div
        style={{
          borderRadius: "14px",
          overflow: "hidden",
          position: "relative",
          height: "150px",
          background: `
            radial-gradient(circle at 20% 20%, ${colors[0]}, transparent 60%),
            radial-gradient(circle at bottom right, ${colors[1]}, transparent 70%)
          `,
          marginBottom: "18px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom right, rgba(0,0,0,0.25), rgba(0,0,0,0.65))",
            color: "rgba(255,255,255,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 14px",
            textAlign: "center",
            fontSize: "0.85rem",
          }}
        >
          Upcoming preview — video / screenshot / hackathon photo here.
        </div>
      </div>

      {/* Tech Stack Pills */}
      {project.techStack && (
        <div style={{ marginTop: "6px" }}>
          <div
            style={{
              fontSize: "0.78rem",
              color: "rgba(255,255,255,0.65)",
              marginBottom: "6px",
              fontWeight: 500,
              letterSpacing: "0.5px",
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
