'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Hero() {
  const phrases = [
    'Security Engineer',
    'Cloud Security',
    'CSPM Specialist',
    'Python Automation',
    'Vulnerability Management'
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const typingSpeed = isDeleting ? 25 : 70;
    const pauseAtEnd = 1500;
    const pauseBeforeDelete = 200;

    if (!isDeleting && charIndex === currentPhrase.length) {
      setTimeout(() => setIsDeleting(true), pauseAtEnd);
      return;
    }

    if (isDeleting && charIndex === 0) {
      setTimeout(() => {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, pauseBeforeDelete);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText(currentPhrase.substring(0, charIndex + (isDeleting ? -1 : 1)));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentPhraseIndex, phrases]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-dark-950 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 via-transparent to-primary-400/5"></div>
      
      {/* Minimal floating orbs */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Simple greeting */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-400 mb-4 font-light tracking-wide"
          >
            Hi, I'm
          </motion.p>

          {/* Name */}
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-heading font-black text-white mb-6 leading-none"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-blue-500 to-cyan-400">
              Suvaditya Roy
            </span>
          </motion.h1>

          {/* Dynamic role with typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <p className="text-2xl md:text-4xl text-gray-300 font-light">
              {displayedText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                className="text-primary-400"
              >
                |
              </motion.span>
            </p>
          </motion.div>

          {/* Colorful tech stack badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-12 max-w-3xl mx-auto"
          >
            {[
              { name: 'Wiz CSPM', color: 'from-blue-500 to-blue-600', icon: '🛡️' },
              { name: 'CyberArk PAM', color: 'from-purple-500 to-purple-600', icon: '🔐' },
              { name: 'Qualys VMDR', color: 'from-red-500 to-red-600', icon: '🔍' },
              { name: 'Python', color: 'from-yellow-500 to-yellow-600', icon: '🐍' },
              { name: 'AWS Security', color: 'from-orange-500 to-orange-600', icon: '☁️' },
              { name: 'Splunk', color: 'from-green-500 to-green-600', icon: '📊' }
            ].map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`px-4 py-2 bg-gradient-to-r ${tech.color} text-white rounded-full text-sm font-semibold shadow-lg cursor-default flex items-center gap-2`}
              >
                <span>{tech.icon}</span>
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Simple tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-base md:text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Securing <span className="text-white font-semibold">300+ cloud assets</span> with enterprise security tools. 
            <span className="text-primary-400"> Springer-published researcher</span> in blockchain security.
          </motion.p>
          
          {/* CTA Buttons with enhanced animations */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <Link 
              href="#projects" 
              className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 via-blue-500 to-cyan-500 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 flex items-center gap-2 hover:scale-110 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
              <span className="relative">View My Work</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative" />
            </Link>
            <Link 
              href="#contact" 
              className="group px-8 py-4 bg-transparent border-2 border-white/20 text-white rounded-full font-semibold hover:bg-white/10 hover:border-white/40 backdrop-blur-sm transition-all duration-300 hover:scale-110"
            >
              Let's Connect
            </Link>
          </motion.div>

          {/* Social Links with hover animations */}
          <motion.div 
            className="flex items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Link 
              href="https://github.com/suvadityaroy" 
              target="_blank" 
              className="group p-4 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-full text-gray-400 hover:text-white hover:border-white hover:from-gray-700 hover:to-gray-800 transition-all duration-300 hover:scale-125 shadow-lg hover:shadow-xl"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link 
              href="https://linkedin.com/in/suvadityaroy" 
              target="_blank" 
              className="group p-4 bg-gradient-to-br from-blue-600 to-blue-700 border border-blue-500 rounded-full text-white hover:from-blue-500 hover:to-blue-600 transition-all duration-300 hover:scale-125 shadow-lg hover:shadow-blue-500/50"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link 
              href="mailto:suvadityaroy.dev@gmail.com" 
              className="group p-4 bg-gradient-to-br from-green-600 to-green-700 border border-green-500 rounded-full text-white hover:from-green-500 hover:to-green-600 transition-all duration-300 hover:scale-125 shadow-lg hover:shadow-green-500/50"
            >
              <Mail className="w-6 h-6" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
