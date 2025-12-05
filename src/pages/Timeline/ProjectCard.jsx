function ProjectCard({ project, onHover }) {
  const isCourse = project.kind === "coursework";

  return (
    <div
      onMouseEnter={() => onHover(project)}
      onMouseLeave={() => onHover(null)}
      style={{
        padding: "16px 18px",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        cursor: "pointer",
        transition: "background 0.2s ease",
        position: "relative",

        // ⭐ Soft gold accent bar ONLY for coursework
        ...(isCourse && {
          borderLeft: "3px solid rgba(250, 204, 120, 0.85)",
          paddingLeft: "15px",
        }),
      }}
    >
      {/* TITLE + OPTIONAL PILL (only coursework) */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "6px",
        }}
      >
        {/* Title */}
        <div
          style={{
            fontSize: "1rem",
            fontWeight: 600,
            color: "white",
            flex: 1,
          }}
        >
          {project.title}
        </div>

        {/* Only show pill for coursework */}
        {isCourse && (
          <span
            style={{
              padding: "2px 8px",
              fontSize: "0.7rem",
              borderRadius: "8px",
              whiteSpace: "nowrap",
              background: "rgba(250, 204, 120, 0.15)",
              border: "1px solid rgba(250, 204, 120, 0.35)",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            Coursework
          </span>
        )}
      </div>

      {/* Summary */}
      <div
        style={{
          fontSize: "0.85rem",
          color: "rgba(255,255,255,0.7)",
          lineHeight: 1.45,
        }}
      >
        {project.summary}
      </div>
    </div>
  );
}

export default ProjectCard;
