import React from 'react';
import { motion } from 'framer-motion';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const FloatingCTA: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.button
      animate={{
        y: [0, -5, 0],
        boxShadow: [
          "0 8px 25px rgba(107, 178, 106, 0.4)",
          "0 12px 30px rgba(107, 178, 106, 0.5)",
          "0 8px 25px rgba(107, 178, 106, 0.4)"
        ]
      }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
      title="Get Cash Offer"
      transition={{
        y: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        },
        boxShadow: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      whileHover={{
        scale: 1.1,
        boxShadow: "0 20px 40px rgba(107, 178, 106, 0.4)"
      }}
      whileTap={{ scale: 0.95 }}
      onClick={() => scrollToSection('contact')}
    >
      <ChatBubbleLeftRightIcon className="w-6 h-6" />
    </motion.button>
  );
};

export default FloatingCTA; 