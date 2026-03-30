'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    let rafId: number | null = null;
    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setScrollProgress(height > 0 ? (winScroll / height) * 100 : 0);
        rafId = null;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  // Highlight active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    navLinks.forEach(link => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled
        ? isDark
          ? 'bg-[#030712]/80 backdrop-blur-xl border-b border-sky-500/10 shadow-[0_1px_30px_rgba(0,0,0,0.5)]'
          : 'bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm'
        : 'bg-transparent'
    }`}>
      {/* Scroll progress bar */}
      <div
        className={`absolute bottom-0 left-0 h-[2px] transition-all duration-100 ${
          isDark
            ? 'bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500'
            : 'bg-gradient-to-r from-indigo-600 via-violet-500 to-purple-600'
        }`}
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="#home" className="text-2xl font-bold tracking-tight">
          <span className={isDark ? 'text-sky-400' : 'text-indigo-600'}>S</span>
          <span className={isDark ? 'text-white' : 'text-slate-900'}>R</span>
          <span className={`text-sm font-normal ml-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>oy</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(link => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive
                    ? isDark
                      ? 'text-sky-300 bg-sky-500/10'
                      : 'text-indigo-700 bg-indigo-50'
                    : isDark
                      ? 'text-slate-400 hover:text-white hover:bg-white/5'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className={`absolute bottom-1 left-3.5 right-3.5 h-0.5 rounded-full ${
                      isDark ? 'bg-sky-400' : 'bg-indigo-600'
                    }`}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}

          {/* Theme toggle */}
          {mounted && (
            <motion.button
              onClick={toggleTheme}
              className={`ml-3 p-2.5 rounded-xl border transition-all duration-300 ${
                isDark
                  ? 'bg-[#0a1628] border-sky-500/20 text-amber-400 hover:bg-sky-500/10 hover:border-sky-500/40'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300'
              }`}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.93 }}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          )}
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          {mounted && (
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-lg border transition-all ${
                isDark
                  ? 'bg-[#0a1628] border-sky-500/20 text-amber-400'
                  : 'bg-white border-slate-200 text-slate-600'
              }`}
              whileTap={{ scale: 0.93 }}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-lg transition-colors ${
              isDark ? 'text-slate-300 hover:bg-white/5' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className={`md:hidden overflow-hidden border-t ${
              isDark
                ? 'bg-[#030712]/95 backdrop-blur-xl border-sky-500/10'
                : 'bg-white/95 backdrop-blur-xl border-slate-200'
            }`}
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isDark
                      ? 'text-slate-300 hover:text-white hover:bg-white/5'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                className={`mt-3 px-4 py-3 rounded-xl text-sm font-semibold text-center transition-all ${
                  isDark
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white'
                    : 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
