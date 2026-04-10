import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Terminal, Database, BrainCircuit, Activity, Briefcase, Lock, Search, ArrowRight } from "lucide-react";
import FadeIn from "../../components/ui/FadeIn.jsx";

const timelineData = [
  {
    year: "2026",
    items: [
      {
        title: "TraceLens – Distributed Tracing Platform",
        category: "Observability",
        icon: Search,
        description: "Observability tool that pinpoints bottlenecks across microservices natively.",
        tech: ["OpenTelemetry", "Docker", "NestJS", "React"],
        link: "/projects/tracelens"
      },
      {
        title: "SpeechMatch — Capstone Team Lead",
        category: "Voice AI",
        icon: BrainCircuit,
        description: "Led backend architecture and scoring pipelines for an AI speech evaluation tool.",
        tech: ["Azure Speech", "OCR", "Python", "Mobile"],
        link: "/projects/speechmatch"
      }
    ]
  },
  {
    year: "2025",
    items: [
      {
        title: "Retrieval-Augmented Generation (RAG) Research",
        category: "AI/ML",
        icon: BrainCircuit,
        description: "Rigorous study into vector retrieval methodologies and LLM hallucination reduction.",
        tech: ["Python", "DPR", "ColBERT", "SELF-RAG"],
        link: "/rag"
      },
      {
        title: "AWS S3 Encrypted FUSE Filesystem",
        category: "Systems",
        icon: Lock,
        description: "Encrypted file system over AWS S3 using FUSE and AES-256-CBC hooks.",
        tech: ["C++", "FUSE3", "AWS S3", "Encryption"],
        link: "/projects/aws-s3-fuse-filesystem"
      },
      {
        title: "Movie Recommendation Engine",
        category: "Backend",
        icon: Database,
        description: "Clustering and metadata-based recommendation engine.",
        tech: ["Flask", "Supabase", "K-Means"],
        link: "/projects/movie-recommender"
      },
      {
        title: "Database Intern @ 365 Retail Markets",
        category: "Experience",
        icon: Briefcase,
        description: "Tuned SQL queries, configured instance replication, and optimized buffer pools.",
        tech: ["SQL", "Replication", "Performance Tuning"]
      }
    ]
  },
  {
    year: "2024",
    items: [
      {
        title: "HarmonAIze (GrizzHacks)",
        category: "Full-Stack",
        icon: Activity,
        description: "BPM-based music recommender updating in real-time via heart rate changes.",
        tech: ["React", "Flask", "K-Means"],
        link: "/projects/harmonaize"
      },
      {
        title: "Operations & Hardware Intern @ 365 Retail Markets",
        category: "Experience",
        icon: Briefcase,
        description: "Managed Linux imaging workflows and self-service kiosk infrastructure.",
        tech: ["Linux", "Infrastructure", "Hardware"]
      }
    ]
  }
];

export default function TimelinePage() {
  return (
    <div
      className="min-h-screen font-sans"
      style={{
        padding: "120px clamp(16px, 4vw, 40px) 100px",
        maxWidth: "840px",
        margin: "0 auto",
      }}
    >
      <FadeIn>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-12">
          Timeline
        </h1>
      </FadeIn>

      <div className="flex flex-col">
        {timelineData.map((yearGroup, index) => (
          <div key={yearGroup.year} className="mb-6">
            <FadeIn delay={index * 0.1}>
              <h2 className="text-3xl font-bold text-muted-foreground/50 mb-6 pl-1 tracking-tight">
                {yearGroup.year}
              </h2>
              <div className="flex flex-col gap-2">
                {yearGroup.items.map((item, j) => {
                  const Icon = item.icon || Terminal;
                  
                  const rowContent = (
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="group flex flex-col sm:flex-row gap-4 sm:gap-6 py-6 border-b border-white/5 last:border-0 cursor-pointer"
                    >
                      <div className="flex mt-1">
                        <Icon className="w-5 h-5 text-white/30" />
                      </div>
                      
                      <div className="flex flex-col flex-1">
                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                          <h3 className="text-[1.15rem] font-medium text-white/90 m-0 leading-tight">
                            {item.title}
                          </h3>
                          <span className="text-[0.9rem] text-white/30 tracking-tight hidden sm:inline-block">
                            {item.category}
                          </span>
                        </div>
                        
                        <p className="text-[1.05rem] leading-relaxed text-white/60 m-0 mb-3 max-w-[620px]">
                          {item.description}
                        </p>
                        
                        <div className="text-[0.95rem] text-white/30 tracking-wide font-light flex items-center">
                          {item.tech.join("  ·  ")}
                          {item.link && (
                            <ArrowRight className="w-4 h-4 ml-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );

                  return (
                    <FadeIn key={j} delay={(index * 0.1) + (j * 0.05)}>
                      {item.link ? (
                        <Link to={item.link} className="block no-underline">
                          {rowContent}
                        </Link>
                      ) : (
                        <div className="block no-underline">
                          {rowContent}
                        </div>
                      )}
                    </FadeIn>
                  );
                })}
              </div>
            </FadeIn>
            
            {index < timelineData.length - 1 && (
              <div className="h-12" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
