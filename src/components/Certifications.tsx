'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, ExternalLink, ShieldCheck } from 'lucide-react';

interface Cert {
  id: number;
  title: string;
  org: string;
  date: string;
  icon: string;
  desc: string;
}

const certsData: Cert[] = [
  {
    id: 1,
    title: "Python Programming",
    org: "Online Platform",
    date: "Completed",
    icon: "🐍",
    desc: "A comprehensive certification covering Python fundamentals, data structures, Object-Oriented Programming (OOP), and scripting for automation and data analysis."
  },
  {
    id: 2,
    title: "Full Stack Development",
    org: "Online Platform",
    date: "Completed",
    icon: "🌐",
    desc: "Covers end-to-end web development including frontend frameworks (React), backend APIs (Node.js/Express), databases (MySQL), and modern deployment strategies."
  },
  {
    id: 3,
    title: "Web Development",
    org: "Online Platform",
    date: "Completed",
    icon: "💻",
    desc: "Hands-on certification in HTML, CSS, JavaScript, responsive web design principles, and UI/UX design essentials for modern web interfaces."
  },
  {
    id: 4,
    title: "AI/ML Fundamentals",
    org: "Online Platform",
    date: "Completed",
    icon: "🤖",
    desc: "Introduction to machine learning algorithms, neural networks, data preprocessing, feature engineering, and model evaluation techniques using Python."
  }
];

export default function Certifications() {
  const [activeCert, setActiveCert] = useState<Cert | null>(null);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveCert(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-slate-950/20">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase block mb-2">Credentials</span>
          <h2 className="text-3xl md:text-4xl font-bold font-head text-white">Certifications</h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-3 mx-auto md:mx-0" />
        </div>

        {/* Certs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {certsData.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setActiveCert(c)}
              className="glass-card p-5 rounded-2xl flex flex-col gap-4 cursor-none"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900/50 border border-slate-800/80 flex items-center justify-center text-2xl">
                {c.icon}
              </div>
              <div>
                <h3 className="font-head font-bold text-sm text-slate-100 mb-1 group-hover:text-cyan-400">
                  {c.title}
                </h3>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider">{c.org}</p>
              </div>
              <div className="mt-auto pt-2 flex items-center gap-1.5 text-xs text-green-400 font-semibold bg-green-500/5 border border-green-500/10 px-2.5 py-1 rounded-full w-fit">
                <ShieldCheck size={14} />
                {c.date}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Detail Modal Overlay */}
        <AnimatePresence>
          {activeCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCert(null)}
              className="fixed inset-0 z-[2000] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 cursor-none"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                onClick={(e) => e.stopPropagation()} // Prevent closing
                className="w-full max-w-md bg-slate-950 border border-slate-850 rounded-2xl p-6 relative shadow-2xl flex flex-col"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveCert(null)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-slate-200 transition-colors cursor-none"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>

                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-4xl mb-6 shadow-[0_0_15px_rgba(0,180,255,0.15)]">
                  {activeCert.icon}
                </div>

                <h3 className="font-head font-bold text-xl text-slate-100 mb-1">
                  {activeCert.title}
                </h3>
                <span className="text-xs text-cyan-400 font-semibold tracking-wide block mb-4">
                  Issued by {activeCert.org}
                </span>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {activeCert.desc}
                </p>

                <div className="flex gap-4">
                  <button
                    onClick={() => setActiveCert(null)}
                    className="flex-1 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-semibold text-xs transition-colors cursor-none"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => alert("Verification portal simulated!")}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold text-xs transition-all cursor-none"
                  >
                    Verify Certificate
                    <ExternalLink size={12} />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
