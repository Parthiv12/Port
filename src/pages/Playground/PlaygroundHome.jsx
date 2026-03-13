import TiltCard from "../../components/ui/TiltCard.jsx";
import FadeIn from "../../components/ui/FadeIn.jsx";
import { Link } from "react-router-dom";

export default function PlaygroundHome() {
  return (
    <div style={{ marginTop: "20px" }}>
      <FadeIn>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            marginBottom: "30px",
            maxWidth: "700px",
          }}
        >
          Think of this as a lab — a place to try ideas that don’t fit cleanly
          into a traditional project page. Some are UI experiments, some are ML
          demos, some are systems visualizations.
        </p>
      </FadeIn>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "28px",
        }}
      >
        <Link
          to="/playground/engineering"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <TiltCard>
            <h2
              style={{
                color: "white",
                fontSize: "1.4rem",
                marginBottom: "8px",
              }}
            >
              Interactive Engineering
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.98rem" }}>
              UI micro-interactions, state visualizers, and small tools that
              show how I think about systems and user experience.
            </p>
          </TiltCard>
        </Link>

        <Link
          to="/playground/ml"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <TiltCard>
            <h2
              style={{
                color: "white",
                fontSize: "1.4rem",
                marginBottom: "8px",
              }}
            >
              ML Playground
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.98rem" }}>
              Heavier ML experiments — clustering, recommendation behavior,
              maybe agent routing visualizations and model behavior probes.
            </p>
          </TiltCard>
        </Link>
      </div>
    </div>
  );
}
