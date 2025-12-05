import React from "react";
import LightRays from "../../assets/backgroundM/LightRays";
import "./HomePage.css";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="home-container">

      {/* Background */}
      <div className="home-bg">
        <LightRays
          raysOrigin="bottom-center"
          raysColor="#58fbdc"
          raysSpeed={1.0}
          lightSpread={0.75}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.15}
          noiseAmount={0.05}
          distortion={0.03}
        />
      </div>

      {/* Hero Content */}
      <div className="hero-wrapper fade-in">

        {/* Name */}
        <h1 className="hero-title">Parthiv Chandra Gajula</h1>

        {/* Typewriter subtitle */}
        <p className="hero-typewriter">
          <span className="typing-text">AI · ML · Interactive Engineering</span>
          <span className="cursor">|</span>
        </p>

        {/* Minimal Social Row */}
        <div className="social-row">

          <a
            href="https://github.com/Parthiv12"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
          >
            <FaGithub size={20} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/parthiv-gajula-b84a12182/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
          >
            <FaLinkedin size={20} />
            LinkedIn
          </a>

          <a
            href="/Parthiv_Gajula_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
          >
            <FaFileAlt size={20} />
            Resume
          </a>

        </div>

      </div>

    </div>
  );
}
