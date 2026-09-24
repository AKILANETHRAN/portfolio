'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useCountUp } from '@/hooks/useCountUp';
import { BarChart3, Star, Award, Code2 } from 'lucide-react';

interface StatProps {
  target: number;
  label: string;
  trigger: boolean;
}

function StatCard({ target, label, trigger }: StatProps) {
  const count = useCountUp(target, 1500, trigger);
  return (
    <div className="glass-card p-6 rounded-2xl text-center select-none flex flex-col justify-center min-h-[120px]">
      <span className="font-head font-extrabold text-3xl sm:text-4xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent block">
        {count}+
      </span>
      <span className="text-[10px] sm:text-xs text-slate-400 mt-2 block font-medium uppercase tracking-wide leading-tight">
        {label}
      </span>
    </div>
  );
}

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { target: 1285, label: "Programs Solved" },
    { target: 577, label: "Medals Earned" },
    { target: 102, label: "Daily Contests" },
    { target: 93, label: "Daily Tests" },
    { target: 1652, label: "Aptitude Code" }
  ];

  const platforms = [
    { name: "HackerRank", color: "border-green-500/20 text-green-400 bg-green-500/5 hover:bg-green-500/15" },
    { name: "CodeChef", color: "border-amber-500/20 text-amber-400 bg-amber-500/5 hover:bg-amber-500/15" },
    { name: "SkillRack", color: "border-purple-500/20 text-purple-400 bg-purple-500/5 hover:bg-purple-500/15" }
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-slate-950/20" ref={ref}>
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase block mb-2">My Numbers</span>
          <h2 className="text-3xl md:text-4xl font-bold font-head text-white">Achievements</h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-3 mx-auto md:mx-0" />
        </div>

        {/* Stats Title */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-6">
          <BarChart3 size={16} className="text-cyan-400" />
          <span>SkillRack Statistics</span>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <StatCard target={s.target} label={s.label} trigger={isInView} />
            </motion.div>
          ))}
        </div>

        {/* Platforms Badge Section */}
        <div className="mt-12 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            <Code2 size={16} className="text-purple-400" />
            <span>Competitive Programming Platforms</span>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {platforms.map((p, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className={`px-4 py-2 border rounded-xl text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${p.color}`}
              >
                {p.name}
              </motion.span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
