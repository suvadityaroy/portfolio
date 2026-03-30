'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function Hero() {
  const { theme } = useTheme();
  const phrases = [
    'Trainee Security Engineer'
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
  const [currentCodeLineIndex, setCurrentCodeLineIndex] = useState(0);
  const [codeLineDisplayed, setCodeLineDisplayed] = useState('');
  const [codeLineCharIndex, setCodeLineCharIndex] = useState(0);
  const [isCodeLineDeleting, setIsCodeLineDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [phrases.length]);

  useEffect(() => {
    const currentCodeLine = codeLines[currentCodeLineIndex];
    const typingSpeed = isCodeLineDeleting ? 20 : 50;
    const pauseAtEnd = 3000;
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

  const isDark = theme === 'dark';

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-gray-950' : 'bg-white'
    }`}>
      {/* Subtle grid background */}
      <div className={`absolute inset-0 bg-[linear-gradient(to_right,${isDark ? '#1f1f1f' : '#dbeafe'}_1px,transparent_1px),linear-gradient(to_bottom,${isDark ? '#1f1f1f' : '#dbeafe'}_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20`}></div>
      
      {/* Gradient overlay */}
      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-blue-600/5 via-transparent to-blue-400/5' : 'bg-gradient-to-br from-blue-50/60 via-cyan-50/40 to-sky-100/50 animate-pulse'}`}></div>
      
      {/* Floating orbs */}
      <motion.div
        className={`absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-blue-500/10' : 'bg-blue-400/15'}`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: isDark ? [0.3, 0.5, 0.3] : [0.4, 0.7, 0.4],
          x: isDark ? 0 : [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className={`absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-blue-400/10' : 'bg-cyan-400/15'}`}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: isDark ? [0.5, 0.3, 0.5] : [0.5, 0.3, 0.5],
          x: isDark ? 0 : [0, -20, 0],
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
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-lg md:text-xl mb-4 font-light tracking-wide ${isDark ? 'text-gray-400' : 'text-sky-600'}`}
          >
            Hi, I'm
          </motion.p>

          {/* Name */}
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-none drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400"
              style={{
                textShadow: isDark 
                  ? '0 0 40px rgba(59, 130, 246, 0.8), 0 0 80px rgba(34, 197, 231, 0.4)'
                  : '0 0 25px rgba(37, 99, 235, 0.5), 0 0 50px rgba(34, 197, 231, 0.3)',
                WebkitTextStroke: isDark ? '1px rgba(59, 130, 246, 0.3)' : '0.5px rgba(37, 99, 235, 0.2)'
              }}
            >
              Suvaditya Roy
            </span>
          </motion.h1>

          {/* Role with animation */}
          <div className="mb-12 h-16 md:h-20 flex items-center justify-center overflow-hidden">
            {mounted && (
              <motion.p
                key={currentPhraseIndex}
                initial={{ opacity: 0, y: 50, rotateX: 90, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  rotateX: 0, 
                  scale: [1, 1.05, 1]
                }}
                exit={{ opacity: 0, y: -50, rotateX: -90, scale: 0.8 }}
                transition={{ 
                  duration: 0.6,
                  ease: [0.34, 1.56, 0.64, 1],
                  scale: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }
                }}
                className={`text-2xl md:text-4xl font-bold ${isDark ? 'text-yellow-400' : 'text-blue-600'}`}
                style={{
                  textShadow: isDark 
                    ? '0 0 40px rgba(250, 204, 21, 0.9), 0 0 80px rgba(250, 204, 21, 0.6)'
                    : '0 0 20px rgba(37, 99, 235, 0.5)'
                }}
              >
                {phrases[currentPhraseIndex]}
              </motion.p>
            )}
          </div>

          {/* Code block */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12 max-w-4xl mx-auto"
          >
            <motion.div 
              className={`bg-gradient-to-br backdrop-blur-md border-2 rounded-2xl p-6 md:p-8 shadow-xl transition-all duration-500 ${
                isDark 
                  ? 'from-gray-900/80 to-gray-800/80 border-blue-500/20 hover:border-blue-500/40 shadow-blue-500/10' 
                  : 'from-blue-50/90 to-cyan-50/90 border-blue-300/50 hover:border-blue-400/80 shadow-blue-200/40'
              }`}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <motion.div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer hover:bg-red-400" whileHover={{ scale: 1.2 }}></motion.div>
                    <motion.div className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer hover:bg-yellow-400" whileHover={{ scale: 1.2 }}></motion.div>
                    <motion.div className="w-3 h-3 rounded-full bg-green-500 cursor-pointer hover:bg-green-400" whileHover={{ scale: 1.2 }}></motion.div>
                  </div>
                  <span className={`text-xs md:text-sm ml-2 font-mono ${isDark ? 'text-gray-400' : 'text-blue-700'}`}>about.js</span>
                </div>
              </div>
              <div className={`font-mono text-sm md:text-base text-left overflow-x-auto ${isDark ? 'text-gray-300' : 'text-blue-900'}`}>
                <div className="flex items-start gap-2">
                  <span className={`select-none ${isDark ? 'text-gray-600' : 'text-blue-500'}`}>1</span>
                  <div className="flex-1">
                    <span className={isDark ? 'text-purple-400' : 'text-purple-600'}>const</span>{' '}
                    <span className={isDark ? 'text-blue-400' : 'text-blue-700'}>about</span>{' '}
                    <span className={isDark ? 'text-white' : 'text-blue-900'}>=</span>{' '}
                    <span className={isDark ? 'text-yellow-400' : 'text-yellow-600'}>"</span>
                    <span className={isDark ? 'text-green-600 dark:text-green-400' : 'text-green-700'}>
                      {codeLineDisplayed}
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                        className={`px-0.5 ${isDark ? 'text-white bg-white/20' : 'text-blue-900 bg-blue-200/50'}`}
                      >
                        {!isCodeLineDeleting ? '█' : ''}
                      </motion.span>
                    </span>
                    <span className={isDark ? 'text-yellow-400' : 'text-yellow-600'}>{codeLineCharIndex === codeLines[currentCodeLineIndex].length ? '"' : ''}</span>
                    <span className={isDark ? 'text-white' : 'text-blue-900'}>{codeLineCharIndex === codeLines[currentCodeLineIndex].length ? ';' : ''}</span>
                  </div>
                </div>
              </div>
              <div className={`mt-4 flex items-center gap-2 text-xs ${isDark ? 'text-gray-500' : 'text-blue-600'}`}>
                <motion.div 
                  className="w-2 h-2 rounded-full bg-green-500"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>
                <span>Live Preview</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link 
                href="#projects" 
                className={`group relative px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 overflow-hidden inline-block ${
                  isDark
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-blue-500/50 hover:shadow-2xl'
                    : 'bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:shadow-blue-400/50 hover:shadow-2xl'
                }`}
              >
                <span className={`absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700`}></span>
                <span className="relative">View My Work</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link 
                href="#contact" 
                className={`group px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-block ${
                  isDark
                    ? 'bg-transparent border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-sm'
                    : 'bg-transparent border-2 border-blue-500 text-blue-600 hover:bg-blue-50 hover:border-blue-600 hover:text-blue-700'
                }`}
              >
                Let's Connect
              </Link>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <motion.div whileHover={{ y: -5, rotate: 5 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="https://github.com/suvadityaroy" 
                target="_blank" 
                className={`group p-4 rounded-full border transition-all duration-300 hover:scale-125 shadow-lg hover:shadow-xl inline-block ${
                  isDark
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 text-gray-400 hover:text-white hover:border-white hover:from-gray-700 hover:to-gray-800'
                    : 'bg-gradient-to-br from-gray-100 to-white border-gray-400 text-gray-700 hover:text-gray-900 hover:border-gray-600 hover:from-gray-200 hover:to-white hover:bg-gradient-to-br hover:shadow-lg'
                }`}
              >
                <Github className="w-6 h-6" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -5, rotate: -5 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="https://linkedin.com/in/suvadityaroy" 
                target="_blank" 
                className={`group p-4 rounded-full text-white border transition-all duration-300 hover:scale-125 shadow-lg inline-block ${
                  isDark
                    ? 'bg-gradient-to-br from-blue-600 to-blue-700 border-blue-500 hover:shadow-blue-500/50 hover:from-blue-500 hover:to-blue-600'
                    : 'bg-gradient-to-br from-blue-600 to-blue-500 border-blue-400 hover:shadow-blue-400/60 hover:from-blue-500 hover:to-blue-600'
                }`}
              >
                <Linkedin className="w-6 h-6" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -5, rotate: 5 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="mailto:suvadityaroy.dev@gmail.com" 
                className={`group p-4 rounded-full text-white border transition-all duration-300 hover:scale-125 shadow-lg inline-block ${
                  isDark
                    ? 'bg-gradient-to-br from-green-600 to-green-700 border-green-500 hover:shadow-green-500/50 hover:from-green-500 hover:to-green-600'
                    : 'bg-gradient-to-br from-green-500 to-green-600 border-green-400 hover:shadow-green-400/60 hover:from-green-400 hover:to-green-500'
                }`}
              >
                <Mail className="w-6 h-6" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
