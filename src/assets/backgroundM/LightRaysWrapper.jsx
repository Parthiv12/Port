import LightRays from "./LightRays";
export default function LightRaysWrapper() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      <LightRays />
    </div>
  );
}
