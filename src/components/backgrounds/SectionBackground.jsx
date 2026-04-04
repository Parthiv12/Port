import "./background.css";

/**
 * Replace the placeholder layers below with the actual ReactBits
 * components you copy into your project.
 *
 * Suggested mapping:
 * - "particles" -> ReactBits Particles
 * - "waves"     -> ReactBits Waves
 * - "aurora"    -> ReactBits Aurora
 */
export default function SectionBackground({ variant = "none" }) {
  if (variant === "none") return null;

  return (
    <div className={`section-bg section-bg--${variant}`} aria-hidden="true">
      <div className="section-bg__fade section-bg__fade--top" />
      <div className="section-bg__fade section-bg__fade--bottom" />

      {variant === "particles" && (
        <div className="section-bg__layer section-bg__layer--particles">
          {/* Replace with ReactBits Particles */}
          <div className="particles-fallback" />
        </div>
      )}

      {variant === "waves" && (
        <div className="section-bg__layer section-bg__layer--waves">
          {/* Replace with ReactBits Waves */}
          <div className="waves-fallback" />
        </div>
      )}

      {variant === "aurora" && (
        <div className="section-bg__layer section-bg__layer--aurora">
          {/* Replace with ReactBits Aurora */}
          <div className="aurora-fallback" />
        </div>
      )}
    </div>
  );
}
