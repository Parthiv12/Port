import { motion } from "framer-motion";

export default function PortraitCard({ src, alt }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "420px",
        margin: "0 auto",
        aspectRatio: "3/4",
        borderRadius: "24px",
        padding: "1px", // for the subtle border effect
        background: "linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.01) 100%)",
      }}
    >
      {/* Soft backlight */}
      <div
        style={{
          position: "absolute",
          inset: "-20px",
          background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)",
          filter: "blur(24px)",
          zIndex: -1,
        }}
      />
      
      {/* Image container */}
      <div 
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: "23px", // slightly smaller than parent to show border
          overflow: "hidden",
          background: "#040508"
        }}
      >
        <img 
          src={src} 
          alt={alt} 
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "contrast(1.02) brightness(0.98)", 
          }}
        />
        {/* Subtle inner shadow for depth */}
        <div style={{
          position: "absolute",
          inset: 0,
          boxShadow: "inset 0 0 40px rgba(0,0,0,0.3)",
          pointerEvents: "none"
        }} />
      </div>
    </motion.div>
  );
}
