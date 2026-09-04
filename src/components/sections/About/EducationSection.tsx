import React from 'react';
import styles from './EducationSection.module.css';
import EducationCard from './EducationCard';

const EducationSection: React.FC = () => {
  const educationData = [
    {
      degree: 'Master of Science in Mathematics',
      university: 'The City College of New York',
      period: '2025 - May 2027 (Expected) • New York, NY',
      description: 'Focused on statistics, probability, data analysis, machine learning, and advanced calculus, applying mathematical reasoning to real-world analytical problems.',
      logoSrc: '/assets/CCNY_LOGO.png',
      logoAlt: 'CCNY',
      variant: 'blue' as const
    },
    {
      degree: 'Bachelor of Engineering in Computer Engineering',
      university: 'The City College of New York',
      period: '2018 - 2022 • New York, NY',
      description: 'Developed a strong foundation in data structures and algorithms for efficient data processing and analysis. Applied software engineering principles to build and manage robust database systems.',
      logoSrc: '/assets/CCNY_LOGO.png',
      logoAlt: 'CCNY',
      variant: 'green' as const
    }
  ];

  return (
    <div className={`${styles.section} education-section`}>
      {/* Section Title */}
      <h3 className={styles.title}>
        My Education
      </h3>
      
      {/* Education Cards Grid */}
      <div className={styles.grid}>
        {educationData.map((edu, index) => (
          <EducationCard
            key={index}
            degree={edu.degree}
            university={edu.university}
            period={edu.period}
            description={edu.description}
            logoSrc={edu.logoSrc}
            logoAlt={edu.logoAlt}
            variant={edu.variant}
          />
        ))}
      </div>
    </div>
  );
};

export default EducationSection;