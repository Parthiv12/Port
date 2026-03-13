import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(6px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        padding: "20px",
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        style={{
          width: "650px",
          maxWidth: "95%",
          background: "rgba(255,255,255,0.07)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "20px",
          padding: "32px",
          backdropFilter: "blur(12px)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title */}
        <h2
          style={{
            color: "white",
            marginBottom: "8px",
            fontSize: "1.8rem",
          }}
        >
          {project.title}
        </h2>

        {/* Description */}
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            marginBottom: "20px",
            lineHeight: 1.5,
          }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ marginBottom: "18px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {project.tags.map((tag) => (
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

        {/* See More */}
        <Link
          to={`/projects/${project.slug}`}
          style={{
            color: "#50eaff",
            textDecoration: "none",
            fontWeight: 500,
            fontSize: "1.05rem",
          }}
        >
          Read Full Case Study →
        </Link>
      </motion.div>
    </motion.div>
  );
}
