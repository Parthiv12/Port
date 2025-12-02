export default function PreviewPanel({ project, year }) {
  if (!project) {
    return null;
  }

  return (
    <div
      style={{
        borderRadius: "18px",
        padding: "14px 16px 18px",
        background: "rgba(0,0,0,0.45)",
        border: "1px solid rgba(255,255,255,0.16)",
        backdropFilter: "blur(12px)",
        minHeight: "190px",
      }}
    >
      <div
        style={{
          fontSize: "0.85rem",
          color: "rgba(255,255,255,0.6)",
          marginBottom: "4px",
        }}
      >
        Preview · {year ?? "Year"}
      </div>
      <div
        style={{
          fontSize: "1rem",
          color: "white",
          fontWeight: 600,
          marginBottom: "10px",
        }}
      >
        {project.title}
      </div>

      {/* Placeholder visual block – will become video/screenshot later */}
      <div
        style={{
          borderRadius: "14px",
          overflow: "hidden",
          position: "relative",
          height: "140px",
          background:
            "radial-gradient(circle at top left, rgba(120,243,255,0.9), transparent 55%), radial-gradient(circle at bottom right, rgba(155,126,255,0.85), transparent 55%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom right, rgba(0,0,0,0.2), rgba(0,0,0,0.6))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "rgba(255,255,255,0.9)",
            fontSize: "0.85rem",
            textAlign: "center",
            padding: "0 12px",
          }}
        >
          Upcoming preview — video / screenshot / hackathon photo here.
        </div>
      </div>
    </div>
  );
}
