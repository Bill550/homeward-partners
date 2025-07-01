// src/pages/About/About.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon, 
  HomeIcon, 
  UserGroupIcon,
  TrophyIcon 
} from '@heroicons/react/24/outline';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6">
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">
                Homeward Partners
              </span>
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              We're not just another house buying company. We're your partners in making home selling simple, fast, and fair.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Founded in 2024, Homeward Partners started with a simple mission: to revolutionize how people sell their homes. We saw too many homeowners struggling with the traditional real estate process - waiting months for sales, paying high commissions, and dealing with endless complications.
                </p>
                <p>
                  Our founders, experienced real estate professionals, decided there had to be a better way. A way that puts homeowners first, eliminates unnecessary fees, and provides the speed and certainty that people need during life transitions.
                </p>
                <p>
                  Today, we've helped over 500 families sell their homes quickly and fairly, and we're just getting started.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="space-y-4">
                <div className="bg-primary-50 p-6 rounded-2xl">
                  <HomeIcon className="w-12 h-12 text-primary-600 mb-4" />
                  <div className="text-2xl font-bold text-primary-600">500+</div>
                  <div className="text-neutral-600">Houses Purchased</div>
                </div>
                <div className="bg-accent-50 p-6 rounded-2xl">
                  <TrophyIcon className="w-12 h-12 text-accent-600 mb-4" />
                  <div className="text-2xl font-bold text-accent-600">98%</div>
                  <div className="text-neutral-600">Satisfaction Rate</div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-neutral-50 p-6 rounded-2xl">
                  <UserGroupIcon className="w-12 h-12 text-neutral-600 mb-4" />
                  <div className="text-2xl font-bold text-neutral-600">24/7</div>
                  <div className="text-neutral-600">Support Available</div>
                </div>
                <div className="bg-primary-100 p-6 rounded-2xl">
                  <ShieldCheckIcon className="w-12 h-12 text-primary-700 mb-4" />
                  <div className="text-2xl font-bold text-primary-700">100%</div>
                  <div className="text-neutral-600">Transparent Process</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;