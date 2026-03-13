import FadeIn from "../../components/ui/FadeIn.jsx";

const stackGroups = [
  {
    title: "Languages",
    items: ["Python", "Java", "C++", "C", "JavaScript", "R", "Kotlin"],
  },
  {
    title: "Web and Frameworks",
    items: ["React", "Next.js", "Flask", "REST APIs"],
  },
  {
    title: "AI / ML",
    items: [
      "K-Means Clustering",
      "Collaborative Filtering",
      "TensorFlow / Keras",
      "Hugging Face",
      "LLMs (ASI-1, OpenAI-style APIs)",
      "Multi-Agent Systems (uAgents)",
    ],
  },
  {
    title: "Databases",
    items: [
      "MySQL",
      "SQL Server",
      "MongoDB",
      "Supabase (Postgres)",
      "Indexing and Query Optimization",
      "Replication and Triggers",
    ],
  },
  {
    title: "Backend and Systems",
    items: [
      "API Design",
      "JWT Authentication",
      "Linux (Ubuntu, Kali)",
      "Apache2",
      "Ubuntu Server Administration",
    ],
  },
  {
    title: "DevOps and Tooling",
    items: ["Docker", "Kubernetes (intro)", "Git and GitHub", "Vite", "OpenVAS"],
  },
  {
    title: "Voice and Agents",
    items: ["Fetch.ai ASI-1", "uAgents", "ElevenLabs TTS", "Web Speech API (STT)"],
  },
];

export default function StackPage() {
  return (
    <div style={{ padding: "122px 5% 110px", maxWidth: "1380px", margin: "0 auto" }}>
      <FadeIn>
        <h1
          style={{
            color: "white",
            fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
            fontWeight: 700,
            marginBottom: "12px",
          }}
        >
          Tech Stack
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.76)",
            fontSize: "1.15rem",
            maxWidth: "760px",
            lineHeight: 1.75,
          }}
        >
          Tools I use in project work, coursework, and hackathons. This page is
          scoped to what I can build with right now, not generic buzzwords.
        </p>
      </FadeIn>

      <div
        style={{
          marginTop: "40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {stackGroups.map((group) => (
          <StackCard key={group.title} title={group.title} items={group.items} />
        ))}
      </div>
    </div>
  );
}

function StackCard({ title, items }) {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, rgba(255,255,255,0.09), rgba(255,255,255,0.05))",
        border: "1px solid rgba(255,255,255,0.16)",
        borderRadius: "16px",
        padding: "18px 20px 20px",
        backdropFilter: "blur(10px)",
        minHeight: "170px",
      }}
    >
      <h2
        style={{
          color: "white",
          fontSize: "1.2rem",
          marginBottom: "10px",
          fontWeight: 650,
        }}
      >
        {title}
      </h2>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          color: "rgba(255,255,255,0.78)",
          fontSize: "0.98rem",
          lineHeight: 1.65,
        }}
      >
        {items.map((item) => (
          <li key={item} style={{ marginBottom: "4px" }}>
            - {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
