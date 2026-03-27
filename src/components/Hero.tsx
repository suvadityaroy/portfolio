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
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-primary-400">Available for Cloud Security Roles</span>
          </motion.div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6 leading-tight">
            Security Engineer
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-400">
              {displayedText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                className="text-primary-400"
              >
                |
              </motion.span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-4 font-light leading-relaxed">
            Specializing in <span className="text-white font-medium">Cloud Security (Wiz CSPM)</span>, <span className="text-white font-medium">Privileged Access Management (CyberArk)</span>, and <span className="text-white font-medium">Vulnerability Management (Qualys VMDR)</span>
          </p>
          
          <p className="text-lg text-gray-500 max-w-3xl mb-12 font-light">
            Security automation with Python | Springer-published researcher in Blockchain Security
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link 
              href="#projects" 
              className="group px-8 py-4 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#contact" 
              className="px-8 py-4 bg-dark-800 border border-dark-700 text-white rounded-lg font-medium hover:bg-dark-700 hover:border-primary-500/50 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 mt-12">
            <Link href="https://github.com/suvadityaroy" target="_blank" className="text-gray-400 hover:text-primary-400 transition-colors">
              <Github className="w-6 h-6" />
            </Link>
            <Link href="https://linkedin.com/in/suvadityaroy" target="_blank" className="text-gray-400 hover:text-primary-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="mailto:contact@example.com" className="text-gray-400 hover:text-primary-400 transition-colors">
              <Mail className="w-6 h-6" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
            </Link>
          </div>

          <div className="flex justify-center space-x-6 text-gray-400">
            <a href="https://github.com/suvadityaroy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/suvadityaroy/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
            <a href="mailto:suvadityaroy.dev@gmail.com" className="hover:text-white transition-colors"><Mail size={24} /></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
