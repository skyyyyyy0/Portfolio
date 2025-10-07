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
          creative <span className={styles.roleHighlight}>data scientist</span>
        </h1>

        <div className={styles.description}>
          <p className={`${styles.primaryText} description-primary`}>
            I'm a proactive data scientist passionate about creating dynamic insights from complex datasets. 
            From machine learning to statistical modeling, I thrive on solving complex problems with clean, 
            efficient analysis.
          </p>

          <p className={`${styles.secondaryText} description-secondary`}>
            When I'm not immersed in data, I'm exploring new ideas and staying curious. 
            Life's about balance, and I love embracing every part of it.
          </p>

          <p className={`${styles.emphasisText} description-emphasis`}>
            I believe in waking up each day eager to make a difference!
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