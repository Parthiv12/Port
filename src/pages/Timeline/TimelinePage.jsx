import TimelineItem from "../../components/timeline/TimelineItem.jsx";

export default function TimelinePage() {
  const timeline = [
    {
      year: "2019–2021",
      title: "Robotics Programmer",
      details: [
        "Programmed robot movement in Java",
        "Early exposure to systems design",
        "Learned GitHub workflows",
      ],
    },
    {
      year: "2023",
      title: "365 Retail — Ops & Hardware Intern",
      details: [
        "Built self-service kiosks",
        "Booted + imaged Linux on Actineon PCs",
        "Shadowed API, IT, and support teams",
      ],
    },
    {
      year: "2024",
      title: "AI/ML Hackathon Era",
      details: [
        "Won GrizzHacks — HarmonAIze",
        "Built heart-rate based ML recommender",
        "Started exploring deep learning",
      ],
    },
    {
      year: "2025",
      title: "Database Intern — 365 Retail",
      details: [
        "Optimized SQL queries + indexing",
        "Set up replication w/ filters",
        "Tuning: plan cache, buffer, prepared statements",
      ],
    },
    {
      year: "2025",
      title: "AI Voice Agents + Security",
      details: [
        "Built multi-agent voice assistant (ASI-1)",
        "Implemented SSL/TLS secure server",
        "Performed OpenVAS vulnerability scan",
      ],
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        paddingTop: "140px",
        paddingBottom: "160px",
        position: "relative",
      }}
    >
      {/* Vertical spine */}
      <div
        style={{
          position: "fixed",
          left: "50%",
          top: "0",
          width: "2px",
          height: "100%",
          background: "rgba(255,255,255,0.15)",
          transform: "translateX(-50%)",
          zIndex: -1,
        }}
      />

      <h1
        style={{
          textAlign: "center",
          color: "white",
          fontSize: "3rem",
          marginBottom: "80px",
          fontWeight: 700,
        }}
      >
        Timeline
      </h1>

      {/* alternating stagger */}
      {timeline.map((entry, i) => (
        <TimelineItem
          key={i}
          year={entry.year}
          title={entry.title}
          details={entry.details}
          align={i % 2 === 0 ? "left" : "right"}
        />
      ))}
    </div>
  );
}
