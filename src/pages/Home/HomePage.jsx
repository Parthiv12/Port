import React from "react";
import LightRays from "../../assets/backgroundM/LightRays.jsx";
import "./HomePage.css";

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
          mouseInfluence={0.1}
          noiseAmount={0.05}
          distortion={0.03}
        />
      </div>

      {/* Centered Hero Content */}
      <div className="hero-content fade-in">
        <h1 className="hero-title">Parthiv Chandra Gajula</h1>
        <p className="hero-subtitle">
          Building intelligent, aesthetic systems — AI, ML, and interactive engineering.
        </p>
      </div>

    </div>
  );
}
