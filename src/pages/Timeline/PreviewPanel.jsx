export default function PreviewPanel({ project, year }) {
  if (!project) return null;

  const isCourse = project.kind === "coursework";
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
        Preview - {year}
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

      <div
        style={{
          borderRadius: "14px",
          overflow: "hidden",
          height: "168px",
          marginBottom: "20px",
          background: `
            linear-gradient(120deg, ${colors[0]} 0%, transparent 40%),
            linear-gradient(240deg, ${colors[1]} 0%, transparent 45%)
          `,
          position: "relative",
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
          Add project screenshot or demo preview here.
        </div>
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
