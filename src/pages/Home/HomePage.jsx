import React from "react";
import "./HomePage.css";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import profileImg from "../../assets/data/p2.jpg";

export default function HomePage() {
  return (
    <div className="home-container">
      <div className="hero-split fade-in">
        <div className="hero-content">
          <h1 className="hero-title">Parthiv Gajula</h1>

          <p className="hero-typewriter">
            <span className="typing-text">
              Studying Computer Science at Wayne State | Concentrating in building LLMS from scratch
            </span>
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

        <div className="hero-image">
          <img src={profileImg} alt="Parthiv Gajula" />
        </div>
      </div>
    </div>
  );
}
