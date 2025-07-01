import { useState, useEffect } from 'react';

export const useAnimatedCounter = (
  end: number,
  duration: number = 2000,
  start: number = 0
): number => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (start === end) return;

    const startTime = Date.now();
    const startValue = start;
    const endValue = end;

    const timer = setInterval(() => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);

      const currentValue = Math.floor(
        startValue + (endValue - startValue) * easeOutCubic
      );

      setCount(currentValue);

      if (progress === 1) {
        clearInterval(timer);
        setCount(endValue);
      }
    }, 16); // ~60fps

    return () => clearInterval(timer);
  }, [end, duration, start]);

  return count;
};