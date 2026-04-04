import { useParams, Link } from "react-router-dom";
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
        <Link to="/projects" style={{ color: "#fff", marginTop: "20px", display: "inline-block" }}>← Back to Projects</Link>
      </div>
    );

  return (
    <div style={{ padding: "124px clamp(20px, 5vw, 64px) 96px", color: "white", maxWidth: "860px", margin: "0 auto", fontFamily: "system-ui, sans-serif" }}>
      
      {/* 1. Hero */}
      <header style={{ marginBottom: "64px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", fontSize: "0.9rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          <span>{project.year}</span>
          <span>•</span>
          <span>Project</span>
        </div>
        
        <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", marginBottom: "24px", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
          {project.title}
        </h1>
        
        <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginBottom: "32px", maxWidth: "760px", fontWeight: 400 }}>
          {project.long || project.description}
        </p>

        {/* Links */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
          {project.links?.demo && (
            <a href={project.links.demo} target="_blank" rel="noopener noreferrer" style={linkStyle}>
              Live Demo ↗
            </a>
          )}
          {project.links?.github && (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer" style={linkStyle}>
              GitHub Repo ↗
            </a>
          )}
          {project.links?.docs && (
            <a href={project.links.docs} target="_blank" rel="noopener noreferrer" style={linkStyle}>
              Documentation ↗
            </a>
          )}
        </div>
      </header>

      <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.1)", marginBottom: "64px" }} />

      {/* 2. Problem */}
      {(project.challenge) && (
        <section style={sectionStyle}>
          <SectionHeading>The Problem</SectionHeading>
          <p style={bodyStyle}>{project.challenge}</p>
        </section>
      )}

      {/* 3. Approach */}
      {(project.approach) && (
        <section style={sectionStyle}>
          <SectionHeading>Engineering Approach</SectionHeading>
          <p style={bodyStyle}>{project.approach}</p>
        </section>
      )}

      {/* 4. Key Features */}
      {project.proofPoints && project.proofPoints.length > 0 && (
        <section style={sectionStyle}>
          <SectionHeading>Key Features</SectionHeading>
          <ul style={{ paddingLeft: "20px", margin: 0, color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", lineHeight: 1.8 }}>
            {project.proofPoints.map((point) => (
              <li key={point} style={{ marginBottom: "8px" }}>{point}</li>
            ))}
          </ul>
        </section>
      )}

      {/* 5. Tech Stack */}
      {project.tags && project.tags.length > 0 && (
        <section style={sectionStyle}>
          <SectionHeading>Tech Stack</SectionHeading>
          <div style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.9)", fontWeight: 500 }}>
            {project.tags.join("  ·  ")}
          </div>
        </section>
      )}

      {/* 6. What I Learned / Outcome */}
      {(project.outcome) && (
        <section style={sectionStyle}>
          <SectionHeading>Outcome & Learnings</SectionHeading>
          <p style={bodyStyle}>{project.outcome}</p>
        </section>
      )}

      <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.1)", margin: "80px 0 40px" }} />

      {/* Back Button */}
      <Link to="/projects" style={{
        display: "inline-flex",
        alignItems: "center",
        color: "rgba(255,255,255,0.6)",
        textDecoration: "none",
        fontSize: "1rem",
        fontWeight: 500,
        transition: "color 0.2s"
      }}
      onMouseEnter={(e) => e.target.style.color = "white"}
      onMouseLeave={(e) => e.target.style.color = "rgba(255,255,255,0.6)"}
      >
        ← Back to Projects
      </Link>
    </div>
  );
}

const sectionStyle = {
  marginBottom: "56px"
};

const bodyStyle = {
  fontSize: "1.15rem",
  color: "rgba(255,255,255,0.8)",
  lineHeight: 1.8,
  margin: 0,
  fontWeight: 400
};

function SectionHeading({ children }) {
  return (
    <h2 style={{
      fontSize: "1.5rem",
      fontWeight: 600,
      color: "white",
      marginBottom: "16px",
      letterSpacing: "-0.02em"
    }}>
      {children}
    </h2>
  );
}

const linkStyle = {
  display: "inline-block",
  padding: "10px 20px",
  borderRadius: "8px",
  border: "1px solid rgba(255,255,255,0.15)",
  color: "white",
  textDecoration: "none",
  fontSize: "0.95rem",
  fontWeight: 500,
  background: "rgba(255,255,255,0.03)",
  transition: "background 0.2s"
};
