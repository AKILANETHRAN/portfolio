'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      const sections = ['hero', 'about', 'skills', 'education', 'achievements', 'projects', 'certifications', 'contact'];
      let current = 'hero';
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'skills', name: 'Skills' },
    { id: 'education', name: 'Education' },
    { id: 'achievements', name: 'Achievements' },
    { id: 'projects', name: 'Projects' },
    { id: 'certifications', name: 'Certs' },
    { id: 'contact', name: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple z-[10000] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className="fixed top-0 left-0 right-0 z-[1000] px-6 py-4 flex items-center justify-between backdrop-blur-md border-b border-[var(--glass-border)] bg-[var(--nav-bg)] transition-all duration-300">
        <a 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); handleLinkClick('hero'); }} 
          className="font-head font-bold text-xl tracking-tight bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent"
        >
          RA.
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.id);
                }}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-cyan-400 ${
                  activeSection === link.id ? 'text-cyan-400 font-semibold' : 'text-[var(--text-dim)]'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme Toggle & Mobile Hamburger */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center p-2 rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-cyan-400 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[999] bg-[#050816]/98 backdrop-blur-lg flex flex-col items-center justify-center gap-6 md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.id);
              }}
              className="font-head font-semibold text-2xl text-slate-200 hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
