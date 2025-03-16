
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Livestock Detection using Drone with ML',
      description: 'A machine learning project that utilizes drone footage to detect and track livestock in agricultural settings.',
      github: 'https://github.com',
      tags: ['Machine Learning', 'Computer Vision', 'Python']
    },
    {
      id: 2,
      title: 'Emotion-aware Chatbot',
      description: 'An AI-powered chatbot that recognizes user emotions from text input and responds appropriately.',
      github: 'https://github.com',
      tags: ['Natural Language Processing', 'AI', 'Python']
    },
    {
      id: 3,
      title: '2048 Game using HTML and CSS',
      description: 'A web-based implementation of the popular 2048 puzzle game built with HTML, CSS, and JavaScript.',
      github: 'https://github.com',
      tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 4,
      title: 'Live Benchmark using Python',
      description: 'A Python application for real-time performance benchmarking of system components.',
      github: 'https://github.com',
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
              className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg group"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-background flex items-center justify-center p-8">
                <div className="text-4xl font-display font-bold text-primary/50 text-center">{project.title.substring(0, 1)}</div>
              </div>
              
              <div className="p-6">
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
