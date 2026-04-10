import { motion } from "framer-motion";
import GitHubCalendar from 'react-github-calendar';
import PortraitCard from "../../components/ui/PortraitCard.jsx";
import { Mail, Github, Code2, Linkedin } from "lucide-react";
import FadeIn from "../../components/ui/FadeIn.jsx";
import profileImg from "../../assets/data/p2.jpg";

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="min-h-screen font-sans w-full max-w-7xl mx-auto" style={{ padding: "140px clamp(16px, 5vw, 64px) 100px" }}>
      <div className="grid grid-cols-1 md:grid-cols-[minmax(300px,380px)_1fr] gap-12 lg:gap-20 items-start">
        {/* Left Column: Portrait */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:sticky md:top-32"
        >
          <div className="overflow-hidden rounded-2xl border border-neutral-800 shadow-xl bg-neutral-900/50">
            <PortraitCard src={profileImg} alt="Parthiv Gajula" />
          </div>
        </motion.div>

        {/* Right Column: Text Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-2"
          >
            About Me
          </motion.h1>

          <motion.p variants={itemVariants} className="text-[1.2rem] leading-relaxed text-white/90 font-medium max-w-2xl">
            I’m Parthiv — I like understanding how things work, then pushing them until they work better.
          </motion.p>
          
          <motion.p variants={itemVariants} className="text-[1.1rem] leading-relaxed text-white/60 font-light max-w-2xl">
            I tend to get pulled toward problems that feel a little messy at first — systems that aren’t quite scalable, or ideas that aren’t fully figured out yet. I enjoy sitting in that space and slowly shaping things into something clean, usable, and reliable.
          </motion.p>
          
          <motion.p variants={itemVariants} className="text-[1.1rem] leading-relaxed text-white/60 font-light max-w-2xl">
            A lot of what I build sits somewhere between engineering and curiosity. I like experimenting, breaking things, and learning just enough to make something real out of an idea.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4 text-xs font-semibold uppercase tracking-widest text-white/30 mt-2">
            <span>Curious</span>
            <span>·</span>
            <span>Hands-on</span>
            <span>·</span>
            <span>Always learning</span>
          </motion.div>

          {/* Contact Links */}
          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-4">
            <a href="mailto:pgajula@oakland.edu" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors">
              <Mail className="w-4 h-4" /> Email Me
            </a>
            <a href="https://github.com/Parthiv12" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white font-medium text-sm hover:bg-neutral-800 transition-colors">
              <Github className="w-4 h-4 text-white/70" /> GitHub
            </a>
            <a href="https://devpost.com/Parthiv12" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white font-medium text-sm hover:bg-neutral-800 transition-colors">
              <Code2 className="w-4 h-4 text-white/70" /> Devpost
            </a>
            <a href="https://www.linkedin.com/in/parthiv-gajula-b84a12182/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white font-medium text-sm hover:bg-neutral-800 transition-colors">
              <Linkedin className="w-4 h-4 text-white/70" /> LinkedIn
            </a>
          </motion.div>

          {/* GitHub Activity block explicitly placed */}
          <motion.div variants={itemVariants} className="mt-16 pt-16 border-t border-neutral-800/50 w-full max-w-[800px]">
             <h2 className="text-2xl font-semibold text-white tracking-tight mb-8">
               GitHub Activity
             </h2>
             <div className="w-full overflow-x-auto pb-4">
               <GitHubCalendar 
                 username="Parthiv12" 
                 colorScheme="dark"
                 theme={{
                   dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
                 }}
                 blockSize={13}
                 blockMargin={5}
                 fontSize={14}
               />
             </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
