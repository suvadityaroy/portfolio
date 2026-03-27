'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Hero() {
  const phrases = [
    'Cloud Security Engineer',
    'CSPM & IAM Specialist',
    'Vulnerability Management',
    'Security Automation',
    'Cloud-Native Security'
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
          className="max-w-5xl mx-auto"
        >
          {/* Main heading with stagger animation */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="block"
            >
              Cloud Security Engineer
            </motion.span>
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-blue-400 to-cyan-400 inline-block mt-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {displayedText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                className="text-primary-400"
              >
                |
              </motion.span>
            </motion.span>
          </motion.h1>

          {/* Professional subtitle with reveal animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="space-y-4 mb-10"
          >
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl leading-relaxed">
              Experienced Security Engineer specializing in <span className="text-white font-semibold bg-primary-500/10 px-2 py-1 rounded">Cloud Security Posture Management</span>, <span className="text-white font-semibold bg-purple-500/10 px-2 py-1 rounded">Privileged Access Management</span>, and <span className="text-white font-semibold bg-red-500/10 px-2 py-1 rounded">Vulnerability Assessment</span>.
            </p>
            
            <p className="text-base md:text-lg text-gray-400 max-w-3xl leading-relaxed">
              Proven track record securing enterprise cloud infrastructure with <span className="text-primary-400 font-medium">Wiz CSPM</span>, <span className="text-purple-400 font-medium">CyberArk PAM/EPM</span>, and <span className="text-red-400 font-medium">Qualys VMDR</span> across 300+ production assets. Expertise in Python automation, AWS/Azure security, and SOC operations with Splunk.
            </p>

            <p className="text-sm md:text-base text-gray-500 max-w-3xl">
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse"></span>
                Springer-published researcher in Blockchain Security
              </span>
              <span className="mx-3 text-dark-700">•</span>
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                Open to Cloud Security Engineering opportunities
              </span>
            </p>
          </motion.div>
          
          {/* CTA Buttons with enhanced animations */}
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Link 
              href="#projects" 
              className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 flex items-center gap-2 shadow-xl shadow-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/40 hover:scale-105 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
              <span className="relative">View Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative" />
            </Link>
            <Link 
              href="#contact" 
              className="group px-8 py-4 bg-dark-800/50 backdrop-blur-sm border-2 border-dark-700 text-white rounded-xl font-semibold hover:bg-dark-700 hover:border-primary-500 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get in Touch
            </Link>
          </motion.div>

          {/* Social Links with hover animations */}
          <motion.div 
            className="flex items-center gap-6 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <Link 
              href="https://github.com/suvadityaroy" 
              target="_blank" 
              className="group p-3 bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-xl text-gray-400 hover:text-white hover:border-primary-500 hover:bg-primary-500/10 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link 
              href="https://linkedin.com/in/suvadityaroy" 
              target="_blank" 
              className="group p-3 bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-xl text-gray-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link 
              href="mailto:suvadityaroy.dev@gmail.com" 
              className="group p-3 bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-xl text-gray-400 hover:text-white hover:border-green-500 hover:bg-green-500/10 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
