import React from 'react';
import styles from './ContactLink.module.css';

interface ContactLinkProps {
  name: string;
  icon: string;
  url: string;
  color: string;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const ContactLink: React.FC<ContactLinkProps> = ({
  name,
  icon,
  url,
  color,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <a                                  
      href={url}
      target={name !== 'Email' ? '_blank' : undefined}
      rel={name !== 'Email' ? 'noopener noreferrer' : undefined}
      className={`${styles.link} ${isHovered ? styles.hovered : ''}`}
      style={{
        borderColor: isHovered ? `${color}50` : 'rgba(255, 255, 255, 0.1)',
        boxShadow: isHovered 
          ? `0 8px 20px rgba(0,0,0,0.3), 0 0 15px ${color}30`
          : '0 4px 15px rgba(0,0,0,0.2)',
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Icon */}
      <div 
        className={styles.icon}
        style={{
          filter: isHovered 
            ? `drop-shadow(0 0 10px ${color}70)` 
            : 'none',
        }}
      >
        {icon}
      </div>

      {/* Name */}
      <span 
        className={styles.name}
        style={{
          color: isHovered ? color : '#ffffff',
        }}
      >
        {name}
      </span>

      {/* Animated Background Gradient */}
      <div 
        className={styles.backgroundGradient}
        style={{
          background: isHovered 
            ? `radial-gradient(circle at center, ${color}08 0%, transparent 70%)` 
            : 'transparent',
        }}
      />
    </a>
  );
};

export default ContactLink;