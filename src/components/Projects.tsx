
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Livestock Detection using Drone with ML',
      description: 'A machine learning project that utilizes drone footage to detect and track livestock in agricultural settings.',
      github: 'https://github.com',
      color: 'from-[#9b87f5]/20 to-[#6E59A5]/30',
      tags: ['Machine Learning', 'Computer Vision', 'Python']
    },
    {
      id: 2,
      title: 'Emotion-aware Chatbot',
      description: 'An AI-powered chatbot that recognizes user emotions from text input and responds appropriately.',
      github: 'https://github.com',
      color: 'from-[#D946EF]/20 to-[#8B5CF6]/30',
      tags: ['Natural Language Processing', 'AI', 'Python']
    },
    {
      id: 3,
      title: '2048 Game using HTML and CSS',
      description: 'A web-based implementation of the popular 2048 puzzle game built with HTML, CSS, and JavaScript.',
      github: 'https://github.com',
      color: 'from-[#F97316]/20 to-[#F59E0B]/30',
      tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 4,
      title: 'Live Benchmark using Python',
      description: 'A Python application for real-time performance benchmarking of system components.',
      github: 'https://github.com',
      color: 'from-[#0EA5E9]/20 to-[#3B82F6]/30',
      tags: ['Python', 'System Performance', 'Data Visualization']
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background reveal">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              {/* Gradient background instead of image */}
              <div className={`h-24 bg-gradient-to-r ${project.color} flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-300`}>
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <span className="text-2xl font-display font-bold text-white/80">{project.id}</span>
                </div>
              </div>
              
              <div className="p-6 bg-background/80 backdrop-blur-sm border border-border rounded-b-xl">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                
                <p className="text-foreground/70 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
