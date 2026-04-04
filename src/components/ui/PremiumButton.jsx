import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function PremiumButton({ to, children }) {
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{
          position: "relative",
          background: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "12px",
          padding: "12px 24px",
          color: "rgba(255, 255, 255, 0.9)",
          fontSize: "1rem",
          fontWeight: 500,
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)"
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0) 100%)",
            zIndex: 0
          }}
        />
        <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
      </motion.button>
    </Link>
  );
}
