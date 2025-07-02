// src/components/Contact/Contact.tsx - Fixed alignment version
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import Button from '../UI/Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Call Us',
      content: '(555) 123-CASH',
      description: 'Available 24/7 for urgent inquiries'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email Us',
      content: 'offers@homewardpartners.com',
      description: 'Get a response within 2 hours'
    },
    {
      icon: MapPinIcon,
      title: 'Visit Us',
      content: 'Dallas, Texas',
      description: 'Serving all 50 states nationwide'
    }
  ];

  const benefits = [
    'No obligation - you decide if our offer works for you',
    'Fair market value based on recent sales data',
    'Close in as little as 7 days or choose your timeline',
    'No repairs, cleaning, or staging required'
  ];

  return (
    <section className="py-24 bg-white" id="contact">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-2 text-primary-700 font-medium mb-4">
            <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
            Get Your Offer
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Sell Your House?
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Fill out the form below and get your no-obligation cash offer within 24 hours.
            No pressure, no commitment - just a fair offer for your property.
          </p>
        </motion.div>

        {/* Main Content Grid - Fixed Alignment */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE - Contact Form */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 border border-primary-100">
              {isSubmitted ? (
                <motion.div
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                >
                  <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-700 mb-2">Thank You!</h3>
                  <p className="text-green-600">
                    We've received your information and will contact you within 24 hours with your cash offer.
                  </p>
                </motion.div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="name">
                        Full Name *
                      </label>
                      <input
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="phone">
                        Phone Number *
                      </label>
                      <input
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        id="phone"
                        name="phone"
                        placeholder="(555) 123-4567"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="email">
                      Email Address *
                    </label>
                    <input
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="address">
                      Property Address *
                    </label>
                    <input
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      id="address"
                      name="address"
                      placeholder="123 Main St, City, State ZIP"
                      type="text"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="message">
                      Additional Details (Optional)
                    </label>
                    <textarea
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                      id="message"
                      name="message"
                      placeholder="Tell us about your property condition, timeline, or any special circumstances..."
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
                    {isSubmitting ? 'Submitting...' : 'Get My Cash Offer'}
                  </Button>

                  <p className="text-sm text-neutral-500 text-center">
                    By submitting this form, you agree to receive communications from Homeward Partners.
                    We respect your privacy and will never share your information.
                  </p>
                </form>
              )}
            </div>
          </motion.div>

          {/* RIGHT SIDE - Contact Information & Benefits */}
          <motion.div
            className="order-1 lg:order-2 space-y-8"
            initial={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            {/* Get in Touch Section */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-neutral-600 mb-8">
                Have questions about selling your house? Our team is here to help you
                get the best possible offer for your property.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-neutral-200 hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-neutral-900 mb-1">{info.title}</h4>
                    <p className="text-lg font-medium text-primary-600 mb-1">{info.content}</p>
                    <p className="text-sm text-neutral-500">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Why Choose Us Section */}
            <motion.div
              className="bg-primary-50 rounded-2xl p-6 border border-primary-100"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h4 className="font-semibold text-neutral-900 mb-4">Why Choose Us?</h4>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-neutral-600">
                    <CheckCircleIcon className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;