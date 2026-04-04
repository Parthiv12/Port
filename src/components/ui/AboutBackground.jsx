import { motion } from "framer-motion";

export default function AboutBackground() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
        zIndex: 0,
        pointerEvents: "none",
        background: "#040508", // Base Dark
      }}
    >
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
          rotate: [0, 90, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: "50%",
          height: "50%",
          background: "radial-gradient(circle, rgba(20, 45, 80, 0.4) 0%, rgba(4,5,8,0) 70%)",
          filter: "blur(60px)",
          borderRadius: "50%"
        }}
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, -90, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: "absolute",
          bottom: "-20%",
          right: "-10%",
          width: "60%",
          height: "60%",
          background: "radial-gradient(circle, rgba(15, 30, 50, 0.4) 0%, rgba(4,5,8,0) 70%)",
          filter: "blur(80px)",
          borderRadius: "50%"
        }}
      />
      {/* Subtle Grid overlay */}
      <div 
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.4,
          maskImage: "linear-gradient(to bottom, black 20%, transparent 80%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 20%, transparent 80%)"
        }}
      />
    </div>
  );
}
