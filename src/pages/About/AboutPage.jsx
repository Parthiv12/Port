import FadeIn from "../../components/ui/FadeIn.jsx";
import MagneticButton from "../../components/ui/MagneticButton.jsx";

export default function AboutPage() {
  return (
    <div style={{ padding: "122px clamp(16px, 4vw, 64px) 94px", maxWidth: "1120px", margin: "0 auto" }}>
      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          borderRadius: "20px",
          border: "1px solid rgba(255,255,255,0.12)",
          background: "rgba(7, 11, 18, 0.42)",
          backdropFilter: "blur(7px)",
          boxShadow: "0 12px 30px rgba(0,0,0,0.22)",
          padding: "34px clamp(20px, 3vw, 36px)",
        }}
      >
      <FadeIn>
        <h1
          style={{
            color: "white",
            fontSize: "clamp(2.1rem, 4vw, 3rem)",
            fontWeight: 700,
            marginBottom: "32px",
          }}
        >
          About Me
        </h1>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: "1.08rem",
            lineHeight: 1.75,
            marginBottom: "40px",
          }}
        >
          I’m Parthiv, a software engineer focused on practical AI and backend systems.
          Most of my work sits at the intersection of product and infrastructure:
          recommendation engines, voice-agent workflows, and performance-focused data systems.
          I care about clean architecture, reliable APIs, and interfaces that are straightforward to use.
        </p>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "1rem",
            lineHeight: 1.75,
            marginBottom: "36px",
          }}
        >
          Recent work includes SQL performance tuning in production environments,
          hackathon projects that shipped quickly under constraints, and applied ML projects
          where model quality and UX both mattered.
        </p>
      </FadeIn>

      <FadeIn delay={0.4}>
        <h2
          style={{
            color: "white",
            fontSize: "2rem",
            fontWeight: 600,
            marginBottom: "10px",
          }}
        >
          What I’m focused on now
        </h2>

        <ul
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: "1.03rem",
            lineHeight: 1.72,
            marginBottom: "40px",
            marginLeft: "20px",
          }}
        >
          <li>Building AI features that are useful in real workflows, not demo-only.</li>
          <li>Designing backend services that stay maintainable as complexity grows.</li>
          <li>Improving query performance and reliability in SQL-heavy systems.</li>
          <li>Documenting decisions so projects are easier to extend and review.</li>
        </ul>
      </FadeIn>

      <FadeIn delay={0.5}>
        <MagneticButton to="/contact">Let's Connect</MagneticButton>
      </FadeIn>
      </div>
    </div>
  );
}
