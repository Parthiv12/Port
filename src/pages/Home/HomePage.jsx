import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";

// Sections
import ProjectsSection from "../../components/sections/ProjectsSection.jsx";
import ExperienceSection from "../../components/sections/ExperienceSection.jsx";
import SkillsSection from "../../components/sections/SkillsSection.jsx";

import "./HomePage.css";

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { ease: [0.16, 1, 0.3, 1], duration: 1 } 
    }
  };

  return (
    <div className="home-page-wrapper" style={{ fontFamily: "system-ui, sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", paddingInline: "20px" }}>
        {/* Content Layer */}
        <motion.div 
          style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 1 }}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.h1 variants={itemVariants} style={{ fontSize: "clamp(2.8rem, 6vw, 4rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "white", marginBottom: "16px" }}>
            Parthiv Gajula
          </motion.h1>
          
          <motion.p variants={itemVariants} style={{ fontSize: "clamp(1.2rem, 3vw, 1.4rem)", fontWeight: 500, color: "rgba(255,255,255,0.7)", marginBottom: "40px" }}>
            Concentrating in building LLMs from scratch.
          </motion.p>
          
          <motion.div variants={itemVariants} style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
            <a href="https://github.com/Parthiv12" target="_blank" rel="noopener noreferrer" style={btnOutlineStyle}>
              <FaGithub size={16} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/parthiv-gajula-b84a12182/" target="_blank" rel="noopener noreferrer" style={btnOutlineStyle}>
              <FaLinkedin size={16} /> LinkedIn
            </a>
            <a href="/ParthivUG.pdf" target="_blank" rel="noopener noreferrer" style={btnPrimaryStyle}>
              <FaFileAlt size={16} /> Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}



const btnOutlineStyle = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "10px 20px",
  borderRadius: "8px",
  border: "1px solid rgba(255,255,255,0.15)",
  color: "white",
  textDecoration: "none",
  background: "transparent",
  fontSize: "0.95rem",
  fontWeight: 500,
  transition: "background 0.2s"
};

const btnPrimaryStyle = {
  ...btnOutlineStyle,
  background: "white",
  color: "black",
  borderColor: "white",
};
