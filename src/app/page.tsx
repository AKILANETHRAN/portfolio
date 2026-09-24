'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Achievements from '@/components/Achievements';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Languages from '@/components/Languages';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <LoadingScreen onComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <div className="flex flex-col min-h-screen relative z-10">
          <Navbar />
          <main className="flex-grow">
            <Hero />
            <About />
            <Skills />
            <Education />
            <Achievements />
            <Projects />
            <Certifications />
            <Languages />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
