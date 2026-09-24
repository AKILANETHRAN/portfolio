import { useEffect, useState, useRef } from 'react';

export function useCountUp(target: number, duration: number = 1500, trigger: boolean = true) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!trigger || hasAnimated.current) return;

    let animationFrameId: number;
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing out quadratic function
      const easeOutQuad = (x: number): number => 1 - (1 - x) * (1 - x);
      const easedProgress = easeOutQuad(progress);
      
      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(target);
        hasAnimated.current = true;
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [target, duration, trigger]);

  return count;
}
