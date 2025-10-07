import React from 'react';
import styles from './StatsCounter.module.css';
import { useCountUp } from '../../../hooks';

interface StatsCounterProps {
  end: number;
  label: string;
  suffix?: string;
  colorClass: 'blue' | 'green' | 'purple';
}

const StatsCounter: React.FC<StatsCounterProps> = ({ 
  end, 
  label, 
  suffix = '+',
  colorClass 
}) => {
  const count = useCountUp({ end, duration: 90 });

  return (
    <div className={styles.stat}>
      <div className={`${styles.number} ${styles[colorClass]}`}>
        {count}{suffix}
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  );
};

export default StatsCounter;