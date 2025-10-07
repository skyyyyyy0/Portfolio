import React from 'react';
import styles from './SkillCard.module.css';
import { skillLevelColors } from '../../../data/skills';
import CircularProgress from './CircularProgress';

interface Skill {
  name: string;
  level: string;
}

interface SkillCardProps {
  skill: Skill;
  targetPercentage: number;
  isHovered: boolean;
  isAnimating: boolean;
  animatedPercentage?: number;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const SkillCard: React.FC<SkillCardProps> = ({
  skill,
  targetPercentage,
  isHovered,
  isAnimating,
  animatedPercentage,
  onMouseEnter,
  onMouseLeave
}) => {
  return (
    <div
      className={`${styles.skillCard} ${isHovered ? styles.hovered : ''}`}
      style={{
        borderColor: isHovered ? 
          skillLevelColors[skill.level as keyof typeof skillLevelColors] : 
          'rgba(255, 255, 255, 0.1)',
        boxShadow: isHovered ? 
          `0 15px 30px rgba(0,0,0,0.3), 0 0 20px ${skillLevelColors[skill.level as keyof typeof skillLevelColors]}30` : 
          '0 6px 20px rgba(0,0,0,0.2)',
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Circular progress bar */}
      <CircularProgress 
        percentage={targetPercentage} 
        color={skillLevelColors[skill.level as keyof typeof skillLevelColors]}
        skillLevel={skill.level}
        size={60}
        isAnimating={isAnimating}
        animatedPercentage={animatedPercentage}
      />

      {/* Skill name */}
      <h4 className={styles.skillName}>
        {skill.name}
      </h4>
    </div> 
  );
};

export default SkillCard;