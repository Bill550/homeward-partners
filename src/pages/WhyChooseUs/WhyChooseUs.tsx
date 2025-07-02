// src/pages/WhyChooseUs/WhyChooseUs.tsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  BoltIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  HomeIcon,
  StarIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import Button from '../../components/UI/Button';

const WhyChooseUs: React.FC = () => {
  const advantages = [
    {
      icon: <BoltIcon className="w-8 h-8" />,
      title: 'Lightning Fast Process',
      description: 'Get a competitive cash offer within 24 hours and close in as little as 7 days.',
      features: ['24-hour offer guarantee', 'No waiting for bank approvals', '7-day closing possible', 'Instant decision making']
    },
    {
      icon: <CurrencyDollarIcon className="w-8 h-8" />,
      title: 'Fair Market Value',
      description: 'We use recent comparable sales and market data to ensure you get a fair price.',
      features: ['Market analysis included', 'Transparent pricing', 'Competitive offers', 'No lowball tactics']
    },
    {
      icon: <HomeIcon className="w-8 h-8" />,
      title: 'Any Condition Accepted',
      description: 'We buy houses as-is, whether they need major repairs or are move-in ready.',
      features: ['No repairs required', 'Any condition accepted', 'Damaged properties OK', 'Foreclosure situations welcomed']
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: '100% Transparent',
      description: 'No hidden fees, no surprise charges. What we offer is what you get.',
      features: ['No hidden fees', 'Clear communication', 'Honest assessments', 'No surprise charges']
    },
    {
      icon: <ClockIcon className="w-8 h-8" />,
      title: 'Flexible Timeline',
      description: 'Choose your closing date based on your needs and timeline.',
      features: ['Your timeline choice', 'Immediate or delayed closing', 'Flexible scheduling', 'Work around your needs']
    },
    {
      icon: <UserGroupIcon className="w-8 h-8" />,
      title: 'Local Experts',
      description: 'Our team knows the local market and provides personalized service.',
      features: ['Local market knowledge', 'Personalized service', 'Community focused', 'Relationship-based approach']
    }
  ];

  const comparisonData = [
    {
      feature: 'Timeline',
      traditional: '3-6 months',
      homeward: '7-14 days',
      advantage: true
    },
    {
      feature: 'Repairs Needed',
      traditional: 'Yes, often expensive',
      homeward: 'None required',
      advantage: true
    },
    {
      feature: 'Fees & Commissions',
      traditional: '6-10% of sale price',
      homeward: '$0',
      advantage: true
    },
    {
      feature: 'Showings Required',
      traditional: 'Multiple showings',
      homeward: 'One quick visit',
      advantage: true
    },
    {
      feature: 'Closing Certainty',
      traditional: 'Deals can fall through',
      homeward: '100% guaranteed',
      advantage: true
    },
    {
      feature: 'Cash at Closing',
      traditional: 'After loan approval',
      homeward: 'Immediate cash',
      advantage: true
    }
  ];

  const stats = [
    { number: '500+', label: 'Houses Purchased', icon: <HomeIcon className="w-6 h-6" /> },
    { number: '98%', label: 'Customer Satisfaction', icon: <StarIcon className="w-6 h-6" /> },
    { number: '7', label: 'Average Days to Close', icon: <ClockIcon className="w-6 h-6" /> },
    { number: '$2.5M+', label: 'Paid to Homeowners', icon: <CurrencyDollarIcon className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      location: 'Dallas, TX',
      quote: 'Homeward Partners made selling my inherited property so easy. They handled everything and I got a fair price without any stress.',
      rating: 5
    },
    {
      name: 'Mike Rodriguez',
      location: 'Houston, TX',
      quote: 'I needed to sell fast due to a job relocation. They closed in 10 days and took care of all the paperwork.',
      rating: 5
    },
    {
      name: 'Jennifer Lopez',
      location: 'Austin, TX',
      quote: 'My house needed major repairs I couldn\'t afford. Homeward Partners bought it as-is and saved me thousands.',
      rating: 5
    }
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
              <ShieldCheckIcon className="w-4 h-4" />
              Why Choose Us
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Why{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">
                Thousands
              </span>{' '}
              Choose Homeward Partners
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              We've revolutionized home selling to be faster, easier, and more profitable for homeowners. Here's what makes us different.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, scale: 1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold mb-6">Our Advantages</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              See what sets us apart from traditional real estate and other cash buyers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg border border-neutral-200 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center text-primary-600 mb-6">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{advantage.title}</h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {advantage.description}
                </p>
                <ul className="space-y-2">
                  {advantage.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-neutral-700">
                      <CheckCircleIcon className="w-4 h-4 text-accent-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold mb-6">Traditional vs. Homeward Partners</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              See the clear difference between our process and traditional home selling
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-200">
            <div className="grid grid-cols-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white p-6">
              <div className="font-bold text-lg">Feature</div>
              <div className="font-bold text-lg text-center">Traditional Method</div>
              <div className="font-bold text-lg text-center">Homeward Partners</div>
            </div>

            {comparisonData.map((item, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-3 p-6 border-b border-neutral-100 last:border-b-0 hover:bg-neutral-50 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <div className="font-semibold text-neutral-800">{item.feature}</div>
                <div className="text-center text-neutral-600">{item.traditional}</div>
                <div className="text-center">
                  <span className="inline-flex items-center gap-2 text-accent-600 font-semibold">
                    <CheckCircleIcon className="w-4 h-4" />
                    {item.homeward}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold mb-6">What Our Customers Say</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Real stories from real homeowners who chose Homeward Partners
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg border border-neutral-200"
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-neutral-700 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-800">{testimonial.name}</div>
                    <div className="text-sm text-neutral-500">{testimonial.location}</div>
                  </div>
                </div>
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
            <h2 className="text-4xl font-bold mb-6">Experience the Difference</h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              Join thousands of satisfied homeowners who chose the smarter way to sell. Get your no-obligation cash offer today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="primary">
                <Link to="/contact" className="flex items-center">
                  Get My Cash Offer
                </Link>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-transparent"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/how-it-works"
                  className="flex items-center text-white hover:text-accent-400 transition-colors"
                >
                  Learn How It Works
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;