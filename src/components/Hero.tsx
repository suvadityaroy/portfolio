'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Hero() {
  const phrases = [
    'Building the Future',
    'Securing the World',
    'Innovating with AI',
    'Crafting Solutions',
    'Shaping Tomorrow'
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
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-blue-400 font-semibold tracking-wide uppercase mb-4">Software Engineer</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 min-h-[1.2em]">
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            >
              {displayedText}
              <motion.span
                animate={{ 
                  opacity: [1, 0, 1],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                |
              </motion.span>
            </motion.span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Specializing in full-stack development with a passion for Cybersecurity, AI, Cloud Computing, and IoT technologies.
          </p>
          
          <div className="flex justify-center space-x-4 mb-12">
            <Link href="#projects" className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 flex items-center shadow-lg">
              View Work <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link href="#contact" className="px-8 py-3 border-2 border-gray-600 text-white rounded-full font-medium hover:border-blue-500 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300">
              Contact Me
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
