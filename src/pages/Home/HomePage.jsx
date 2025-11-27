import Hero from "./Hero.jsx";
import FeaturedProjects from "./FeaturedProjects.jsx";
import Skills from "./Skills.jsx";
import CTA from "./CTA.jsx";

export default function HomePage() {
  return (
    <>
      {/* SECTION 1: LightRays region (100vh) */}
      <div style={{ position: "relative", minHeight: "100vh" }}>
        <Hero />

              {/* Fade-out gradient */}
              <div
                  style={{
                      position: "absolute",
                      bottom: 0,
                      width: "100vw",
                      height: "250px",
                      background:
                          "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,1) 100%)",
                      pointerEvents: "none",
                  }}
              />
          </div>

      {/* SECTION 2+: Grain background */}
      <div
        style={{
          background: "url('/grain.png') repeat",
          backgroundSize: "300px",
          minHeight: "100vh",
          paddingBottom: "80px",
        }}
      >
        <FeaturedProjects />
        <Skills />
        <CTA />
      </div>
    </>
  );
}
