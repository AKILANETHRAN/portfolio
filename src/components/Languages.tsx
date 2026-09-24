'use client';

import { motion } from 'framer-motion';

const languagesData = [
  {
    name: "Tamil",
    level: "Native / Mother Tongue",
    filledDots: 5,
    totalDots: 5
  },
  {
    name: "English",
    level: "Professional Proficiency",
    filledDots: 4,
    totalDots: 5
  },
  {
    name: "Hindi",
    level: "Basic Proficiency",
    filledDots: 2,
    totalDots: 5
  }
];

export default function Languages() {
  return (
    <section id="languages" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase block mb-2">Communication</span>
          <h2 className="text-3xl md:text-4xl font-bold font-head text-white">Languages</h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-3 mx-auto md:mx-0" />
        </div>

        {/* Languages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {languagesData.map((l, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 rounded-2xl"
            >
              <h3 className="font-head font-bold text-lg text-slate-100 mb-1">
                {l.name}
              </h3>
              <p className="text-xs text-cyan-400 mb-4 font-medium">{l.level}</p>
              
              {/* Dot Indicators */}
              <div className="flex gap-2">
                {Array.from({ length: l.totalDots }).map((_, dIdx) => (
                  <motion.div
                    key={dIdx}
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (dIdx * 0.05), type: 'spring' }}
                    className={`h-2.5 w-10 rounded-full ${
                      dIdx < l.filledDots 
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 shadow-[0_0_8px_rgba(0,180,255,0.45)]' 
                        : 'bg-slate-800'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
