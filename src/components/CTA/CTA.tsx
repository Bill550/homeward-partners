import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Button from '../UI/Button';

const CTA: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-primary-600 to-accent-600 text-white overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float" />
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-float delay-300" />
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-float delay-500" />

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Ready to Get Your Cash Offer?
          </motion.h2>

          <motion.p
            className="text-xl mb-10 opacity-90 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Join thousands of homeowners who chose the faster, easier way to sell.
            Get your no-obligation cash offer in 24 hours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Button
              className="group hover:scale-105 transition-transform duration-300"
              rightIcon={<ArrowRightIcon className="w-5 h-5" />}
              size="lg"
              variant="white"
              onClick={() => scrollToSection('contact')}
            >
              Get My Cash Offer Now
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA; 