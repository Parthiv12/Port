import FadeIn from "../../components/ui/FadeIn.jsx";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./NotesPage.css";

const notesData = [
  {
    title: "Building a RAG system from scratch",
    date: "March 2025",
    description: "An overview of chunking strategies, hybrid search implementations, and the technical hurdles in minimizing LLM hallucination.",
    link: "#"
  },
  {
    title: "What breaks in distributed tracing",
    date: "October 2024",
    description: "Lessons learned while building TraceLens—handling span generation overhead, asynchronous boundaries, and clock skew.",
    link: "#"
  },
  {
    title: "Lessons from implementing FUSE",
    date: "April 2024",
    description: "A deep dive into abstracting AWS S3 behind a POSIX-compliant interface and intercepting syscalls for transparent AES encryption.",
    link: "#"
  }
];

export default function NotesPage() {
  return (
    <div style={{ padding: "122px clamp(16px, 4vw, 64px) 100px", width: "100%", maxWidth: "960px", margin: "0 auto", fontFamily: "system-ui, sans-serif" }}>
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
          Notes
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            maxWidth: "680px",
            marginBottom: "80px",
            lineHeight: 1.6,
            fontSize: "1.15rem",
          }}
        >
          Things I’ve learned while building systems.
        </p>
      </FadeIn>

      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {notesData.map((note, index) => (
          <FadeIn delay={index * 0.1} key={index}>
            <Link to={note.link} className="note-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px" }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "rgba(255,255,255,0.95)", transition: "color 0.2s" }}>
                  {note.title}
                </h3>
                <span style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.4)" }}>{note.date}</span>
              </div>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem", lineHeight: 1.6, margin: 0 }}>
                {note.description}
              </p>
            </Link>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
