// src/pages/HowItWorks/HowItWorks.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChatBubbleLeftRightIcon,
  CurrencyDollarIcon,
  CalendarDaysIcon,
  CheckCircleIcon,
  ClockIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';
import Button from '../../components/UI/Button';
import { Link } from 'react-router-dom';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'Tell Us About Your Property',
      description: 'Share basic details about your house and situation through our simple form or give us a call. It takes just 2 minutes to complete.',
      icon: <ChatBubbleLeftRightIcon className="w-8 h-8" />,
      details: [
        'Fill out our simple online form',
        'Or call us directly for faster service',
        'No personal information required upfront',
        'Takes less than 2 minutes'
      ]
    },
    {
      number: 2,
      title: 'Get Your Cash Offer',
      description: 'Receive a fair, no-obligation offer within 24 hours based on your property\'s current market value and comparable sales in your area.',
      icon: <CurrencyDollarIcon className="w-8 h-8" />,
      details: [
        'Fair market value assessment',
        'Based on recent comparable sales',
        'No obligation to accept',
        'Transparent pricing breakdown'
      ]
    },
    {
      number: 3,
      title: 'Choose Your Closing Date',
      description: 'Accept the offer and pick a closing date that works perfectly for you. We handle all the paperwork and coordinate with title companies.',
      icon: <CalendarDaysIcon className="w-8 h-8" />,
      details: [
        'Close in as little as 7 days',
        'Or choose your preferred timeline',
        'We handle all paperwork',
        'Professional title company closing'
      ]
    }
  ];

  const benefits = [
    'No repairs or renovations needed',
    'No cleaning or staging required',
    'No real estate agent commissions',
    'No closing costs for you',
    'No lengthy loan approval process',
    'No showings or open houses'
  ];

  const timeline = [
    { time: 'Day 1', event: 'Submit property information' },
    { time: 'Day 2', event: 'Receive cash offer' },
    { time: 'Day 3-7', event: 'Complete inspection (if needed)' },
    { time: 'Day 7-14', event: 'Close and get paid' }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary-100 border border-primary-200 rounded-full px-4 py-2 text-primary-700 font-medium mb-6">
              <ClockIcon className="w-4 h-4" />
              Simple Process
            </div>
            <h1 className="text-5xl font-bold mb-6">
              How Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">
                3-Step Process
              </span>{' '}
              Works
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              We've streamlined home selling to be as simple as possible. No complicated paperwork, no lengthy delays, just a straightforward process that gets you cash fast.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
                      {step.number}
                    </div>
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600">
                      {step.icon}
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-4">{step.title}</h2>
                  <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-3">
                        <CheckCircleIcon className="w-5 h-5 text-accent-500 flex-shrink-0" />
                        <span className="text-neutral-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-12 text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-neutral-800 mb-2">Step {step.number}</h3>
                    <p className="text-neutral-600">{step.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold mb-6">Typical Timeline</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Here's what you can expect from start to finish
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-6 mb-8 last:mb-0"
                initial={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold">
                  {item.time}
                </div>
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg border border-neutral-200">
                  <h3 className="font-semibold text-neutral-800">{item.event}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold mb-6">What You'll Avoid</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Skip all the traditional home selling hassles
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 bg-green-50 rounded-xl p-4 border border-green-200"
                initial={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, scale: 1 }}
              >
                <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-neutral-700 font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-accent-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              Take the first step towards a hassle-free home sale. Get your cash offer today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="white">
                <Link to="/contact" className="flex items-center">
                  Get My Cash Offer
                </Link>
              </Button>
              
              <motion.a
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300"
                href="tel:+15551234227"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PhoneIcon className="w-5 h-5" />
                Call (555) 123-CASH
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;