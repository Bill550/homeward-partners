// src/pages/About/About.tsx - Enhanced version
import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheckIcon,
  HomeIcon,
  UserGroupIcon,
  TrophyIcon,
  HeartIcon,
  StarIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import Button from '../../components/UI/Button';

const About: React.FC = () => {
  const stats = [
    { icon: <HomeIcon className="w-8 h-8" />, number: '500+', label: 'Houses Purchased' },
    { icon: <TrophyIcon className="w-8 h-8" />, number: '98%', label: 'Satisfaction Rate' },
    { icon: <UserGroupIcon className="w-8 h-8" />, number: '24/7', label: 'Support Available' },
    { icon: <ShieldCheckIcon className="w-8 h-8" />, number: '100%', label: 'Transparent Process' }
  ];

  const values = [
    {
      icon: <HeartIcon className="w-8 h-8" />,
      title: 'Customer First',
      description: 'Every decision we make puts our customers\' needs and satisfaction first. We believe in building relationships, not just transactions.'
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: 'Transparency',
      description: 'No hidden fees, no surprise charges, no fine print. We believe in complete honesty and transparency throughout the entire process.'
    },
    {
      icon: <StarIcon className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We strive for excellence in every interaction, ensuring the highest quality service and the best possible experience for our customers.'
    },
    {
      icon: <UserGroupIcon className="w-8 h-8" />,
      title: 'Community Focus',
      description: 'We\'re not just a business—we\'re part of the communities we serve. We care about the neighborhoods and people we work with.'
    }
  ];

  const team = [
    {
      name: 'John Smith',
      role: 'Founder & CEO',
      experience: '15+ years in real estate',
      description: 'John founded Homeward Partners with a vision to revolutionize home selling. His extensive background in real estate and finance helps ensure every customer gets the best possible experience.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Operations',
      experience: '12+ years operations',
      description: 'Sarah oversees our day-to-day operations, ensuring every transaction runs smoothly. Her attention to detail and customer focus keeps our quality standards high.'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Market Analyst',
      experience: '10+ years market analysis',
      description: 'Mike analyzes market trends and property values to ensure our offers are fair and competitive. His expertise helps customers get the best possible price for their homes.'
    }
  ];

  const milestones = [
    { year: '2020', event: 'Founded Homeward Partners' },
    { year: '2021', event: 'Purchased our 100th property' },
    { year: '2022', event: 'Expanded to 5 major Texas cities' },
    { year: '2023', event: 'Reached $50M in property purchases' },
    { year: '2024', event: 'Launched nationwide service' }
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
              <HeartIcon className="w-4 h-4" />
              About Us
            </div>
            <h1 className="text-5xl font-bold mb-6">
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">
                Homeward Partners
              </span>
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              We're not just another house buying company. We're your partners in making home selling simple, fast, and fair. Learn about our mission, values, and the team behind our success.
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

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Founded in 2020, Homeward Partners started with a simple mission: to revolutionize how people sell their homes. We saw too many homeowners struggling with the traditional real estate process—waiting months for sales, paying high commissions, and dealing with endless complications.
                </p>
                <p>
                  Our founders, experienced real estate professionals, decided there had to be a better way. A way that puts homeowners first, eliminates unnecessary fees, and provides the speed and certainty that people need during life transitions.
                </p>
                <p>
                  Today, we've helped over 500 families sell their homes quickly and fairly, and we're just getting started. Our commitment to transparency, fairness, and exceptional service has made us a trusted partner for homeowners across the United States.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-neutral-200">
                <h3 className="text-2xl font-bold mb-6 text-center">Our Mission</h3>
                <p className="text-neutral-700 text-center leading-relaxed mb-6">
                  "To provide homeowners with a fast, fair, and transparent alternative to traditional home selling, while building lasting relationships in the communities we serve."
                </p>
                <div className="flex justify-center">
                  <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              These core values guide every decision we make and every interaction we have
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 border border-primary-100"
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center text-white mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-neutral-700 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              The experienced professionals behind Homeward Partners
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg border border-neutral-200 text-center"
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary-600 font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-accent-600 mb-4">{member.experience}</p>
                <p className="text-neutral-600 leading-relaxed text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold mb-6">Our Journey</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Key milestones in our growth and success
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-6 mb-8 last:mb-0"
                initial={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold">
                  {milestone.year}
                </div>
                <div className="flex-1 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-6 border border-primary-100">
                  <h3 className="font-semibold text-neutral-800">{milestone.event}</h3>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              Experience the Homeward Partners difference. Get your no-obligation cash offer today and see why hundreds of homeowners have chosen us.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="white">
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

export default About;