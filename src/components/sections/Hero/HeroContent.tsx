import React from 'react';
import styles from './HeroContent.module.css';
import TraitBadges from './TraitBadges';
import { useTypeWriter } from '../../../hooks';

interface Trait {
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface HeroContentProps {
  titles: string[];
  subtitle: string;
  description: string;
  traits: Trait[];
  resumeUrl: string;
}

const HeroContent: React.FC<HeroContentProps> = ({
  titles,
  subtitle,
  description,
  traits,
  resumeUrl,
}) => {
  const typedText = useTypeWriter({ texts: titles });

  return (
    <div className={styles.container}>
      {/* Typewriter Title */}
      <div className={styles.title}>
        <span className={styles.typewriterText}>
          {typedText}
          <span className={styles.cursor}></span>
        </span>
      </div>

      {/* Subtitle */}
      <p className={styles.subtitle}>
        {subtitle}
      </p>

      {/* Description Box */}
      <div className={styles.description}>
        <p>{description}</p>
      </div>

      {/* Trait Badges */}
      <TraitBadges traits={traits} />

      {/* CTA Button */}
      <div className={styles.buttons}>
        <a 
          href={resumeUrl}
          className={styles.resumeButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default HeroContent;