
// src/components/Features/FeatureCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FeatureItem } from '../../types';

interface FeatureCardProps {
  feature: FeatureItem;
  index: number;
  isVisible: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index, isVisible }) => {
  return (
    <motion.div
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: feature.delay,
        ease: 'easeOut'
      }}
    >
      <div className="bg-white border border-neutral-200 rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-2xl hover:border-primary-200 hover:-translate-y-2 relative overflow-hidden">
        {/* Hover Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-accent-50/0 group-hover:from-primary-50/30 group-hover:to-accent-50/30 transition-all duration-500 rounded-2xl" />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
            <div className="text-primary-600 group-hover:text-primary-700 transition-colors duration-300">
              {feature.icon}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-neutral-800 mb-4 group-hover:text-primary-700 transition-colors duration-300">
            {feature.title}
          </h3>

          {/* Description */}
          <p className="text-neutral-600 leading-relaxed">
            {feature.description}
          </p>
        </div>

        {/* Decorative Element */}
        <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary-100/20 to-accent-100/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
      </div>
    </motion.div>
  );
};

export default FeatureCard;
