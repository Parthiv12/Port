import { motion } from "framer-motion";
import SectionShell from "../layout/SectionShell.jsx";
import "./projects-section.css";

const projects = [
  {
    title: "TraceLens",
    blurb:
      "Observability platform that transforms raw traces into an interactive request graph for debugging microservices.",
    tags: ["OpenTelemetry", "Jaeger", "React", "Node.js"],
  },
  {
    title: "SpeechMatch",
    blurb:
      "Pronunciation training system with scoring pipelines, session tracking, and detailed feedback flows.",
    tags: ["FastAPI", "Postgres", "Expo", "Azure Speech"],
  },
  {
    title: "LLM Work",
    blurb:
      "Hands-on experimentation with model architecture, fine-tuning, and applied AI systems.",
    tags: ["PyTorch", "Transformers", "RAG", "Systems"],
  },
];

export default function ProjectsSection() {
  return (
    <SectionShell
      id="projects"
      eyebrow="Selected Work"
      title="Projects built around real systems, not just demos."
      description="A mix of AI, backend engineering, observability, and full-stack systems with an emphasis on architecture and execution."
      background="particles"
    >
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
          >
            <h3>{project.title}</h3>
            <p>{project.blurb}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
