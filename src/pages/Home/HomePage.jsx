import React from "react";
import LightRays from "../../assets/backgroundM/LightRays";
import "./HomePage.css";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import profileImg from "../../assets/data/fi.jpg";

export default function HomePage() {
  return (
    <div className="home-container">

      {/* Background */}
      <div className="home-bg">
        <LightRays
          raysOrigin="top-center"
          raysColor="#58fbdc"
          raysSpeed={0.8}
          lightSpread={0.6}
          rayLength={2.5}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.03}
          distortion={0.02}
        />
      </div>

      {/* Split Layout */}
      <div className="hero-split fade-in">

        {/* Left: Text Content */}
        <div className="hero-content">
          <h1 className="hero-title">Parthiv Gajula</h1>

          <p className="hero-typewriter">
            <span className="typing-text">Computer Science @ Wayne State • LLM Development & AI Systems</span>
            <span className="cursor">|</span>
          </p>

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

        {/* Right: Image */}
        <div className="hero-image">
          <img src={profileImg} alt="Parthiv Gajula" />
        </div>

      </div>

    </div>
  );
}
