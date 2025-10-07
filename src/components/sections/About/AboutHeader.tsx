import React from 'react';
import styles from './AboutHeader.module.css';

interface AboutHeaderProps {
  text: string;
}

const AboutHeader: React.FC<AboutHeaderProps> = ({ text }) => {
  return (
    <div className={`${styles.header} about-header`}>
      {text}
    </div>
  );
};

export default AboutHeader;