'use client';

import { motion } from 'framer-motion';
import { BookOpen, Landmark, MapPin, Mail } from 'lucide-react';
import Image from 'next/image';

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
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase block mb-2">Get to Know Me</span>
          <h2 className="text-3xl md:text-4xl font-bold font-head text-white">About Me</h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-3 mx-auto md:mx-0" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Profile Image Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative group w-full max-w-sm lg:max-w-none">
              {/* Ambient Glow Backdrop */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500 group-hover:blur-2xl" />

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-700/60 bg-slate-900/80 p-2 shadow-2xl backdrop-blur-sm">
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-950">
                  <Image
                    src="/profile.jpg"
                    alt="R. Akilanethran"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 420px"
                    className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  {/* Bottom Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700/50 flex items-center justify-between shadow-lg">
                    <div>
                      <p className="text-xs font-semibold text-white font-head">R. Akilanethran</p>
                      <p className="text-[11px] text-cyan-400 font-medium">CSE Student & Developer</p>
                    </div>
                    <span className="flex h-2.5 w-2.5 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio Description & Details */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Bio Text */}
            <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
              <p>
                I am a Computer Science Engineering student passionate about software development, artificial intelligence, and creating innovative digital solutions. I enjoy solving complex problems, learning emerging technologies, and building projects that create real-world impact.
              </p>
              <p>
                With a strong foundation in full-stack development and a keen interest in AI/ML, I continuously push the boundaries of what&apos;s possible through code. I believe in writing clean, efficient, and scalable software that makes a difference.
              </p>
            </div>

            {/* Core Philosophy Chips */}
            <div>
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Core Philosophy</h3>
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

            {/* Quick Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {details.map((d, i) => (
                <div key={i} className="glass-card p-3.5 rounded-2xl flex items-center gap-3.5 group hover:border-cyan-500/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-slate-900/60 flex items-center justify-center border border-slate-800/80 group-hover:scale-110 group-hover:border-cyan-500/40 transition-all shrink-0">
                    {d.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">{d.label}</div>
                    <div className="text-xs sm:text-sm text-slate-200 font-medium mt-0.5 truncate">{d.value}</div>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

