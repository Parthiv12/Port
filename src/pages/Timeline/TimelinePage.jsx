
import { useState, useMemo } from "react";
import FadeIn from "../../components/ui/FadeIn.jsx";
import YearSection from "./YearSection.jsx";
import YearNav from "./YearNav.jsx";
import PreviewPanel from "./PreviewPanel.jsx";

import {
  SiReact,
  SiPython,
  SiFlask,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

const timelineData = [
  {
  year: "2025",
  highlight: {
    title: "Movie Recommendation Engine",
    slug: "movie-recommender",
  },
  projects: [
    {
      id: "movie-rec",
      title: "Movie Recommendation Engine",
      tags: ["ML", "Full-Stack"],
      summary: "Built a recommendation engine using clustering and metadata.",
      kind: "personal",
      icon: "💻",
      pill: "Personal",
      techStack: [
        { node: SiPython, title: "Python" },
        { node: SiFlask, title: "Flask" },
        { node: SiReact, title: "React" },
        { node: SiMongodb, title: "MongoDB" },
      ]
    },
    {
      id: "gamified-search",
      title: "Gamified Job Search Platform",
      tags: ["React", "API Dev"],
      summary: "Turned job search into a gamified experience with levels and streaks.",
      kind: "personal",
      icon: "💻",
      pill: "Personal",
    },
    {
      id: "github-stats-api",
      title: "GitHub Stats API Tool",
      tags: ["API", "JavaScript"],
      summary: "Small web app using GitHub API to fetch user stats and profile info.",
      kind: "personal",
      icon: "💻",
      pill: "Personal",
    },

    // ⭐ NEW — COURSE PROJECT
    {
      id: "os-secure-s3-fs",
      title: "Secure S3 File System — Operating Systems (Fall 2025)",
      tags: ["Systems", "Security"],
      summary: "Built an encrypted file system over AWS S3 using FUSE and AES-256-CBC hooks.",
      kind: "coursework",
      icon: "🎓",
      pill: "Coursework",
      hoverDetails: "",
    },
  ],
  experience: ["Database Intern @ 365 Retail Markets"],
  skills: [
    "SQL tuning",
    "Replication",
    "Clustering improvements",
    "JWT auth",
    "Flask + React integration",
  ],
}
,
  {
  year: "2024",
  highlight: {
    title: "HarmonAIze — Hackathon Winner",
    slug: "harmonAIze",
  },
  projects: [
    {
      id: "harmonaize",
      title: "HarmonAIze",
      tags: ["ML", "Hackathon"],
      summary: "BPM-based music recommendation app that won at GrizzHacks.",
      kind: "hackathon",
      icon: "🏆",
      pill: "Hackathon",
    },
    {
      id: "linux-imaging",
      title: "Linux Imaging & Boot System Design",
      tags: ["Linux", "Systems"],
      summary: "Defined boot + imaging flow for Actineon PCs using Clonezilla.",
      kind: "personal",
      icon: "💻",
      pill: "Personal",
    },
    {
      id: "early-ml",
      title: "Early ML Experiments",
      tags: ["AI/ML"],
      summary: "First experiments with clustering, sentiment, and recommendation.",
      kind: "personal",
      icon: "💻",
      pill: "Personal",
    },

    // ⭐ NEW — COURSE PROJECT 1
    {
      id: "sysadmin-ssl",
      title: "SSL Certificate & Server Hardening — System Administration (Fall 2024)",
      tags: ["Security", "Linux"],
      summary: "Configured HTTPS on Ubuntu with SSL/TLS, ran OpenVAS scans, and hardened Apache2.",
      kind: "coursework",
      icon: "🎓",
      pill: "Coursework",
      hoverDetails: "",
    },

    // ⭐ NEW — COURSE PROJECT 2
    {
      id: "llm-rag-lstm",
      title: "RAG + LSTM Implementations — Intro to LLMs (Winter 2024)",
      tags: ["AI/ML", "LLMs"],
      summary: "Built RAG pipelines and LSTM models to study LLM behaviors and training differences.",
      kind: "coursework",
      icon: "🎓",
      pill: "Coursework",
      hoverDetails: "",
    },
  ],
  experience: ["Operations & Hardware Intern @ 365 Retail Markets"],
  skills: ["ML workflows", "BPM clustering", "Linux imaging", "Team collaboration"],
}
,
  // add more years later as needed
];

export default function TimelinePage() {
  const [activeYear, setActiveYear] = useState(timelineData[0]?.year ?? null);

  // R3 hybrid: hover gives temporary preview, click locks it
  const [lockedProject, setLockedProject] = useState(null);
  const [hoverProject, setHoverProject] = useState(null);

  const years = timelineData.map((b) => b.year);

  const activeYearData = useMemo(
    () => timelineData.find((y) => y.year === activeYear) ?? null,
    [activeYear]
  );

  const projectForPreview = useMemo(() => {
    if (hoverProject) return hoverProject;               // hover takes priority
    if (lockedProject) return lockedProject;             // then locked
    if (activeYearData?.projects?.length) {
      return activeYearData.projects[0];                 // fallback: first project in the year
    }
    return null;
  }, [hoverProject, lockedProject, activeYearData]);

  const handleYearToggle = (year) => {
    setActiveYear((prev) => (prev === year ? null : year));
    // when switching years, reset hover; keep lock if you want cross-year lock, otherwise clear it:
    setHoverProject(null);
    // optional: clear lock when switching years
    // setLockedProject(null);
  };

  return (
    <div style={{ paddingTop: "140px", paddingBottom: "140px" }}>
      <FadeIn>
        <h1
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "3rem",
            marginBottom: "50px",
            fontWeight: 700,
          }}
        >
          Timeline
        </h1>
      </FadeIn>

      <div
        style={{
          width: "100%",
          maxWidth: "1180px",
          margin: "0 auto",
          display: "flex",
          gap: "40px",
          alignItems: "flex-start",
        }}
      >
        {/* LEFT – Year + projects */}
        <div style={{ flex: 1, paddingLeft: "20px" }}>
          {timelineData.map((block) => (
            <YearSection
              key={block.year}
              data={block}
              isActive={block.year === activeYear}
              onToggle={() => handleYearToggle(block.year)}
              onProjectHover={(project) => setHoverProject(project)}
              onProjectLeave={() => setHoverProject(null)}
              onProjectClick={(project) => setLockedProject(project)}
              lockedProjectId={lockedProject?.id ?? null}
            />
          ))}
        </div>

        {/* RIGHT – year nav + preview panel */}
        <div
          style={{
            minWidth: "260px",
            position: "sticky",
            top: "130px",
            alignSelf: "flex-start",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <YearNav
            years={years}
            activeYear={activeYear}
            onSelectYear={(year) => {
              handleYearToggle(year);
              const target = document.getElementById(`year-${year}`);
              if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
          />
          <PreviewPanel project={projectForPreview} year={activeYear} />
        </div>
      </div>
    </div>
  );
}
