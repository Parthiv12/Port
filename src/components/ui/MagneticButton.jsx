import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function MagneticButton({ children, to }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left - rect.width / 2;
    const y = clientY - rect.top - rect.height / 2;

    el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0px, 0px)";
  };

  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <motion.button
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          padding: "14px 28px",
          background: "rgba(255,255,255,0.15)",
          border: "1px solid rgba(255,255,255,0.25)",
          color: "white",
          borderRadius: "12px",
          fontSize: "1.1rem",
          cursor: "pointer",
          backdropFilter: "blur(10px)",
          transition: "0.25s ease",
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.button>
    </Link>
  );
}
