import { useParams } from "react-router-dom";

export default function ProjectDetailPage() {
  const { slug } = useParams();

  const projects = {
    "harmonAIze": {
      title: "HarmonAIze — GrizzHacks Winner",
      long:
        "HarmonAIze is a music recommendation engine built around realtime BPM clustering...",
      // more details later
    },
    "voice-ai": {
      title: "Multi-Agent Voice Assistant",
      long: "...",
    },
    // add others here
  };

  const project = projects[slug];

  if (!project)
    return (
      <div style={{ color: "white", paddingTop: "160px" }}>
        <h1>Project Not Found</h1>
      </div>
    );

  return (
    <div style={{ padding: "140px 5%", color: "white", maxWidth: "900px" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "40px" }}>
        {project.title}
      </h1>

      <p style={{ fontSize: "1.2rem", opacity: 0.8, lineHeight: 1.7 }}>
        {project.long}
      </p>
    </div>
  );
}
