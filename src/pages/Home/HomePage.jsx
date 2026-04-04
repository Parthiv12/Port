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
    <div className="home-page-wrapper" style={{ fontFamily: "system-ui, sans-serif" }}>
      <div style={{ paddingTop: "180px", paddingBottom: "120px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", paddingInline: "20px" }}>
        
        {/* Very subtle ambient glow instead of orbit */}
        <div style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "40vw",
          height: "40vw",
          background: "radial-gradient(circle, rgba(160, 190, 210, 0.04) 0%, transparent 60%)",
          pointerEvents: "none",
          zIndex: -1
        }}></div>

        {/* Content Layer */}
        <motion.div 
          style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 1 }}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.h1 variants={itemVariants} style={{ fontSize: "clamp(2.8rem, 6vw, 4rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "white", marginBottom: "8px" }}>
            Parthiv Gajula
          </motion.h1>
          
          <motion.p variants={itemVariants} style={{ fontSize: "clamp(1.2rem, 3vw, 1.4rem)", fontWeight: 500, color: "rgba(255,255,255,0.8)", marginBottom: "16px" }}>
            Building LLMs from scratch.<br/>
            <span style={{ color: "rgba(255,255,255,0.5)" }}>Engineering scalable systems & applied AI.</span>
          </motion.p>

          <motion.p variants={itemVariants} style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.6)", maxWidth: "560px", margin: "0 auto 32px", lineHeight: 1.6 }}>
            Flexible, curious, and hands-on — I like turning new ideas into reliable, usable systems.
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

      {/* Mini Bento Focus Section */}
      <div style={{ maxWidth: "1000px", margin: "0 auto 120px", padding: "0 20px" }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}
        >
            <FocusCard 
              title="Models" 
              items={["LLMs", "BERT", "GPT", "Sequence Models"]} 
            />
            <FocusCard 
              title="Applied AI" 
              items={["RAG", "Fine-Tuning", "Prompt Engineering"]} 
            />
            <FocusCard 
              title="Systems" 
              items={["Agents", "Distributed Systems", "Backend Performance"]} 
            />
        </motion.div>
      </div>

      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
    </div>
  );
}

function FocusCard({ title, items }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(255,255,255,0.06)",
      borderRadius: "16px",
      padding: "28px",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      textAlign: "left"
    }}>
      <h3 style={{
        fontSize: "1rem",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        color: "rgba(255,255,255,0.4)",
        marginBottom: "20px",
        fontWeight: 600
      }}>{title}</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%" }}>
        {items.map(item => (
          <div key={item} style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.9)",
            fontWeight: 500,
            paddingBottom: "12px",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
          }}>
            {item}
          </div>
        ))}
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
