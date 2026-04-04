import FadeIn from "../../components/ui/FadeIn.jsx";
import { motion } from "framer-motion";

const categorizedStack = [
  {
    title: "Core Stack I Use Most",
    description: "The languages and frameworks I reach for first when building systems from scratch.",
    items: "Python, Next.js, React, Node.js, C++",
  },
  {
    title: "AI / ML",
    description: "Architectures, libraries, and models I use for machine learning pipelines.",
    items: "TensorFlow / Keras, Hugging Face, LLMs (OpenAI-style APIs), Sequence Models, K-Means Clustering, Collaborative Filtering",
  },
  {
    title: "Backend / Systems",
    description: "System engineering, API design, and distributed architectures.",
    items: "REST APIs, Flask, Express, JWT Authentication, Multi-Agent Systems (uAgents)",
  },
  {
    title: "Data / Infra",
    description: "Databases, deployment, and underlying infrastructure.",
    items: "PostgreSQL (Supabase), MySQL, MongoDB, Docker, Git / GitHub, Ubuntu Server",
  },
  {
    title: "Also Comfortable With",
    description: "Tools I use as needed for specific projects or legacy systems.",
    items: "Java, C, SQL Server, Kubernetes (intro), R, Kotlin, OpenVAS",
  }
];

export default function StackPage() {
  return (
    <div style={{ padding: "122px clamp(20px, 5vw, 64px) 96px", maxWidth: "960px", margin: "0 auto", fontFamily: "system-ui, sans-serif" }}>
      <FadeIn>
        <h1
          style={{
            color: "white",
            fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
            fontWeight: 700,
            marginBottom: "16px",
            letterSpacing: "-0.02em"
          }}
        >
          Tech Stack
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "1.15rem",
            maxWidth: "680px",
            lineHeight: 1.6,
            marginBottom: "80px",
          }}
        >
          An honest breakdown of the tools I use daily versus the ones I pick up when a project demands it. No fluff, just the stack.
        </p>
      </FadeIn>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        style={{ display: "flex", flexDirection: "column", gap: "48px" }}
      >
        {categorizedStack.map((category) => (
          <Row key={category.title} {...category} />
        ))}
      </motion.div>
    </div>
  );
}

function Row({ title, description, items }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 15 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
      }}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "24px",
        paddingBottom: "48px",
        borderBottom: "1px solid rgba(255,255,255,0.08)"
      }}
    >
      <div>
        <h2 style={{
          color: "white",
          fontSize: "1.25rem",
          fontWeight: 600,
          marginBottom: "8px",
          letterSpacing: "-0.01em"
        }}>
          {title}
        </h2>
        <p style={{
          color: "rgba(255,255,255,0.5)",
          fontSize: "0.95rem",
          lineHeight: 1.5,
          maxWidth: "360px",
          margin: 0
        }}>
          {description}
        </p>
      </div>

      <div style={{
        display: "flex",
        alignItems: "center"
      }}>
        <p style={{
          color: "rgba(255,255,255,0.9)",
          fontSize: "1.1rem",
          lineHeight: 1.6,
          fontWeight: 400,
          margin: 0
        }}>
          {items}
        </p>
      </div>
    </motion.div>
  );
}
