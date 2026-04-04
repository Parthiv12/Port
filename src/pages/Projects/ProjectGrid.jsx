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
            marginBottom: "16px",
          }}
        >
          Projects
        </h1>

        <p
          style={{
            color: "rgba(255,255,255,0.74)",
            maxWidth: "760px",
            marginBottom: "56px",
            lineHeight: 1.75,
            fontSize: "1.08rem",
          }}
        >
          Core work across AI/ML, backend, and security. Open any project for the full breakdown.
        </p>
      </FadeIn>

      {/* Project Grid */}
      <div
        style={{
          marginTop: "12px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "48px",
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
            proofPoints={p.proofPoints}
          />
        ))}
      </div>
    </div>
  );
}
