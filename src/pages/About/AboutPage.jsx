import { motion } from "framer-motion";
import AboutBackground from "../../components/ui/AboutBackground.jsx";
import PortraitCard from "../../components/ui/PortraitCard.jsx";
import PremiumButton from "../../components/ui/PremiumButton.jsx";
import profileImg from "../../assets/data/p2.jpg";

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
      <AboutBackground />
      
      <div style={{ 
        position: "relative",
        zIndex: 1,
        padding: "160px clamp(24px, 6vw, 84px) 120px", 
        maxWidth: "1280px", 
        margin: "0 auto" 
      }}>
        <div
          style={{
            maxWidth: "1040px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "64px",
            alignItems: "center"
          }}
        >
          {/* Left Column: Portrait */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <PortraitCard src={profileImg} alt="Parthiv Gajula" />
            <p style={{ 
              color: "rgba(255,255,255,0.4)", 
              fontSize: "0.9rem", 
              textAlign: "center", 
              marginTop: "24px",
              fontStyle: "italic",
              letterSpacing: "0.02em"
            }}>
              Building and shipping projects across AI, systems, and full-stack environments.
            </p>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            style={{ display: "flex", flexDirection: "column", gap: "28px", maxWidth: "540px" }}
          >
            <motion.h1
              variants={itemVariants}
              style={{
                color: "rgba(255,255,255,0.95)",
                fontSize: "clamp(2.4rem, 5vw, 3.5rem)",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                marginBottom: "8px",
              }}
            >
              About Me
            </motion.h1>

            <motion.p
              variants={itemVariants}
              style={{
                color: "rgba(255,255,255,0.8)",
                fontSize: "1.1rem",
                lineHeight: 1.8,
                fontWeight: 400
              }}
            >
              I’m Parthiv — I like figuring out how things work, then pushing them until they work better. Most of what I build sits at the intersection of AI, backend systems, and real-world usability. Lately that’s meant working with LLM-related ideas, recommendation systems, voice workflows, and system-heavy projects where performance and architecture actually matter.
            </motion.p>
            
            <motion.p
              variants={itemVariants}
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                fontWeight: 400
              }}
            >
              I’m especially drawn to new technology when it can be applied to something practical. I’m not interested in building projects just to say I built them — I care more about whether they solve a real problem, teach me something meaningful, or can scale into something useful.
            </motion.p>
            
            <motion.p
              variants={itemVariants}
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                fontWeight: 400
              }}
            >
              At 365 Retail, I got hands-on with SQL performance, replication, and production-minded debugging. Outside of that, hackathons and side projects have pushed me to stay flexible, learn fast, and keep experimenting with better ways to build.
            </motion.p>

            <motion.div variants={itemVariants} style={{ marginTop: "12px" }}>
              <PremiumButton to="/contact">Message Me</PremiumButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
