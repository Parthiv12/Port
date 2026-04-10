import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { projectsCatalog } from "../../data/projects.js";
import { Card } from "../../components/ui/card.jsx";
import { Badge } from "../../components/ui/badge.jsx";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs.jsx";
import { ArrowUpRight, FolderGit2, BookOpen, Cpu, Briefcase, TestTube } from "lucide-react";
import FadeIn from "../../components/ui/FadeIn.jsx";

const getTypeIcon = (type) => {
  switch(type) {
    case "Personal": return <FolderGit2 className="w-4 h-4" />;
    case "Course": return <BookOpen className="w-4 h-4" />;
    case "Hackathon": return <Cpu className="w-4 h-4" />;
    case "Work": return <Briefcase className="w-4 h-4" />;
    case "Research": return <TestTube className="w-4 h-4" />;
    default: return <FolderGit2 className="w-4 h-4" />;
  }
}

const getGridItemClass = (index) => {
  switch (index) {
    case 0: return "md:col-span-2 md:row-span-2"; // Large feature 2x2
    case 1: return "md:col-span-1 md:row-span-1"; // Small 1x1
    case 2: return "md:col-span-1 md:row-span-1"; // Small 1x1
    case 3: return "md:col-span-3 md:row-span-1"; // Full wide banner 3x1
    case 4: return "md:col-span-1 md:row-span-1"; // Small 1x1
    case 5: return "md:col-span-2 md:row-span-1"; // Medium wide 2x1
    case 6: return "md:col-span-2 md:row-span-1"; // Medium wide 2x1
    case 7: return "md:col-span-1 md:row-span-1"; // Small 1x1
    default: return "md:col-span-1 md:row-span-1";
  }
};

export default function ProjectGrid() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = projectsCatalog.filter((item) => 
    activeTab === "All" || item.type === activeTab
  );

  return (
    <div className="min-h-screen font-sans w-full max-w-7xl mx-auto" style={{ padding: "140px clamp(16px, 5vw, 64px) 100px" }}>
      <FadeIn>
        <div className="flex flex-col gap-4 mb-16">
          <h1 className="text-5xl font-bold tracking-tight text-white">
            Selected Work
          </h1>
          <p className="text-xl text-white/60 font-light max-w-2xl mb-4">
            Personal projects, coursework, and hackathon builds.
          </p>

          <Tabs defaultValue="All" value={activeTab} onValueChange={setActiveTab} className="w-full mt-4">
            <TabsList className="bg-neutral-900 border border-neutral-800 flex flex-wrap h-auto w-fit">
              <TabsTrigger value="All" className="data-[state=active]:bg-neutral-800 data-[state=active]:text-white">All</TabsTrigger>
              <TabsTrigger value="Personal" className="data-[state=active]:bg-neutral-800 data-[state=active]:text-white">Personal</TabsTrigger>
              <TabsTrigger value="Course" className="data-[state=active]:bg-neutral-800 data-[state=active]:text-white">Course</TabsTrigger>
              <TabsTrigger value="Hackathon" className="data-[state=active]:bg-neutral-800 data-[state=active]:text-white">Hackathon</TabsTrigger>
              <TabsTrigger value="Research" className="data-[state=active]:bg-neutral-800 data-[state=active]:text-white">Research</TabsTrigger>
              <TabsTrigger value="Work" className="data-[state=active]:bg-neutral-800 data-[state=active]:text-white">Work</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </FadeIn>

      <motion.div 
        layout 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((p, index) => {
            const isLarge = index === 0 && activeTab === "All"; // Only apply massive span natively if it's the first unfiltered item
            const spanClass = activeTab === "All" ? getGridItemClass(index) : "md:col-span-1 md:row-span-1";
            
            return (
              <motion.div 
                key={p.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className={spanClass}
              >
                <Link to={`/projects/${p.slug}`} className="block h-full outline-none group">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="relative h-full flex flex-col bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700/80 rounded-[2rem] overflow-hidden hover:shadow-[0_0_30px_rgba(255,255,255,0.02)] cursor-pointer"
                  >
                    <div className="absolute top-6 right-6 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <div className="bg-white text-black p-2 rounded-full shadow-sm">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    <div className={`p-8 lg:p-10 flex flex-col flex-1 ${isLarge ? 'justify-end' : ''}`}>
                      <div className="flex items-center gap-3 mb-6">
                        <Badge variant="secondary" className="bg-white/10 text-white font-medium px-3 py-1 flex items-center gap-2 border-transparent">
                          {getTypeIcon(p.type)}
                          {p.type}
                        </Badge>
                        <span className="text-white/40 text-sm font-medium">{p.year}</span>
                      </div>

                      <h3 className={`${isLarge ? 'text-4xl' : 'text-2xl'} font-bold text-white mb-3 tracking-tight leading-tight transition-colors duration-300`}>
                        {p.title}
                      </h3>
                      
                      <p className={`text-white/60 ${isLarge ? 'text-lg max-w-md' : 'text-[0.95rem] font-light'} leading-relaxed mb-8 flex-1`}>
                        {p.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {p.tags.slice(0, isLarge ? 5 : 3).map(tag => (
                          <Badge key={tag} variant="outline" className="bg-neutral-800/50 text-neutral-400 border-neutral-700 font-medium px-2.5 py-0.5">
                            {tag}
                          </Badge>
                        ))}
                        {p.tags.length > (isLarge ? 5 : 3) && (
                          <Badge variant="outline" className="bg-transparent text-neutral-500 border-neutral-800 px-2">
                            +{p.tags.length - (isLarge ? 5 : 3)}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </AnimatePresence>
        
        {filteredProjects.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="col-span-1 md:col-span-3 py-20 text-center text-white/40 text-lg">
            No projects found for {activeTab}.
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
