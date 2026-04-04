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
    <div className="home-page-wrapper">
      <div className="home-hero-section">
        {/* Soft background element for a premium dark look */}
        <div className="home-bg-glow"></div>

        {/* Content Layer */}
        <motion.div 
          className="hero-content-centered"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Central Circular Visual / Orbital System */}
          <motion.div variants={itemVariants} className="hero-orbital-wrapper">
            <div className="orbit-center-glow"></div>
            <div className="orbit-center-node"></div>
            
            <div className="orbit-ring orbit-ring-1">
              <div className="orbit-satellite sat-1"></div>
            </div>
            <div className="orbit-ring orbit-ring-2">
              <div className="orbit-satellite sat-2"></div>
            </div>
            <div className="orbit-ring orbit-ring-3"></div>
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero-title-main">
            Parthiv Gajula
          </motion.h1>
          
          <motion.p variants={itemVariants} className="hero-subtitle-main">
            Building LLMs from scratch.<br/>
            <span className="hero-subtitle-secondary">Engineering scalable systems & applied AI.</span>
          </motion.p>
          
          <motion.div variants={itemVariants} className="hero-buttons-row">
            <a href="https://github.com/Parthiv12" target="_blank" rel="noopener noreferrer" className="hero-btn hero-btn-outline">
              <FaGithub size={16} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/parthiv-gajula-b84a12182/" target="_blank" rel="noopener noreferrer" className="hero-btn hero-btn-outline">
              <FaLinkedin size={16} /> LinkedIn
            </a>
            <a href="/ParthivUG.pdf" target="_blank" rel="noopener noreferrer" className="hero-btn hero-btn-primary">
              <FaFileAlt size={16} /> Resume
            </a>
          </motion.div>
        </motion.div>
      </div>

      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
    </div>
  );
}
