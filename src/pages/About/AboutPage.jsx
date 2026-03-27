import FadeIn from "../../components/ui/FadeIn.jsx";
import MagneticButton from "../../components/ui/MagneticButton.jsx";

export default function AboutPage() {
  return (
    <div style={{ padding: "122px clamp(16px, 4vw, 64px) 94px", maxWidth: "1280px", margin: "0 auto" }}>
      <div
        style={{
          maxWidth: "1040px",
          margin: "0 auto",
          borderRadius: "20px",
          border: "1px solid var(--panel-navy-border)",
          background: "var(--panel-navy-bg)",
          backdropFilter: "blur(7px)",
          boxShadow: "var(--panel-navy-shadow)",
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
          I’m Parthiv, a backend-focused developer who likes shipping real systems, not just prototypes.
          My work usually sits across APIs, data, and applied AI: recommendation engines, voice-agent workflows,
          and database-heavy services that need to stay reliable under real usage.
        </p>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "1rem",
            lineHeight: 1.75,
            marginBottom: "36px",
          }}
        >
          At 365 Retail, I worked on SQL performance and replication reliability, including query-plan tuning and indexing.
          Outside work, I build through hackathons and coursework, then keep iterating until the architecture is clean and easy to maintain.
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
          <li>Building recommendation and agent workflows with measurable outcomes.</li>
          <li>Writing backend code that is easy to reason about and scale.</li>
          <li>Improving SQL latency and reliability in data-heavy services.</li>
          <li>Keeping architecture and tradeoffs documented for faster iteration.</li>
        </ul>
      </FadeIn>

      <FadeIn delay={0.5}>
        <MagneticButton to="/contact">Message Me</MagneticButton>
      </FadeIn>
      </div>
    </div>
  );
}
