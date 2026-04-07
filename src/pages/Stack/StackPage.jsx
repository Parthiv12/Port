import FadeIn from "../../components/ui/FadeIn.jsx";
import { motion } from "framer-motion";
import { useState } from "react";

const categorizedStack = [
  {
    id: "core",
    title: "Core Stack",
    description: "The primary toolkit for raw system building.",
    items: ["Python", "Next.js & React", "Node.js", "C++"],
  },
  {
    id: "llm",
    title: "LLM Systems",
    description: "Machine learning pipelines and architectures.",
    items: ["RAG pipelines", "Fine-tuning", "Prompt systems"],
  },
  {
    id: "distributed",
    title: "Distributed Systems",
    description: "System engineering and distributed architectures.",
    items: ["API design", "Observability", "Multi-agent systems", "REST & JWT"],
  },
  {
    id: "data",
    title: "Data / Infra",
    description: "Databases, deployment, and infrastructure.",
    items: ["PostgreSQL (Supabase)", "MySQL & MongoDB", "Docker", "Ubuntu Server"],
  }
];

export default function StackPage() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div style={{ padding: "122px clamp(20px, 5vw, 64px) 96px", maxWidth: "1200px", margin: "0 auto", fontFamily: "system-ui, sans-serif", minHeight: "100vh" }}>
      <FadeIn>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "24px", marginBottom: "80px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "32px" }}>
          <h1
            style={{
              color: "white",
              fontSize: "clamp(3rem, 6vw, 4.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1,
              margin: 0
            }}
          >
            Tech Stack
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "1.05rem",
              maxWidth: "320px",
              lineHeight: 1.5,
              margin: 0
            }}
          >
            A capability map representing the systems and tools I actively wield.
          </p>
        </div>
      </FadeIn>

      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "x 80px, y 64px", // visually spacing out columns and rows
          rowGap: "64px",
          columnGap: "80px"
        }}
      >
        {categorizedStack.map((category) => {
          const isDimmed = hoveredId !== null && hoveredId !== category.id;
          
          return (
            <motion.div 
              key={category.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
              }}
              onMouseEnter={() => setHoveredId(category.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                transition: "opacity 0.4s ease",
                opacity: isDimmed ? 0.3 : 1
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "16px" }}>
                <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.8rem", fontWeight: 700 }}>0{categorizedStack.findIndex(c => c.id === category.id) + 1}</span>
                <h2 style={{
                  color: "white",
                  fontSize: "1.75rem",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  margin: 0
                }}>
                  {category.title}
                </h2>
              </div>
              
              <p style={{
                color: "rgba(255,255,255,0.4)",
                fontSize: "0.95rem",
                lineHeight: 1.5,
                marginBottom: "32px",
                maxWidth: "85%"
              }}>
                {category.description}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.05)" }}>
                {category.items.map((item, i) => (
                  <div key={i} style={{
                    background: "#040508", // match user base to create 1px gap line effect
                    padding: "16px 0",
                    display: "flex",
                    alignItems: "center"
                  }}>
                    <div style={{ 
                      width: "6px", 
                      height: "6px", 
                      borderRadius: "50%", 
                      background: isDimmed ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.8)", 
                      marginRight: "16px",
                      transition: "background 0.4s ease" 
                    }} />
                    <span style={{
                      color: isDimmed ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.95)",
                      fontSize: "1.1rem",
                      fontWeight: 500,
                      transition: "color 0.4s ease",
                      letterSpacing: "-0.01em"
                    }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
