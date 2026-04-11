import FadeIn from "../../components/ui/FadeIn.jsx";
import { Terminal, Database, Cloud, Code2, BrainCircuit, Wrench } from "lucide-react";

const stackData = [
  {
    category: "Languages",
    icon: Code2,
    skills: ["Python", "Java", "JavaScript", "SQL", "C", "C++", "Kotlin", "Ruby", "R"],
  },
  {
    category: "AI / ML",
    icon: BrainCircuit,
    skills: ["Transformers", "BERT", "GPT", "RAG", "Fine-Tuning", "RLHF", "Multimodal Models"],
  },
  {
    category: "Frameworks",
    icon: Terminal,
    skills: ["React", "Next.js", "Flask", "Ruby on Rails", "PyTorch"],
  },
  {
    category: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Firebase"],
  },
  {
    category: "DevOps / Cloud",
    icon: Cloud,
    skills: ["Docker", "Kubernetes", "Terraform", "Jenkins", "Nginx"],
  },
  {
    category: "Tools",
    icon: Wrench,
    skills: ["Postman", "SSMS", "Expo"],
  }
];

export default function StackPage() {
  return (
    <div className="min-h-screen font-sans" style={{ padding: "120px clamp(16px, 4vw, 40px) 100px", maxWidth: "860px", margin: "0 auto" }}>
      <FadeIn>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-20">
          Tech Stack
        </h1>
      </FadeIn>

      <div className="flex flex-col gap-12 sm:gap-16">
        {stackData.map((group, index) => {
          const Icon = group.icon;
          return (
            <FadeIn key={group.category} delay={index * 0.05}>
              <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-3 sm:gap-8 items-start">
                <div className="flex items-center gap-3 mt-1">
                  <Icon className="w-5 h-5 text-white/40" />
                  <h2 className="text-[1.1rem] font-medium text-white/90 tracking-tight m-0">
                    {group.category}
                  </h2>
                </div>
                <div className="text-[1.1rem] leading-relaxed text-white/50 tracking-wide font-light">
                  {group.skills.join("  ·  ")}
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
