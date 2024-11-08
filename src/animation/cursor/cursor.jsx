import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

export const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({
        x: event.clientX, 
        y: event.clientY 
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    gsap.to('.cursor', {
      x: cursorPosition.x,
      y: cursorPosition.y,
      ease: 'power4.out',
      duration: 0.3
    });
  }, [cursorPosition]);

  return (
    !isMobile && (
      <div
        className="cursor"
        style={{
          position: 'fixed', 
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          backgroundColor: 'rgba(183, 180, 180, 0.6)',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          zIndex: 10000
        }}
      />
    )
  );
};
