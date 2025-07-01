// src/components/Process/Process.tsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  ChatBubbleLeftRightIcon,
  CurrencyDollarIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline';
import ProcessStep from './ProcessStep';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { ProcessStep as ProcessStepType } from '../../types';

const processSteps: ProcessStepType[] = [
  {
    number: 1,
    title: 'Tell Us About Your Property',
    description: 'Share basic details about your house and situation through our simple form. Takes just 2 minutes to complete.',
    icon: <ChatBubbleLeftRightIcon className="w-8 h-8" />,
  },
  {
    number: 2,
    title: 'Get Your Cash Offer',
    description: 'Receive a fair, no-obligation offer within 24 hours based on your property\'s current market value.',
    icon: <CurrencyDollarIcon className="w-8 h-8" />,
  },
  {
    number: 3,
    title: 'Choose Your Closing Date',
    description: 'Accept the offer and pick a closing date that works perfectly for you. We handle all the paperwork and details.',
    icon: <CalendarDaysIcon className="w-8 h-8" />,
  },
];

const Process: React.FC = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-50 relative overflow-hidden" id="process">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float delay-300" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          ref={elementRef}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary-100 border border-primary-200 rounded-full px-4 py-2 text-primary-700 font-medium mb-4">
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
            Simple Process
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">
              3 Steps
            </span>{' '}
            to Cash
          </h2>

          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Our streamlined process gets you from listing to cash in hand faster than you ever thought possible. No complicated paperwork or lengthy delays.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.number}
                index={index}
                isVisible={isIntersecting}
                step={step}
              />
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-primary-100 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-neutral-800">
              What Makes Us Different?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary-600">No</div>
                <div className="text-neutral-600">Repairs Required</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary-600">$0</div>
                <div className="text-neutral-600">Fees or Commissions</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary-600">24hrs</div>
                <div className="text-neutral-600">to Cash Offer</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <button
            className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:shadow-colored-lg transform hover:scale-105 transition-all duration-300 group"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Start Your Journey Today
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;