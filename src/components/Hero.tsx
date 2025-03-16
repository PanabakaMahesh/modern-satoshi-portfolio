
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      <div
        className="absolute inset-0 z-0 bg-gradient-to-br from-background to-background via-primary/5"
        aria-hidden="true"
      />
      
      <div className="absolute top-0 right-0 -z-10 h-full w-full overflow-hidden">
        <div className="absolute top-0 right-0 blur-3xl opacity-10 w-[40%] h-[40%] rounded-full bg-primary" />
        <div className="absolute bottom-0 left-0 blur-3xl opacity-10 w-[40%] h-[40%] rounded-full bg-primary" />
      </div>

      <div className="section-container z-10">
        <div className="max-w-3xl">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-in">
            B.Tech Computer Science & Engineering Student
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold font-display mb-6 animate-fade-in animate-delay-100">
            Panabaka <span className="text-primary">Mahesh</span>
          </h1>
          
          <p className="text-xl text-foreground/70 mb-8 max-w-xl leading-relaxed animate-fade-in animate-delay-200">
            A passionate Computer Science student at SRM University seeking opportunities to apply and enhance my skills in programming and technology.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in animate-delay-300">
            <a
              href="#contact"
              className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-primary text-primary-foreground font-medium transition-all duration-200 hover:bg-primary/90 hover:shadow-md hover:shadow-primary/20"
            >
              Contact Me
            </a>
            
            <a
              href="#projects"
              className="inline-flex items-center justify-center h-12 px-8 rounded-md border border-border bg-background hover:bg-secondary transition-colors duration-200"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-border bg-background/80 text-foreground/70 hover:text-primary transition-colors duration-200">
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
