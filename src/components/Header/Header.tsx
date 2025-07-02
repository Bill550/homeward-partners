// src/components/Header/Header.tsx - Updated with new navigation
import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Logo from '../UI/Logo';
import Button from '../UI/Button';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { NavLink } from '../../types';

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/why-choose-us', label: 'Why Choose Us' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const scrollPosition = useScrollPosition();

  const isScrolled = scrollPosition > 50;

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname, closeMobileMenu]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const headerVariants: Variants = {
    top: {
      backgroundColor: 'rgba(255, 255, 255, 0.85)',
      backdropFilter: 'blur(20px)',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
      padding: '1.2rem 0',
      borderBottom: '1px solid rgba(90, 155, 142, 0.1)',
    },
    scrolled: {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(25px)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
      padding: '0.8rem 0',
      borderBottom: '1px solid rgba(90, 155, 142, 0.2)',
    },
  };

  const mobileMenuVariants: Variants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const menuItemVariants: Variants = {
    closed: { opacity: 0, y: -10 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  return (
    <>
      {/* Top Banner */}
      <motion.div
        animate={{ opacity: isScrolled ? 0 : 1, height: isScrolled ? 0 : 'auto' }}
        className="bg-gradient-to-r from-primary-600 to-accent-600 text-white text-sm py-2 overflow-hidden"
        initial={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-300 rounded-full animate-pulse" />
              <span className="font-medium">🏠 Get Your Cash Offer in 24 Hours</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <PhoneIcon className="w-4 h-4" />
              <a href="tel:+15551234227" className="hover:text-accent-200 transition-colors">
                (555) 123-CASH
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.header
        animate={isScrolled ? 'scrolled' : 'top'}
        className="fixed top-0 left-0 right-0 z-50"
        style={{ top: isScrolled ? 0 : '36px' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        variants={headerVariants}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo with enhanced animation */}
            <motion.div
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link className="flex items-center group" to="/">
                <Logo size={isScrolled ? 'sm' : 'md'} />
                <motion.div
                  animate={{ opacity: isScrolled ? 0 : 1, width: isScrolled ? 0 : 'auto' }}
                  className="ml-3 overflow-hidden"
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-xs text-primary-600 font-semibold uppercase tracking-wider">
                    Cash Home Buyers
                  </div>
                </motion.div>
              </Link>
            </motion.div>

            {/* Desktop Navigation with enhanced styles */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.href;

                return (
                  <motion.div
                    key={link.href}
                    className="relative"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <Link
                      className={`
                        relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300
                        ${isActive
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50/50'
                        }
                        group overflow-hidden
                      `}
                      to={link.href}
                    >
                      <span className="relative z-10">{link.label}</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      />
                      {isActive && (
                        <motion.div
                          className="absolute bottom-0 left-1/2 w-1 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                          layoutId="activeIndicator"
                          style={{ x: '-50%' }}
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Enhanced CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.a
                className="text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors"
                href="tel:+15551234227"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                (555) 123-CASH
              </motion.a>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  className="relative overflow-hidden group"
                  size="sm"
                  variant="primary"
                >
                  <Link to="/contact" className="flex items-center">
                    <span className="relative z-10">Get Cash Offer</span>
                  </Link>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent-400 to-primary-400 opacity-0"
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <motion.button
              aria-label="Toggle mobile menu"
              className="lg:hidden p-2 rounded-xl hover:bg-primary-50 transition-all duration-300 relative overflow-hidden group"
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    initial={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <XMarkIcon className="w-6 h-6 relative z-10" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    initial={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Bars3Icon className="w-6 h-6 relative z-10" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Enhanced Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                animate="open"
                className="lg:hidden border-t border-primary-100 mt-4 bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden"
                exit="closed"
                initial="closed"
                variants={mobileMenuVariants}
              >
                <nav className="py-6 px-4 space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      animate="open"
                      custom={index}
                      exit="closed"
                      initial="closed"
                      variants={menuItemVariants}
                    >
                      <Link
                        className="block px-4 py-3 text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300 font-medium"
                        to={link.href}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}

                  <motion.div
                    animate="open"
                    className="pt-4 border-t border-primary-100 space-y-3"
                    custom={navLinks.length}
                    exit="closed"
                    initial="closed"
                    variants={menuItemVariants}
                  >
                    <a
                      className="flex items-center justify-center gap-2 py-3 text-primary-600 font-semibold hover:bg-primary-50 rounded-xl transition-colors"
                      href="tel:+15551234227"
                    >
                      <PhoneIcon className="w-5 h-5" />
                      (555) 123-CASH
                    </a>
                    <Button fullWidth size="sm" variant="primary">
                      <Link to="/contact">Get Cash Offer</Link>
                    </Button>
                  </motion.div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
};

export default Header;