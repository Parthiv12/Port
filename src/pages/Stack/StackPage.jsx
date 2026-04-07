import FadeIn from "../../components/ui/FadeIn.jsx";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/ui/tabs.jsx";
import { motion } from "framer-motion";

const categorizedStack = [
  {
    title: "Core",
    description: "The primary toolkit for raw system building.",
    items: ["Python", "Next.js & React", "Node.js", "C++"],
  },
  {
    title: "LLM Systems",
    description: "Machine learning pipelines and architectures.",
    items: ["RAG pipelines", "Fine-tuning", "Prompt systems"],
  },
  {
    title: "Distributed Systems",
    description: "System engineering and distributed architectures.",
    items: ["API design", "Observability", "Multi-agent systems", "REST & JWT"],
  },
  {
    title: "Data / Infra",
    description: "Databases, deployment, and infrastructure.",
    items: ["PostgreSQL (Supabase)", "MySQL & MongoDB", "Docker", "Ubuntu Server"],
  }
];

export default function StackPage() {
  return (
    <div style={{ padding: "122px clamp(20px, 5vw, 64px) 96px", maxWidth: "960px", margin: "0 auto", fontFamily: "system-ui, sans-serif", minHeight: "100vh" }}>
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
            marginBottom: "64px",
          }}
        >
          A capability map representing the systems and tools I actively wield.
        </p>
      </FadeIn>

      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0, y: 10 },
          show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
        }}
        style={{ maxWidth: "800px" }}
      >
        <Tabs defaultValue="Core" className="w-full">
          <TabsList style={{ background: "transparent", borderBottom: "1px solid rgba(255,255,255,0.1)", padding: 0, borderRadius: 0, marginBottom: "40px", display: "flex", flexWrap: "wrap", justifyContent: "flex-start", gap: "32px", width: "100%" }}>
            {categorizedStack.map((category) => (
              <TabsTrigger 
                key={category.title} 
                value={category.title}
                style={{
                   padding: "12px 0", 
                   fontSize: "1.05rem",
                   color: "rgba(255,255,255,0.5)",
                   transition: "color 0.2s",
                   background: "transparent",
                   position: "relative",
                   boxShadow: "none"
                }}
                className="data-[state=active]:text-white data-[state=active]:after:content-[''] data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:w-full data-[state=active]:after:h-[2px] data-[state=active]:after:bg-white"
              >
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {categorizedStack.map((category) => (
            <TabsContent key={category.title} value={category.title} style={{ outline: "none" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div>
                  <h2 style={{
                    color: "white",
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    marginBottom: "8px",
                    letterSpacing: "-0.01em"
                  }}>
                    {category.title}
                  </h2>
                  <p style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "1.05rem",
                    lineHeight: 1.6,
                    maxWidth: "500px",
                    margin: 0
                  }}>
                    {category.description}
                  </p>
                </div>

                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  marginTop: "16px"
                }}>
                  {category.items.map((item, i) => (
                    <div key={i} style={{
                      display: "grid",
                      gridTemplateColumns: "16px 1fr",
                      gap: "16px",
                      alignItems: "center"
                    }}>
                      <div style={{ width: "6px", height: "1px", background: "rgba(255,255,255,0.3)" }} />
                      <span style={{
                        color: "rgba(255,255,255,0.9)",
                        fontSize: "1.1rem",
                        fontWeight: 400,
                        letterSpacing: "-0.01em"
                      }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </div>
  );
}
