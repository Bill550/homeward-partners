// src/components/Hero/Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, PlayIcon } from '@heroicons/react/24/outline';
import Button from '../UI/Button';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useAnimatedCounter } from '../../hooks/useAnimatedCounter';

const Hero: React.FC = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const stats = [
    { number: useAnimatedCounter(2500000, 2000), label: 'Paid Out', prefix: '$', suffix: '+' },
    { number: useAnimatedCounter(500, 2000), label: 'Houses Bought', suffix: '+' },
    { number: useAnimatedCounter(7, 1500), label: 'Avg Days to Close' },
    { number: useAnimatedCounter(98, 2000), label: 'Customer Satisfaction', suffix: '%' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50" />

      {/* Floating Shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" />
      <div className="absolute top-40 right-32 w-48 h-48 bg-accent-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float delay-300" />
      <div className="absolute -bottom-8 left-10 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float delay-500" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Badge */}
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-2 text-primary-700 font-medium"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
              Trusted by 10,000+ Homeowners
            </motion.div>

            {/* Heading */}
            <motion.h1
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Sell Your House in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">
                7 Days
              </span>
              , Guaranteed
            </motion.h1>

            {/* Description */}
            <motion.p
              animate={{ opacity: 1, y: 0 }}
              className="text-xl text-neutral-600 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Skip the hassle of traditional real estate. Get a fair cash offer, close on your timeline, and walk away with money in your pocket. No repairs, no fees, no stress.
            </motion.p>

            {/* Buttons */}
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Button
                className="group"
                rightIcon={<ArrowRightIcon className="w-5 h-5" />}
                size="lg"
                variant="primary"
                onClick={() => scrollToSection('contact')}
              >
                Get My Cash Offer
              </Button>

              <Button
                leftIcon={<PlayIcon className="w-5 h-5" />}
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('process')}
              >
                See How It Works
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              animate={{ opacity: 1 }}
              className="flex items-center gap-6 pt-8"
              initial={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 border-2 border-white flex items-center justify-center text-white font-semibold text-sm"
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-neutral-600 ml-2">
                  Join 500+ happy customers
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            ref={elementRef}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 relative overflow-hidden">
              {/* Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 rounded-3xl opacity-20 blur-sm" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-center mb-8 text-neutral-800">
                  Our Track Record
                </h3>

                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      animate={isIntersecting ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      className="text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    >
                      <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500 mb-2">
                        {stat.prefix && stat.prefix}
                        {stat.number.toLocaleString()}
                        {stat.suffix && stat.suffix}
                      </div>
                      <div className="text-sm text-neutral-600 font-medium">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-400 rounded-full animate-bounce opacity-60" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-400 rounded-full animate-pulse opacity-60" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;