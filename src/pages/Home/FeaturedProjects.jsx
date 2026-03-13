import TiltCard from "../../components/ui/TiltCard.jsx";
import MagneticButton from "../../components/ui/MagneticButton.jsx";
import FadeIn from "../../components/ui/FadeIn.jsx";

export default function FeaturedProjects() {
  return (
    <div style={{ padding: "110px 5%", minHeight: "60vh" }}>
      <FadeIn>
        <h2 style={{ color: "white", fontSize: "2.5rem", fontWeight: 600 }}>
          Featured Projects
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.6)",
            marginTop: "8px",
            maxWidth: "600px",
          }}
        >
          A few standout builds showing my focus on AI/ML systems, intelligent
          interfaces, and scalable backend design.
        </p>
      </FadeIn>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          marginTop: "40px",
          gap: "35px",
        }}
      >
        {/* Card 1 */}
        <TiltCard>
          <h3 style={{ color: "white", fontSize: "1.4rem", marginBottom: "10px" }}>
            HarmonAIze — GrizzHacks Winner
          </h3>
          <p style={{ color: "rgba(255,255,255,0.6)" }}>
            Full-stack ML app that recommends music based on real-time BPM
            detection using K-Means clustering.
          </p>
        </TiltCard>

        {/* Card 2 */}
        <TiltCard>
          <h3 style={{ color: "white", fontSize: "1.4rem", marginBottom: "10px" }}>
            Multi-Agent Voice Assistant (ASI-1)
          </h3>
          <p style={{ color: "rgba(255,255,255,0.6)" }}>
            A Fetch.ai multi-agent voice pipeline with STT, TTS, memory routing,
            conversation stabilizing, and micro-models.
          </p>
        </TiltCard>

        {/* Card 3 */}
        <TiltCard>
          <h3 style={{ color: "white", fontSize: "1.4rem", marginBottom: "10px" }}>
            Movie Recommendation Engine
          </h3>
          <p style={{ color: "rgba(255,255,255,0.6)" }}>
            Collaborative filtering + clustering model integrated into a clean
            React + Flask full-stack experience.
          </p>
        </TiltCard>
      </div>

      {/* View all projects button */}
      <div style={{ marginTop: "55px" }}>
        <MagneticButton to="/projects">
          View All Projects →
        </MagneticButton>
      </div>
    </div>
  );
}
