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

  const codeLines = [
    "Securing 300+ cloud assets with enterprise security tools",
    "Springer-published researcher in blockchain security",
    "Enterprise security: Wiz CSPM, CyberArk PAM, Qualys VMDR",
    "Python automation for log analysis and vulnerability tracking",
    "Cloud security expert in AWS and Azure environments",
    "SOC operations with Splunk and incident response",
    "Currently Security Engineer at ITPeopleNetwork Kolkata"
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  
  // Typing animation for rotating code lines
  const [currentCodeLineIndex, setCurrentCodeLineIndex] = useState(0);
  const [codeLineDisplayed, setCodeLineDisplayed] = useState('');
  const [codeLineCharIndex, setCodeLineCharIndex] = useState(0);
  const [isCodeLineDeleting, setIsCodeLineDeleting] = useState(false);

  // Smooth fade and slide transition for phrases
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 3000); // Change phrase every 3 seconds

    return () => clearInterval(interval);
  }, [phrases.length]);

  // Rotating typing animation for code lines
  useEffect(() => {
    const currentCodeLine = codeLines[currentCodeLineIndex];
    const typingSpeed = isCodeLineDeleting ? 20 : 50;
    const pauseAtEnd = 3000; // Pause to read the line
    const pauseBeforeDelete = 500;

    if (!isCodeLineDeleting && codeLineCharIndex === currentCodeLine.length) {
      setTimeout(() => setIsCodeLineDeleting(true), pauseAtEnd);
      return;
    }

    if (isCodeLineDeleting && codeLineCharIndex === 0) {
      setTimeout(() => {
        setIsCodeLineDeleting(false);
        setCurrentCodeLineIndex((prev) => (prev + 1) % codeLines.length);
      }, pauseBeforeDelete);
      return;
    }

    const timeout = setTimeout(() => {
      setCodeLineDisplayed(currentCodeLine.substring(0, codeLineCharIndex + (isCodeLineDeleting ? -1 : 1)));
      setCodeLineCharIndex((prev) => prev + (isCodeLineDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [codeLineCharIndex, isCodeLineDeleting, currentCodeLineIndex, codeLines]);

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

          {/* Name - More Visible with Glow Effect */}
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-heading font-black mb-6 leading-none drop-shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400"
              style={{
                textShadow: '0 0 40px rgba(168, 85, 247, 0.8), 0 0 80px rgba(236, 72, 153, 0.4)',
                WebkitTextStroke: '1px rgba(168, 85, 247, 0.3)'
              }}
            >
              Suvaditya Roy
            </span>
          </motion.h1>

          {/* Dynamic role with smooth fade and slide */}
          <div className="mb-12 h-16 md:h-20 flex items-center justify-center overflow-hidden">
            <motion.p
              key={currentPhraseIndex}
              initial={{ opacity: 0, y: 50, rotateX: 90, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                rotateX: 0, 
                scale: phrases[currentPhraseIndex] === 'Vulnerability Management' ? [1, 1.08, 1] : 1 
              }}
              exit={{ opacity: 0, y: -50, rotateX: -90, scale: 0.8 }}
              transition={{ 
                duration: 0.6,
                ease: [0.34, 1.56, 0.64, 1],
                scale: {
                  duration: 1.5,
                  repeat: phrases[currentPhraseIndex] === 'Vulnerability Management' ? Infinity : 0,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }
              }}
              className={`text-2xl md:text-4xl font-bold ${
                phrases[currentPhraseIndex] === 'Vulnerability Management' 
                  ? 'text-red-500' 
                  : 'text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-cyan-400 to-blue-400'
              }`}
              style={{
                textShadow: phrases[currentPhraseIndex] === 'Vulnerability Management' 
                  ? '0 0 50px rgba(239, 68, 68, 1), 0 0 100px rgba(239, 68, 68, 0.6), 0 0 150px rgba(239, 68, 68, 0.3)' 
                  : '0 0 30px rgba(59, 130, 246, 0.5)',
                WebkitTextStroke: phrases[currentPhraseIndex] === 'Vulnerability Management' 
                  ? '1.5px rgba(239, 68, 68, 0.5)' 
                  : 'none'
              }}
            >
              {phrases[currentPhraseIndex]}
            </motion.p>
          </div>

          {/* Coding-style rotating message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12 max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-dark-900/80 to-dark-800/80 backdrop-blur-md border-2 border-primary-500/20 rounded-2xl p-6 md:p-8 shadow-2xl shadow-primary-500/10 hover:border-primary-500/40 transition-all duration-500">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-red-500 cursor-pointer hover:bg-red-400"
                      whileHover={{ scale: 1.2 }}
                    ></motion.div>
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer hover:bg-yellow-400"
                      whileHover={{ scale: 1.2 }}
                    ></motion.div>
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-green-500 cursor-pointer hover:bg-green-400"
                      whileHover={{ scale: 1.2 }}
                    ></motion.div>
                  </div>
                  <span className="text-xs md:text-sm text-gray-400 ml-2 font-mono">about.js</span>
                </div>
                <div className="flex gap-2">
                  <motion.div 
                    className="w-6 h-1 bg-gray-600 rounded"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>
                  <motion.div 
                    className="w-6 h-1 bg-gray-600 rounded"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  ></motion.div>
                  <motion.div 
                    className="w-6 h-1 bg-gray-600 rounded"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  ></motion.div>
                </div>
              </div>
              <div className="font-mono text-sm md:text-base text-left overflow-x-auto">
                <div className="flex items-start gap-2">
                  <span className="text-gray-600 select-none">1</span>
                  <div className="flex-1">
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-blue-400">about</span>{' '}
                    <span className="text-white">=</span>{' '}
                    <span className="text-yellow-400">"</span>
                    <span className="text-green-400">
                      {codeLineDisplayed}
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                        className="text-white bg-white/20 px-0.5"
                      >
                        {!isCodeLineDeleting ? '█' : ''}
                      </motion.span>
                    </span>
                    <span className="text-yellow-400">{codeLineCharIndex === codeLines[currentCodeLineIndex].length ? '"' : ''}</span>
                    <span className="text-white">{codeLineCharIndex === codeLines[currentCodeLineIndex].length ? ';' : ''}</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                <motion.div 
                  className="w-2 h-2 rounded-full bg-green-500"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>
                <span>Live Preview</span>
              </div>
            </div>
          </motion.div>
          
          {/* CTA Buttons with enhanced animations */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
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
            transition={{ duration: 0.8, delay: 1.0 }}
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
