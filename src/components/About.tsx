'use client';

import { motion } from 'framer-motion';
import { BookOpen, Landmark, MapPin, Mail } from 'lucide-react';

export default function About() {
  const highlights = [
    "⚡ Full Stack Development",
    "🧠 Problem Solving",
    "🤖 AI & Machine Learning",
    "📚 Continuous Learning",
    "🤝 Team Collaboration"
  ];

  const details = [
    { icon: <BookOpen size={20} className="text-cyan-400" />, label: "Currently Studying", value: "B.E. Computer Science & Eng" },
    { icon: <Landmark size={20} className="text-purple-400" />, label: "Institution", value: "NEC (National Engineering College)" },
    { icon: <MapPin size={20} className="text-pink-400" />, label: "Location", value: "Kovilpatti, Tamil Nadu, India" },
    { icon: <Mail size={20} className="text-blue-400" />, label: "Email", value: "akilan20681@gmail.com" }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase block mb-2">Get to Know Me</span>
          <h2 className="text-3xl md:text-4xl font-bold font-head text-white">About Me</h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-3 mx-auto md:mx-0" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Text Description */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 space-y-6 text-slate-400 leading-relaxed text-sm sm:text-base"
          >
            <p>
              I am a Computer Science Engineering student passionate about software development, artificial intelligence, and creating innovative digital solutions. I enjoy solving complex problems, learning emerging technologies, and building projects that create real-world impact.
            </p>
            <p>
              With a strong foundation in full-stack development and a keen interest in AI/ML, I continuously push the boundaries of what's possible through code. I believe in writing clean, efficient, and scalable software that makes a difference.
            </p>
            
            {/* Highlight Chips */}
            <div className="pt-2">
              <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-3">Core Philosophy</h3>
              <div className="flex flex-wrap gap-2.5">
                {highlights.map((h, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 rounded-full text-xs font-medium border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 hover:bg-cyan-500/15 hover:border-cyan-400/40 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Info Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5 grid grid-cols-1 gap-4 w-full"
          >
            {details.map((d, i) => (
              <div key={i} className="glass-card p-4 rounded-2xl flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-slate-900/60 flex items-center justify-center border border-slate-800/80 group-hover:scale-110 transition-transform">
                  {d.icon}
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">{d.label}</div>
                  <div className="text-xs sm:text-sm text-slate-200 font-medium mt-0.5 break-all">{d.value}</div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
