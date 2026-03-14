// import React, { useState } from "react";

// /**
//  * ContactPage.jsx
//  * A contact / resume summary page component based on Parthiv Chandra Gajula's resume.
//  *
//  * Drop this file into /src/pages/Contact/ContactPage.jsx
//  * No external dependencies required.
//  */

// const styles = {
//     page: {
//         fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
//         maxWidth: 900,
//         margin: "2rem auto",
//         padding: "2rem",
//         borderRadius: 10,
//         boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
//         background: "#fff",
//         lineHeight: 1.45,
//     },
//     header: {
//         display: "flex",
//         gap: 16,
//         alignItems: "center",
//         justifyContent: "space-between",
//         marginBottom: 20,
//     },
//     nameBlock: {
//         display: "flex",
//         flexDirection: "column",
//     },
//     name: {
//         fontSize: 28,
//         fontWeight: 700,
//         marginBottom: 6,
//     },
//     subtitle: { color: "#555", fontSize: 14 },
//     contactRow: { display: "flex", gap: 10, marginTop: 10, flexWrap: "wrap" },
//     btn: {
//         padding: "8px 12px",
//         borderRadius: 8,
//         border: "1px solid #e0e0e0",
//         background: "#f8f8f8",
//         cursor: "pointer",
//         fontSize: 14,
//     },
//     link: {
//         color: "#0a66c2",
//         textDecoration: "none",
//         fontWeight: 600,
//     },
//     section: {
//         borderTop: "1px dashed #e8e8e8",
//         paddingTop: 18,
//         marginTop: 18,
//     },
//     title: { fontSize: 16, fontWeight: 700, marginBottom: 8 },
//     smallText: { fontSize: 14, color: "#333" },
//     grid: {
//         display: "grid",
//         gap: 12,
//         gridTemplateColumns: "1fr 1fr",
//         marginTop: 12,
//     },
//     card: {
//         background: "#fbfbfb",
//         padding: 12,
//         borderRadius: 8,
//         border: "1px solid #efefef",
//     },
//     techList: {
//         display: "flex",
//         flexWrap: "wrap",
//         gap: 8,
//         marginTop: 8,
//     },
//     chip: {
//         background: "#eef2ff",
//         padding: "6px 8px",
//         borderRadius: 6,
//         fontSize: 13,
//         color: "#1f2937",
//         border: "1px solid #e0e7ff",
//     },
//     projectTitle: { fontWeight: 700, marginBottom: 4 },
//     actions: { display: "flex", gap: 8, marginTop: 10 },
//     formRow: { display: "flex", gap: 10, marginTop: 8 },
//     input: {
//         padding: 8,
//         fontSize: 14,
//         borderRadius: 6,
//         border: "1px solid #ddd",
//         flex: 1,
//     },
//     textarea: {
//         padding: 8,
//         fontSize: 14,
//         borderRadius: 6,
//         border: "1px solid #ddd",
//         minHeight: 110,
//         width: "100%",
//         marginTop: 8,
//     },
// };

// const ContactRowItem = ({ label, children, actions }) => (
//     <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
//         <strong style={{ minWidth: 90, color: "#333" }}>{label}</strong>
//         <div style={{ flex: 1 }}>{children}</div>
//         {actions && <div style={{ marginLeft: 8 }}>{actions}</div>}
//     </div>
// );

// export default function ContactPage() {
//     const phone = "+1 248-250-0975";
//     const phoneTel = "+12482500975";
//     const email = "sign2parthiv@gmail.com";
//     const linkedIn = "https://www.linkedin.com/in/parthiv-gajula-b84a12182/";
//     const github = "https://github.com/Parthiv12";
//     const location = "Troy, MI";

//     const [copied, setCopied] = useState("");
//     const [formName, setFormName] = useState("");
//     const [formEmail, setFormEmail] = useState("");
//     const [formMessage, setFormMessage] = useState("");

//     async function copyToClipboard(text, key) {
//         try {
//             await navigator.clipboard.writeText(text);
//             setCopied(key);
//             setTimeout(() => setCopied(""), 1600);
//         } catch (err) {
//             console.error("Copy failed", err);
//         }
//     }

//     function handleMailTo(e) {
//         e.preventDefault();
//         const subject = encodeURIComponent("Message from website");
//         const body = encodeURIComponent(`Name: ${formName}\nEmail: ${formEmail}\n\n${formMessage}`);
//         window.open(`mailto:${email}?subject=${subject}&body=${body}`, "_blank");
//     }

//     function downloadVCard() {
//         const vcard = [
//             "BEGIN:VCARD",
//             "VERSION:3.0",
//             `FN:Parthiv Chandra Gajula`,
//             `TEL;TYPE=CELL:${phoneTel}`,
//             `EMAIL:${email}`,
//             `ADR:;;Troy;MI;;;`,
//             `URL:${linkedIn}`,
//             "END:VCARD",
//         ].join("\n");
//         const blob = new Blob([vcard], { type: "text/vcard" });
//         const url = URL.createObjectURL(blob);
//         const a = document.createElement("a");
//         a.href = url;
//         a.download = "Parthiv_Chandra_Gajula.vcf";
//         a.click();
//         URL.revokeObjectURL(url);
//     }

//     return (
//         <div style={styles.page}>
//             <header style={styles.header}>
//                 <div style={styles.nameBlock}>
//                     <div style={styles.name}>Parthiv Chandra Gajula</div>
//                     <div style={styles.subtitle}>B.S. Computer Science (Wayne State University) — Expected May 2026</div>
//                     <div style={styles.contactRow}>
//                         <a href={`tel:${phoneTel}`} style={styles.link}>
//                             {phone}
//                         </a>
//                         <a href={`mailto:${email}`} style={{ ...styles.link, marginLeft: 8 }}>
//                             {email}
//                         </a>
//                         <span style={{ marginLeft: 8 }}>{location}</span>
//                     </div>
//                 </div>

//                 <div style={{ textAlign: "right" }}>
//                     <div style={{ marginBottom: 10 }}>
//                         <a href={linkedIn} target="_blank" rel="noopener noreferrer" style={styles.btn}>
//                             LinkedIn
//                         </a>{" "}
//                         <a href={github} target="_blank" rel="noopener noreferrer" style={styles.btn}>
//                             GitHub
//                         </a>
//                     </div>
//                     <div>
//                         <button
//                             style={styles.btn}
//                             onClick={() => copyToClipboard(phone, "phone")}
//                             aria-label="Copy phone"
//                             title="Copy phone"
//                         >
//                             {copied === "phone" ? "Copied!" : "Copy Phone"}
//                         </button>{" "}
//                         <button
//                             style={styles.btn}
//                             onClick={() => copyToClipboard(email, "email")}
//                             aria-label="Copy email"
//                             title="Copy email"
//                         >
//                             {copied === "email" ? "Copied!" : "Copy Email"}
//                         </button>{" "}
//                         <button style={styles.btn} onClick={downloadVCard}>
//                             Download vCard
//                         </button>
//                     </div>
//                 </div>
//             </header>

//             <section style={styles.section}>
//                 <div style={styles.title}>Technical Summary</div>
//                 <div style={styles.smallText}>
//                     B.S. Computer Science student with experience in full-stack web development, databases, security, and ML/AI projects. Strong knowledge of backend systems, SQL, cloud-native tools, and modern JavaScript/React stacks.
//                 </div>
//                 <div style={styles.grid}>
//                     <div style={styles.card}>
//                         <div style={{ fontWeight: 700, marginBottom: 6 }}>Languages</div>
//                         <div style={styles.techList}>
//                             {["Java", "Python", "C++", "C", "JavaScript", "R", "Kotlin"].map((t) => (
//                                 <span key={t} style={styles.chip}>
//                                     {t}
//                                 </span>
//                             ))}
//                         </div>
//                         <div style={{ fontWeight: 700, marginTop: 10 }}>Frameworks & Tools</div>
//                         <div style={styles.techList}>
//                             {["Flask", "Next.js", "React", "HuggingFace", "LLMs", "LSTM", "Kubernetes", "Docker", "mySQL", "OpenVAS", "Apache"].map(
//                                 (t) => (
//                                     <span key={t} style={styles.chip}>
//                                         {t}
//                                     </span>
//                                 )
//                             )}
//                         </div>
//                     </div>

//                     <div style={styles.card}>
//                         <div style={{ fontWeight: 700 }}>Education</div>
//                         <div style={{ marginTop: 8 }}>
//                             <div>Wayne State University — B.S. Computer Science (Expected May 2026)</div>
//                             <div style={{ color: "#555", marginTop: 6 }}>
//                                 Relevant Coursework: Deep Learning, Training LLMs, Intelligent Systems, Ubuntu Administration
//                             </div>
//                         </div>

//                         <div style={{ fontWeight: 700, marginTop: 10 }}>Recent Experience</div>
//                         <div style={{ marginTop: 8 }}>
//                             <div style={{ fontWeight: 700 }}>365 Retail — Database Intern</div>
//                             <div style={{ color: "#555", fontSize: 13 }}>May 2025 – Aug 2025</div>
//                             <ul style={{ marginTop: 6 }}>
//                                 <li>Optimized SQL queries (up to 45% faster) using indexing and execution plan analysis.</li>
//                                 <li>Configured replication and managed remote database servers; worked with replication filters.</li>
//                                 <li>Implemented and maintained triggers; analyzed ad-hoc queries & performance aspects.</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section style={styles.section}>
//                 <div style={styles.title}>Selected Projects & Hackathon Work</div>

//                 <div style={{ marginTop: 10 }}>
//                     <div style={styles.projectTitle}>Dearborn Hacks 2025 — Best Use of ElevenLabs</div>
//                     <div style={{ color: "#555" }}>
//                         Real-time voice assistant integrating Fetch.ai ASI-1 model, ElevenLabs TTS, multi-agent architecture (uAgents), and a lightweight React UI for live conversation tracking. Designed fatigue detection & voice routing to reduce driver monotony.
//                     </div>
//                     <div style={{ marginTop: 6, color: "#333", fontSize: 13 }}>
//                         Tech: Fetch.ai ASI-1, uAgents, ElevenLabs TTS, Web Speech API — Stack: Flask, React, Python, TensorFlow
//                     </div>
//                 </div>

//                 <div style={{ marginTop: 12 }}>
//                     <div style={styles.projectTitle}>Grizz Hacks 2024 — Winner, Interactive Media (HarmonAIze)</div>
//                     <div style={{ color: "#555" }}>
//                         Built a full-stack song recommendation system that adapts to heart rate, improving BPM prediction accuracy by 80% through K-Means clustering.
//                     </div>
//                 </div>

//                 <div style={{ marginTop: 12 }}>
//                     <div style={styles.projectTitle}>Movie Recommendation System</div>
//                     <div style={{ color: "#555" }}>
//                         Full-stack web app using collaborative filtering + K-Means for personalized suggestions. Backend with Flask, Supabase/MongoDB for data & auth.
//                     </div>
//                 </div>

//                 <div style={{ marginTop: 12 }}>
//                     <div style={styles.projectTitle}>System Administration & Security</div>
//                     <div style={{ color: "#555" }}>
//                         Configured Ubuntu server with SSL/TLS on port 444, ran vulnerability checks using OpenVAS on Kali Linux, and implemented Apache hardening measures.
//                     </div>
//                 </div>
//             </section>

//             <section style={styles.section}>
//                 <div style={styles.title}>Current Projects (In Progress)</div>
//                 <div style={{ marginTop: 8 }}>
//                     <div style={{ fontWeight: 700 }}>Job Search App — Gamified Job Search Platform</div>
//                     <div style={{ color: "#555" }}>
//                         Building a gamified full-stack application that matches jobs using AI-based recommendation algorithms, adds XP & achievements to incentivize job search progress, and maintains leaderboards.
//                     </div>
//                     <div style={{ marginTop: 6, color: "#333", fontSize: 13 }}>Tech: React, Flask, MongoDB, JWT, REST APIs</div>
//                 </div>

//                 <div style={{ marginTop: 12 }}>
//                     <div style={{ fontWeight: 700 }}>Movie Recommendation System — AI-Powered</div>
//                     <div style={{ color: "#555" }}>
//                         Integrating TMDb API for dynamic movie data and using K-Means & collaborative filtering for personalized suggestions. React front-end with Flask backend.
//                     </div>
//                 </div>
//             </section>

//             <section style={styles.section}>
//                 <div style={styles.title}>Contact / Send a Message</div>
//                 <div style={styles.smallText}>Prefer email? Use the quick form below or reach out directly via email or LinkedIn.</div>

//                 <form onSubmit={handleMailTo} style={{ marginTop: 10 }}>
//                     <div style={styles.formRow}>
//                         <input
//                             style={styles.input}
//                             type="text"
//                             placeholder="Your name"
//                             value={formName}
//                             onChange={(e) => setFormName(e.target.value)}
//                             required
//                         />
//                         <input
//                             style={styles.input}
//                             type="email"
//                             placeholder="Your email"
//                             value={formEmail}
//                             onChange={(e) => setFormEmail(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <textarea
//                         style={styles.textarea}
//                         placeholder="Message"
//                         value={formMessage}
//                         onChange={(e) => setFormMessage(e.target.value)}
//                         required
//                     />
//                     <div style={styles.actions}>
//                         <button style={styles.btn} type="submit">
//                             Send via Email
//                         </button>
//                         <button style={styles.btn} type="button" onClick={() => {
//                             setFormName("");
//                             setFormEmail("");
//                             setFormMessage("");
//                         }}>
//                             Reset
//                         </button>
//                         <a
//                             href={linkedIn}
//                             style={{ ...styles.btn, display: "inline-flex", alignItems: "center", textDecoration: "none" }}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             Message on LinkedIn
//                         </a>
//                     </div>
//                 </form>
//             </section>

//             <footer style={{ marginTop: 20, color: "#666", fontSize: 13 }}>
//                 <div>Connect with me: <a href={linkedIn} target="_blank" rel="noopener noreferrer" style={styles.link}>LinkedIn</a> • <a href={github} target="_blank" rel="noopener noreferrer" style={styles.link}>GitHub</a></div>
//                 <div style={{ marginTop: 8 }}>Developed & maintained by Parthiv — Skills: AI/LLMs, Backend, Databases, and Full-Stack Development.</div>
//             </footer>
//         </div>
//     );
// }
import FadeIn from "../../components/ui/FadeIn.jsx";

export default function ContactPage() {
  return (
    <div
      style={{
        padding: "122px clamp(16px, 4vw, 64px) 96px",
        maxWidth: "1120px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          textAlign: "center",
          borderRadius: "20px",
          border: "1px solid rgba(255,255,255,0.14)",
          background: "rgba(7, 11, 18, 0.5)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 16px 36px rgba(0,0,0,0.26)",
          padding: "36px clamp(20px, 3vw, 36px)",
        }}
      >
      <FadeIn>
        <h1
          style={{
            color: "white",
            fontSize: "clamp(2.1rem, 4vw, 3rem)",
            fontWeight: 700,
            marginBottom: "20px",
          }}
        >
          Contact
        </h1>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: "1.2rem",
            lineHeight: 1.7,
            marginBottom: "40px",
          }}
        >
          Whether you're exploring AI/ML projects, looking to collaborate,
          hiring for internships or full-time roles, or just want to talk about
          engineering — feel free to reach out.
        </p>
      </FadeIn>

      {/* Email */}
      <FadeIn delay={0.4}>
        <a
          href="mailto:sign2parthiv@gmail.com"
          style={{
            display: "inline-block",
            padding: "14px 28px",
            borderRadius: "12px",
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.25)",
            color: "white",
            textDecoration: "none",
            fontSize: "1.1rem",
            backdropFilter: "blur(10px)",
            transition: "0.25s ease",
          }}
        >
          Email Me →
        </a>
      </FadeIn>

      {/* Extra links */}
      <FadeIn delay={0.6}>
        <div style={{ marginTop: "40px", opacity: 0.8 }}>
          <p>Or find me here:</p>

          <div style={{ marginTop: "12px" }}>
            <a
              href="https://github.com/Parthiv12"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "rgba(221, 235, 241, 0.92)",
                textDecoration: "none",
                marginRight: "20px",
              }}
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/parthiv-gajula-b84a12182/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "rgba(221, 235, 241, 0.92)",
                textDecoration: "none",
              }}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </FadeIn>
      </div>
    </div>
  );
}
