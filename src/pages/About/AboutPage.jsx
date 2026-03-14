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
          border: "1px solid rgba(255,255,255,0.14)",
          background: "rgba(7, 11, 18, 0.5)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 16px 36px rgba(0,0,0,0.26)",
          padding: "34px clamp(20px, 3vw, 36px)",
        }}
      >
      <FadeIn>
        <h1
          style={{
            color: "white",
            fontSize: "clamp(2.1rem, 4vw, 3rem)",
            fontWeight: 700,
            marginBottom: "20px",
          }}
        >
          About Me
        </h1>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: "1.2rem",
            lineHeight: 1.7,
            marginBottom: "40px",
          }}
        >
          Hey, I’m Parthiv — a software engineer focused on AI/ML systems,
          backend architecture, and secure full-stack applications. I’m driven
          by the idea of building things that feel intelligent, seamless, and a
          bit magical.
          <br />
          <br />
          I’ve worked across machine learning, agent-based systems, databases,
          and security — from winning hackathons with ML-powered projects to
          optimizing real production SQL systems and integrating multi-agent
          voice pipelines using Fetch.ai and ElevenLabs.
          <br />
          <br />
          At the core, I love taking complex systems and turning them into
          smooth, elegant user experiences. My goal is to keep pushing deeper
          into intelligent systems, scalable backend design, and applied AI.
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
            fontSize: "1.15rem",
            lineHeight: 1.7,
            marginBottom: "40px",
            marginLeft: "20px",
          }}
        >
          <li>Multi-agent AI systems & real-time intelligence</li>
          <li>Full-stack ML apps with clean UX</li>
          <li>Database performance, replication, & system tuning</li>
          <li>Security engineering and system hardening</li>
          <li>Building scalable APIs and backend services</li>
        </ul>
      </FadeIn>

      <FadeIn delay={0.5}>
        <MagneticButton to="/contact">Let's Connect</MagneticButton>
      </FadeIn>
      </div>
    </div>
  );
}
