
import React from 'react';
import { CalendarDays, GraduationCap, School, BookOpen } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      id: 1,
      title: 'Bachelor of Technology',
      institution: 'SRM University KTR',
      field: 'Computer Science and Engineering',
      period: '2022 - 2026*',
      grade: 'CGPA: 7.92/10',
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      id: 2,
      title: '12th Standard',
      institution: 'GRT Mahalakshmi Vidyalaya',
      field: 'Ashok Nagar, Chennai-83',
      period: '2022',
      grade: 'Grade: 80.0%',
      icon: <School className="w-6 h-6" />
    },
    {
      id: 3,
      title: '10th Standard',
      institution: 'Kesari Higher Secondary School',
      field: 'T.Nagar, Chennai-17',
      period: '2020',
      grade: 'Grade: 63.4%',
      icon: <BookOpen className="w-6 h-6" />
    }
  ];

  return (
    <section id="education" className="py-24 bg-secondary/50 reveal">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationData.map((item, index) => (
            <div
              key={item.id}
              className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-md group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
              </div>
              
              <div className="mb-4">
                <div className="text-lg font-medium">{item.institution}</div>
                <div className="text-foreground/70 text-sm">{item.field}</div>
              </div>
              
              <div className="flex items-center text-sm text-foreground/60 mb-2">
                <CalendarDays className="w-4 h-4 mr-2" />
                <span>{item.period}</span>
              </div>
              
              <div className="mt-4 inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                {item.grade}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
