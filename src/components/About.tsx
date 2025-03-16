
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden reveal">
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent_60%)]" />
      </div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mt-12">
          <div className="md:col-span-7">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                As a B.Tech student specializing in Computer Science and Engineering at SRM University, I am actively seeking an internship where I can apply and enhance my skills in various programming languages and frameworks.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                I am particularly interested in opportunities that involve creative and practical projects, as I aim to grow as an engineer while gaining hands-on experience in real-world applications.
              </p>
              
              <p className="text-lg leading-relaxed">
                My commitment to continuous learning and problem-solving drives me to explore new technologies and contribute to innovative solutions. I believe in the power of technology to transform industries and improve lives.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
                <span className="text-foreground/70">Self-motivated</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
                <span className="text-foreground/70">Problem Solver</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
                <span className="text-foreground/70">Team Player</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
                <span className="text-foreground/70">Quick Learner</span>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-5">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden p-3 bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/20 shadow-xl">
                <div className="relative aspect-square rounded-xl overflow-hidden border-4 border-background/50 shadow-inner">
                  <Avatar className="w-full h-full rounded-none">
                    <AvatarImage 
                      src="/lovable-uploads/7b31d820-b2f1-410f-801a-c194e5b30a54.png" 
                      alt="Panabaka Mahesh" 
                      className="object-cover w-full h-full"
                    />
                    <AvatarFallback className="text-5xl font-display font-bold text-primary/80">PM</AvatarFallback>
                  </Avatar>
                </div>
                
                <div className="absolute -bottom-2 -right-2 w-24 h-24 rounded-full bg-primary/20 blur-2xl -z-10"></div>
                <div className="absolute -top-2 -left-2 w-24 h-24 rounded-full bg-secondary/20 blur-2xl -z-10"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 transform translate-x-5 -translate-y-5 w-20 h-20 rounded-full bg-primary/10 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 transform -translate-x-5 translate-y-5 w-20 h-20 rounded-full bg-secondary/10 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
