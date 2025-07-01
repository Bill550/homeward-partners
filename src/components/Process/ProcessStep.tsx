
// src/components/Process/ProcessStep.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ProcessStep as ProcessStepType } from '../../types';

interface ProcessStepProps {
  step: ProcessStepType;
  index: number;
  isVisible: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, index, isVisible }) => {
  return (
    <motion.div
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      className="text-center group"
      initial={{ opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.2 + 0.3,
        ease: 'easeOut'
      }}
    >
      {/* Step Number Circle */}
      <div className="relative mb-8">
        <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto shadow-colored group-hover:shadow-colored-lg transition-all duration-300 group-hover:scale-110">
          <span className="text-2xl font-bold text-white">{step.number}</span>
        </div>

        {/* Icon Overlay */}
        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-primary-100 group-hover:scale-110 transition-transform duration-300">
          <div className="text-primary-600">
            {step.icon}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-neutral-800 group-hover:text-primary-700 transition-colors duration-300">
          {step.title}
        </h3>

        <p className="text-neutral-600 leading-relaxed max-w-sm mx-auto">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProcessStep;
