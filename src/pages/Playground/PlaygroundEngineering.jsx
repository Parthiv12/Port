import FadeIn from "../../components/ui/FadeIn.jsx";
import TiltCard from "../../components/ui/TiltCard.jsx";

export default function PlaygroundEngineering() {
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
          Interactive Engineering
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.75)",
            maxWidth: "720px",
            lineHeight: 1.7,
            marginBottom: "30px",
          }}
        >
          Small, focused experiments that show how I think about state,
          feedback, and systems behavior. This is where I prototype micro-UX,
          state machines, and interaction models before turning them into
          full products.
        </p>
      </FadeIn>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 0.9fr)",
          gap: "26px",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        {/* Primary demo area */}
        <TiltCard>
          <h3
            style={{
              color: "white",
              fontSize: "1.3rem",
              marginBottom: "10px",
            }}
          >
            Demo 1 — (to fill next)
          </h3>
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              marginBottom: "16px",
            }}
          >
            This section will host the first interactive widget — for example, a
            state visualizer, request pipeline flow, or a small tool.
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
            Coming next: a real interactive demo here.
          </div>
        </TiltCard>

        {/* Side notes / planned experiments */}
        <TiltCard>
          <h4
            style={{
              color: "white",
              fontSize: "1.15rem",
              marginBottom: "10px",
            }}
          >
            Planned Engineering Experiments
          </h4>
          <ul
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "0.96rem",
              lineHeight: 1.7,
              marginLeft: "18px",
            }}
          >
            <li>UI micro-interactions (buttons, timelines, hover states).</li>
            <li>State flow / pipeline visualizers for API or agent flows.</li>
            <li>Latency / retry simulation controls.</li>
            <li>Feature toggles or A/B testing behavior mock.</li>
          </ul>
        </TiltCard>
      </div>
    </div>
  );
}
