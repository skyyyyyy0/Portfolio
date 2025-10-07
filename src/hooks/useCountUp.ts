import { useState, useEffect } from 'react';

interface UseCountUpProps {
  end: number;
  duration?: number;
  start?: number;
}

export const useCountUp = ({ 
  end, 
  duration = 90, 
  start = 0 
}: UseCountUpProps) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (count < end) {
      const timer = setTimeout(() => {
        setCount(count + 1);
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [count, end, duration]);

  return count;
};