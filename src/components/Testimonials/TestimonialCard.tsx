
// src/components/Testimonials/TestimonialCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import { TestimonialItem } from '../../types';

interface TestimonialCardProps {
  testimonial: TestimonialItem;
  index: number;
  isVisible: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index, isVisible }) => {
  return (
    <motion.div
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      className="group"
      initial={{ opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1 + 0.3,
        ease: 'easeOut'
      }}
    >
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 h-full transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:-translate-y-2 relative overflow-hidden">
        {/* Quote Icon */}
        <div className="absolute -top-2 -right-2 text-6xl text-white/10 font-serif">"</div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Stars */}
          <div className="flex mb-4">
            {[...Array(testimonial.rating || 5)].map((_, i) => (
              <StarIcon key={i} className="w-5 h-5 text-accent-400" />
            ))}
          </div>

          {/* Testimonial Text */}
          <p className="text-white/90 mb-6 leading-relaxed italic">
            "{testimonial.text}"
          </p>

          {/* Author */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
              {testimonial.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <div className="font-semibold text-white">
                {testimonial.name}
              </div>
              <div className="text-primary-200 text-sm">
                {testimonial.location}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
