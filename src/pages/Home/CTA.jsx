import MagneticButton from "../../components/ui/MagneticButton.jsx";
import FadeIn from "../../components/ui/FadeIn.jsx";

export default function CTA() {
  return (
    <div
      style={{
        padding: "150px 5%",
        textAlign: "center",
      }}
    >
      <FadeIn>
        <h2
          style={{
            fontSize: "2.7rem",
            color: "white",
            marginBottom: "30px",
            fontWeight: 600,
          }}
        >
          Let’s build something meaningful.
        </h2>

        <MagneticButton to="/contact">Contact Me</MagneticButton>
      </FadeIn>
    </div>
  );
}
