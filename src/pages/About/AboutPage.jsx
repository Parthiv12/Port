import FadeIn from "../../components/ui/FadeIn.jsx";
import MagneticButton from "../../components/ui/MagneticButton.jsx";

export default function AboutPage() {
  return (
    <div style={{ padding: "140px 5%", maxWidth: "820px", margin: "0 auto" }}>
      <FadeIn>
        <h1
          style={{
            color: "white",
            fontSize: "3rem",
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
  );
}
