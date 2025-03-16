
import React, { useEffect } from 'react';
import { Code, Database, Globe, Cpu } from 'lucide-react';

const Skills = () => {
  useEffect(() => {
    const animateSkills = () => {
      const skillBars = document.querySelectorAll('.skill-progress');
      skillBars.forEach((bar) => {
        const width = bar.getAttribute('data-width');
        if (width) {
          (bar as HTMLElement).style.width = width;
        }
      });
    };

    // Small delay to ensure DOM is ready
    const timeout = setTimeout(animateSkills, 500);
    return () => clearTimeout(timeout);
  }, []);

  const skillCategories = [
    {
      id: 'programming',
      title: 'Programming',
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: 'Python', level: 85 },
        { name: 'C/C++', level: 80 },
        { name: 'JavaScript', level: 75 },
      ],
    },
    {
      id: 'web',
      title: 'Web Development',
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'React JS', level: 75 },
      ],
    },
    {
      id: 'database',
      title: 'Database',
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: 'SQL', level: 80 },
      ],
    },
    {
      id: 'other',
      title: 'Other Skills',
      icon: <Cpu className="w-6 h-6" />,
      skills: [
        { name: 'Problem Solving', level: 85 },
        { name: 'Team Collaboration', level: 90 },
        { name: 'Communication', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-background reveal">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category) => (
            <div key={category.id} className="glass-card rounded-xl p-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-foreground font-medium">{skill.name}</div>
                      <div className="text-foreground/60 text-sm">{skill.level}%</div>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        data-width={`${skill.level}%`}
                        style={{ width: '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-bold mb-6">Languages</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['ENGLISH', 'TELUGU', 'TAMIL', 'HINDI'].map((language) => (
              <div
                key={language}
                className="glass-card rounded-xl p-4 text-center hover:bg-primary/5 transition-colors duration-300"
              >
                <div className="font-medium">{language}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
