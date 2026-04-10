import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, BookOpen, Cpu, Briefcase, TestTube, ArrowUpRight } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs.jsx";
import { Badge } from "../../components/ui/badge.jsx";
import FadeIn from "../../components/ui/FadeIn.jsx";
import { projectsCatalog } from "../../data/projects.js";

const getTypeIcon = (type) => {
  switch(type) {
    case "Personal": return <FolderGit2 className="w-5 h-5 text-white/80" />;
    case "Course": return <BookOpen className="w-5 h-5 text-white/80" />;
    case "Hackathon": return <Cpu className="w-5 h-5 text-white/80" />;
    case "Work": return <Briefcase className="w-5 h-5 text-white/80" />;
    case "Research": return <TestTube className="w-5 h-5 text-white/80" />;
    default: return <FolderGit2 className="w-5 h-5 text-white/80" />;
  }
}

export default function TimelinePage() {
  const [activeTab, setActiveTab] = useState("All");

  const featuredItems = projectsCatalog.filter(p => p.featured);

  const filteredItems = featuredItems.filter((item) => 
    activeTab === "All" || item.type === activeTab
  );

  const groupedByYear = filteredItems.reduce((acc, item) => {
    if (!acc[item.year]) acc[item.year] = [];
    acc[item.year].push(item);
    return acc;
  }, {});

  const years = Object.keys(groupedByYear).sort((a, b) => b - a);

  return (
    <div className="min-h-screen font-sans w-full max-w-6xl mx-auto" style={{ padding: "140px clamp(16px, 5vw, 64px) 100px" }}>
      <FadeIn>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-bold tracking-tight text-white m-0">
              Timeline
            </h1>
            <p className="text-xl text-white/60 font-light max-w-xl">
              Selected projects over time.
            </p>
          </div>
          
          <Tabs defaultValue="All" value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto">
            <TabsList className="bg-neutral-900 border border-neutral-800 flex flex-wrap h-auto w-fit">
              <TabsTrigger value="All" className="data-[state=active]:bg-neutral-800 data-[state=active]:text-white">All</TabsTrigger>
              <TabsTrigger value="Work" className="data-[state=active]:bg-neutral-800 data-[state=active]:text-white">Work</TabsTrigger>
              <TabsTrigger value="Personal" className="data-[state=active]:bg-neutral-800 data-[state=active]:text-white">Personal</TabsTrigger>
              <TabsTrigger value="Research" className="data-[state=active]:bg-neutral-800 data-[state=active]:text-white">Research</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </FadeIn>

      <div className="flex flex-col gap-16">
        <AnimatePresence mode="popLayout">
          {years.map((year) => (
            <motion.div
              key={year}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-6 md:gap-10 items-start"
            >
              <h2 className="text-3xl font-bold text-white/30 sticky top-32 tracking-tight m-0">
                {year}
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                <AnimatePresence mode="popLayout">
                  {groupedByYear[year].map((item, i) => {
                    const cardContent = (
                      <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.2 } }}
                        whileHover={{ y: -4, scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col h-full bg-neutral-900/20 border border-neutral-800/80 hover:border-neutral-700/80 hover:bg-neutral-900/40 rounded-2xl p-6 transition-colors shadow-sm cursor-pointer relative group"
                      >
                       <div className="absolute top-6 right-6 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                          <ArrowUpRight className="w-4 h-4 text-white/50" />
                        </div>
                        
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 shrink-0">
                            {getTypeIcon(item.type)}
                          </div>
                          <Badge variant="secondary" className="bg-neutral-800/60 text-white/60 font-medium px-2.5 py-0.5 border-none">
                            {item.type}
                          </Badge>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-2 leading-tight tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-[1.05rem] text-white/60 leading-relaxed mb-6 font-light">
                          {item.description}
                        </p>
                        
                        <div className="mt-auto pt-4 border-t border-neutral-800/50 text-[0.85rem] font-medium text-white/40 tracking-wide flex items-center">
                          {item.tags.join("  ·  ")}
                        </div>
                      </motion.div>
                    );

                    return item.slug ? (
                      <Link key={item.slug} to={`/projects/${item.slug}`} className="block outline-none h-full">
                        {cardContent}
                      </Link>
                    ) : (
                      <div key={item.title} className="h-full">
                        {cardContent}
                      </div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {years.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-20 text-center text-white/40 text-lg">
            No featured activities found for this filter.
          </motion.div>
        )}
      </div>
    </div>
  );
}
