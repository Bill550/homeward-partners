import React from 'react';

const ParticleBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {Array.from({ length: 9 }).map((_, index) => (
        <div
          key={index}
          className="particle absolute"
          style={{
            width: `${Math.random() * 4 + 3}px`,
            height: `${Math.random() * 4 + 3}px`,
            left: `${(index + 1) * 10}%`,
            animationDelay: `${index * 2}s`,
            animationDuration: `${Math.random() * 10 + 15}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground; 