'use client';

import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 450);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Back To Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 w-11 h-11 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white flex items-center justify-center shadow-lg transition-all duration-300 z-50 cursor-none ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ChevronUp size={20} />
      </button>

      <footer className="relative z-10 bg-slate-950/80 border-t border-slate-900/60 py-12 text-center select-none">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="font-head font-extrabold text-2xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            R. Akilanethran
          </h2>
          <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold mt-1">
            Full Stack Developer
          </div>
          
          <p className="text-xs sm:text-sm text-slate-400 italic mt-3 mb-6">
            "Building the future through code."
          </p>

          <div className="flex justify-center gap-6 text-xs text-slate-400 mb-8">
            <a href="#hero" className="hover:text-cyan-400 transition-colors cursor-none">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors cursor-none">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors cursor-none">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors cursor-none">Projects</a>
            <a href="#certifications" className="hover:text-cyan-400 transition-colors cursor-none">Certifications</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors cursor-none">Contact</a>
          </div>

          <div className="pt-6 border-t border-slate-900 text-[10px] sm:text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              © 2026 R. Akilanethran. All rights reserved.
            </div>
            <div>
              Built with React, Next.js, and Tailwind CSS.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
