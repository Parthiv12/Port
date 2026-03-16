import { useParams } from "react-router-dom";
import { projectBySlug } from "../../data/projects.js";

export default function ProjectDetailPage() {
  const { slug } = useParams();

  const project = projectBySlug[slug];

  if (!project)
    return (
      <div style={{ color: "white", paddingTop: "160px", textAlign: "center" }}>
        <h1>Project Not Found</h1>
        <p style={{ marginTop: "20px", opacity: 0.7 }}>
          The project you're looking for doesn't exist.
        </p>
      </div>
    );

  return (
    <div style={{ padding: "140px 5%", color: "white", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "20px", fontWeight: 700 }}>
        {project.title}
      </h1>

      {/* Tech Stack Pills */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "40px" }}>
        {project.tags.map((t) => (
          <span
            key={t}
            style={{
              padding: "6px 14px",
              background: "rgba(188, 208, 215, 0.14)",
              border: "1px solid rgba(188, 208, 215, 0.26)",
              borderRadius: "20px",
              fontSize: "0.85rem",
              color: "rgba(227, 238, 243, 0.94)",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Long Description */}
      <p style={{ fontSize: "1.1rem", opacity: 0.85, lineHeight: 1.8, marginBottom: "40px" }}>
        {project.long}
      </p>

      {/* External Links */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "28px" }}>
        {project.links?.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "10px 16px",
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.24)",
              color: "white",
              textDecoration: "none",
              background: "rgba(255,255,255,0.08)",
            }}
          >
            Live Demo
          </a>
        )}
        {project.links?.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "10px 16px",
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.24)",
              color: "white",
              textDecoration: "none",
              background: "rgba(255,255,255,0.08)",
            }}
          >
            GitHub Repo
          </a>
        )}
        {project.links?.docs && (
          <a
            href={project.links.docs}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "10px 16px",
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.24)",
              color: "white",
              textDecoration: "none",
              background: "rgba(255,255,255,0.08)",
            }}
          >
            Documentation
          </a>
        )}
      </div>

      {/* Back Button */}
      <a
        href="/projects"
        style={{
          display: "inline-block",
          padding: "12px 24px",
          background: "rgba(255, 255, 255, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "8px",
          color: "white",
          textDecoration: "none",
          transition: "all 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.target.style.background = "rgba(255, 255, 255, 0.15)";
          e.target.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.target.style.background = "rgba(255, 255, 255, 0.1)";
          e.target.style.transform = "translateY(0)";
        }}
      >
        ← Back to Projects
      </a>
    </div>
  );
}
