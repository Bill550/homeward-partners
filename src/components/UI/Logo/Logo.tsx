// src/components/UI/Logo/Logo.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  animate?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  animate = true
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12'
  };

  const logoClasses = clsx(
    'transition-all duration-300 ease-out',
    'filter drop-shadow-sm hover:drop-shadow-md',
    sizeClasses[size],
    className
  );

  const LogoComponent = animate ? motion.div : 'div';
  const motionProps = animate ? {
    whileHover: { scale: 1.05 },
    transition: { type: "spring" as const, stiffness: 400, damping: 17 }
  } : {};

  return (
    <LogoComponent className={logoClasses} {...motionProps}>
      <svg
        aria-label="Homeward Partners Logo"
        className="w-auto h-full"
        role="img"
        viewBox="0 0 320 80"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* House structure */}
        <g>
          {/* Large roof triangle */}
          <motion.path
            animate={animate ? { pathLength: 1 } : {}}
            className="text-primary-500"
            d="M15 45 L40 25 L65 45 L60 45 L40 30 L20 45 Z"
            fill="currentColor"
            initial={animate ? { pathLength: 0 } : {}}
            stroke="currentColor"
            strokeWidth="1"
            transition={animate ? { duration: 1, delay: 0.2 } : {}}
          />

          {/* Second smaller roof */}
          <motion.path
            animate={animate ? { pathLength: 1 } : {}}
            className="text-accent-500"
            d="M25 50 L35 40 L45 50 L42 50 L35 44 L28 50 Z"
            fill="currentColor"
            initial={animate ? { pathLength: 0 } : {}}
            stroke="currentColor"
            strokeWidth="1"
            transition={animate ? { duration: 1, delay: 0.4 } : {}}
          />

          {/* House body */}
          <motion.rect
            animate={animate ? { scaleY: 1 } : {}}
            className="text-primary-500"
            fill="currentColor"
            height="20"
            initial={animate ? { scaleY: 0 } : {}}
            stroke="currentColor"
            strokeWidth="1"
            transition={animate ? { duration: 0.5, delay: 0.6 } : {}}
            width="20"
            x="30"
            y="45"
          />

          {/* Door */}
          <motion.rect
            animate={animate ? { scaleY: 1 } : {}}
            className="text-primary-600"
            fill="currentColor"
            height="10"
            initial={animate ? { scaleY: 0 } : {}}
            transition={animate ? { duration: 0.3, delay: 0.8 } : {}}
            width="8"
            x="36"
            y="55"
          />

          {/* Windows - four small squares */}
          {[
            { x: 32, y: 48 },
            { x: 36, y: 48 },
            { x: 42, y: 48 },
            { x: 46, y: 48 }
          ].map((window, index) => (
            <motion.rect
              key={index}
              animate={animate ? { opacity: 1, scale: 1 } : {}}
              className="text-neutral-700"
              fill="currentColor"
              height="2"
              initial={animate ? { opacity: 0, scale: 0 } : {}}
              transition={animate ? { duration: 0.2, delay: 1 + index * 0.1 } : {}}
              width="2"
              x={window.x}
              y={window.y}
            />
          ))}

          {/* Key shape on the right */}
          <g transform="translate(65, 35)">
            {/* Key shaft */}
            <motion.rect
              animate={animate ? { scaleX: 1 } : {}}
              className="text-primary-500"
              fill="currentColor"
              height="3"
              initial={animate ? { scaleX: 0 } : {}}
              rx="1.5"
              transition={animate ? { duration: 0.5, delay: 1.2 } : {}}
              width="20"
              x="5"
              y="12"
            />

            {/* Key head (circle) */}
            <motion.circle
              animate={animate ? { pathLength: 1 } : {}}
              className="text-primary-500"
              cx="8"
              cy="13.5"
              fill="none"
              initial={animate ? { pathLength: 0 } : {}}
              r="5"
              stroke="currentColor"
              strokeWidth="2"
              transition={animate ? { duration: 0.8, delay: 1.4 } : {}}
            />

            {/* Key teeth */}
            {[
              { x: 23, y: 11, width: 2, height: 2 },
              { x: 23, y: 14, width: 3, height: 2 },
              { x: 23, y: 17, width: 1.5, height: 2 }
            ].map((tooth, index) => (
              <motion.rect
                key={index}
                animate={animate ? { scaleX: 1 } : {}}
                className="text-primary-500"
                fill="currentColor"
                height={tooth.height}
                initial={animate ? { scaleX: 0 } : {}}
                transition={animate ? { duration: 0.2, delay: 1.6 + index * 0.1 } : {}}
                width={tooth.width}
                x={tooth.x}
                y={tooth.y}
              />
            ))}
          </g>
        </g>

        {/* Company text */}
        <motion.text
          animate={animate ? { opacity: 1, x: 0 } : {}}
          className="text-primary-600"
          fill="currentColor"
          fontFamily="Inter, -apple-system, sans-serif"
          fontSize="14"
          fontWeight="700"
          initial={animate ? { opacity: 0, x: -20 } : {}}
          letterSpacing="0.5px"
          transition={animate ? { duration: 0.5, delay: 1.8 } : {}}
          x="100"
          y="32"
        >
          HOMEWARD
        </motion.text>
        <motion.text
          animate={animate ? { opacity: 1, x: 0 } : {}}
          className="text-primary-500"
          fill="currentColor"
          fontFamily="Inter, -apple-system, sans-serif"
          fontSize="14"
          fontWeight="700"
          initial={animate ? { opacity: 0, x: -20 } : {}}
          letterSpacing="0.5px"
          transition={animate ? { duration: 0.5, delay: 2 } : {}}
          x="100"
          y="48"
        >
          PARTNERS
        </motion.text>
      </svg>
    </LogoComponent>
  );
};

export default Logo;