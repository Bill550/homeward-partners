// src/components/Hero/Hero.tsx - Enhanced Background Version
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, PlayIcon, CheckCircleIcon, StarIcon } from '@heroicons/react/24/outline';
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
      {/* Enhanced Multi-layer Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50" />
        
        {/* Additional gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-100/20 via-transparent to-accent-100/30" />
        
        {/* Animated mesh gradient */}
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(90, 155, 142, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(107, 178, 106, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, rgba(90, 155, 142, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(90, 155, 142, 0.1) 0%, transparent 50%)'
            ]
          }}
          className="absolute inset-0"
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='1'%3E%3Cpath d='M30 30c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20zm0 0c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '120px 120px'
            }}
          />
        </div>

        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%235A9B8E' fill-opacity='1'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>
      </div>

      {/* Enhanced floating shapes with more variety */}
      <motion.div 
        animate={{ 
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-primary-200/40 to-primary-300/40 rounded-full mix-blend-multiply filter blur-2xl"
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        animate={{ 
          x: [0, -20, 0],
          y: [0, 15, 0],
          scale: [1, 0.9, 1]
        }}
        className="absolute top-40 right-32 w-48 h-48 bg-gradient-to-br from-accent-200/40 to-accent-300/40 rounded-full mix-blend-multiply filter blur-2xl"
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      
      <motion.div 
        animate={{ 
          x: [0, 25, 0],
          y: [0, -15, 0],
          scale: [1, 1.2, 1]
        }}
        className="absolute -bottom-8 left-10 w-72 h-72 bg-gradient-to-br from-primary-200/30 to-accent-200/30 rounded-full mix-blend-multiply filter blur-2xl"
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Additional smaller floating elements */}
      <motion.div 
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 180, 360]
        }}
        className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-br from-accent-300/20 to-primary-300/20 rounded-full mix-blend-multiply filter blur-xl"
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          x: [0, 15, 0]
        }}
        className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-gradient-to-br from-primary-300/25 to-accent-300/25 rounded-full mix-blend-multiply filter blur-xl"
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Subtle house illustration in background */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-[0.02] pointer-events-none">
        <motion.svg
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 1, 0]
          }}
          className="w-96 h-96 text-primary-600"
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="currentColor">
            <rect width="200" height="160" x="100" y="180" rx="8" />
            <polygon points="80,180 200,80 320,180" />
            <rect width="20" height="60" x="250" y="100" rx="4" />
            <rect width="40" height="80" x="130" y="260" rx="20" />
            <circle cx="160" cy="300" r="3" />
            <rect width="30" height="30" x="200" y="220" rx="4" fill="rgba(255,255,255,0.8)" />
            <rect width="30" height="30" x="250" y="220" rx="4" fill="rgba(255,255,255,0.8)" />
            <rect width="25" height="25" x="140" y="200" rx="4" fill="rgba(255,255,255,0.8)" />
            <line x1="215" y1="220" x2="215" y2="250" stroke="currentColor" strokeWidth="2" />
            <line x1="200" y1="235" x2="230" y2="235" stroke="currentColor" strokeWidth="2" />
            <line x1="265" y1="220" x2="265" y2="250" stroke="currentColor" strokeWidth="2" />
            <line x1="250" y1="235" x2="280" y2="235" stroke="currentColor" strokeWidth="2" />
            <rect width="80" height="100" x="300" y="240" rx="8" />
            <rect width="60" height="70" x="310" y="260" rx="4" fill="rgba(255,255,255,0.6)" />
            <circle cx="200" cy="140" r="8" fill="rgba(255,255,255,0.9)" />
            <ellipse cx="150" cy="350" rx="30" ry="10" fill="rgba(107, 178, 106, 0.3)" />
            <ellipse cx="280" cy="350" rx="40" ry="12" fill="rgba(107, 178, 106, 0.3)" />
            <ellipse cx="350" cy="350" rx="25" ry="8" fill="rgba(107, 178, 106, 0.3)" />
          </g>
        </motion.svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Enhanced Badge */}
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-primary-200 rounded-full px-4 py-2 text-primary-700 font-medium shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
              Trusted by 10,000+ Homeowners
              <div className="flex ml-1">
                {[1,2,3,4,5].map((star) => (
                  <StarIcon key={star} className="w-3 h-3 text-yellow-400 fill-current" />
                ))}
              </div>
            </motion.div>

            {/* Enhanced Heading */}
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

            {/* Enhanced Description */}
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-xl text-neutral-700 leading-relaxed max-w-lg">
                Skip the hassle of traditional real estate. Get a fair cash offer, close on your timeline, and walk away with money in your pocket. No repairs, no fees, no stress.
              </p>
              
              {/* Benefits with checkmarks */}
              <div className="grid grid-cols-2 gap-2 mt-4">
                {['No repairs needed', 'No cleaning required', 'Zero fees or commissions', 'Close on your timeline'].map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-sm text-neutral-700"
                    initial={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  >
                    <CheckCircleIcon className="w-4 h-4 text-accent-500 flex-shrink-0" />
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

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

            {/* Trust indicators */}
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
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 border-2 border-white flex items-center justify-center text-white font-semibold text-sm shadow-lg"
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-neutral-700 ml-2">
                  Join 500+ happy customers
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Enhanced Stats Card */}
          <motion.div
            ref={elementRef}
            animate={{ opacity: 1, x: 0 }}
            className="relative max-w-md mx-auto lg:max-w-none"
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Floating house icon */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center shadow-2xl border-4 border-white"
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
            </motion.div>

            {/* Enhanced stats card */}
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/40 relative overflow-hidden mt-8">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/80 to-accent-50/80" />

              <div className="relative z-10">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-neutral-800 mb-1">
                    Our Track Record
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Real results from real customers
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      animate={isIntersecting ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      className="text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    >
                      <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500 mb-1">
                        {stat.prefix && stat.prefix}
                        {stat.number.toLocaleString()}
                        {stat.suffix && stat.suffix}
                      </div>
                      <div className="text-xs text-neutral-600 font-medium">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-neutral-200 text-center">
                  <div className="flex items-center justify-center gap-2 text-xs text-neutral-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span>Live: 3 offers made today</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced floating elements */}
            <motion.div 
              animate={{ 
                y: [0, -5, 0],
                rotate: [0, 10, 0]
              }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-accent-400 to-accent-500 rounded-full shadow-lg"
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              animate={{ 
                y: [0, 5, 0],
                rotate: [0, -10, 0]
              }}
              className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full shadow-lg"
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </motion.div>
        </div>

        {/* Enhanced bottom testimonial section with animated ticker */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-4 border border-white/40 shadow-xl max-w-4xl mx-auto overflow-hidden relative">
            {/* Animated ticker container */}
            <div className="relative overflow-hidden">
              <motion.div
                animate={{ x: [0, -100] }}
                className="flex items-center space-x-12 text-sm text-neutral-700 whitespace-nowrap"
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ width: "200%" }}
              >
                {/* First set of testimonials */}
                <span className="flex items-center gap-2">
                  <span className="text-lg">🏠</span>
                  <span>Just closed: $340K house in Dallas, TX</span>
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-lg">⭐</span>
                  <span>"Best decision ever!" - Sarah M.</span>
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-lg">💰</span>
                  <span>$275K cash offer in 18 hours</span>
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-lg">🚀</span>
                  <span>Closed in 5 days - Jennifer L.</span>
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-lg">✅</span>
                  <span>No repairs needed - Mike R.</span>
                </span>
                
                {/* Duplicate set for seamless loop */}
                <span className="flex items-center gap-2">
                  <span className="text-lg">🏠</span>
                  <span>Just closed: $340K house in Dallas, TX</span>
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-lg">⭐</span>
                  <span>"Best decision ever!" - Sarah M.</span>
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-lg">💰</span>
                  <span>$275K cash offer in 18 hours</span>
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-lg">🚀</span>
                  <span>Closed in 5 days - Jennifer L.</span>
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-lg">✅</span>
                  <span>No repairs needed - Mike R.</span>
                </span>
              </motion.div>
            </div>

            {/* Gradient fade on edges */}
            <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white/90 to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white/90 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;