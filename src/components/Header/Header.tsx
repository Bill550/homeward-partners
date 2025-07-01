// src/components/Header/Header.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from '../UI/Logo';
import Button from '../UI/Button';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { NavLink } from '../../types';

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '#process', label: 'Process' },
  { href: '#features', label: 'Features' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const scrollPosition = useScrollPosition();

  const isScrolled = scrollPosition > 50;

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const cleanId = sectionId.replace('#', '');

    if (location.pathname !== '/') {
      window.location.href = `/#${cleanId}`;
    } else {
      const element = document.getElementById(cleanId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    closeMobileMenu();
  }, [location.pathname, closeMobileMenu]);

  // Close mobile menu when route changes
  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname, closeMobileMenu]);

  // Prevent body scroll when mobile menu is open
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
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      padding: '1rem 0',
    },
    scrolled: {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      padding: '0.75rem 0',
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
    <motion.header
      animate={isScrolled ? 'scrolled' : 'top'}
      className="fixed top-0 left-0 right-0 z-50 border-b border-primary-100/20"
      transition={{ duration: 0.3, ease: 'easeOut' }}
      variants={headerVariants}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            whileHover={{ scale: 1.02 }}
          >
            <Link className="flex items-center" to="/">
              <Logo size={isScrolled ? 'sm' : 'md'} />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              const isHash = link.href.startsWith('#');

              return (
                <div key={link.href} className="relative">
                  {isHash ? (
                    <button
                      className={`
                        relative px-3 py-2 text-sm font-medium transition-colors duration-200
                        ${isActive
                          ? 'text-primary-600'
                          : 'text-neutral-700 hover:text-primary-600'
                        }
                      `}
                      onClick={() => scrollToSection(link.href)}
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      className={`
                        relative px-3 py-2 text-sm font-medium transition-colors duration-200
                        ${isActive
                          ? 'text-primary-600'
                          : 'text-neutral-700 hover:text-primary-600'
                        }
                      `}
                      to={link.href}
                    >
                      {link.label}
                      {isActive && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500"
                          layoutId="activeNav"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              size="sm"
              variant="primary"
              onClick={() => scrollToSection('#contact')}
            >
              Get Cash Offer
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle mobile menu"
            className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  initial={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <XMarkIcon className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  initial={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Bars3Icon className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              animate="open"
              className="md:hidden border-t border-neutral-200 mt-4"
              exit="closed"
              initial="closed"
              variants={mobileMenuVariants}
            >
              <nav className="py-4 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    animate="open"
                    custom={index}
                    exit="closed"
                    initial="closed"
                    variants={menuItemVariants}
                  >
                    {link.href.startsWith('#') ? (
                      <button
                        className="block w-full text-left px-4 py-3 text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-lg transition-colors"
                        onClick={() => scrollToSection(link.href)}
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link
                        className="block px-4 py-3 text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-lg transition-colors"
                        to={link.href}
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}

                <motion.div
                  animate="open"
                  className="pt-4 border-t border-neutral-200"
                  custom={navLinks.length}
                  exit="closed"
                  initial="closed"
                  variants={menuItemVariants}
                >
                  <Button
                    fullWidth
                    size="sm"
                    variant="primary"
                    onClick={() => scrollToSection('#contact')}
                  >
                    Get Cash Offer
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;