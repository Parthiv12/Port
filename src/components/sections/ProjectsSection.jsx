import { motion } from "framer-motion";
import SectionShell from "../layout/SectionShell.jsx";
import { projectsCatalog } from "../../data/projects.js";

export default function ProjectsSection() {
  // Let's divide projects into Featured (first two) and Secondary (next tier)
  const featured = projectsCatalog.slice(0, 2);
  const secondary = projectsCatalog.slice(2, 6); // Just showing top 6 on the home page maybe, or all?
  const rests = projectsCatalog.slice(6); // To hide or show differently if we want, letting all be secondary for now

  return (
    <SectionShell
      id="projects"
      eyebrow="Selected Work"
      title="Projects built around real systems, not just demos."
      description="A mix of AI, backend engineering, observability, and full-stack systems with an emphasis on architecture and execution."
      background="none"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
        
        {/* Featured Asymmetric Block */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "32px",
        }}>
          {featured.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "40px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "360px",
                boxShadow: "0 10px 40px -10px rgba(0,0,0,0.5)"
              }}
            >
              <div>
                <div style={{
                  fontSize: "0.8rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.4)",
                  marginBottom: "16px"
                }}>Featured Project • {project.year}</div>
                <h3 style={{ fontSize: "2rem", fontWeight: 600, color: "rgba(255,255,255,0.95)", marginBottom: "16px", lineHeight: 1.2 }}>
                  {project.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.05rem", lineHeight: 1.6, marginBottom: "24px" }}>
                  {project.long || project.description}
                </p>
              </div>
              <div style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "0.85rem",
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                paddingTop: "20px"
              }}>
                {project.tags.join(" • ")}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Secondary Editorial Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "24px",
        }}>
          {secondary.concat(rests).map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              style={{
                padding: "28px",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <h4 style={{ fontSize: "1.3rem", fontWeight: 500, color: "rgba(255,255,255,0.9)", marginBottom: "12px", lineHeight: 1.3 }}>
                {project.title}
              </h4>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.5, marginBottom: "20px", flexGrow: 1 }}>
                {project.description}
              </p>
              <div style={{
                color: "rgba(255,255,255,0.4)",
                fontSize: "0.8rem",
              }}>
                {project.tags.join(" • ")}
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </SectionShell>
  );
}
