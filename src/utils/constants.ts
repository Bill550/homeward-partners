// Application constants
export const APP_NAME = 'Homeward Partners';
export const APP_DESCRIPTION = 'Your trusted partner for fast, fair, and hassle-free home sales';

// Contact information
export const CONTACT_PHONE = '(555) 123-4567';
export const CONTACT_EMAIL = 'info@homewardpartners.com';
export const CONTACT_ADDRESS = '123 Main Street, Suite 100, City, State 12345';

// Social media links
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/homewardpartners',
  twitter: 'https://twitter.com/homewardpartners',
  instagram: 'https://instagram.com/homewardpartners',
  linkedin: 'https://linkedin.com/company/homewardpartners'
};

// Navigation links
export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];


// src/utils/constants.ts
export const COMPANY_INFO = {
  name: 'Homeward Partners',
  phone: '(555) 123-CASH',
  email: 'offers@homewardpartners.com',
  location: 'Dallas, Texas',
  founded: 2024,
} as const;

export const STATS = {
  housesBought: 500,
  paidOut: 2500000,
  avgDaysToClose: 7,
  customerSatisfaction: 98,
} as const;

export const ANIMATION_DURATIONS = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.6,
} as const;

export {};