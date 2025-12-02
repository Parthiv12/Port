export default function YearNav({ years, activeYear, onSelectYear }) {
  return (
    <div
      style={{
        position: "sticky",
        top: "140px",
        alignSelf: "flex-start",
        minWidth: "180px",
        marginLeft: "40px",
        padding: "12px 14px",
        borderRadius: "16px",
        background: "rgba(0, 0, 0, 0.35)",
        border: "1px solid rgba(255,255,255,0.16)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div
        style={{
          fontSize: "0.85rem",
          color: "rgba(255,255,255,0.6)",
          marginBottom: "8px",
        }}
      >
        Years
      </div>
      {years.map((year) => {
        const isActive = year === activeYear;
        return (
          <button
            key={year}
            onClick={() => onSelectYear(year)}
            style={{
              width: "100%",
              textAlign: "left",
              padding: "6px 8px",
              marginBottom: "4px",
              borderRadius: "10px",
              border: "none",
              outline: "none",
              cursor: "pointer",
              background: isActive
                ? "rgba(255,255,255,0.18)"
                : "transparent",
              color: "white",
              fontSize: "0.9rem",
              opacity: isActive ? 1 : 0.7,
              transition: "background 0.2s ease, opacity 0.2s ease",
            }}
          >
            {year}
          </button>
        );
      })}
    </div>
  );
}
