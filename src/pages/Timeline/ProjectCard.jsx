function ProjectCard({ project, onHover, onLeave, onClick, isLocked }) {
  const isCourse = project.kind === "coursework";

  return (
    <div
      onMouseEnter={() => onHover(project)}
      onMouseLeave={() => onLeave?.()}
      onClick={() => onClick(project)}
      style={{
        padding: "14px 18px",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        cursor: "pointer",
        transition: "all 0.18s ease",
        position: "relative",
        background: isLocked ? "rgba(255,255,255,0.08)" : "transparent",
        ...(isCourse && {
          boxShadow: "inset 3px 0 0 rgba(250, 204, 120, 0.85)",
        }),
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "8px",
          marginBottom: "4px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px", flex: 1 }}>
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

          {project.started && (
            <span
              style={{
                fontSize: "0.68rem",
                color: "rgba(255,255,255,0.72)",
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(255,255,255,0.06)",
                borderRadius: "999px",
                padding: "2px 7px",
                whiteSpace: "nowrap",
              }}
            >
              {project.started}
            </span>
          )}
        </div>

        {isCourse && (
          <span
            style={{
              padding: "2px 8px",
              fontSize: "0.7rem",
              borderRadius: "8px",
              background: "rgba(250, 204, 120, 0.15)",
              border: "1px solid rgba(250, 204, 120, 0.35)",
              color: "rgba(255,255,255,0.85)",
              whiteSpace: "nowrap",
            }}
          >
            Coursework
          </span>
        )}
      </div>

      <div
        style={{
          fontSize: "0.85rem",
          color: "rgba(255,255,255,0.72)",
          lineHeight: 1.4,
        }}
      >
        {project.summary}
      </div>
    </div>
  );
}

export default ProjectCard;
