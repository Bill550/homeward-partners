// src/components/UI/Particles/Particles.tsx
import React from 'react';

const Particles: React.FC = () => {
  const particleCount = 12;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {Array.from({ length: particleCount }, (_, index) => (
        <div
          key={index}
          className="particle"
          style={{
            left: `${5 + (index * 8)}%`,
            animationDelay: `${index * 1.5}s`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            animationDuration: `${15 + Math.random() * 10}s`
          }}
        />
      ))}
    </div>
  );
};

export default Particles;