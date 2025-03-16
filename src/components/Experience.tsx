
import React from 'react';
import { Award, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'AI & Machine Learning',
      company: 'Eduskills, AICTE Virtual Internship',
      period: 'April - June 2024',
      description: 'Virtual internship focusing on Artificial Intelligence and Machine Learning technologies and applications.',
    },
    {
      id: 2,
      title: 'Android Developer',
      company: 'Eduskills, AICTE Virtual Internship',
      period: 'September - November 2023',
      description: 'Virtual internship focusing on Android application development, mobile UI/UX, and application architecture.',
    },
    {
      id: 3,
      title: 'Cybersecurity',
      company: 'Eduskills, AICTE Virtual Internship',
      period: 'October - December 2024',
      description: 'Virtual internship focusing on cybersecurity principles, threat detection, and security best practices.',
    },
  ];

  const certifications = [
    {
      id: 1,
      title: 'AWS ML Foundations',
      issuer: 'AWS Batch',
    },
    {
      id: 2,
      title: 'Getting Started with Deep Learning',
      issuer: 'NVIDIA',
    },
    {
      id: 3,
      title: 'Programming in Java',
      issuer: 'NPTEL',
    },
  ];

  return (
    <section id="experience" className="py-24 bg-secondary/50 reveal">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        
        <div className="mt-12">
          <div className="space-y-12">
            {experiences.map((exp) => (
              <div key={exp.id} className="glass-card rounded-xl p-6 hover:shadow-md transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <div className="inline-flex items-center text-foreground/60 text-sm mt-1 md:mt-0">
                    <Calendar className="w-4 h-4 mr-1" />
                    {exp.period}
                  </div>
                </div>
                
                <div className="text-lg text-primary/90 font-medium mb-4">{exp.company}</div>
                
                <p className="text-foreground/70">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-bold mb-6">Relevant Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="glass-card rounded-xl p-5 flex items-start hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium">{cert.title}</div>
                  <div className="text-sm text-foreground/60">{cert.issuer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
