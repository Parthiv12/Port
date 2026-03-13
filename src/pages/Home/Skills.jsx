import FadeIn from "../../components/ui/FadeIn.jsx";

export default function Skills() {
  return (
    <div style={{ padding: "120px 5%" }}>
      <FadeIn>
        <h2 style={{ color: "white", fontSize: "2.5rem", fontWeight: 600 }}>
          Core Skills
        </h2>
      </FadeIn>

      <FadeIn delay={0.4}>
        <p style={{ color: "rgba(255,255,255,0.6)", marginTop: "10px" }}>
          AI/ML engineering, multi-agent systems, backend APIs, database
          optimization, Linux systems, and cybersecurity.
        </p>
      </FadeIn>

      {/* Constellation graph comes later */}
    </div>
  );
}
