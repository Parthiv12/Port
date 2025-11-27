import { useState } from "react";
import FadeIn from "../../components/ui/FadeIn.jsx";
import ProjectCard from "../../components/ui/ProjectCard.jsx";
import ProjectModal from "../../components/ui/ProjectModal.jsx";

export default function ProjectGrid() {
  const [selected, setSelected] = useState(null);

  const projects = [
    {
      title: "HarmonAIze — GrizzHacks Winner",
      description:
        "A music recommendation engine powered by BPM clustering that adapts to real-time user physiological state.",
      tags: ["AI/ML", "Full-Stack", "Hackathon"],
      slug: "harmonAIze",
    },
    {
      title: "Multi-Agent Voice Assistant (ASI-1)",
      description:
        "A Fetch.ai multi-agent system integrating STT → routing → ElevenLabs TTS with fatigue detection and conversational memory.",
      tags: ["AI Agents", "Voice AI", "Full-Stack"],
      slug: "voice-ai",
    },
    {
      title: "Movie Recommendation Engine",
      description:
        "Clustering + collaborative filtering model with a React + Flask UI and TMDB integration.",
      tags: ["AI/ML", "Full-Stack"],
      slug: "movie-recommender",
    },
    {
      title: "Gamified Job Search Platform",
      description:
        "XP, streaks, match scoring, achievements — a fully gamified job-hunting platform designed for consistency.",
      tags: ["Full-Stack", "Gamification"],
      slug: "job-search-app",
    },
    {
      title: "SSL/TLS System Hardening Project",
      description:
        "Configured Ubuntu SSL/TLS, OpenVAS scanning, Apache security hardening and secure deployment on port 444.",
      tags: ["Security", "Linux", "Networking"],
      slug: "security-ssl",
    },
    {
      title: "SQL Optimization & Replication Systems",
      description:
        "Advanced SQL optimization work: indexing, replication, triggers, plan cache and buffer pool tuning.",
      tags: ["Database", "Optimization", "Systems"],
      slug: "sql-optimization",
    },
  ];

  return (
    <div style={{ padding: "130px 5%", width: "100%" }}>
      {/* Header */}
      <FadeIn>
        <h1
          style={{
            color: "white",
            fontSize: "3rem",
            fontWeight: 700,
            marginBottom: "18px",
          }}
        >
          Projects
        </h1>

        <p
          style={{
            color: "rgba(255,255,255,0.65)",
            maxWidth: "600px",
            marginBottom: "45px",
            lineHeight: 1.6,
          }}
        >
          A curated collection of my real engineering work — from machine
          intelligence to backend systems, security, and hackathon builds.
        </p>
      </FadeIn>

      {/* Project Grid */}
      <div
        style={{
          marginTop: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",
          gap: "40px",
        }}
      >
        {projects.map((p) => (
          <div key={p.slug} onClick={() => setSelected(p)}>
            <ProjectCard
              title={p.title}
              description={p.description}
              tags={p.tags}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
