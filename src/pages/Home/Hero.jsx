import { motion } from "framer-motion";
import MagneticButton from "../../components/ui/MagneticButton.jsx";
import FadeIn from "../../components/ui/FadeIn.jsx";

export default function Hero() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 5%",
      }}
    >
      <FadeIn delay={0.2}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          style={{
            fontSize: "4rem",
            fontWeight: 700,
            color: "white",
            letterSpacing: "-1px",
          }}
        >
          Parthiv Chandra Gajula
        </motion.h1>
      </FadeIn>

      <FadeIn delay={0.45}>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          style={{
            fontSize: "1.5rem",
            fontWeight: 300,
            marginTop: "10px",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          Software Engineer · AI/ML · Systems & Security
        </motion.h2>
      </FadeIn>

      <FadeIn delay={0.8}>
        <div style={{ marginTop: "50px" }}>
          <MagneticButton to="/projects">Explore Projects</MagneticButton>
        </div>
      </FadeIn>
    </div>
  );
}
