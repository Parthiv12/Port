import FadeIn from "../../components/ui/FadeIn.jsx";
import { Link } from "react-router-dom";
import { projectsCatalog } from "../../data/projects.js";

export default function ProjectGrid() {
  const featuredSlugs = ["tracelens", "speechmatch"];
  
  const featured = projectsCatalog.filter(p => featuredSlugs.includes(p.slug));
  const core = projectsCatalog.filter(p => !featuredSlugs.includes(p.slug));

  return (
    <div style={{ padding: "122px clamp(16px, 4vw, 64px) 100px", width: "100%", maxWidth: "1280px", margin: "0 auto", fontFamily: "system-ui, sans-serif" }}>
      {/* Header */}
      <FadeIn>
        <h1
          style={{
            color: "white",
            fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
            fontWeight: 700,
            marginBottom: "16px",
            letterSpacing: "-0.02em"
          }}
        >
          Selected Work
        </h1>

        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            maxWidth: "680px",
            marginBottom: "80px",
            lineHeight: 1.6,
            fontSize: "1.15rem",
          }}
        >
          Core projects spanning distributed systems, machine learning, and secure architecture.
        </p>
      </FadeIn>

      {/* 1. Featured Projects */}
      <div style={{ marginBottom: "80px" }}>
        <h2 style={sectionLabelStyle}>Featured Projects</h2>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "40px"
        }}>
          {featured.map((p, index) => (
            <FadeIn delay={index * 0.1} key={p.slug}>
              <Link to={`/projects/${p.slug}`} style={featuredCardStyle}>
                <div style={{ marginBottom: "20px", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                   <span style={yearStyle}>{p.year}</span>
                   <span style={viewProjectStyle}>View Project →</span>
                </div>
                
                <h3 style={{ fontSize: "2rem", fontWeight: 600, color: "white", marginBottom: "16px", letterSpacing: "-0.01em" }}>
                  {p.title}
                </h3>
                
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", lineHeight: 1.6, marginBottom: "32px", maxWidth: "80%" }}>
                  {p.description}
                </p>
                
                <div style={techLineStyle}>
                  {p.tags.join(" · ")}
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* 2. Core Projects Grid */}
      <div>
        <h2 style={sectionLabelStyle}>Core Projects</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "24px"
        }}>
          {core.map((p, index) => (
            <FadeIn delay={index * 0.05} key={p.slug}>
              <Link to={`/projects/${p.slug}`} style={coreCardStyle}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                   <span style={yearStyle}>{p.year}</span>
                   <span style={viewProjectStyle}>→</span>
                </div>
                
                <h4 style={{ fontSize: "1.25rem", fontWeight: 600, color: "white", marginBottom: "12px" }}>
                  {p.title}
                </h4>
                
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.95rem", lineHeight: 1.5, marginBottom: "24px", flexGrow: 1 }}>
                  {p.description}
                </p>
                
                <div style={{...techLineStyle, fontSize: "0.85rem", marginTop: "auto"}}>
                  {p.tags.join(" · ")}
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}

const sectionLabelStyle = {
  fontSize: "0.9rem",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  color: "rgba(255,255,255,0.4)",
  marginBottom: "32px",
  fontWeight: 600,
};

const yearStyle = {
  fontSize: "0.9rem", color: "rgba(255,255,255,0.5)"
};

const viewProjectStyle = {
  fontSize: "0.9rem", color: "rgba(255,255,255,0.5)",
  transition: "transform 0.2s"
};

const techLineStyle = {
  color: "rgba(255,255,255,0.5)",
  fontSize: "0.95rem",
  fontWeight: 500,
  paddingTop: "20px",
  borderTop: "1px solid rgba(255,255,255,0.06)"
};

const featuredCardStyle = {
  display: "block",
  textDecoration: "none",
  background: "rgba(255,255,255,0.02)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "16px",
  padding: "40px",
  transition: "all 0.3s ease",
};

const coreCardStyle = {
  display: "flex",
  flexDirection: "column",
  textDecoration: "none",
  background: "rgba(255,255,255,0.01)",
  border: "1px solid rgba(255,255,255,0.05)",
  borderRadius: "12px",
  padding: "24px",
  height: "100%",
  transition: "all 0.2s ease"
};
