import React from 'react';
import styles from './StatsCounter.module.css';
import { useCountUp } from '../../../hooks';

interface StatsCounterProps {
  end: number;
  label: string;
  suffix?: string;
  decimals?: number;
  colorClass: 'blue' | 'green' | 'purple';
}

const StatsCounter: React.FC<StatsCounterProps> = ({
  end,
  label,
  suffix = '+',
  decimals = 0,
  colorClass
}) => {
  const scale = 10 ** decimals;
  const count = useCountUp({
    end: end * scale,
    duration: 90
  });

  const displayCount = (count / scale).toFixed(decimals);

  return (
    <div className={styles.stat}>
      <div className={`${styles.number} ${styles[colorClass]}`}>
        {displayCount}{suffix}
      </div>

      <div className={styles.label}>{label}</div>
    </div>
  );
};

export default StatsCounter;