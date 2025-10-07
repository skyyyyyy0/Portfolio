import React, { useEffect } from 'react';
import styles from './About.module.css';
import AboutHeader from './AboutHeader';
import AboutContent from './AboutContent';
import EducationSection from './EducationSection';

const About: React.FC = () => {
  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );
  
    const elementsToAnimate = document.querySelectorAll(
      '.about-header, .about-left, .about-right, .description-primary, .description-secondary, .description-emphasis, .education-section, .education-card'
    );
  
    elementsToAnimate.forEach((el) => observer.observe(el));
  
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <AboutHeader text="MORE ABOUT ME" />
        
        {/* Main Content - Text + Carousel */}
        <AboutContent />

        {/* Education Section */}
        <EducationSection />
      </div>
    </section>
  );
};

export default About;