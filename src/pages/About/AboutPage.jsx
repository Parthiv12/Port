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
              I’m Parthiv — I like understanding how things work, then pushing them until they work better.
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
              I tend to get pulled toward problems that feel a little messy at first — systems that aren’t quite scalable, ideas that aren’t fully figured out yet, or tools that could be more intuitive. I enjoy sitting in that space and slowly shaping things into something clean, usable, and reliable.
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
              A lot of what I build sits somewhere between engineering and curiosity. I like experimenting, breaking things, and learning just enough to make something real out of an idea. For me, the process matters just as much as the outcome.
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
              Outside of that, I’m usually exploring new tech, refining past projects, or just going down random rabbit holes that somehow end up being useful later.
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
