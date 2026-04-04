import { motion } from "framer-motion";
import SectionShell from "../layout/SectionShell.jsx";
import "./experience-section.css";

const experience = [
  {
    role: "DBA / Software Intern",
    company: "365 Retail Markets",
    period: "2025 — Present",
    points: [
      "Worked with databases, backend workflows, and system-level debugging.",
      "Improved understanding of production engineering, data handling, and infrastructure thinking.",
    ],
  },
  {
    role: "Team Lead — SpeechMatch",
    company: "Wayne State Capstone",
    period: "2026",
    points: [
      "Led backend direction, scoring logic, and technical coordination across the team.",
      "Balanced implementation work with architecture, testing, and debugging across the stack.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <SectionShell
      id="experience"
      eyebrow="Experience"
      title="Built through systems work, iteration, and ownership."
      description="I care about architecture, debugging, delivery, and learning the deeper layers of how software behaves in real environments."
      background="waves"
    >
      <div className="experience-list">
        {experience.map((item, index) => (
          <motion.article
            key={item.role}
            className="experience-item"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <div className="experience-meta">
              <p>{item.period}</p>
            </div>
            <div className="experience-main">
              <h3>{item.role}</h3>
              <h4>{item.company}</h4>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
