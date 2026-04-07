import { motion } from "framer-motion";
import FadeIn from "../../components/ui/FadeIn.jsx";
import { Link } from "react-router-dom";
import "./TimelinePage.css";

const segmentedTimeline = [
  {
    category: "Projects",
    type: "PROJECT",
    items: [
      {
        year: "2025",
        role: "Movie Recommendation Engine",
        context: "Clustering and metadata-based recommendation engine.",
        link: "/projects/movie-recommender",
        linkText: "See more →"
      },
      {
        year: "2024",
        role: "TraceLens – Distributed Tracing Platform",
        context: "Observability tool that pinpoints bottlenecks across microservices natively.",
        link: "/projects/tracelens",
        linkText: "View details →"
      },
      {
        year: "2024",
        role: "HarmonAIze",
        company: "GrizzHacks",
        context: "BPM-based music recommender updating in real-time via heart rate changes.",
        link: "/projects/harmonaize",
        linkText: "See more →"
      },
      {
        year: "2024",
        role: "Secure S3 File System",
        context: "Encrypted file system over AWS S3 using FUSE and AES-256-CBC hooks.",
        link: "/projects/aws-s3-fuse-filesystem",
        linkText: "View details →"
      },
      {
        year: "2024",
        role: "Team Lead — SpeechMatch",
        context: "Led backend architecture and scoring pipelines for an AI speech evaluation tool.",
        link: "/projects/speechmatch",
        linkText: "See more →"
      }
    ]
  },
  {
    category: "Work Experience",
    type: "EXPERIENCE",
    items: [
      {
        year: "2025",
        role: "Database Intern",
        company: "365 Retail Markets",
        context: "Tuned SQL queries, configured instance replication, and optimized buffer pools.",
      },
      {
        year: "2024",
        role: "Operations & Hardware Intern",
        company: "365 Retail Markets",
        context: "Managed Linux imaging workflows and self-service kiosk infrastructure.",
      }
    ]
  },
  {
    category: "Coursework / Foundations",
    type: "COURSEWORK",
    items: [
      {
        year: "Current",
        role: "B.S. Computer Science / AI Focus",
        company: "Oakland University",
        context: "Relevant focus on operating systems, algorithms, distributed systems, and sequence models.",
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
        fontFamily: "system-ui, sans-serif"
      }}
    >
      <FadeIn>
        <h1
          style={{
            color: "white",
            fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
            width: "100%",
            margin: "0 0 16px",
            fontWeight: 700,
            letterSpacing: "-0.02em"
          }}
        >
          Timeline
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.6)",
            marginTop: "0",
            marginBottom: "80px",
            maxWidth: "600px",
            lineHeight: 1.65,
            fontSize: "1.1rem"
          }}
        >
          A curated progression of systems engineering, applied AI projects, and professional experience.
        </p>
      </FadeIn>

      <div style={{ display: "flex", flexDirection: "column", gap: "80px" }}>
        {segmentedTimeline.map((block, i) => (
          <div key={block.category} style={{ position: "relative", marginLeft: "12px" }}>
            <FadeIn delay={i * 0.1}>
              <h2 style={{
                fontSize: "1.5rem",
                color: "white",
                fontWeight: 600,
                marginBottom: "40px",
                marginLeft: "32px",
                display: "flex",
                alignItems: "center"
              }}>
                {block.category}
              </h2>
            </FadeIn>

            {/* Vertical line connecting nodes for this segment */}
            <div style={{
              position: "absolute",
              top: "60px",
              bottom: 0,
              left: "8px",
              width: "1px",
              background: "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.02) 100%)",
              zIndex: 0
            }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
              {block.items.map((item, j) => {
                const isProject = block.type === "PROJECT";
                const typeClass = isProject ? "type-project" : (block.type === "EXPERIENCE" ? "type-experience" : "type-coursework");

                return (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: j * 0.05 }}
                    className={`timeline-node ${isProject ? 'is-project' : ''}`}
                  >
                    {/* Timeline Dot */}
                    <div className="timeline-dot" />

                    <div style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px"
                    }}>
                      <div className={typeClass} style={{ 
                        fontSize: "0.85rem", 
                        textTransform: "uppercase", 
                        letterSpacing: "0.06em",
                        marginBottom: "4px",
                      }}>
                        {item.year}
                      </div>
                      <div style={{
                        fontSize: "1.2rem",
                        fontWeight: 500,
                        color: isProject ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.75)"
                      }}>
                        {item.role} {item.company && <span style={{ color: "rgba(255,255,255,0.4)" }}>@ {item.company}</span>}
                      </div>
                      <p style={{
                        fontSize: "1.05rem",
                        color: "rgba(255,255,255,0.65)",
                        lineHeight: 1.5,
                        margin: "4px 0 0 0",
                        maxWidth: "680px"
                      }}>
                        {item.context}
                      </p>
                      
                      {isProject && item.link && (
                        <Link to={item.link} className="timeline-cta">
                          {item.linkText}
                        </Link>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
