// src/types/index.ts

export interface NavLink {
  href: string;
  label: string;
  isExternal?: boolean;
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
  loadingText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  animate?: boolean;
}

export interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  text: string;
  avatar?: string;
  rating?: number;
}

export interface StatsItem {
  number: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// Animation types
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  easing?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

// Hook return types - moved to hook files to avoid circular imports
export interface UseIntersectionObserverReturn {
  elementRef: React.RefObject<HTMLDivElement>;
  isIntersecting: boolean;
}

export interface UseCounterReturn {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setValue: (value: number) => void;
}

export interface UseToggleReturn {
  value: boolean;
  toggle: () => void;
  setToggle: (value: boolean) => void;
}

// Component prop types
export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export interface PageProps {
  title?: string;
  description?: string;
  className?: string;
}

// Form types
export interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'textarea';
  placeholder?: string;
  required?: boolean;
  error?: string;
}

// Error types
export interface ErrorInfo {
  componentStack: string;
  errorBoundary?: string;
}