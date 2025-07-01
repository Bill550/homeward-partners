// src/components/Testimonials/Testimonials.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import TestimonialCard from './TestimonialCard';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { TestimonialItem } from '../../types';

const testimonials: TestimonialItem[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    location: 'Dallas, TX',
    text: 'Homeward Partners made selling my inherited property so easy. They handled everything and I got a fair price without any stress. The whole process took less than 2 weeks!',
    rating: 5,
  },
  {
    id: '2',
    name: 'Mike Rodriguez',
    location: 'Houston, TX',
    text: 'I needed to sell fast due to a job relocation. They closed in 10 days and took care of all the paperwork. Highly recommend to anyone needing a quick, hassle-free sale!',
    rating: 5,
  },
  {
    id: '3',
    name: 'Jennifer Lopez',
    location: 'Austin, TX',
    text: 'My house needed major repairs I couldn\'t afford. Homeward Partners bought it as-is and saved me thousands in repair costs. Professional service from start to finish.',
    rating: 5,
  },
  {
    id: '4',
    name: 'David Chen',
    location: 'San Antonio, TX',
    text: 'After trying to sell through a realtor for 6 months with no luck, Homeward Partners gave me a fair offer and we closed in 12 days. Should have called them first!',
    rating: 5,
  },
  {
    id: '5',
    name: 'Maria Garcia',
    location: 'Fort Worth, TX',
    text: 'Going through a divorce and needed to sell quickly. The team was compassionate and professional. They made a difficult time much easier with their transparent process.',
    rating: 5,
  },
  {
    id: '6',
    name: 'Robert Johnson',
    location: 'Plano, TX',
    text: 'No hidden fees, no surprises, just exactly what they promised. Got my cash offer in 24 hours and closed on my timeline. This is how home selling should be done.',
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-20 bg-gradient-to-br from-primary-500 to-primary-600 relative overflow-hidden" id="testimonials">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500/90 to-primary-600/90" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          ref={elementRef}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white font-medium mb-4">
            <StarIcon className="w-4 h-4 text-accent-400" />
            Success Stories
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            What Our{' '}
            <span className="text-accent-400">
              Partners
            </span>{' '}
            Say
          </h2>
          
          <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
            Real stories from real people who chose the smarter way to sell their homes. Join thousands of satisfied customers who experienced our exceptional service.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              index={index}
              isVisible={isIntersecting}
              testimonial={testimonial}
            />
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="grid md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-4xl font-bold text-white mb-2">4.9/5</div>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5 text-accent-400" />
              ))}
            </div>
            <div className="text-primary-100">Average Rating</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-primary-100">Happy Customers</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-4xl font-bold text-white mb-2">98%</div>
            <div className="text-primary-100">Would Recommend</div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-primary-100 mb-8 text-lg max-w-2xl mx-auto">
            Get your fair cash offer today and experience the same exceptional service that our customers rave about.
          </p>
          <button 
            className="bg-white text-primary-600 px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-accent-50 transform hover:scale-105 transition-all duration-300 shadow-lg"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get My Cash Offer
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
