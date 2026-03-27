import FadeIn from "../../components/ui/FadeIn.jsx";

export default function ContactPage() {
  return (
    <div
      style={{
        padding: "122px clamp(16px, 4vw, 64px) 96px",
        maxWidth: "1280px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          maxWidth: "1040px",
          margin: "0 auto",
          textAlign: "left",
          borderRadius: "20px",
          border: "1px solid var(--panel-navy-border)",
          background: "var(--panel-navy-bg)",
          backdropFilter: "blur(7px)",
          boxShadow: "var(--panel-navy-shadow)",
          padding: "36px clamp(20px, 3vw, 36px)",
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
          Contact
        </h1>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: "1.05rem",
            lineHeight: 1.75,
            marginBottom: "16px",
          }}
        >
          If you’re building in backend, data, or applied AI and want to connect, email is the fastest way to reach me.
        </p>
        <p
          style={{
            color: "rgba(255,255,255,0.66)",
            fontSize: "0.95rem",
            lineHeight: 1.7,
            marginBottom: "34px",
          }}
        >
          I’m happy to share repo walkthroughs, architecture decisions, performance notes, and technical tradeoffs from any project here.
        </p>
      </FadeIn>

      {/* Email */}
      <FadeIn delay={0.4}>
        <a
          href="mailto:sign2parthiv@gmail.com"
          style={{
            display: "inline-block",
            padding: "14px 28px",
            borderRadius: "12px",
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.25)",
            color: "white",
            textDecoration: "none",
            fontSize: "1.1rem",
            backdropFilter: "blur(10px)",
            transition: "0.25s ease",
          }}
        >
          Message Me →
        </a>
      </FadeIn>

      {/* Extra links */}
      <FadeIn delay={0.6}>
        <div style={{ marginTop: "40px", opacity: 0.84 }}>
          <p style={{ marginBottom: "8px" }}>Also available on:</p>

          <div style={{ marginTop: "12px" }}>
            <a
              href="https://github.com/Parthiv12"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "rgba(221, 235, 241, 0.92)",
                textDecoration: "none",
                marginRight: "20px",
              }}
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/parthiv-gajula-b84a12182/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "rgba(221, 235, 241, 0.92)",
                textDecoration: "none",
              }}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </FadeIn>
      </div>
    </div>
  );
}
