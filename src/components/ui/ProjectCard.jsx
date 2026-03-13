import TiltCard from "./TiltCard.jsx";

export default function ProjectCard({ title, description, tags }) {
  return (
    <TiltCard>
      <div>
        <h3
          style={{
            color: "white",
            fontSize: "1.55rem",
            marginBottom: "10px",
            fontWeight: 600,
            lineHeight: 1.25,
          }}
        >
          {title}
        </h3>

        <p
          style={{
            color: "rgba(255,255,255,0.72)",
            marginBottom: "18px",
            lineHeight: 1.5,
            minHeight: "72px",
          }}
        >
          {description}
        </p>

        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: "4px 10px",
                borderRadius: "8px",
                background: "rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.8)",
                fontSize: "0.75rem",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </TiltCard>
  );
}
