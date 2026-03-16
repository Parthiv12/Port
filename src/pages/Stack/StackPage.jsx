import FadeIn from "../../components/ui/FadeIn.jsx";
import { motion as Motion } from "framer-motion";

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
    <div style={{ padding: "122px clamp(16px, 4vw, 64px) 110px", maxWidth: "1520px", margin: "0 auto" }}>
      <FadeIn>
        <h1
          style={{
            color: "white",
            fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
            fontWeight: 700,
            marginBottom: "10px",
          }}
        >
          Tech Stack
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.8)",
            fontSize: "1.08rem",
            maxWidth: "820px",
            lineHeight: 1.7,
          }}
        >
          Tools I use in project work, coursework, and hackathons. This page is
          scoped to what I can build with right now, not generic buzzwords.
        </p>
      </FadeIn>

      <Motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.05 },
          },
        }}
        style={{
          marginTop: "40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "18px",
        }}
      >
        {stackGroups.map((group) => (
          <StackCard key={group.title} title={group.title} items={group.items} />
        ))}
      </Motion.div>
    </div>
  );
}

function StackCard({ title, items }) {
  return (
    <Motion.article
      variants={{
        hidden: { opacity: 0, y: 20, scale: 0.985 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.42, ease: "easeOut" } },
      }}
      whileHover={{ y: -3 }}
      style={{
        background: "linear-gradient(165deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03) 58%)",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: "16px",
        padding: "18px 18px 16px",
        backdropFilter: "blur(6px)",
        minHeight: "180px",
        boxShadow: "0 8px 22px rgba(0,0,0,0.2)",
      }}
    >
      <h2
        style={{
          color: "white",
          fontSize: "1.08rem",
          marginBottom: "12px",
          fontWeight: 700,
          letterSpacing: "0.01em",
        }}
      >
        {title}
      </h2>
      <Motion.ul
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          listStyle: "none",
          padding: 0,
          margin: 0,
          color: "rgba(255,255,255,0.88)",
          fontSize: "0.86rem",
          lineHeight: 1.3,
        }}
      >
        {items.map((item) => (
          <li
            key={item}
            style={{
              padding: "6px 10px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.16)",
              background: "rgba(12, 18, 28, 0.4)",
              whiteSpace: "nowrap",
            }}
          >
            {item}
          </li>
        ))}
      </Motion.ul>
    </Motion.article>
  );
}
