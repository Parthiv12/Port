import { useRef } from "react";
import { motion } from "framer-motion";

export default function TiltCard({ children }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const rotateX = (y - 0.5) * 10;
    const rotateY = -(x - 0.5) * 10;

    el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
      style={{
        background: "linear-gradient(180deg, rgba(255,255,255,0.1), rgba(255,255,255,0.06))",
        border: "1px solid rgba(255,255,255,0.16)",
        backdropFilter: "blur(10px)",
        borderRadius: "18px",
        padding: "28px",
        cursor: "pointer",
        transformStyle: "preserve-3d",
        willChange: "transform",
        minHeight: "255px",
        boxShadow: "0 12px 28px rgba(0, 0, 0, 0.25)",
      }}
    >
      {children}
    </motion.div>
  );
}
