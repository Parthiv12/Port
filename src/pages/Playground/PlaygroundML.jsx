import FadeIn from "../../components/ui/FadeIn.jsx";
import TiltCard from "../../components/ui/TiltCard.jsx";

export default function PlaygroundML() {
  return (
    <div style={{ marginTop: "10px" }}>
      <FadeIn>
        <h2
          style={{
            color: "white",
            fontSize: "2.1rem",
            fontWeight: 600,
            marginBottom: "10px",
          }}
        >
          ML Playground
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.75)",
            maxWidth: "720px",
            lineHeight: 1.7,
            marginBottom: "30px",
          }}
        >
          Heavier experiments focused on model behavior, clustering,
          recommendation dynamics, and how ML systems respond as you tweak their
          inputs and parameters.
        </p>
      </FadeIn>

      <TiltCard>
        <h3
          style={{
            color: "white",
            fontSize: "1.3rem",
            marginBottom: "10px",
          }}
        >
          Upcoming: K-Means / Recommendation Visualizer
        </h3>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            marginBottom: "10px",
          }}
        >
          This area will host an interactive visualization — for example, a
          K-Means clustering playground or a simple recommendation behavior
          explorer connected to synthetic data.
        </p>

        <div
          style={{
            borderRadius: "12px",
            border: "1px dashed rgba(255,255,255,0.25)",
            padding: "16px",
            color: "rgba(255,255,255,0.6)",
            fontSize: "0.95rem",
          }}
        >
          Placeholder now — will be replaced with a real interactive ML demo.
        </div>
      </TiltCard>
    </div>
  );
}
