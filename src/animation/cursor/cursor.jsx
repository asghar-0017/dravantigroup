import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

export const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({
        x: event.pageX,
        y: event.pageY
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
    <div
      className="cursor"
      style={{
        position: 'fixed',
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        backgroundColor: 'rgb(183, 180, 180, 0.6)',
        pointerEvents: 'none', 
        transform: 'translate(-50%, -50%)',
        zIndex: 9999 
      }}
    />
  );
};

