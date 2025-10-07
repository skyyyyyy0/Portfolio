import React from 'react';
import styles from './TraitBadges.module.css';

interface Trait {
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface TraitBadgesProps {
  traits: Trait[];
}

const TraitBadges: React.FC<TraitBadgesProps> = ({ traits }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        My Strengths
      </h3>
      <div className={styles.grid}>
        {traits.map((trait, index) => (
          <button
            key={trait.name}
            className={styles.trait}
            style={{ '--trait-color': trait.color } as React.CSSProperties}
            data-index={index}
          >
            <span className={styles.icon}>{trait.icon}</span>
            <span>{trait.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TraitBadges;