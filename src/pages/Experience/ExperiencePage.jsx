import FadeIn from "../../components/ui/FadeIn.jsx";

export default function ExperiencePage() {
  return (
    <div style={{ padding: "140px 5% 120px", width: "100%", maxWidth: "1100px", margin: "0 auto" }}>
      <FadeIn>
        <h1
          style={{
            color: "white",
            fontSize: "3rem",
            fontWeight: 700,
            marginBottom: "10px",
          }}
        >
          Experience
        </h1>

        <p
          style={{
            color: "rgba(255,255,255,0.75)",
            maxWidth: "700px",
            lineHeight: 1.7,
            fontSize: "1.1rem",
            marginBottom: "40px",
          }}
        >
          A deeper look at the engineering experience I've gained across AI/ML, 
          backend systems, databases, and security.
        </p>
      </FadeIn>

      {/* Work Experience */}
      <Section title="Work Experience">
        <ExperienceItem
          role="Database Intern"
          company="365 Retail Markets"
          date="May 2025 – August 2025"
          bullets={[
            "Optimized SQL queries, improving execution speed by up to 45% using indexing strategies & execution plan analysis.",
            "Configured and started replication between SQL Server/MySQL instances with replication filters.",
            "Worked extensively with plan cache, buffer pool, prepared statements, and ad-hoc queries for tuning.",
            "Created custom triggers for automated data processing & alerting.",
          ]}
        />

        <ExperienceItem
          role="Operations & Hardware Intern"
          company="365 Retail Markets"
          date="June 2024 – August 2024"
          bullets={[
            "Built self-service kiosks and optimized internal hardware layouts.",
            "Booted & imaged Linux onto Actineon PCs using Clonezilla.",
            "Shadowed API, IT, Support, and Finance teams to understand full stack of retail systems.",
            "Worked on system design for Linux imaging boot process.",
          ]}
        />

        <ExperienceItem
          role="Robotics Programmer"
          company="High School Robotics Team"
          date="2019 – 2021"
          bullets={[
            "Programmed robot movement using Java and WPILib.",
            "Implemented autonomous systems and subsystem logic.",
            "Used GitHub extensively for version control & collaboration.",
          ]}
        />
      </Section>

      {/* Hackathons */}
      <Section title="Hackathons & Awards">
        <ExperienceItem
          role="Best Use of ElevenLabs — Winner"
          company="Dearborn Hacks 2025"
          date="2025"
          bullets={[
            "Built a multi-agent voice assistant using Fetch.ai ASI-1 + uAgents.",
            "Integrated speech-to-text pipeline and ElevenLabs TTS for natural conversational flow.",
            "Implemented fatigue detection and memory routing agents.",
          ]}
        />

        <ExperienceItem
          role="Interactive Media Winner"
          company="GrizzHacks 2024 — HarmonAIze"
          date="2024"
          bullets={[
            "Developed ML-powered BPM-based song recommendation engine.",
            "Increased BPM clustering accuracy by 80% using improved K-Means approach.",
            "Built full-stack interface in React + Flask.",
          ]}
        />
      </Section>

      {/* Academic Highlights */}
      <Section title="Academic Focus">
        <ExperienceItem
          role="AI / ML Projects & Coursework"
          company="Wayne State University"
          date="2023 – Present"
          bullets={[
            "Deep Learning, Intelligent Systems, Training LLMs, Computational Thinking.",
            "Built ML models using clustering, collaborative filtering, and LSTM-based approaches.",
            "Hands-on work in sentiment analysis, classification, & model deployment.",
          ]}
        />

        <ExperienceItem
          role="Security & System Administration"
          company="Ubuntu / Linux Environments"
          date="2024 – 2025"
          bullets={[
            "Configured SSL/TLS certificates & HTTPS on Ubuntu Server.",
            "Performed vulnerability assessments using OpenVAS.",
            "Hardened Apache2 for improved security posture.",
          ]}
        />
      </Section>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: "60px" }}>
      <FadeIn>
        <h2
          style={{
            color: "white",
            fontSize: "2rem",
            marginBottom: "20px",
            fontWeight: 600,
          }}
        >
          {title}
        </h2>
      </FadeIn>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function ExperienceItem({ role, company, date, bullets }) {
  return (
    <FadeIn delay={0.15}>
      <div
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.14)",
          borderRadius: "16px",
          padding: "22px 26px",
          backdropFilter: "blur(10px)",
        }}
      >
        <h3
          style={{
            color: "white",
            fontSize: "1.35rem",
            marginBottom: "4px",
            fontWeight: 600,
          }}
        >
          {role}
        </h3>

        <div
          style={{
            color: "rgba(255,255,255,0.8)",
            fontSize: "1rem",
            marginBottom: "10px",
          }}
        >
          {company} · <span style={{ opacity: 0.7 }}>{date}</span>
        </div>

        <ul
          style={{
            color: "rgba(255,255,255,0.72)",
            fontSize: "1rem",
            lineHeight: 1.6,
            marginLeft: "18px",
          }}
        >
          {bullets.map((b) => (
            <li key={b} style={{ marginBottom: "6px" }}>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  );
}
