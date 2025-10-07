import React from 'react';
import styles from './EducationCard.module.css';

interface EducationCardProps {
  degree: string;
  university: string;
  period: string;
  description: string;
  logoSrc: string;
  logoAlt: string;
  variant: 'blue' | 'green';
}

const EducationCard: React.FC<EducationCardProps> = ({
  degree,
  university,
  period,
  description,
  logoSrc,
  logoAlt,
  variant
}) => {
  return (
    <div className={`${styles.card} ${variant === 'blue' ? styles.blue : styles.green} education-card`}>
      {/* Logo Icon */}
      <div className={styles.iconContainer}>
        <img 
          src={logoSrc} 
          alt={logoAlt} 
          className={styles.logo}
        />
      </div>
      
      {/* Degree Title */}
      <h4 className={styles.degree}>
        {degree}
      </h4>
      
      {/* University Name */}
      <p className={`${styles.university} ${variant === 'blue' ? styles.universityBlue : styles.universityGreen}`}>
        {university}
      </p>
      
      {/* Period */}
      <p className={styles.period}>
        {period}
      </p>
      
      {/* Description */}
      <div className={styles.details}>
        <p className={styles.description}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default EducationCard;