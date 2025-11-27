import FadeIn from "../../components/ui/FadeIn.jsx";

export default function StackPage() {
  return (
    <div style={{ padding: "140px 5% 120px", maxWidth: "1100px", margin: "0 auto" }}>
      <FadeIn>
        <h1
          style={{
            color: "white",
            fontSize: "3rem",
            fontWeight: 700,
            marginBottom: "12px",
          }}
        >
          Tech Stack
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "1.1rem",
            maxWidth: "680px",
            lineHeight: 1.7,
          }}
        >
          I work across AI/ML, full-stack web, databases, and security. 
          Here’s the stack I actually use to build, deploy, and tune systems.
        </p>
      </FadeIn>

      <div
        style={{
          marginTop: "40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "26px",
        }}
      >
        {/* Languages */}
        <StackCard
          title="Languages"
          items={[
            "Python",
            "Java",
            "C++",
            "C",
            "JavaScript",
            "R",
            "Kotlin",
          ]}
        />

        {/* Web & Frameworks */}
        <StackCard
          title="Web & Frameworks"
          items={[
            "React",
            "Next.js",
            "Flask",
            "REST APIs",
          ]}
        />

        {/* AI / ML */}
        <StackCard
          title="AI / ML"
          items={[
            "K-Means Clustering",
            "Collaborative Filtering",
            "TensorFlow / Keras",
            "Hugging Face",
            "LLMs (ASI-1, OpenAI style APIs)",
            "Multi-Agent Systems (uAgents)",
          ]}
        />

        {/* Databases */}
        <StackCard
          title="Databases"
          items={[
            "MySQL",
            "SQL Server",
            "MongoDB",
            "Supabase (Postgres)",
            "Indexing & Query Optimization",
            "Replication & Triggers",
          ]}
        />

        {/* Backend & Systems */}
        <StackCard
          title="Backend & Systems"
          items={[
            "API Design",
            "JWT Authentication",
            "Linux (Ubuntu, Kali)",
            "Apache2",
            "Ubuntu Server Admin",
          ]}
        />

        {/* DevOps & Tools */}
        <StackCard
          title="DevOps & Tooling"
          items={[
            "Docker",
            "Kubernetes (intro level)",
            "Git & GitHub",
            "Vite",
            "OpenVAS",
          ]}
        />

        {/* Voice / Agents */}
        <StackCard
          title="Voice & Agents"
          items={[
            "Fetch.ai ASI-1",
            "uAgents",
            "ElevenLabs TTS",
            "Web Speech API (STT)",
          ]}
        />
      </div>
    </div>
  );
}

function StackCard({ title, items }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.14)",
        borderRadius: "16px",
        padding: "18px 20px 20px",
        backdropFilter: "blur(10px)",
        minHeight: "170px",
      }}
    >
      <h2
        style={{
          color: "white",
          fontSize: "1.25rem",
          marginBottom: "10px",
          fontWeight: 600,
        }}
      >
        {title}
      </h2>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          color: "rgba(255,255,255,0.75)",
          fontSize: "0.98rem",
          lineHeight: 1.6,
        }}
      >
        {items.map((item) => (
          <li key={item} style={{ marginBottom: "4px" }}>
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
