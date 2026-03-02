import { useState, useMemo, useEffect } from "react";
import FadeIn from "../../components/ui/FadeIn.jsx";
import YearSection from "./YearSection.jsx";
import YearNav from "./YearNav.jsx";
import PreviewPanel from "./PreviewPanel.jsx";

import { SiReact, SiPython, SiFlask, SiMongodb } from "react-icons/si";

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
        pill: "Personal",
        techStack: [
          { node: SiPython, title: "Python" },
          { node: SiFlask, title: "Flask" },
          { node: SiReact, title: "React" },
          { node: SiMongodb, title: "MongoDB" },
        ],
      },
      {
        id: "gamified-search",
        title: "Gamified Job Search Platform",
        tags: ["React", "API Dev"],
        summary:
          "Turned job search into a gamified experience with levels and streaks.",
        kind: "personal",
        pill: "Personal",
      },
      {
        id: "github-stats-api",
        title: "GitHub Stats API Tool",
        tags: ["API", "JavaScript"],
        summary:
          "Small web app using GitHub API to fetch user stats and profile info.",
        kind: "personal",
        pill: "Personal",
      },
      {
        id: "os-secure-s3-fs",
        title: "Secure S3 File System - Operating Systems (Fall 2025)",
        tags: ["Systems", "Security"],
        summary:
          "Built an encrypted file system over AWS S3 using FUSE and AES-256-CBC hooks.",
        kind: "coursework",
        pill: "Coursework",
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
  },
  {
    year: "2024",
    highlight: {
      title: "HarmonAIze - Hackathon Winner",
      slug: "harmonAIze",
    },
    projects: [
      {
        id: "harmonaize",
        title: "HarmonAIze",
        tags: ["ML", "Hackathon"],
        summary: "BPM-based music recommendation app that won at GrizzHacks.",
        kind: "hackathon",
        pill: "Hackathon",
      },
      {
        id: "linux-imaging",
        title: "Linux Imaging and Boot System Design",
        tags: ["Linux", "Systems"],
        summary: "Defined boot + imaging flow for Actineon PCs using Clonezilla.",
        kind: "personal",
        pill: "Personal",
      },
      {
        id: "early-ml",
        title: "Early ML Experiments",
        tags: ["AI/ML"],
        summary: "First experiments with clustering, sentiment, and recommendation.",
        kind: "personal",
        pill: "Personal",
      },
      {
        id: "sysadmin-ssl",
        title: "SSL Certificate and Server Hardening - SysAdmin (Fall 2024)",
        tags: ["Security", "Linux"],
        summary:
          "Configured HTTPS on Ubuntu with SSL/TLS, ran OpenVAS scans, and hardened Apache2.",
        kind: "coursework",
        pill: "Coursework",
      },
      {
        id: "llm-rag-lstm",
        title: "RAG + LSTM Implementations - Intro to LLMs (Winter 2024)",
        tags: ["AI/ML", "LLMs"],
        summary:
          "Built RAG pipelines and LSTM models to study LLM behaviors and training differences.",
        kind: "coursework",
        pill: "Coursework",
      },
    ],
    experience: ["Operations and Hardware Intern @ 365 Retail Markets"],
    skills: [
      "ML workflows",
      "BPM clustering",
      "Linux imaging",
      "Team collaboration",
    ],
  },
];

export default function TimelinePage() {
  const [activeYear, setActiveYear] = useState(timelineData[0]?.year ?? null);
  const [lockedProject, setLockedProject] = useState(null);
  const [hoverProject, setHoverProject] = useState(null);
  const [isNarrow, setIsNarrow] = useState(() => window.innerWidth < 1180);

  const years = timelineData.map((b) => b.year);

  useEffect(() => {
    const onResize = () => setIsNarrow(window.innerWidth < 1180);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const activeYearData = useMemo(
    () => timelineData.find((y) => y.year === activeYear) ?? null,
    [activeYear]
  );

  const projectForPreview = useMemo(() => {
    if (hoverProject) return hoverProject;
    if (lockedProject) return lockedProject;
    if (activeYearData?.projects?.length) return activeYearData.projects[0];
    return null;
  }, [hoverProject, lockedProject, activeYearData]);

  const handleYearToggle = (year) => {
    setActiveYear((prev) => (prev === year ? null : year));
    setHoverProject(null);
  };

  return (
    <div style={{ padding: "118px 2.8vw 96px", minHeight: "100vh" }}>
      <FadeIn>
        <h1
          style={{
            color: "white",
            fontSize: "clamp(2.2rem, 3.7vw, 3.2rem)",
            width: "min(1720px, 100%)",
            margin: "0 auto 34px",
            fontWeight: 700,
          }}
        >
          Timeline
        </h1>
      </FadeIn>

      <div
        style={{
          width: "min(1720px, 100%)",
          margin: "0 auto",
          display: isNarrow ? "block" : "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(320px, 360px)",
          gap: "28px",
          alignItems: "flex-start",
        }}
      >
        <div style={{ width: "100%" }}>
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

        <div
          style={{
            width: "100%",
            maxWidth: isNarrow ? "100%" : "360px",
            position: isNarrow ? "static" : "sticky",
            top: "112px",
            alignSelf: "flex-start",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            marginTop: isNarrow ? "16px" : 0,
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
