function ProjectCard({ project, onHover }) {
  return (
    <div
      onMouseEnter={() => onHover(project)}
      onMouseLeave={() => onHover(null)}
      style={{
        padding: "16px 18px",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        cursor: "pointer",
        transition: "background 0.2s ease",
      }}
    >
      <div
        style={{
          fontSize: "1rem",
          fontWeight: 600,
          color: "white",
          marginBottom: "4px",
        }}
      >
        {project.title}
      </div>

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