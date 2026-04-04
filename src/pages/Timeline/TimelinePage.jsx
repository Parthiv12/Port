import { motion } from "framer-motion";
import FadeIn from "../../components/ui/FadeIn.jsx";
import { projectBySlug } from "../../data/projects.js";

const timelineData = [
  {
    year: "2025",
    items: [
      {
        slug: "movie-recommender",
        type: "Featured Project",
        role: "Movie Recommendation Engine",
        context: "Built a recommendation engine using clustering and metadata. Gives good picks from day one using hybrid collaborative filtering.",
      },
      {
        slug: "sql-intern",
        type: "Experience",
        role: "Database Intern",
        company: "365 Retail Markets",
        context: "Optimized SQL queries with indexing and plan analysis. Configured replication between database instances and tuned buffer pools.",
      },
    ]
  },
  {
    year: "2024",
    items: [
      {
        slug: "tracelens",
        type: "Featured Project",
        role: "TraceLens – Distributed Tracing Platform",
        context: "End-to-end distributed tracing observability platform for complex microservices. Pinpoints bottlenecks in multi-service networks natively.",
      },
      {
        slug: "harmonaize",
        type: "Hackathon Winner",
        role: "HarmonAIze",
        company: "GrizzHacks",
        context: "BPM-based music recommendation app. Music recommender that updates in real time as your heart rate changes.",
      },
      {
        slug: "ops-intern",
        type: "Experience",
        role: "Operations and Hardware Intern",
        company: "365 Retail Markets",
        context: "Imaged Linux onto hardware with Clonezilla, built self-service kiosk systems, and handled cross-functional infrastructure workflows.",
      },
      {
        slug: "secure-s3-filesystem",
        type: "Systems / Security",
        role: "Secure S3 File System",
        context: "Built an encrypted file system over AWS S3 using FUSE and AES-256-CBC hooks to transparently encrypt data at rest.",
      },
      {
        slug: "speechmatch",
        type: "Capstone",
        role: "Team Lead — SpeechMatch",
        context: "Led backend direction, scoring logic, and technical coordination across the team for an AI-driven speech evaluation and modeling tool.",
      }
    ]
  }
];

export default function TimelinePage() {
  return (
    <div
      style={{
        padding: "112px clamp(16px, 3.2vw, 56px) 92px",
        minHeight: "100vh",
        maxWidth: "1040px",
        margin: "0 auto",
      }}
    >
      <FadeIn>
        <h1
          style={{
            color: "white",
            fontSize: "clamp(2.2rem, 3.6vw, 3.2rem)",
            width: "100%",
            margin: "0 0 16px",
            fontWeight: 700,
          }}
        >
          Timeline
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.6)",
            marginTop: "0",
            marginBottom: "64px",
            maxWidth: "600px",
            lineHeight: 1.65,
            fontSize: "1.1rem"
          }}
        >
          A progression of the projects, hackathons, and systems engineering experiences that have shaped my technical foundation.
        </p>
      </FadeIn>

      <div style={{ position: "relative", marginLeft: "12px" }}>
        {/* Vertical line connecting nodes */}
        <div style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "8px",
          width: "1px",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)",
          zIndex: 0
        }} />

        {timelineData.map((block, i) => (
          <div key={block.year} style={{ marginBottom: "56px" }}>
            <FadeIn delay={i * 0.1}>
              <h2 style={{
                fontSize: "2rem",
                color: "white",
                fontWeight: 600,
                marginBottom: "32px",
                marginLeft: "32px",
                display: "flex",
                alignItems: "center"
              }}>
                {block.year}
              </h2>
            </FadeIn>

            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              {block.items.map((item, j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: j * 0.05 }}
                  style={{
                    position: "relative",
                    paddingLeft: "32px",
                  }}
                >
                  {/* Timeline Dot */}
                  <div style={{
                    position: "absolute",
                    left: "5px",
                    top: "10px",
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.5)",
                    zIndex: 1,
                    boxShadow: "0 0 10px rgba(255,255,255,0.2)"
                  }} />

                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px"
                  }}>
                    <div style={{ 
                      fontSize: "0.8rem", 
                      textTransform: "uppercase", 
                      letterSpacing: "0.05em",
                      color: "rgba(255,255,255,0.4)" 
                    }}>
                      {item.type}
                    </div>
                    <div style={{
                      fontSize: "1.2rem",
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.95)"
                    }}>
                      {item.role} {item.company && <span style={{ color: "rgba(255,255,255,0.6)" }}>@ {item.company}</span>}
                    </div>
                    <p style={{
                      fontSize: "1rem",
                      color: "rgba(255,255,255,0.6)",
                      lineHeight: 1.6,
                      margin: "4px 0 0 0",
                      maxWidth: "680px"
                    }}>
                      {item.context}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
