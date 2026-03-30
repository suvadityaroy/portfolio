'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowRight, ChevronDown } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const codeLines = [
    'Securing 300+ cloud assets with enterprise security tools',
    'Springer-published researcher in blockchain security',
    'Enterprise security: Wiz CSPM, CyberArk PAM, Qualys VMDR',
    'Python automation for log analysis and vulnerability tracking',
    'Cloud security expert in AWS and Azure environments',
    'SOC operations with Splunk and incident response',
    'Currently Security Engineer at ITPeopleNetwork Kolkata',
  ];

  const [currentCodeLineIndex, setCurrentCodeLineIndex] = useState(0);
  const [codeLineDisplayed, setCodeLineDisplayed] = useState('');
  const [codeLineCharIndex, setCodeLineCharIndex] = useState(0);
  const [isCodeLineDeleting, setIsCodeLineDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const currentCodeLine = codeLines[currentCodeLineIndex];
    const typingSpeed = isCodeLineDeleting ? 18 : 45;

    if (!isCodeLineDeleting && codeLineCharIndex === currentCodeLine.length) {
      const t = setTimeout(() => setIsCodeLineDeleting(true), 2800);
      return () => clearTimeout(t);
    }
    if (isCodeLineDeleting && codeLineCharIndex === 0) {
      const t = setTimeout(() => {
        setIsCodeLineDeleting(false);
        setCurrentCodeLineIndex(p => (p + 1) % codeLines.length);
      }, 400);
      return () => clearTimeout(t);
    }
    const timeout = setTimeout(() => {
      setCodeLineDisplayed(currentCodeLine.substring(0, codeLineCharIndex + (isCodeLineDeleting ? -1 : 1)));
      setCodeLineCharIndex(p => p + (isCodeLineDeleting ? -1 : 1));
    }, typingSpeed);
    return () => clearTimeout(timeout);
  }, [codeLineCharIndex, isCodeLineDeleting, currentCodeLineIndex]);

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-500 ${
        isDark ? 'bg-[#030712]' : 'bg-white'
      }`}
    >
      {/* ── Dark: aurora animated background ── */}
      {isDark && (
        <>
          <div className="aurora-bg absolute inset-0 opacity-60" />
          <div className="grid-lines-dark absolute inset-0 opacity-100" />
          {/* Glowing orbs */}
          <motion.div
            className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-sky-500/10 blur-[120px]"
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[100px]"
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.3, 0.5] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-blue-600/5 blur-[140px]"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          />
        </>
      )}

      {/* ── Light: dot grid + soft blobs ── */}
      {!isDark && (
        <>
          <div className="dot-grid-light absolute inset-0 opacity-40" />
          <motion.div
            className="absolute top-[-8%] right-[5%] w-[500px] h-[500px] rounded-full bg-indigo-100 blur-[100px]"
            animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-[-5%] left-[0%] w-[400px] h-[400px] rounded-full bg-violet-100 blur-[100px]"
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          />
        </>
      )}

      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Greeting badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <span className={`px-4 py-1.5 rounded-full text-sm font-medium border backdrop-blur-sm ${
              isDark
                ? 'bg-sky-500/10 border-sky-500/25 text-sky-300'
                : 'bg-indigo-50 border-indigo-200 text-indigo-700'
            }`}>
              <span className="inline-block w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4 leading-none"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {isDark ? (
              <span className="gradient-text-dark drop-shadow-[0_0_60px_rgba(56,189,248,0.4)]">
                Suvaditya Roy
              </span>
            ) : (
              <span className="gradient-text-light">
                Suvaditya Roy
              </span>
            )}
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className={`text-2xl md:text-3xl font-bold mb-12 tracking-wide ${
              isDark ? 'text-sky-300' : 'text-indigo-600'
            }`}
          >
            Trainee Security Engineer
          </motion.p>

          {/* Code block typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-12 max-w-3xl mx-auto"
          >
            <motion.div
              className={`rounded-2xl overflow-hidden border backdrop-blur-md transition-all duration-500 ${
                isDark
                  ? 'bg-[#0a1628]/90 border-sky-500/20 shadow-[0_0_40px_rgba(56,189,248,0.08)]'
                  : 'bg-white border-slate-200 shadow-[0_4px_24px_rgba(79,70,229,0.08)]'
              }`}
              whileHover={{
                scale: 1.015,
                boxShadow: isDark
                  ? '0 0 50px rgba(56,189,248,0.18)'
                  : '0 8px 40px rgba(79,70,229,0.14)',
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Window chrome */}
              <div className={`flex items-center gap-3 px-5 py-3.5 border-b ${
                isDark ? 'bg-[#050d1a]/80 border-sky-500/10' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer" />
                  <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer" />
                </div>
                <span className={`text-xs font-mono ml-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  about.js
                </span>
                <div className="ml-auto flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>live</span>
                </div>
              </div>

              {/* Code content */}
              <div className="px-5 py-5 font-mono text-sm md:text-base text-left">
                <div className="flex items-start gap-3">
                  <span className={`select-none text-xs mt-0.5 w-4 ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>1</span>
                  <div className="flex-1 flex flex-wrap items-center gap-1">
                    <span className={isDark ? 'text-purple-400' : 'text-violet-600'}>const</span>
                    <span className={isDark ? 'text-sky-300' : 'text-indigo-600'}>about</span>
                    <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>=</span>
                    <span className={isDark ? 'text-amber-400' : 'text-amber-600'}>"</span>
                    <span className={isDark ? 'text-emerald-400' : 'text-emerald-700'}>
                      {codeLineDisplayed}
                      {mounted && (
                        <span className={`ml-0.5 ${isDark ? 'text-sky-300' : 'text-indigo-500'}`}
                          style={{ animation: 'blink-cursor 1s step-end infinite' }}>|</span>
                      )}
                    </span>
                    {codeLineCharIndex === codeLines[currentCodeLineIndex].length && (
                      <>
                        <span className={isDark ? 'text-amber-400' : 'text-amber-600'}>"</span>
                        <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>;</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="#projects"
                className={`relative group px-8 py-3.5 rounded-full font-semibold overflow-hidden inline-flex items-center gap-2 transition-all duration-300 ${
                  isDark
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-[0_0_30px_rgba(56,189,248,0.3)] hover:shadow-[0_0_45px_rgba(56,189,248,0.5)]'
                    : 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-[0_4px_20px_rgba(79,70,229,0.3)] hover:shadow-[0_8px_30px_rgba(79,70,229,0.45)]'
                }`}
              >
                <span className="absolute inset-0 shimmer-btn" />
                <span className="relative">View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="#contact"
                className={`px-8 py-3.5 rounded-full font-semibold inline-flex items-center gap-2 border-2 transition-all duration-300 ${
                  isDark
                    ? 'border-sky-500/40 text-sky-300 hover:bg-sky-500/10 hover:border-sky-400 backdrop-blur-sm'
                    : 'border-indigo-300 text-indigo-700 hover:bg-indigo-50 hover:border-indigo-500'
                }`}
              >
                Let's Connect
              </Link>
            </motion.div>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex items-center justify-center gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {[
              {
                href: 'https://github.com/suvadityaroy',
                icon: FaGithub,
                darkClass: 'bg-[#0a1628] border-slate-700 text-slate-300 hover:text-white hover:border-sky-500/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]',
                lightClass: 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-indigo-300 hover:shadow-[0_4px_16px_rgba(79,70,229,0.12)]',
              },
              {
                href: 'https://linkedin.com/in/suvadityaroy',
                icon: FaLinkedin,
                darkClass: 'bg-blue-600 border-blue-500 text-white hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]',
                lightClass: 'bg-blue-600 border-blue-500 text-white hover:bg-blue-700 hover:shadow-[0_4px_16px_rgba(59,130,246,0.35)]',
              },
              {
                href: 'mailto:suvadityaroy.dev@gmail.com',
                icon: Mail,
                darkClass: 'bg-emerald-600 border-emerald-500 text-white hover:bg-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]',
                lightClass: 'bg-emerald-600 border-emerald-500 text-white hover:bg-emerald-700 hover:shadow-[0_4px_16px_rgba(16,185,129,0.35)]',
              },
            ].map(({ href, icon: Icon, darkClass, lightClass }, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.94 }}
              >
                <Link
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  className={`p-3.5 rounded-xl border transition-all duration-300 inline-flex shadow-sm ${
                    isDark ? darkClass : lightClass
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className={`w-5 h-5 ${isDark ? 'text-slate-600' : 'text-slate-400'}`} />
      </motion.div>
    </section>
  );
}
