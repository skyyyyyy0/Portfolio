import React from 'react';
import styles from './HeroAvatar.module.css';
import StatsCounter from './StatsCounter';

interface HeroAvatarProps {
  name: string;
  imageSrc: string;
}

const HeroAvatar: React.FC<HeroAvatarProps> = ({ name, imageSrc }) => {
  return (
    <div className={styles.container}>
      {/* Avatar */}
      <div className={styles.avatar}>
        <img 
          src={imageSrc}
          alt="Profile"
          className={styles.image}
        />
      </div>

      {/* Name with handwritten style */}
      <div className={styles.name}>
        {name}
      </div>

      {/* Quick Stats */}
      <div className={styles.stats}>
        <StatsCounter 
          end={3} 
          label="Years Exp." 
          suffix="+"
          colorClass="blue"
        />
        <StatsCounter 
          end={15} 
          label="Projects"
          suffix="+"
          colorClass="green"
        />
        <StatsCounter 
          end={10} 
          label="Data Points" 
          suffix="M+"
          colorClass="purple"
        />
      </div>
    </div>
  );
};

export default HeroAvatar;