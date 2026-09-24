'use client';

import { motion } from 'framer-motion';
import { Terminal, Globe, Database, Award } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Terminal className="text-cyan-400" size={18} />,
      skills: [
        { name: "Python", pct: 85 },
        { name: "C", pct: 78 },
        { name: "C++", pct: 75 }
      ]
    },
    {
      title: "Web Development",
      icon: <Globe className="text-purple-400" size={18} />,
      skills: [
        { name: "HTML & CSS", pct: 90 },
        { name: "JavaScript", pct: 80 },
        { name: "React", pct: 72 },
        { name: "Node.js", pct: 65 }
      ]
    },
    {
      title: "Database & Tools",
      icon: <Database className="text-pink-400" size={18} />,
      skills: [
        { name: "MySQL", pct: 75 },
        { name: "Git", pct: 80 },
        { name: "GitHub", pct: 82 }
      ]
    },
    {
      title: "Professional Skills",
      icon: <Award className="text-blue-400" size={18} />,
      skills: [
        { name: "Critical Thinking", pct: 88 },
        { name: "Problem Solving", pct: 90 },
        { name: "Communication", pct: 82 },
        { name: "Teamwork", pct: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/20">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase block mb-2">What I Know</span>
          <h2 className="text-3xl md:text-4xl font-bold font-head text-white">Skills & Technologies</h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-3 mx-auto md:mx-0" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <h3 className="font-head font-bold text-base text-slate-100 flex items-center gap-2 mb-6 border-b border-slate-800/60 pb-3">
                  {category.icon}
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-2">
                      <div className="flex justify-between items-center text-xs sm:text-sm text-slate-400">
                        <span className="font-medium text-slate-300">{skill.name}</span>
                        <span className="text-cyan-400 font-bold font-mono">{skill.pct}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-800/80 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: 'easeOut' }}
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
