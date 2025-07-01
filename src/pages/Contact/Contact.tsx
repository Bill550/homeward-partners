// src/pages/Contact/Contact.tsx - Enhanced full page version
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import Button from '../../components/UI/Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    propertyType: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        propertyType: '',
        timeline: '',
        message: ''
      });
    }, 5000);
  };

  const contactMethods = [
    {
      icon: <PhoneIcon className="w-8 h-8" />,
      title: 'Call Us',
      content: '(555) 123-CASH',
      description: 'Available 24/7 for urgent inquiries',
      action: 'tel:+15551234227',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <EnvelopeIcon className="w-8 h-8" />,
      title: 'Email Us',
      content: 'offers@homewardpartners.com',
      description: 'Get a response within 2 hours',
      action: 'mailto:offers@homewardpartners.com',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <MapPinIcon className="w-8 h-8" />,
      title: 'Visit Us',
      content: 'Dallas, Texas',
      description: 'Serving all 50 states nationwide',
      action: '#',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <ClockIcon className="w-8 h-8" />,
      title: 'Business Hours',
      content: '24/7 Available',
      description: 'We never sleep, so you don\'t have to wait',
      action: '#',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const propertyTypes = [
    'Single Family Home',
    'Townhouse',
    'Condo/Apartment',
    'Multi-Family',
    'Mobile Home',
    'Land/Lot',
    'Other'
  ];

  const timelines = [
    'ASAP (Within 7 days)',
    '1-2 weeks',
    '2-4 weeks',
    '1-2 months',
    '3+ months',
    'Not sure yet'
  ];

  const benefits = [
    'No obligation - you decide if our offer works for you',
    'Fair market value based on recent sales data',
    'Close in as little as 7 days or choose your timeline',
    'No repairs, cleaning, or staging required',
    'We cover all closing costs and fees',
    'Professional and transparent process'
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
              <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
              Get Your Offer
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Get Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">
                Cash Offer
              </span>{' '}
              Today
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Ready to sell your house fast? Fill out the form below and get your no-obligation cash offer within 24 hours. No pressure, no commitment - just a fair offer for your property.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <a
                  href={method.action}
                  className="block bg-white rounded-3xl p-6 shadow-lg border border-neutral-200 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{method.title}</h3>
                  <p className="text-primary-600 font-semibold mb-2">{method.content}</p>
                  <p className="text-sm text-neutral-500">{method.description}</p>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Contact Form - Takes 2 columns */}
            <div className="lg:col-span-2">
              <motion.div
                className="bg-white rounded-3xl p-8 shadow-2xl border border-neutral-200"
                initial={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-3xl font-bold mb-2">Tell Us About Your Property</h2>
                <p className="text-neutral-600 mb-8">The more details you provide, the more accurate your cash offer will be.</p>

                {isSubmitted ? (
                  <motion.div
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.8 }}
                  >
                    <CheckCircleIcon className="w-20 h-20 text-green-500 mx-auto mb-6" />
                    <h3 className="text-3xl font-bold text-green-700 mb-4">Thank You!</h3>
                    <p className="text-green-600 text-lg">
                      We've received your information and will contact you within 24 hours with your cash offer.
                    </p>
                  </motion.div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Personal Info */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          required
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                          name="name"
                          placeholder="John Doe"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          required
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                          name="phone"
                          placeholder="(555) 123-4567"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        name="email"
                        placeholder="john@example.com"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>

                    {/* Property Info */}
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">
                        Property Address *
                      </label>
                      <input
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        name="address"
                        placeholder="123 Main St, City, State ZIP"
                        type="text"
                        value={formData.address}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-2">
                          Property Type
                        </label>
                        <select
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                          name="propertyType"
                          value={formData.propertyType}
                          onChange={handleInputChange}
                        >
                          <option value="">Select property type</option>
                          {propertyTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-2">
                          Timeline
                        </label>
                        <select
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                        >
                          <option value="">When do you want to sell?</option>
                          {timelines.map((timeline) => (
                            <option key={timeline} value={timeline}>{timeline}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">
                        Additional Details (Optional)
                      </label>
                      <textarea
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                        name="message"
                        placeholder="Tell us about your property condition, any special circumstances, or questions you have..."
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                      />
                    </div>

                    <Button
                      className="w-full"
                      disabled={isSubmitting}
                      size="lg"
                      type="submit"
                      variant="primary"
                    >
                      {isSubmitting ? 'Submitting Your Information...' : 'Get My Cash Offer'}
                    </Button>

                    <p className="text-sm text-neutral-500 text-center">
                      By submitting this form, you agree to receive communications from Homeward Partners. We respect your privacy and will never share your information with third parties.
                    </p>
                  </form>
                )}
              </motion.div>
            </div>

            {/* Sidebar Info - Takes 1 column */}
            <div className="lg:col-span-1 space-y-8">
              {/* Why Choose Us */}
              <motion.div
                className="bg-primary-50 rounded-3xl p-6 border border-primary-100"
                initial={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm">
                      <CheckCircleIcon className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Quick Contact */}
              <motion.div
                className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-3xl p-6 text-white"
                initial={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <h3 className="text-xl font-bold mb-4">Need to Talk Right Now?</h3>
                <p className="mb-6 opacity-90">
                  Sometimes it's easier to just pick up the phone. Call us now for immediate assistance.
                </p>
                <a
                  href="tel:+15551234227"
                  className="inline-flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-xl font-semibold hover:bg-neutral-100 transition-colors"
                >
                  <PhoneIcon className="w-5 h-5" />
                  (555) 123-CASH
                </a>
              </motion.div>

              {/* Testimonial */}
              <motion.div
                className="bg-white rounded-3xl p-6 shadow-lg border border-neutral-200"
                initial={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <CheckCircleIcon key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>
                <p className="text-neutral-700 mb-4 italic">
                  "Homeward Partners made the whole process so easy. Got my offer in 24 hours and closed in 8 days!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    SM
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Sarah M.</div>
                    <div className="text-xs text-neutral-500">Dallas, TX</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Common questions about our process and what to expect
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How quickly can you make an offer?",
                answer: "We typically provide cash offers within 24 hours of receiving your property information. In urgent situations, we can often provide an offer the same day."
              },
              {
                question: "Do I need to make any repairs?",
                answer: "No! We buy houses in any condition. Whether your house needs major repairs, minor touch-ups, or is move-in ready, we'll make you a fair offer as-is."
              },
              {
                question: "Are there any fees or commissions?",
                answer: "Absolutely not. We don't charge any fees, commissions, or closing costs. The offer we make is the amount you'll receive at closing."
              },
              {
                question: "How is the offer price determined?",
                answer: "We use recent comparable sales in your area, current market conditions, and the property's condition to determine a fair market value offer."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-6 border border-primary-100"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                <p className="text-neutral-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;