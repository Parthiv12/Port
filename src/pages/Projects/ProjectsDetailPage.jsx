import { useParams } from "react-router-dom";

export default function ProjectDetailPage() {
  const { slug } = useParams();

  const projects = {
    "harmonAIze": {
      title: "HarmonAIze — GrizzHacks 2024 Winner (Interactive Media)",
      long: "HarmonAIze is a full-stack music recommendation engine that adapts to your heart rate in real time. Built during GrizzHacks 2024, it uses K-Means clustering to group songs by BPM and recommend tracks that match your current physiological state. The system improved BPM prediction accuracy by 80% and won the Interactive Media award. The frontend was built with React, with Flask powering the backend ML pipeline.",
      tech: ["Flask", "React", "K-Means", "Python", "ML"],
    },
    "voice-ai": {
      title: "Multi-Agent Voice Assistant — Dearborn Hacks 2025 (Best Use of ElevenLabs)",
      long: "This project integrates Fetch.ai's ASI-1 model with a multi-agent Python architecture (uAgents) to power a conversational AI voice assistant. The system uses browser-based Web Speech API for speech-to-text, routes queries through specialized agents for memory and response generation, and converts responses back to natural speech via ElevenLabs TTS. The assistant detects driver fatigue, maintains conversation flow, and reduces monotony on long drives. We built a lightweight React interface with live conversation tracking.",
      tech: ["Fetch.ai ASI-1", "uAgents", "ElevenLabs TTS", "Web Speech API", "Flask", "React", "Python"],
    },
    "movie-recommender": {
      title: "Movie Recommendation System",
      long: "A full-stack web app that suggests movies based on user preferences using K-Means clustering and collaborative filtering. The app integrates the TMDb API to fetch real-time movie data, ratings, and descriptions. Built with a React frontend featuring intuitive app routing and a Flask backend handling user authentication, API requests, and ML data processing. Currently expanding features and improving recommendation accuracy.",
      tech: ["Flask", "React", "MongoDB", "K-Means", "TMDb API", "REST APIs"],
    },
    "job-search-app": {
      title: "Job Search App — Gamified Job Search Platform (In Progress)",
      long: "A gamified job-hunting platform designed to make the job search process more engaging and less exhausting. Features include an AI-powered match scoring algorithm that recommends jobs based on skills, experience, and interests. Users earn XP, unlock achievements, and level up as they apply to jobs, build resumes, and network. The platform includes a dynamic leaderboard to track progress and motivate consistency. Currently building the full-stack architecture with React, Flask, MongoDB, and JWT authentication.",
      tech: ["React", "Flask", "MongoDB", "JWT", "REST APIs", "AI Recommendation System"],
    },
    "security-ssl": {
      title: "System Administration & Security Project",
      long: "Configured a secure Ubuntu server environment with SSL/TLS certificates and HTTPS on a non-standard port (444). Conducted vulnerability assessments using OpenVAS on Kali Linux and implemented security hardening for Apache2. The project involved certificate generation, secure server configuration, firewall rules, and security auditing to ensure production-level hardening standards.",
      tech: ["Ubuntu", "SSL/TLS", "OpenVAS", "Kali Linux", "Apache2", "Security Hardening"],
    },
    "sql-optimization": {
      title: "SQL Optimization & Replication Systems — 365 Retail Internship",
      long: "During my internship at 365 Retail, I optimized SQL queries to improve execution speed by up to 45% through strategic indexing and execution plan analysis. I connected to and managed remote database servers, configuring replication between instances with replication filters. I analyzed ad-hoc queries, prepared statements, plan cache, and buffer pool behavior for performance tuning. Additionally, I created custom trigger statements for automated data processing workflows.",
      tech: ["MySQL", "SQL Server", "Query Optimization", "Replication", "Triggers", "Database Administration"],
    },
  };

  const project = projects[slug];

  if (!project)
    return (
      <div style={{ color: "white", paddingTop: "160px", textAlign: "center" }}>
        <h1>Project Not Found</h1>
        <p style={{ marginTop: "20px", opacity: 0.7 }}>
          The project you're looking for doesn't exist.
        </p>
      </div>
    );

  return (
    <div style={{ padding: "140px 5%", color: "white", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "20px", fontWeight: 700 }}>
        {project.title}
      </h1>

      {/* Tech Stack Pills */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "40px" }}>
        {project.tech.map((t) => (
          <span
            key={t}
            style={{
              padding: "6px 14px",
              background: "rgba(88, 251, 220, 0.15)",
              border: "1px solid rgba(88, 251, 220, 0.3)",
              borderRadius: "20px",
              fontSize: "0.85rem",
              color: "rgba(88, 251, 220, 0.95)",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Long Description */}
      <p style={{ fontSize: "1.1rem", opacity: 0.85, lineHeight: 1.8, marginBottom: "40px" }}>
        {project.long}
      </p>

      {/* Back Button */}
      <a
        href="/projects"
        style={{
          display: "inline-block",
          padding: "12px 24px",
          background: "rgba(255, 255, 255, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "8px",
          color: "white",
          textDecoration: "none",
          transition: "all 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.target.style.background = "rgba(255, 255, 255, 0.15)";
          e.target.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.target.style.background = "rgba(255, 255, 255, 0.1)";
          e.target.style.transform = "translateY(0)";
        }}
      >
        ← Back to Projects
      </a>
    </div>
  );
}
