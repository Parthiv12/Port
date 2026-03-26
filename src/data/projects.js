export const projectsCatalog = [
  {
    slug: "harmonAIze",
    title: "HarmonAIze — GrizzHacks Winner",
    description:
      "Music recommender that updates in real time as your heart rate changes. Hackathon project that proved the concept works.",
    tags: ["AI/ML", "Full-Stack", "Hackathon"],
    year: "2024",
    started: "Jan 2024 — Mar 2024",
    long:
      "A music recommendation engine that adapts in real time as your heart rate changes. Users wear a fitness tracker, and the system recommends songs that match their current BPM. Built during a 36-hour hackathon with clustering and React.",
    challenge:
      "Most recommendation UIs are static. We needed to map realtime heart rate to song picks fast enough for a 36-hour hackathon.",
    approach:
      "Clustered Spotify songs by BPM, piped in live HR data from a wearable, and built React components that updated instantly as HR changed.",
    outcome:
      "Took best interactive media award. The live demo proved the concept—attendees could see their HR drive song picks in real time.",
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
      "Conversational chatbot with agent routing, speech-to-text, and natural voice synthesis. Remembers context across turns.",
    tags: ["AI Agents", "Voice AI", "Full-Stack"],
    year: "2025",
    started: "Jan 2025 — Present",
    long:
      "A conversational AI chatbot wired up with Fetch.ai agents, real-time speech-to-text, and ElevenLabs voice synthesis. It understands what you say, figures out what you need, and talks back with a natural-sounding voice. Handles multi-turn conversations without forgetting context.",
    challenge:
      "Voice bots struggle with context—they forget what you said 30 seconds ago and misroute requests. We wanted something that could hold a real conversation.",
    approach:
      "Split the system into independent agents: one handles speech, one routes intent, one maintains conversation memory. Each could be tested and fixed separately.",
    outcome:
      "Built a working chatbot that remembered context across turns and routed requests correctly. Hackathon demo showed it handling multi-turn conversations without forgetting context.",
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
      "Movie recommender with hybrid filtering. Good picks from day one, improves as you rate films.",
    tags: ["AI/ML", "Full-Stack"],
    year: "2025",
    started: "Feb 2025 — Present",
    long:
      "A web app that gives you movie recommendations the moment you sign up. It learns what you like as you rate films, but starts smart from day one using hybrid collaborative filtering and content-based clustering.",
    challenge:
      "Movie suggestions suck when you have no watch history. The system needs to work immediately, not after 50 ratings.",
    approach:
      "Combined collaborative filtering (what similar users liked) with K-means clustering (movies by genre/mood) and enriched with TMDB metadata. Hybrid approach handles the cold-start problem.",
    outcome:
      "Built a system that gives decent recommendations from day one, gets better as users rate movies, and explains why it picked each film.",
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
      "Job search with XP, streaks, and achievements. Gamification makes applying less painful to sustain.",
    tags: ["Full-Stack", "Gamification"],
    year: "2025",
    started: "Mar 2025 — Present",
    long:
      "A gamified job search app with XP, daily streaks, and achievement badges. Every application earns points, every day applied gets a streak multiplier, every profile improvement unlocks achievements. The backend scores job relevance so you focus on good fits, not just volume.",
    challenge:
      "Job hunting is boring and easy to abandon. Most tools treat it like a to-do list—apply, forget, repeat. We wanted something that keeps you coming back.",
    approach:
      "Applied game mechanics directly to job search: XP for each application, daily streaks for consistency, achievements for profile improvements. A real job match algorithm on the backend scores fit across technical and cultural factors.",
    outcome:
      "Built a working platform that gamifies the grind. Early testers increased their application frequency just from streak anxiety.",
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
      "Ubuntu hardening with TLS, Apache lockdown, and OpenVAS scanning. Went from baseline to hardened.",
    tags: ["Security", "Linux", "Networking"],
    year: "2024",
    started: "Sep 2024 — Dec 2024",
    long:
      "Set up Ubuntu with HTTPS, hardened Apache to drop unnecessary modules, locked down firewall rules, and ran OpenVAS scans to find remaining vulnerabilities. Documented the whole process so it's repeatable on other machines.",
    challenge:
      "Fresh Ubuntu installs are wide open to basic attacks. An unpatched server can be compromised in minutes.",
    approach:
      "Set up TLS/HTTPS, tightened Apache2 to drop unnecessary modules, configured firewall rules, and ran OpenVAS to find remaining gaps. Documented every step so it's reproducible on new machines.",
    outcome:
      "Turned a baseline server into a reasonably hardened one. All major vulnerability classes identified by OpenVAS were fixed or mitigated.",
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
      "Production database bottleneck analysis. Fixed indexing, rewrote slow queries, cut latency 45%.",
    tags: ["Database", "Optimization", "Systems"],
    year: "2025",
    started: "May 2025 — Aug 2025",
    long:
      "Optimized a production database that was slow and unreliable. Found missing indexes, rewrote problem queries, fixed replication lag, and set up monitoring so ops wouldn't be blindsided by performance drops.",
    challenge:
      "Queries that should take 100ms were taking 5 seconds. Replication lag was inconsistent. Ops team was firefighting daily.",
    approach:
      "Analyzed slow query logs, found missing indexes, rewrote problem queries, optimized buffer pool settings, and set up proper replication lag monitoring. Used execution plans to identify where queries choked.",
    outcome:
      "Cut query times by 45% on the slowest operations. Set up proper replication with consistent lag. Ops team stopped getting woken up for this.",
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
