'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import SectionBackground from './SectionBackground';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        // Delay to show loading animation
        setTimeout(() => {
          setSubmitStatus('success');
          setFormState({ name: '', email: '', message: '' });
        }, 800);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setTimeout(() => {
        setIsSubmitting(false);
      }, 800);
    }
  };

  return (
    <section id="contact" className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary-500/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Open to Cloud Security Engineer opportunities. Let's connect!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-8">Contact Information</h3>
            <div className="space-y-5">
              {[
                { icon: Mail, title: 'Email', value: 'suvadityaroy.dev@gmail.com', href: 'mailto:suvadityaroy.dev@gmail.com' },
                { icon: Phone, title: 'Phone', value: '+91 8525017278', href: 'tel:+918525017278' },
                { icon: MapPin, title: 'Location', value: 'Kolkata, West Bengal, India', href: null }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  className="flex items-center gap-4 p-4 bg-dark-850 border border-dark-800 rounded-lg hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/10 transition-all cursor-pointer group"
                >
                  <motion.div 
                    className="p-3 bg-primary-500/10 rounded-lg group-hover:bg-primary-500/20 transition-colors"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    <item.icon className="w-6 h-6 text-primary-400" />
                  </motion.div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{item.title}</h4>
                    {item.href ? (
                      <a href={item.href} className="text-sm md:text-base text-gray-400 hover:text-primary-400 transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-sm md:text-base text-gray-400">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-dark-850 border border-dark-800 p-6 md:p-8 rounded-xl hover:border-primary-500/30 transition-colors"
          >
            {submitStatus === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-colors resize-none"
                    placeholder="Your message..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary-500/20"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="w-4 h-4" />
                </button>
                {submitStatus === 'error' && (
                  <p className="text-red-400 text-sm text-center">Failed to send message. Please try again.</p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
