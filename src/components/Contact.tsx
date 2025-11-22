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
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-800 via-emerald-950/30 via-green-950/20 to-gray-900 relative overflow-hidden">
      <SectionBackground variant="emerald" />
      
      {/* Static dots */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-emerald-400/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 mx-auto rounded-full"
            animate={{
              width: ['80px', '100px', '80px'],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss the latest in tech? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              <motion.div 
                className="flex items-start space-x-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="bg-emerald-500/10 p-3 rounded-lg text-emerald-500"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(16, 185, 129, 0.2)" }}
                >
                  <Mail className="w-6 h-6" />
                </motion.div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <a href="mailto:suvadityaroy.dev@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">suvadityaroy.dev@gmail.com</a>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-start space-x-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="bg-emerald-500/10 p-3 rounded-lg text-emerald-500"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(16, 185, 129, 0.2)" }}
                >
                  <Phone className="w-6 h-6" />
                </motion.div>
                <div>
                  <h4 className="text-white font-medium">Phone</h4>
                  <a href="tel:+918525017278" className="text-gray-400 hover:text-blue-400 transition-colors">+91 8525017278</a>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-start space-x-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="bg-emerald-500/10 p-3 rounded-lg text-emerald-500"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(16, 185, 129, 0.2)" }}
                >
                  <MapPin className="w-6 h-6" />
                </motion.div>
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-gray-400">Kolkata, India</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-900 p-8 rounded-2xl border border-gray-800 shadow-lg relative overflow-hidden"
          >
            {submitStatus === 'success' ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.34, 1.56, 0.64, 1],
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className="flex flex-col items-center justify-center py-20"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    delay: 0.1, 
                    duration: 0.8,
                    type: "spring", 
                    stiffness: 150,
                    damping: 12
                  }}
                  className="relative mb-6"
                >
                  {/* Animated checkmark circle */}
                  <motion.div
                    className="w-24 h-24 rounded-full bg-emerald-500/20 flex items-center justify-center backdrop-blur-sm"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(16, 185, 129, 0.6)",
                        "0 0 0 30px rgba(16, 185, 129, 0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                      repeatDelay: 0.5,
                    }}
                  >
                    <motion.svg
                      className="w-12 h-12 text-emerald-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <motion.path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ 
                          duration: 0.7, 
                          delay: 0.4,
                          ease: [0.65, 0, 0.35, 1]
                        }}
                      />
                    </motion.svg>
                  </motion.div>
                  
                  {/* Orbiting particles */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-500/50"
                      style={{
                        left: '50%',
                        top: '50%',
                      }}
                      animate={{
                        x: [0, Math.cos((i * Math.PI * 2) / 8) * 70],
                        y: [0, Math.sin((i * Math.PI * 2) / 8) * 70],
                        opacity: [1, 0.8, 0],
                        scale: [1, 1.2, 0],
                      }}
                      transition={{
                        duration: 1.2,
                        delay: 0.6 + i * 0.08,
                        ease: [0.34, 1.56, 0.64, 1],
                      }}
                    />
                  ))}
                  
                  {/* Sparkle effects */}
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={`sparkle-${i}`}
                      className="absolute w-1 h-1 rounded-full bg-green-300"
                      style={{
                        left: '50%',
                        top: '50%',
                      }}
                      animate={{
                        x: [0, (Math.random() - 0.5) * 100],
                        y: [0, (Math.random() - 0.5) * 100],
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        delay: 0.5 + Math.random() * 0.3,
                        ease: "easeOut",
                      }}
                    />
                  ))}
                </motion.div>
                
                <motion.h3
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    delay: 0.7,
                    duration: 0.5,
                    ease: [0.34, 1.56, 0.64, 1]
                  }}
                  className="text-2xl font-bold text-white mb-2"
                >
                  Message Sent!
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.85,
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                  className="text-gray-400 text-center mb-6 px-4"
                >
                  Thank you for reaching out. I'll get back to you soon!
                </motion.p>
                
                <motion.button
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    delay: 1,
                    duration: 0.4,
                    ease: [0.34, 1.56, 0.64, 1]
                  }}
                  onClick={() => setSubmitStatus('idle')}
                  className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-emerald-500/50"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(16, 185, 129, 0.3), 0 10px 10px -5px rgba(16, 185, 129, 0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <>
                <motion.form 
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                  initial={{ opacity: 1 }}
                  animate={
                    isSubmitting ? {
                      opacity: 0.4,
                      scale: 0.98,
                      filter: "blur(2px)",
                      pointerEvents: "none",
                    } : submitStatus === 'error' ? { 
                      x: [-10, 10, -10, 10, 0],
                      transition: { duration: 0.4, ease: "easeInOut" }
                    } : {
                      opacity: 1,
                      scale: 1,
                      filter: "blur(0px)",
                    }
                  }
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Your Name"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="your@email.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                    <textarea
                      id="message"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      rows={4}
                      className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Your message..."
                      required
                      disabled={isSubmitting}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center shadow-md disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                  >
                    <motion.span
                      animate={isSubmitting ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center"
                    >
                      Send Message <Send className="w-4 h-4 ml-2" />
                    </motion.span>
                    
                    {isSubmitting && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="flex space-x-2">
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="w-2 h-2 bg-white rounded-full"
                              animate={{
                                y: [0, -10, 0],
                                scale: [1, 1.2, 1],
                              }}
                              transition={{
                                duration: 0.6,
                                repeat: Infinity,
                                delay: i * 0.15,
                              }}
                            />
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </button>
                  {submitStatus === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm text-center"
                    >
                      ✗ Failed to send message. Please try again.
                    </motion.p>
                  )}
                </motion.form>
                
                {/* Loading overlay with particles */}
                {isSubmitting && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 pointer-events-none"
                  >
                    {/* Sending particles animation */}
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full"
                        style={{
                          left: '50%',
                          top: '85%',
                        }}
                        animate={{
                          x: [(Math.random() - 0.5) * 50, (Math.random() - 0.5) * 300],
                          y: [0, -Math.random() * 400],
                          opacity: [1, 0],
                          scale: [1, 0],
                        }}
                        transition={{
                          duration: 1 + Math.random() * 0.5,
                          repeat: Infinity,
                          delay: Math.random() * 0.5,
                          ease: "easeOut",
                        }}
                      />
                    ))}
                    
                    {/* Ripple effect */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={`ripple-${i}`}
                        className="absolute border-2 border-blue-500/30 rounded-full"
                        style={{
                          left: '50%',
                          top: '85%',
                          translateX: '-50%',
                          translateY: '-50%',
                        }}
                        animate={{
                          width: ['0px', '300px'],
                          height: ['0px', '300px'],
                          opacity: [0.5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.6,
                          ease: "easeOut",
                        }}
                      />
                    ))}
                  </motion.div>
                )}
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
