'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import SectionBackground from './SectionBackground';

export default function Contact() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
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
    <section id="contact" className={`py-24 relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Gradient */}
      <div className={`absolute top-0 left-0 w-full h-full ${isDark ? 'bg-gradient-to-b from-blue-500/5 to-transparent' : 'bg-gradient-to-b from-blue-300/10 to-transparent'}`}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>Get In Touch</h2>
          <div className={`w-20 h-1 mx-auto rounded-full transition-colors ${isDark ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
          <p className={`mt-6 max-w-2xl mx-auto transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
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
            <h3 className={`text-xl md:text-2xl font-bold mb-8 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>Contact Information</h3>
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
                  className={`flex items-center gap-4 p-4 border rounded-lg transition-all cursor-pointer group ${
                    isDark
                      ? 'bg-gray-800 border-gray-700 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10'
                      : 'bg-white border-gray-200 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-400/10'
                  }`}
                >
                  <motion.div 
                    className={`p-3 rounded-lg transition-colors ${
                      isDark
                        ? 'bg-blue-500/10 group-hover:bg-blue-500/20'
                        : 'bg-blue-100/50 group-hover:bg-blue-100/80'
                    }`}
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    <item.icon className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  </motion.div>
                  <div>
                    <h4 className={`font-medium mb-1 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.title}</h4>
                    {item.href ? (
                      <a href={item.href} className={`text-sm md:text-base transition-colors ${isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>{item.value}</a>
                    ) : (
                      <p className={`text-sm md:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item.value}</p>
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
            className={`border p-6 md:p-8 rounded-xl transition-colors ${
              isDark
                ? 'bg-gray-800 border-gray-700 hover:border-blue-500/30'
                : 'bg-white border-gray-200 hover:border-blue-400/30'
            }`}
          >
            {submitStatus === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${isDark ? 'bg-green-500/20' : 'bg-green-100'}`}>
                  <Mail className={`w-8 h-8 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
                </div>
                <h3 className={`text-2xl font-bold mb-2 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>Message Sent!</h3>
                <p className={`transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className={`block font-medium mb-2 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors ${
                      isDark
                        ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500'
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500'
                    }`}
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block font-medium mb-2 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors ${
                      isDark
                        ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500'
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500'
                    }`}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className={`block font-medium mb-2 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>Message</label>
                  <textarea
                    id="message"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors resize-none ${
                      isDark
                        ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500'
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500'
                    }`}
                    placeholder="Your message..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed ${
                    isDark
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-500/20'
                      : 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-400/20'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="w-4 h-4" />
                </button>
                {submitStatus === 'error' && (
                  <p className="text-red-500 text-sm text-center">Failed to send message. Please try again.</p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
