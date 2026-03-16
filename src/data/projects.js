export const projectsCatalog = [
  {
    slug: "harmonAIze",
    title: "HarmonAIze — GrizzHacks Winner",
    description:
      "A music recommendation engine powered by BPM clustering that adapts to real-time user physiological state.",
    tags: ["AI/ML", "Full-Stack", "Hackathon"],
    year: "2024",
    started: "Jan 2024 — Mar 2024",
    long:
      "HarmonAIze is a full-stack music recommendation engine that adapts to heart rate in real time. Built during GrizzHacks 2024, it uses clustering to group songs by BPM and recommend tracks that better match current physiological state.",
    challenge:
      "Most recommendation demos ignore real-time user state. The goal was to map physiological input to usable music recommendations quickly enough for live interaction.",
    approach:
      "Built a BPM-centered recommendation pipeline with clustering and a lightweight full-stack interface so model behavior could be tested in real time during hackathon constraints.",
    outcome:
      "Won Interactive Media at GrizzHacks and validated the concept with live demo feedback.",
    proofPoints: ["Hackathon winner", "Real-time BPM adaptation", "Full-stack ML delivery"],
    links: {
      demo: "",
      github: "",
      docs: "",
    },
  },
  {
    slug: "voice-ai",
    title: "Multi-Agent Voice Assistant (ASI-1)",
    description:
      "A Fetch.ai multi-agent system integrating STT → routing → ElevenLabs TTS with fatigue detection and conversational memory.",
    tags: ["AI Agents", "Voice AI", "Full-Stack"],
    year: "2025",
    started: "Jan 2025 — Present",
    long:
      "This project integrates Fetch.ai ASI-1 with a multi-agent architecture for a conversational voice assistant. Speech is transcribed, routed through specialist agents, then synthesized with ElevenLabs TTS.",
    challenge:
      "Voice assistants often feel brittle in long sessions. The target was smoother conversational flow with task routing and memory.",
    approach:
      "Used a multi-agent architecture for intent routing, speech IO, and context handling so each component could be tuned independently.",
    outcome:
      "Produced a stable prototype suitable for hackathon/demo use and iterative expansion.",
    proofPoints: ["Multi-agent orchestration", "Speech-to-speech pipeline", "Memory-aware conversation"],
    links: {
      demo: "",
      github: "",
      docs: "",
    },
  },
  {
    slug: "movie-recommender",
    title: "Movie Recommendation Engine",
    description:
      "Clustering + collaborative filtering model with a React + Flask UI and TMDB integration.",
    tags: ["AI/ML", "Full-Stack"],
    year: "2025",
    started: "Feb 2025 — Present",
    long:
      "A full-stack app that suggests movies based on user preferences using clustering and collaborative filtering. It integrates TMDB for live data and uses a React + Flask architecture.",
    challenge:
      "Recommendation quality drops quickly without enough user signals. The project needed practical personalization with sparse inputs.",
    approach:
      "Combined collaborative filtering with clustering and added TMDB metadata enrichment to improve relevance and cold-start behavior.",
    outcome:
      "Delivered an end-to-end recommendation product with explainable categories and iterative model tuning.",
    proofPoints: ["Hybrid recommendation model", "TMDB integration", "React + Flask architecture"],
    links: {
      demo: "",
      github: "",
      docs: "",
    },
  },
  {
    slug: "job-search-app",
    title: "Gamified Job Search Platform",
    description:
      "XP, streaks, match scoring, achievements — a fully gamified job-hunting platform designed for consistency.",
    tags: ["Full-Stack", "Gamification"],
    year: "2025",
    started: "Mar 2025 — Present",
    long:
      "A gamified job-hunting platform focused on consistency. Users track progress through XP, streaks, and achievement loops while the backend scores job relevance.",
    challenge:
      "Job search tools are often passive and hard to stay consistent with. The target was behavior reinforcement through progress mechanics.",
    approach:
      "Designed an XP/streak system around applications and profile milestones, then connected it to backend scoring and user progress tracking.",
    outcome:
      "Created a feature-complete prototype focused on consistency loops and measurable activity.",
    proofPoints: ["Gamified engagement loop", "Match scoring system", "Progress tracking design"],
    links: {
      demo: "",
      github: "",
      docs: "",
    },
  },
  {
    slug: "security-ssl",
    title: "SSL/TLS System Hardening Project",
    description:
      "Configured Ubuntu SSL/TLS, OpenVAS scanning, Apache security hardening and secure deployment on port 444.",
    tags: ["Security", "Linux", "Networking"],
    year: "2024",
    started: "Sep 2024 — Dec 2024",
    long:
      "Configured HTTPS on Ubuntu with SSL/TLS, ran OpenVAS vulnerability scans, and hardened Apache2 settings for safer deployment.",
    challenge:
      "Default server setups leave avoidable attack surface. The assignment needed production-like hardening steps and validation.",
    approach:
      "Configured TLS, tightened Apache settings, and scanned for vulnerabilities with OpenVAS to verify baseline security posture.",
    outcome:
      "Established a hardened server configuration and documented repeatable security checks.",
    proofPoints: ["TLS/HTTPS setup", "OpenVAS assessment", "Apache hardening"],
    links: {
      demo: "",
      github: "",
      docs: "",
    },
  },
  {
    slug: "sql-optimization",
    title: "SQL Optimization & Replication Systems",
    description:
      "Advanced SQL optimization work: indexing, replication, triggers, plan cache and buffer pool tuning.",
    tags: ["Database", "Optimization", "Systems"],
    year: "2025",
    started: "May 2025 — Aug 2025",
    long:
      "Internship project work focused on query performance, execution plan tuning, replication setup, and operational SQL reliability improvements.",
    challenge:
      "Slow and inconsistent SQL behavior impacts operational reliability. The goal was measurable query and replication stability gains.",
    approach:
      "Used indexing strategy, execution plan analysis, and replication tuning to reduce latency and improve database consistency.",
    outcome:
      "Improved production query performance and reduced recurring operational bottlenecks.",
    proofPoints: ["Index and plan tuning", "Replication setup", "Production SQL optimization"],
    links: {
      demo: "",
      github: "",
      docs: "",
    },
  },
  {
    slug: "github-stats-api",
    title: "GitHub Stats API Tool",
    description:
      "Small web app using GitHub API to fetch user stats and profile information.",
    tags: ["API", "JavaScript"],
    year: "2025",
    started: "Jul 2025 — Aug 2025",
    long:
      "A compact API-first project that pulls GitHub profile stats and presents them in a clean UI for quick portfolio snapshots.",
    links: {
      demo: "",
      github: "",
      docs: "",
    },
  },
  {
    slug: "secure-s3-filesystem",
    title: "Secure S3 File System",
    description:
      "Encrypted file system over AWS S3 using FUSE hooks and AES-based encryption.",
    tags: ["Systems", "Security", "Coursework"],
    year: "2025",
    started: "Oct 2025 — Dec 2025",
    long:
      "Operating systems coursework implementing a secure S3-backed file system with encryption and filesystem abstraction.",
    links: {
      demo: "",
      github: "",
      docs: "",
    },
  },
  {
    slug: "linux-imaging-boot",
    title: "Linux Imaging and Boot System Design",
    description:
      "Defined a repeatable boot and imaging process for hardware prep using Clonezilla.",
    tags: ["Linux", "Systems"],
    year: "2024",
    started: "Jun 2024 — Aug 2024",
    long:
      "Built and documented a practical Linux imaging workflow used for consistent machine setup and recovery.",
    links: {
      demo: "",
      github: "",
      docs: "",
    },
  },
  {
    slug: "early-ml-experiments",
    title: "Early ML Experiments",
    description:
      "Initial clustering, sentiment, and recommendation experiments used to build later projects.",
    tags: ["AI/ML"],
    year: "2024",
    started: "Aug 2024 — Oct 2024",
    long:
      "A set of foundational ML experiments that informed later recommendation and model-integration work.",
    links: {
      demo: "",
      github: "",
      docs: "",
    },
  },
  {
    slug: "rag-lstm-llm",
    title: "RAG + LSTM Implementations",
    description:
      "Course implementations exploring retrieval-augmented generation and sequence modeling.",
    tags: ["AI/ML", "LLMs", "Coursework"],
    year: "2024",
    started: "Nov 2024 — Dec 2024",
    long:
      "Coursework project implementing RAG pipelines and LSTM variants to compare retrieval quality and sequence behavior.",
    links: {
      demo: "",
      github: "",
      docs: "",
    },
  },
];

export const projectBySlug = Object.fromEntries(
  projectsCatalog.map((project) => [project.slug, project])
);
