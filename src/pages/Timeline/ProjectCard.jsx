export default function ProjectCard({
  project,
  isLocked,
  onHover,
  onLeave,
  onClick,
}) {
  // simple gradient palette based on id hash or title length
  const gradients = [
    "linear-gradient(135deg, #78f3ff, #9b7fff)",
    "linear-gradient(135deg, #ff9af0, #7b7bff)",
    "linear-gradient(135deg, #7bffb4, #4dd5ff)",
    "linear-gradient(135deg, #ffcf71, #f76b1c)",
  ];
  const index =
    Math.abs(project.title.split("").reduce((a, c) => a + c.charCodeAt(0), 0)) %
    gradients.length;
  const bg = gradients[index];

  return (
    <div
      onMouseEnter={() => onHover(project)}
      onMouseLeave={onLeave}
      onClick={(e) => {
        e.stopPropagation();
        onClick(project);
      }}
      style={{
        display: "flex",
        gap: "12px",
        alignItems: "center",
        padding: "10px 12px",
        borderRadius: "14px",
        background: isLocked
          ? "rgba(255,255,255,0.14)"
          : "rgba(0,0,0,0.28)",
        border: isLocked
          ? "1px solid rgba(255,255,255,0.35)"
          : "1px solid rgba(255,255,255,0.12)",
        cursor: "pointer",
        transition: "background 0.2s ease, border-color 0.2s ease, transform 0.15s ease",
        transform: isLocked ? "translateY(-1px)" : "translateY(0)",
      }}
    >
      {/* Left gradient block */}
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "14px",
          backgroundImage: bg,
          boxShadow: "0 0 25px rgba(0,0,0,0.35)",
          flexShrink: 0,
        }}
      />

      <div style={{ flex: 1 }}>
        <div
          style={{
            color: "white",
            fontSize: "0.98rem",
            fontWeight: 600,
            marginBottom: "4px",
          }}
        >
          {project.title}
        </div>
        <div
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "0.85rem",
            marginBottom: "4px",
          }}
        >
          {project.summary}
        </div>
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {project.tags.map((tag) => (
              <span
                  key={tag}
                  style={{
                      padding: "4px 10px",
                      borderRadius: "20px",
                      fontSize: "0.72rem",
                      background: bg, // same gradient as project block
                      color: "white",
                      opacity: 0.85,
                      boxShadow: "0 0 10px rgba(0,0,0,0.25)",
                      whiteSpace: "nowrap",
                  }}
              >
                  {tag}
              </span>
          ))}
        </div>
      </div>
    </div>
  );
}
