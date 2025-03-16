
import React, { useEffect, useRef } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const sectionRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const revealSections = () => {
      const sections = document.querySelectorAll('.reveal');
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.85) {
          section.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealSections);
    // Initial check
    revealSections();

    return () => window.removeEventListener('scroll', revealSections);
  }, []);

  return <>{children}</>;
};

export default PageTransition;
