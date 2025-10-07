import React from 'react';
import styles from '../../styles/components/projects/TechnologyTag.module.css';

interface TechnologyTagProps {
  technology: string;
  index: number;
}

const TechnologyTag: React.FC<TechnologyTagProps> = ({ technology, index }) => {
  return (
    <span key={index} className={`${styles.tag} technology-tag`}>
      {technology}
    </span>
  );
};

export default TechnologyTag;