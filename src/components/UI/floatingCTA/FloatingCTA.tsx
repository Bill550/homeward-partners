// src/components/UI/floatingCTA/FloatingCTA.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChatBubbleLeftRightIcon, 
  PhoneIcon,
  XMarkIcon 
} from '@heroicons/react/24/outline';
import { useScrollPosition } from '../../../hooks/useScrollPosition';

const FloatingCTA: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    // Show floating CTA after scrolling 100px
    setIsVisible(scrollPosition > 100);
  }, [scrollPosition]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsExpanded(false);
  };

  const handleCall = () => {
    window.location.href = 'tel:+15551234227';
    setIsExpanded(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="fixed bottom-6 right-6 z-50"
          exit={{ opacity: 0, scale: 0.8 }}
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          {/* Expanded Menu */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl border border-neutral-200 p-4 w-64"
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                {/* Close button */}
                <button
                  className="absolute -top-2 -right-2 w-6 h-6 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-500 hover:bg-neutral-200 transition-colors"
                  onClick={() => setIsExpanded(false)}
                >
                  <XMarkIcon className="w-4 h-4" />
                </button>

                <div className="space-y-3">
                  <div className="text-center mb-4">
                    <h3 className="font-bold text-neutral-800 text-sm">Ready to Sell?</h3>
                    <p className="text-xs text-neutral-600">Get your cash offer today</p>
                  </div>

                  {/* Quick actions */}
                  <motion.button
                    className="w-full flex items-center gap-3 p-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollToSection('contact')}
                  >
                    <ChatBubbleLeftRightIcon className="w-5 h-5" />
                    <div className="text-left">
                      <div className="font-semibold text-sm">Get Cash Offer</div>
                      <div className="text-xs opacity-90">Free, no obligation</div>
                    </div>
                  </motion.button>

                  <motion.button
                    className="w-full flex items-center gap-3 p-3 bg-white border-2 border-primary-200 text-primary-600 rounded-xl hover:bg-primary-50 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleCall}
                  >
                    <PhoneIcon className="w-5 h-5" />
                    <div className="text-left">
                      <div className="font-semibold text-sm">Call Now</div>
                      <div className="text-xs text-neutral-500">(555) 123-CASH</div>
                    </div>
                  </motion.button>

                  {/* Trust indicator */}
                  <div className="text-center pt-2 border-t border-neutral-100">
                    <div className="flex items-center justify-center gap-1 text-xs text-neutral-500">
                      <span>⭐⭐⭐⭐⭐</span>
                      <span>500+ satisfied customers</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main floating button */}
          <motion.button
            animate={{
              y: [0, -8, 0],
              boxShadow: [
                "0 10px 30px rgba(107, 178, 106, 0.4)",
                "0 20px 40px rgba(107, 178, 106, 0.5)",
                "0 10px 30px rgba(107, 178, 106, 0.4)"
              ]
            }}
            className="relative w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 text-white rounded-full flex items-center justify-center group overflow-hidden"
            title="Get Cash Offer"
            transition={{
              y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
              boxShadow: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {/* Ripple effect */}
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
              className="absolute inset-0 bg-white rounded-full"
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            {/* Button content */}
            <motion.div
              animate={{ rotate: isExpanded ? 45 : 0 }}
              className="relative z-10"
              transition={{ duration: 0.3 }}
            >
              <ChatBubbleLeftRightIcon className="w-7 h-7" />
            </motion.div>

            {/* Pulse indicator */}
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              className="absolute top-1 right-1 w-3 h-3 bg-yellow-400 rounded-full"
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.button>

          {/* Notification badge */}
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            className="absolute -top-2 -left-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3
            }}
          >
            !
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;