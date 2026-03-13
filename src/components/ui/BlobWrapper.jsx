import React from 'react';

export default function BlobWrapper({ children, className = '' }) {
  return (
    <div className={`blob-wrapper ${className}`}>
      <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="blob-filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.008"
              numOctaves="4"
              result="noise"
              seed="2"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="35"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>

        {/* Animated blob shape */}
        <circle
          cx="3200"
          cy="200"
          r="180"
          fill="none"
          stroke="url(#blob-gradient)"
          strokeWidth="2"
          filter="url(#blob-filter)"
          className="animated-blob"
          opacity="0.6"
        />
        
        {/* Gradient for the blob stroke */}
        <defs>
          <linearGradient id="blob-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(88, 251, 220, 0.8)" />
            <stop offset="100%" stopColor="rgba(88, 251, 220, 0.3)" />
          </linearGradient>
        </defs>
      </svg>

      <div className="blob-content">
        {children}
      </div>
    </div>
  );
}
