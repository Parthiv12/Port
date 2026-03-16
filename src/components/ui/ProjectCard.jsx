import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";

export default function ProjectCard({ title, description, tags, slug, started }) {
  return (
    <Motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.42, ease: "easeOut" }}
      style={{
        background: "linear-gradient(180deg, rgba(255,255,255,0.1), rgba(255,255,255,0.06))",
        border: "1px solid rgba(255,255,255,0.16)",
        backdropFilter: "blur(10px)",
        borderRadius: "18px",
        padding: "26px",
        minHeight: "245px",
        boxShadow: "0 12px 28px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div>
        {started && (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: "8px",
            }}
          >
            <span
              style={{
                fontSize: "0.72rem",
                padding: "3px 8px",
                borderRadius: "999px",
                color: "rgba(230,238,244,0.82)",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.14)",
              }}
            >
              {started}
            </span>
          </div>
        )}
        <h3
          style={{
            color: "white",
            fontSize: "1.9rem",
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

        <div
          style={{
            marginTop: "18px",
          }}
        >
          <Link
            to={`/projects/${slug}`}
            style={{
              color: "rgba(214, 233, 240, 0.95)",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.95rem",
            }}
          >
            Open project page →
          </Link>
        </div>
      </div>
    </Motion.article>
  );
}
