'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const educationData = [
  {
    year: "2022 – Present",
    degree: "B.E. Computer Science and Engineering",
    institution: "NEC (National Engineering College)",
    score: "CGPA: 7.5 / 10",
  },
  {
    year: "2020 – 2022",
    degree: "Higher Secondary School (HSC)",
    institution: "Kamaraj Matriculation Higher Secondary School",
    score: "Score: 87%",
  },
  {
    year: "2019 – 2020",
    degree: "Secondary School (SSLC)",
    institution: "Kamaraj Matriculation Higher Secondary School",
    score: "Score: 93%",
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase block mb-2">Academic Journey</span>
          <h2 className="text-3xl md:text-4xl font-bold font-head text-white">Education</h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-3 mx-auto md:mx-0" />
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 md:pl-8 border-l border-cyan-500/30 space-y-10">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Timeline Orb */}
              <span className="absolute -left-[31px] md:-left-[39px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-slate-900 border-2 border-cyan-400 shadow-[0_0_10px_rgba(0,255,245,0.6)]">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
              </span>

              {/* Glass Card Content */}
              <div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
                <div className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-2">
                  <Calendar size={14} />
                  {item.year}
                </div>
                
                <h3 className="font-head font-bold text-base sm:text-lg text-slate-100 mb-1 group-hover:text-cyan-300 transition-colors duration-300">
                  {item.degree}
                </h3>
                
                <div className="text-xs sm:text-sm text-slate-400 flex items-center gap-1.5 mb-4">
                  <GraduationCap size={16} className="text-slate-500" />
                  {item.institution}
                </div>

                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-400 font-semibold">
                  <Award size={14} />
                  {item.score}
                </span>

                {/* Subtle back border glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
