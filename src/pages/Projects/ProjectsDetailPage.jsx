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
    <div style={{ padding: "124px clamp(16px, 4vw, 64px) 96px", color: "white", maxWidth: "1120px", margin: "0 auto" }}>
      <div
        style={{
          maxWidth: "940px",
          margin: "0 auto",
          borderRadius: "20px",
          border: "1px solid rgba(255,255,255,0.14)",
          background: "rgba(7, 11, 18, 0.48)",
          backdropFilter: "blur(8px)",
          boxShadow: "0 14px 34px rgba(0,0,0,0.24)",
          padding: "30px clamp(20px, 3vw, 38px)",
        }}
      >
      <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "20px", fontWeight: 700 }}>
        {project.title}
      </h1>

      <p
        style={{
          marginTop: "-8px",
          marginBottom: "22px",
          color: "rgba(222,233,239,0.78)",
          fontSize: "0.94rem",
        }}
      >
        {project.started}
      </p>

      {/* Tech Stack Pills */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "28px" }}>
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

      <SectionHeading title="Project Summary" />
      <p style={{ fontSize: "1.03rem", opacity: 0.9, lineHeight: 1.78, marginBottom: "28px" }}>
        {project.long}
      </p>

      <div
        style={{
          display: "grid",
          gap: "14px",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          marginBottom: "24px",
        }}
      >
        <InfoCard
          title="Problem"
          body={
            project.challenge ||
            "Define a practical engineering problem with measurable value and a production-oriented implementation scope."
          }
        />
        <InfoCard
          title="Approach"
          body={
            project.approach ||
            "Implement an end-to-end solution with clear architecture boundaries and iterative validation."
          }
        />
        <InfoCard
          title="Outcome"
          body={
            project.outcome ||
            "Delivered a complete working implementation with documented tradeoffs and next-step roadmap."
          }
        />
      </div>

      <SectionHeading title="Evidence" />
      <div
        style={{
          borderRadius: "16px",
          border: "1px solid rgba(255,255,255,0.14)",
          background:
            "linear-gradient(130deg, rgba(174, 196, 208, 0.16), rgba(111, 129, 145, 0.08) 40%, rgba(8, 12, 18, 0.7) 88%)",
          minHeight: "170px",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "rgba(231,239,243,0.86)",
          fontSize: "0.95rem",
          padding: "14px",
        }}
      >
        Add a product screenshot, architecture diagram, or benchmark snapshot here.
      </div>

      {Array.isArray(project.proofPoints) && project.proofPoints.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "26px" }}>
          {project.proofPoints.map((point) => (
            <span
              key={point}
              style={{
                padding: "6px 10px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.16)",
                background: "rgba(255,255,255,0.08)",
                color: "rgba(230,238,243,0.9)",
                fontSize: "0.78rem",
              }}
            >
              {point}
            </span>
          ))}
        </div>
      )}

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
    </div>
  );
}

function SectionHeading({ title }) {
  return (
    <h2
      style={{
        margin: "0 0 10px",
        fontSize: "1.05rem",
        letterSpacing: "0.02em",
        textTransform: "uppercase",
        color: "rgba(221,233,239,0.74)",
      }}
    >
      {title}
    </h2>
  );
}

function InfoCard({ title, body }) {
  return (
    <article
      style={{
        borderRadius: "14px",
        border: "1px solid rgba(255,255,255,0.14)",
        background: "rgba(255,255,255,0.05)",
        padding: "14px",
      }}
    >
      <h3
        style={{
          margin: "0 0 8px",
          fontSize: "0.9rem",
          color: "rgba(232,239,243,0.9)",
          fontWeight: 650,
        }}
      >
        {title}
      </h3>
      <p style={{ margin: 0, color: "rgba(212,223,230,0.82)", fontSize: "0.88rem", lineHeight: 1.62 }}>
        {body}
      </p>
    </article>
  );
}
