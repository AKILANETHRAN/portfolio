'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Mail } from 'lucide-react';

const words = [
  "Computer Science Engineering Student",
  "AI/ML Enthusiast",
  "Problem Solver (1285+ Solved)"
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
      setText(words[index].substring(0, subIndex));
    }, reverse ? 30 : 65);

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-28 pb-16 relative overflow-hidden select-none">
      {/* Decorative Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="blob w-[600px] h-[600px] bg-gradient-to-r from-blue-500/20 to-transparent top-[-10%] left-[-10%]" />
        <div className="blob w-[500px] h-[500px] bg-gradient-to-r from-purple-500/20 to-transparent top-[30%] right-[-10%]" style={{ animationDelay: '2s' }} />
        <div className="blob w-[400px] h-[400px] bg-gradient-to-r from-cyan-500/20 to-transparent bottom-[-10%] left-[30%]" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Available for Opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none text-white font-head">
              R. <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Akilanethran</span>
            </h1>

            <div className="text-xl sm:text-2xl font-semibold text-cyan-400 font-head">
              Full Stack Developer
            </div>

            {/* Dynamic Typing Subtitle */}
            <div className="h-8 flex items-center justify-center lg:justify-start gap-1 text-purple-400 text-base sm:text-lg font-medium font-head">
              <span>{text}</span>
              <span className="w-[2.5px] h-5 bg-purple-500 animate-pulse" />
            </div>

            <p className="text-slate-400 leading-relaxed text-sm sm:text-base max-w-lg mx-auto lg:mx-0">
              Passionate Computer Science Engineering student with strong problem-solving skills, web development knowledge, and enthusiasm for AI/ML technologies. Building intelligent, scalable, and impactful digital experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-semibold text-sm transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(0,180,255,0.4)] flex items-center gap-2 group cursor-none"
              >
                View Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Resume download started! (Simulated)");
                }}
                className="px-6 py-3 rounded-full border border-slate-700 bg-slate-900/50 hover:bg-slate-900 hover:border-cyan-400 hover:text-cyan-400 text-slate-200 font-semibold text-sm transition-all duration-300 flex items-center gap-2 cursor-none"
              >
                <FileText size={16} />
                Download Resume
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 rounded-full border border-slate-700 bg-slate-900/50 hover:bg-slate-900 hover:border-purple-400 hover:text-purple-400 text-slate-200 font-semibold text-sm transition-all duration-300 flex items-center gap-2 cursor-none"
              >
                <Mail size={16} />
                Contact Me
              </button>
            </div>

            {/* Scroll indicator */}
            <div className="flex items-center justify-center lg:justify-start gap-2 pt-6 text-slate-500 text-xs uppercase tracking-widest">
              <div className="w-1.5 h-6 rounded-full bg-gradient-to-b from-cyan-400 to-transparent flex justify-center p-0.5">
                <div className="w-1 h-1.5 bg-cyan-400 rounded-full animate-bounce" />
              </div>
              Scroll to explore
            </div>
          </motion.div>

          {/* Avatar and Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72">
              {/* Outer Neon Orbit Rings */}
              <div className="absolute inset-[-15px] rounded-full border border-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-20 animate-spin" style={{ animationDuration: '12s' }} />
              <div className="absolute inset-[-10px] rounded-full border border-cyan-400/20 animate-pulse" />
              
              {/* Inner Avatar Bubble */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 border border-slate-700/50 backdrop-blur-md flex items-center justify-center shadow-2xl overflow-hidden group">
                <span className="font-head font-extrabold text-6xl tracking-tighter bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-500">
                  RA
                </span>
                
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 px-3 py-1.5 rounded-xl border border-slate-700/80 bg-slate-900/80 backdrop-blur-sm text-xs font-semibold text-cyan-400 shadow-lg"
              >
                ⚛ React
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-xl border border-slate-700/80 bg-slate-900/80 backdrop-blur-sm text-xs font-semibold text-purple-400 shadow-lg"
              >
                🐍 Python
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute top-1/2 -right-10 px-3 py-1.5 rounded-xl border border-slate-700/80 bg-slate-900/80 backdrop-blur-sm text-xs font-semibold text-pink-400 shadow-lg"
              >
                🤖 AI/ML
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
