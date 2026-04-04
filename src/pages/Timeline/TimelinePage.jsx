import { motion } from "framer-motion";
import FadeIn from "../../components/ui/FadeIn.jsx";
import { Link } from "react-router-dom";

const timelineData = [
  {
    year: "2025",
    items: [
      {
        type: "Featured Project",
        role: "Movie Recommendation Engine",
        context: "Clustering and metadata-based recommendation engine.",
        link: "/projects/movie-recommender",
        linkText: "View project →"
      },
      {
        type: "Experience",
        role: "Database Intern",
        company: "365 Retail Markets",
        context: "Tuned SQL queries, configured instance replication, and optimized buffer pools.",
      },
    ]
  },
  {
    year: "2024",
    items: [
      {
        type: "Featured Project",
        role: "TraceLens – Distributed Tracing Platform",
        context: "Observability tool that pinpoints bottlenecks across microservices natively.",
        link: "/projects/tracelens",
        linkText: "See case study →"
      },
      {
        type: "Hackathon Winner",
        role: "HarmonAIze",
        company: "GrizzHacks",
        context: "BPM-based music recommender updating in real-time via heart rate changes.",
        link: "/projects/harmonaize",
        linkText: "View project →"
      },
      {
        type: "Experience",
        role: "Operations & Hardware Intern",
        company: "365 Retail Markets",
        context: "Managed Linux imaging workflows and self-service kiosk infrastructure.",
      },
      {
        type: "Systems / Security",
        role: "Secure S3 File System",
        context: "Encrypted file system over AWS S3 using FUSE and AES-256-CBC hooks.",
        link: "/projects/aws-s3-fuse-filesystem",
        linkText: "See architecture →"
      },
      {
        type: "Capstone",
        role: "Team Lead — SpeechMatch",
        context: "Led backend architecture and scoring pipelines for an AI speech evaluation tool.",
        link: "/projects/speechmatch",
        linkText: "See case study →"
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
          background: "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.02) 100%)",
          zIndex: 0
        }} />

        {timelineData.map((block, i) => (
          <div key={block.year} style={{ marginBottom: "56px" }}>
            <FadeIn delay={i * 0.1}>
              <h2 style={{
                fontSize: "1.5rem",
                color: "rgba(255,255,255,0.8)",
                fontWeight: 600,
                marginBottom: "32px",
                marginLeft: "32px",
                display: "flex",
                alignItems: "center"
              }}>
                {block.year}
              </h2>
            </FadeIn>

            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
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
                    top: "8px",
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.6)",
                    zIndex: 1,
                    boxShadow: "0 0 10px rgba(255,255,255,0.3)"
                  }} />

                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px"
                  }}>
                    <div style={{ 
                      fontSize: "0.85rem", 
                      textTransform: "uppercase", 
                      letterSpacing: "0.06em",
                      color: "rgba(255,255,255,0.4)",
                      marginBottom: "4px",
                      fontWeight: 600
                    }}>
                      {item.type}
                    </div>
                    <div style={{
                      fontSize: "1.2rem",
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.95)"
                    }}>
                      {item.role} {item.company && <span style={{ color: "rgba(255,255,255,0.5)" }}>@ {item.company}</span>}
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
                    
                    {item.link && (
                      <Link to={item.link} style={{
                        marginTop: "8px",
                        fontSize: "0.95rem",
                        color: "rgba(255,255,255,0.8)",
                        textDecoration: "none",
                        fontWeight: 500,
                        display: "inline-block",
                        borderBottom: "1px solid rgba(255,255,255,0.2)",
                        width: "fit-content",
                        paddingBottom: "2px"
                      }}>
                        {item.linkText}
                      </Link>
                    )}
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
