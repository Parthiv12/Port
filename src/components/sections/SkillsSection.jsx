import { motion } from "framer-motion";
import SectionShell from "../layout/SectionShell.jsx";
import "./skills-section.css";

const groups = [
  {
    label: "AI / ML",
    items: ["PyTorch", "Transformers", "RAG", "Fine-Tuning", "BERT", "GPT"],
  },
  {
    label: "Backend / Systems",
    items: ["FastAPI", "Node.js", "Postgres", "SQL Server", "Docker", "Linux"],
  },
  {
    label: "Frontend / Product",
    items: ["React", "Vite", "Framer Motion", "Expo", "UI Architecture"],
  },
];

export default function SkillsSection() {
  return (
    <SectionShell
      id="skills"
      eyebrow="Core Stack"
      title="AI, systems, and product-minded engineering."
      description="I like working across model logic, backend architecture, infrastructure, and polished user-facing systems."
      background="aurora"
    >
      <div className="skills-grid">
        {groups.map((group, index) => (
          <motion.article
            key={group.label}
            className="skills-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.48, delay: index * 0.07 }}
          >
            <h3>{group.label}</h3>
            <div className="skills-pills">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
