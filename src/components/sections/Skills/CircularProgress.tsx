import React from 'react';
import styles from './CircularProgress.module.css';
import { skillLevelColors } from '../../../data/skills';

interface CircularProgressProps {
  percentage: number;
  color: string;
  size?: number;
  skillLevel: string;
  isAnimating?: boolean;
  animatedPercentage?: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ 
  percentage, 
  color, 
  size = 50,
  skillLevel,
  isAnimating,
  animatedPercentage 
}) => {
  // 동적 애니메이션을 위한 표시 퍼센트
  const displayPercentage = isAnimating ? (animatedPercentage || 0) : percentage;
  
  const radius = (size - 8) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  
  // 핵심 수정: displayPercentage 사용
  const strokeDashoffset = circumference - (displayPercentage / 100) * circumference;
  
  // Generate unique gradient ID for each progress bar
  const gradientId = `gradient-${skillLevel.toLowerCase()}-${Math.random().toString(36).substr(2, 9)}`;

  // Generate gradient colors based on skill level
  const getGradientColors = (level: string) => {
    const baseColor = skillLevelColors[level as keyof typeof skillLevelColors] || color;
    
    // Create lighter color for gradient effect
    const lightenColor = (hex: string) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      
      const newR = Math.min(255, r + 40);
      const newG = Math.min(255, g + 40);
      const newB = Math.min(255, b + 40);
      
      return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
    };
    
    return { start: baseColor, end: lightenColor(baseColor) };
  };

  const gradientColors = getGradientColors(skillLevel);

  return (
    <div className={styles.circularProgressContainer} style={{ width: size, height: size }}>
      <svg width={size} height={size} className={styles.circularProgressSvg}>
        <defs>
          {/* Gradient definition */}
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={gradientColors.start} />
            <stop offset="100%" stopColor={gradientColors.end} />
          </linearGradient>
          
          {/* Glow filter */}
          <filter id={`glow-${gradientId}`}>
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="4"
          fill="transparent"
        />
        
        {/* Progress circle - 핵심: strokeDashoffset이 동적으로 변경됨 */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={`url(#${gradientId})`}
          strokeWidth="4"
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className={styles.circularProgressStroke}
          filter={`url(#glow-${gradientId})`}
          style={{
            transition: isAnimating ? 'none' : 'stroke-dashoffset 0.3s ease-out'
          }}
        />
      </svg>
      
      {/* Percentage text */}
      <div className={styles.circularProgressText}>
        {displayPercentage}%
      </div>
    </div>
  );
};

export default CircularProgress;