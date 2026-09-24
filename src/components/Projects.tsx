'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Github = ({ size = 14 }: { size?: number }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);


const projectsData = [
  {
    id: 1,
    title: "AI/ML Project",
    desc: "Placeholder for future AI and Machine Learning projects. Will feature intelligent models, data analysis, and predictive algorithms.",
    category: "aiml",
    categoryLabel: "AI/ML",
    icon: "🤖",
    tech: ["Python", "TensorFlow", "NumPy"],
    github: "#",
    demo: "#"
  },
  {
    id: 2,
    title: "Full Stack Web Application",
    desc: "Placeholder for future full-stack projects featuring modern React frontends, Node.js APIs, and database integrations.",
    category: "fullstack",
    categoryLabel: "Full Stack",
    icon: "🌐",
    tech: ["React", "Node.js", "MySQL"],
    github: "#",
    demo: "#"
  },
  {
    id: 3,
    title: "Portfolio Website",
    desc: "Personal portfolio website built with modern technologies, glassmorphism design, and smooth animations showcasing skills and projects.",
    category: "web",
    categoryLabel: "Web",
    icon: "✨",
    tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    github: "#",
    demo: "#"
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'web', name: 'Web' },
    { id: 'aiml', name: 'AI/ML' },
    { id: 'fullstack', name: 'Full Stack' }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase block mb-2">What I've Built</span>
          <h2 className="text-3xl md:text-4xl font-bold font-head text-white">Projects</h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-3 mx-auto md:mx-0" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 mb-10">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setFilter(c.id)}
              className={`px-5 py-2 text-xs font-semibold uppercase tracking-wider rounded-full border transition-all duration-300 cursor-none ${
                filter === c.id 
                  ? 'bg-cyan-500/10 border-cyan-400 text-cyan-400 shadow-[0_0_15px_rgba(0,180,255,0.25)]' 
                  : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={p.id}
                className="glass-card p-6 rounded-2xl flex flex-col h-full group"
              >
                {/* Visual Avatar Header */}
                <div className="w-full h-32 rounded-xl bg-slate-900/50 border border-slate-800/80 flex items-center justify-center text-4xl mb-4 group-hover:scale-[1.02] transition-transform duration-300">
                  {p.icon}
                </div>

                <div className="mb-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-cyan-400/85 px-2.5 py-1 rounded-full bg-cyan-500/5 border border-cyan-500/10">
                    {p.categoryLabel}
                  </span>
                </div>

                <h3 className="font-head font-bold text-base sm:text-lg text-slate-100 mb-2 mt-1">
                  {p.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4 flex-grow">
                  {p.desc}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {p.tech.map((t, idx) => (
                    <span 
                      key={idx} 
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold border border-purple-500/15 bg-purple-500/5 text-purple-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={p.github}
                    onClick={(e) => { if(p.github === '#') e.preventDefault(); }}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900 hover:border-cyan-400 hover:text-cyan-400 text-slate-300 font-semibold text-xs transition-all duration-300 cursor-none"
                  >
                    <Github size={14} />
                    GitHub
                  </a>
                  <a
                    href={p.demo}
                    onClick={(e) => { if(p.demo === '#') e.preventDefault(); }}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/15 to-purple-500/15 hover:from-cyan-500/25 hover:to-purple-500/25 text-cyan-400 font-semibold text-xs transition-all duration-300 cursor-none"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
