'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'suvadityaroy.dev@gmail.com', href: 'mailto:suvadityaroy.dev@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 8525017278', href: 'tel:+918525017278' },
  { icon: MapPin, label: 'Location', value: 'Kolkata, West Bengal, India', href: null },
];

export default function Contact() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const prefersReduced = useReducedMotion();

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
        headers: { 'Content-Type': 'application/json' },
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
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setTimeout(() => setIsSubmitting(false), 800);
    }
  };

  const inputClass = `w-full px-4 py-3 rounded-xl border text-sm transition-colors duration-150 outline-none ${
    isDark
      ? 'bg-[#050d1a] border-slate-800 text-white placeholder-slate-600 focus:border-sky-500/60 focus:shadow-[0_0_0_3px_rgba(56,189,248,0.1)]'
      : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-indigo-400 focus:shadow-[0_0_0_3px_rgba(79,70,229,0.08)]'
  }`;

  // GPU-safe fade+slide — no x-axis, respects prefers-reduced-motion
  const fadeUp = prefersReduced
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.01 } }
    : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

  return (
    <section
      id="contact"
      className="py-28 relative overflow-hidden bg-transparent"
    >
      <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent ${
        isDark ? 'via-sky-500/20' : 'via-indigo-200'} to-transparent`} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          whileInView="animate"
          initial="initial"
          className="text-center mb-20"
        >
          <p className={`text-sm font-semibold tracking-widest uppercase mb-3 ${
            isDark ? 'text-sky-400' : 'text-indigo-600'
          }`}>
            Contact
          </p>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Get In Touch
          </h2>
          <div className={`w-16 h-1 mx-auto rounded-full ${
            isDark
              ? 'bg-gradient-to-r from-sky-500 to-indigo-500'
              : 'bg-gradient-to-r from-indigo-600 to-violet-600'
          }`} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <h3 className={`text-xl font-bold mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Contact Information
            </h3>
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 group ${
                  isDark
                    ? 'card-dark hover:shadow-[0_0_20px_rgba(56,189,248,0.1)]'
                    : 'card-light hover:shadow-[0_4px_20px_rgba(79,70,229,0.08)]'
                }`}
              >
                <div className={`p-3 rounded-xl transition-colors duration-200 ${
                  isDark
                    ? 'bg-sky-500/10 border border-sky-500/20 group-hover:bg-sky-500/20'
                    : 'bg-indigo-50 border border-indigo-200 group-hover:bg-indigo-100'
                }`}>
                  <item.icon className={`w-5 h-5 ${isDark ? 'text-sky-400' : 'text-indigo-600'}`} />
                </div>
                <div>
                  <p className={`text-xs font-medium mb-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className={`text-sm font-medium transition-colors duration-150 ${
                        isDark
                          ? 'text-slate-300 hover:text-sky-300'
                          : 'text-slate-700 hover:text-indigo-700'
                      }`}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className={`text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className={`p-7 rounded-2xl border ${
              isDark ? 'card-dark' : 'card-light'
            }`}
          >
            {submitStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                  isDark ? 'bg-emerald-500/15 border border-emerald-500/25' : 'bg-emerald-100 border border-emerald-200'
                }`}>
                  <Mail className={`w-7 h-7 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Message Sent!
                </h3>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className={`block text-sm font-medium mb-1.5 ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Name
                  </label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={e => setFormState({ ...formState, name: e.target.value })}
                    className={inputClass}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-1.5 ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Email
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={e => setFormState({ ...formState, email: e.target.value })}
                    className={inputClass}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-1.5 ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Message
                  </label>
                  <textarea
                    value={formState.message}
                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                    rows={5}
                    className={`${inputClass} resize-none`}
                    placeholder="Your message..."
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={prefersReduced ? undefined : { scale: 1.02 }}
                  whileTap={prefersReduced ? undefined : { scale: 0.98 }}
                  className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
                    isDark
                      ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_30px_rgba(56,189,248,0.4)]'
                      : 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-[0_4px_15px_rgba(79,70,229,0.3)] hover:shadow-[0_8px_25px_rgba(79,70,229,0.4)]'
                  }`}
                >
                  {isSubmitting ? 'Sending…' : 'Send Message'}
                  <Send className="w-4 h-4" />
                </motion.button>
                {submitStatus === 'error' && (
                  <p className={`text-xs text-center mt-2 ${isDark ? 'text-red-400' : 'text-red-600'}`}>
                    Failed to send. Please try again or email directly.
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
