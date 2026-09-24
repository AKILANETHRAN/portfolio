'use client';

import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [hidden, setHidden] = useState(true);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    // Detect touchscreen
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    setHidden(false);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    const onMouseLeave = () => setHidden(true);
    const onMouseEnter = () => setHidden(false);

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    const handleHoverEvents = () => {
      const hoverables = document.querySelectorAll(
        'a, button, input, textarea, select, [role="button"], .interactive'
      );
      hoverables.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovered(true));
        el.addEventListener('mouseleave', () => setIsHovered(false));
      });
    };

    handleHoverEvents();

    const observer = new MutationObserver(handleHoverEvents);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const animateTrail = () => {
      setTrail((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      requestRef.current = requestAnimationFrame(animateTrail);
    };

    requestRef.current = requestAnimationFrame(animateTrail);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [position]);

  if (hidden) return null;

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-3 h-3 bg-cyan-400 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-screen transition-transform duration-200 pointer-events-none ${
          isHovered ? 'scale-[1.8] bg-purple-400' : ''
        } ${isClicked ? 'scale-[2.5]' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className={`fixed top-0 left-0 w-8 h-8 border border-cyan-400/40 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 mix-blend-screen transition-all duration-300 pointer-events-none ${
          isHovered ? 'border-purple-400 scale-[1.5] bg-purple-500/10' : ''
        } ${isClicked ? 'border-cyan-400 scale-[0.8]' : ''}`}
        style={{ left: `${trail.x}px`, top: `${trail.y}px` }}
      />
    </>
  );
}
