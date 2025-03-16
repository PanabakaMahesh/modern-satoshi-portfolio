
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import PageTransition from '@/components/PageTransition';

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.02] pointer-events-none"></div>
        
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        
        <footer className="py-8 bg-background border-t border-border">
          <div className="container mx-auto px-6 text-center">
            <p className="text-foreground/60">
              &copy; {new Date().getFullYear()} Panabaka Mahesh. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default Index;
