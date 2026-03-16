import FadeIn from "../../components/ui/FadeIn.jsx";
import ProjectCard from "../../components/ui/ProjectCard.jsx";
import { projectsCatalog } from "../../data/projects.js";

export default function ProjectGrid() {
  const projects = [...projectsCatalog].sort((a, b) => b.year.localeCompare(a.year));

  return (
    <div style={{ padding: "122px clamp(16px, 4vw, 64px) 100px", width: "100%", maxWidth: "1600px", margin: "0 auto" }}>
      {/* Header */}
      <FadeIn>
        <h1
          style={{
            color: "white",
            fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
            fontWeight: 700,
            marginBottom: "12px",
          }}
        >
          Projects
        </h1>

        <p
          style={{
            color: "rgba(255,255,255,0.74)",
            maxWidth: "760px",
            marginBottom: "36px",
            lineHeight: 1.75,
            fontSize: "1.08rem",
          }}
        >
          Core engineering work across AI/ML, backend systems, security, and hackathon builds — open any project for full implementation details.
        </p>
      </FadeIn>

      {/* Project Grid */}
      <div
        style={{
          marginTop: "12px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "24px",
        }}
      >
        {projects.map((p) => (
          <ProjectCard
            key={p.slug}
            title={p.title}
            description={p.description}
            tags={p.tags}
            slug={p.slug}
            started={p.started}
          />
        ))}
      </div>
    </div>
  );
}
