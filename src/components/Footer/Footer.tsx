// src/components/Footer/Footer.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import Logo from '../UI/Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'How It Works', href: '#process' },
    { label: 'Why Choose Us', href: '#features' },
    { label: 'Success Stories', href: '#testimonials' },
    { label: 'Get Offer', href: '#contact' },
  ];

  const serviceAreas = [
    'Dallas, TX',
    'Houston, TX',
    'Austin, TX',
    'San Antonio, TX',
    'Fort Worth, TX',
    'Plano, TX',
    'Arlington, TX',
    'Nationwide Service',
  ];

  const contactInfo = [
    {
      icon: <PhoneIcon className="w-5 h-5" />,
      label: 'Call Us',
      value: '(555) 123-CASH',
      href: 'tel:+15551234227',
    },
    {
      icon: <EnvelopeIcon className="w-5 h-5" />,
      label: 'Email',
      value: 'offers@homewardpartners.com',
      href: 'mailto:offers@homewardpartners.com',
    },
    {
      icon: <MapPinIcon className="w-5 h-5" />,
      label: 'Location',
      value: 'Dallas, Texas',
      href: '#',
    },
    {
      icon: <ClockIcon className="w-5 h-5" />,
      label: 'Hours',
      value: '24/7 Available',
      href: '#',
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const cleanId = sectionId.replace('#', '');
    const element = document.getElementById(cleanId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-neutral-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent" />

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="mb-6">
                <Logo size="lg" />
              </div>
              <p className="text-neutral-300 leading-relaxed mb-6">
                Your trusted partner for fast, fair, and hassle-free home sales across the United States. We buy houses in any condition, on any timeline.
              </p>
              <div className="flex items-center gap-2 text-accent-400">
                <div className="w-3 h-3 bg-accent-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Available 24/7</span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h3 className="text-xl font-bold mb-6 text-accent-400">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    {link.href.startsWith('#') ? (
                      <button
                        className="text-neutral-300 hover:text-accent-400 transition-colors duration-300 text-left"
                        onClick={() => scrollToSection(link.href)}
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link
                        className="text-neutral-300 hover:text-accent-400 transition-colors duration-300"
                        to={link.href}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Service Areas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h3 className="text-xl font-bold mb-6 text-accent-400">
                We Buy Houses In
              </h3>
              <ul className="space-y-3">
                {serviceAreas.map((area, index) => (
                  <li key={index} className="text-neutral-300">
                    {area}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h3 className="text-xl font-bold mb-6 text-accent-400">
                Contact Info
              </h3>
              <ul className="space-y-4">
                {contactInfo.map((item, index) => (
                  <li key={index}>
                    {item.href !== '#' ? (
                      <a
                        className="flex items-center gap-3 text-neutral-300 hover:text-accent-400 transition-colors duration-300 group"
                        href={item.href}
                      >
                        <div className="text-accent-400 group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-sm text-neutral-400">{item.label}</div>
                          <div className="font-medium">{item.value}</div>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-3 text-neutral-300">
                        <div className="text-accent-400">
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-sm text-neutral-400">{item.label}</div>
                          <div className="font-medium">{item.value}</div>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="py-12 border-t border-neutral-700"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Sell Your House Fast?
            </h3>
            <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
              Get your no-obligation cash offer today. No repairs, no fees, no hassle.
            </p>
            <button
              className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:shadow-colored-lg transform hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Get My Cash Offer Now
            </button>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="py-8 border-t border-neutral-700"
          initial={{ opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-neutral-400 text-sm">
              © {currentYear} Homeward Partners. All rights reserved.
            </div>

            <div className="flex items-center gap-6 text-sm">
              <Link
                className="text-neutral-400 hover:text-accent-400 transition-colors duration-300"
                to="/privacy"
              >
                Privacy Policy
              </Link>
              <Link
                className="text-neutral-400 hover:text-accent-400 transition-colors duration-300"
                to="/terms"
              >
                Terms of Service
              </Link>
              <Link
                className="text-neutral-400 hover:text-accent-400 transition-colors duration-300"
                to="/sitemap"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
