import { useParams, Link } from "react-router-dom";
import { projectBySlug } from "../../data/projects.js";
import { Badge } from "../../components/ui/badge.jsx";
import { Separator } from "../../components/ui/separator.jsx";
import { ArrowLeft, Globe, FileText } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import FadeIn from "../../components/ui/FadeIn.jsx";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projectBySlug[slug];

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-white bg-background">
        <h1 className="text-3xl font-bold">Project Not Found</h1>
        <Link to="/projects" className="mt-4 text-white/60 hover:text-white transition-colors">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans pb-24" style={{ padding: "100px clamp(16px, 4vw, 40px) 100px", maxWidth: "800px", margin: "0 auto" }}>
      <FadeIn>
        {/* Back link */}
        <Link to="/timeline" className="inline-flex items-center text-sm font-medium text-white/50 hover:text-white transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Timeline
        </Link>

        {/* Hero */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-3 text-xs font-semibold text-white/40 uppercase tracking-widest">
            <span>{project.year}</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>Project</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 leading-tight">
            {project.title}
          </h1>
          
          <p className="text-[1.1rem] text-white/70 leading-relaxed mb-6 max-w-[650px]">
            {project.long || project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags?.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-white/5 hover:bg-white/10 text-white/70 border border-white/5 font-medium px-2.5 py-0.5 shadow-none">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {project.links?.demo && (
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium bg-white text-black px-4 py-2 rounded-lg hover:bg-white/90 transition-colors">
                <Globe className="w-4 h-4 mr-2" /> Live Demo
              </a>
            )}
            {project.links?.github && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20 border border-white/5 transition-colors">
                <FaGithub className="w-4 h-4 mr-2" /> GitHub Repo
              </a>
            )}
            {project.links?.docs && (
              <a href={project.links.docs} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20 border border-white/5 transition-colors">
                <FileText className="w-4 h-4 mr-2" /> Documentation
              </a>
            )}
          </div>
        </header>

        <Separator className="bg-white/10 mb-10" />

        <div className="grid gap-10">
          {project.challenge && (
            <section>
              <h2 className="text-[1.15rem] font-semibold text-white mb-2 tracking-tight">The Problem</h2>
              <p className="text-[1.05rem] text-white/60 leading-relaxed max-w-[650px]">{project.challenge}</p>
            </section>
          )}

          {project.approach && (
            <section>
              <h2 className="text-[1.15rem] font-semibold text-white mb-2 tracking-tight">Approach</h2>
              <p className="text-[1.05rem] text-white/60 leading-relaxed max-w-[650px]">{project.approach}</p>
            </section>
          )}

          {project.proofPoints && project.proofPoints.length > 0 && (
            <section>
              <h2 className="text-[1.15rem] font-semibold text-white mb-3 tracking-tight">Key Implementations</h2>
              <ul className="list-disc list-inside text-[1.05rem] text-white/60 leading-relaxed space-y-1">
                {project.proofPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </section>
          )}

          {project.outcome && (
            <section>
              <h2 className="text-[1.15rem] font-semibold text-white mb-2 tracking-tight">Outcome</h2>
              <p className="text-[1.05rem] text-white/60 leading-relaxed max-w-[650px]">{project.outcome}</p>
            </section>
          )}
        </div>
      </FadeIn>
    </div>
  );
}
