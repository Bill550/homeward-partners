// src/components/Features/Features.tsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  BoltIcon,
  HomeIcon,
  CurrencyDollarIcon,
  CalendarIcon,
  ShieldCheckIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import FeatureCard from './FeatureCard';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { FeatureItem } from '../../types';

const features: FeatureItem[] = [
  {
    icon: <BoltIcon className="w-8 h-8" />,
    title: 'Lightning Fast Process',
    description: 'Get a competitive cash offer within 24 hours and close in as little as 7 days. No waiting for bank approvals or financing delays.',
    delay: 0.1,
  },
  {
    icon: <HomeIcon className="w-8 h-8" />,
    title: 'Buy Any Condition',
    description: 'We buy houses as-is, which means you don\'t need to make any repairs, clean, or stage your home before selling.',
    delay: 0.2,
  },
  {
    icon: <CurrencyDollarIcon className="w-8 h-8" />,
    title: 'Zero Hidden Fees',
    description: 'Keep more money in your pocket. We cover all closing costs with no hidden fees, commissions, or surprise charges.',
    delay: 0.3,
  },
  {
    icon: <CalendarIcon className="w-8 h-8" />,
    title: 'Flexible Closing',
    description: 'Choose your closing date. Whether you need to close in 7 days or 3 months, we work with your timeline.',
    delay: 0.4,
  },
  {
    icon: <ShieldCheckIcon className="w-8 h-8" />,
    title: '100% Transparent',
    description: 'No surprises or hidden clauses. Our process is completely transparent from start to finish with clear communication.',
    delay: 0.5,
  },
  {
    icon: <StarIcon className="w-8 h-8" />,
    title: 'Trusted by Thousands',
    description: 'Join thousands of satisfied homeowners who chose Homeward Partners for their house sale and experienced our exceptional service.',
    delay: 0.6,
  },
];

const Features: React.FC = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="features">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/50 to-white" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          ref={elementRef}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-2 text-primary-700 font-medium mb-4">
            <ShieldCheckIcon className="w-4 h-4" />
            Why Choose Us
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            The Smart Way to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">
              Sell
            </span>
          </h2>

          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Skip the traditional hassles and get straight to closing. We've revolutionized home selling to be faster, easier, and more profitable for you.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              index={index}
              isVisible={isIntersecting}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-100">
            <h3 className="text-2xl font-bold mb-4 text-neutral-800">
              Ready to Experience the Difference?
            </h3>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Join thousands of homeowners who chose the smarter way to sell. Get your no-obligation cash offer today.
            </p>
            <button
              className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-colored-lg transform hover:scale-105 transition-all duration-300"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get My Cash Offer Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
