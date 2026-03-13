import { motion } from "framer-motion";

export default function TimelineItem({ year, title, details, align = "left" }) {
  const isLeft = align === "left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      style={{
        display: "flex",
        justifyContent: isLeft ? "flex-start" : "flex-end",
        width: "100%",
        marginBottom: "100px",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "45%",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.15)",
          backdropFilter: "blur(12px)",
          padding: "24px 28px",
          borderRadius: "18px",
          color: "white",
          textAlign: "left",
          transform: isLeft ? "translateX(-20px)" : "translateX(20px)",
        }}
      >
        <h3
          style={{
            fontSize: "1.8rem",
            marginBottom: "8px",
            fontWeight: 700,
          }}
        >
          {year}
        </h3>

        <h4
          style={{
            fontSize: "1.25rem",
            marginBottom: "10px",
            opacity: 0.85,
          }}
        >
          {title}
        </h4>

        <ul style={{ opacity: 0.7, lineHeight: 1.6 }}>
          {details.map((d) => (
            <li key={d} style={{ marginBottom: "6px" }}>
              {d}
            </li>
          ))}
        </ul>
      </div>

      {/* Timeline dot */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "25px",
          transform: "translateX(-50%)",
          width: "16px",
          height: "16px",
          background: "white",
          borderRadius: "50%",
          boxShadow: "0 0 12px rgba(255,255,255,0.8)",
        }}
      ></div>
    </motion.div>
  );
}
