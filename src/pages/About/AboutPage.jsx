import { motion } from "framer-motion";
import AboutBackground from "../../components/ui/AboutBackground.jsx";
import PortraitCard from "../../components/ui/PortraitCard.jsx";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
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
        margin: "0 auto",
        fontFamily: "system-ui, sans-serif"
      }}>
        <div
          style={{
            maxWidth: "1040px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "80px",
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
                color: "white",
                fontSize: "clamp(2.4rem, 5vw, 3.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                marginBottom: "8px",
              }}
            >
              About Me
            </motion.h1>

            <motion.p
              variants={itemVariants}
              style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: "1.25rem",
                lineHeight: 1.6,
                fontWeight: 500
              }}
            >
              I’m Parthiv — I like understanding how things work, then pushing them until they work better.
            </motion.p>
            
            <motion.p
              variants={itemVariants}
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "1.05rem",
                lineHeight: 1.7,
                fontWeight: 400
              }}
            >
              I tend to get pulled toward problems that feel a little messy at first — systems that aren’t quite scalable, or ideas that aren’t fully figured out yet. I enjoy sitting in that space and slowly shaping things into something clean, usable, and reliable.
            </motion.p>
            
            <motion.p
              variants={itemVariants}
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "1.05rem",
                lineHeight: 1.7,
                fontWeight: 400
              }}
            >
              A lot of what I build sits somewhere between engineering and curiosity. I like experimenting, breaking things, and learning just enough to make something real out of an idea.
            </motion.p>

            <motion.div
              variants={itemVariants}
              style={{
                display: "flex",
                gap: "12px",
                color: "rgba(255,255,255,0.4)",
                fontSize: "0.95rem",
                marginTop: "8px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontWeight: 600
              }}
            >
              <span>Curious</span>
              <span>·</span>
              <span>Hands-on</span>
              <span>·</span>
              <span>Always learning</span>
            </motion.div>

            {/* Contact Block inserted inline */}
            <motion.div 
              variants={itemVariants}
              style={{
                marginTop: "48px",
                paddingTop: "48px",
                borderTop: "1px solid rgba(255,255,255,0.1)"
              }}
            >
              <h2 style={{
                color: "white",
                fontSize: "1.5rem",
                fontWeight: 600,
                marginBottom: "12px",
                letterSpacing: "-0.01em"
              }}>
                Let’s build something useful.
              </h2>
              <p style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "1.05rem",
                marginBottom: "24px"
              }}>
                Email is the fastest way to reach me.
              </p>
              
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                <a href="mailto:pgajula@oakland.edu" style={linkStyle}>
                  <FaEnvelope /> Email Me
                </a>
                <a href="https://github.com/Parthiv12" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                  <FaGithub /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/parthiv-gajula-b84a12182/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                  <FaLinkedin /> LinkedIn
                </a>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}

const linkStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  padding: "10px 20px",
  borderRadius: "8px",
  border: "1px solid rgba(255,255,255,0.15)",
  color: "white",
  textDecoration: "none",
  fontSize: "0.95rem",
  fontWeight: 500,
  background: "rgba(255,255,255,0.03)",
  transition: "background 0.2s"
};
