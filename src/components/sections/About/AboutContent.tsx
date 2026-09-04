import React from 'react';
import styles from './AboutContent.module.css';
import LifestyleCarousel from './LifestyleCarousel';

const AboutContent: React.FC = () => {
  return (
    <div className={styles.grid}>
      {/* Left Side - Text Content */}
      <div className={`${styles.left} about-left`}>
        <h1 className={styles.title}>
          I'm <span className={styles.nameHighlight}>Haneul</span>, a<br />
          creative <span className={styles.roleHighlight}>data analyst</span>
        </h1>

        <div className={styles.description}>
          <p className={`${styles.primaryText} description-primary`}>
            I transform complex datasets into reliable KPIs, interactive dashboards, and actionable business insights. My experience includes fleet telematics, fuel-efficiency analysis, data validation, and predictive modeling using Python, SQL, Tableau, and AWS.
          </p>

          <p className={`${styles.secondaryText} description-secondary`}>
            I enjoy working through messy data, asking the right questions, and communicating analytical findings clearly to both technical and non-technical stakeholders.
          </p>

          <p className={`${styles.emphasisText} description-emphasis`}>
            Outside of work, I enjoy running, strength training, reading, and taking
            peaceful walks. I bring the same curiosity and discipline to every
            analysis, turning reliable data into clear business decisions.
          </p>
        </div>
      </div>

      {/* Right Side - Lifestyle Carousel */}
      <div className={`${styles.right} about-right`}>
        <LifestyleCarousel />
      </div>
    </div>
  );
};

export default AboutContent;