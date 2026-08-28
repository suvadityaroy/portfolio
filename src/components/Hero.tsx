'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, ArrowRight, ChevronDown } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import { useState, useEffect, useRef, Suspense } from 'react';
import { useTheme } from '@/context/ThemeContext';
import dynamic from 'next/dynamic';

import HeroAnimation from './HeroAnimation';
const Hero3D = dynamic(() => import('./Hero3D'), { ssr: false, loading: () => <div className="w-full h-[320px] flex items-center justify-center">3D</div> });

// ── Animation variants ────────────────────────────────────────
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.11, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 260, damping: 22 },
  },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.88 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 280, damping: 24 },
  },
};

// ── Floating background orbs (CSS-driven, no JS animation loop) ─
const orbs = [
  { size: 600, x: '-5%', y: '-10%', color: 'dark:bg-sky-500/8 bg-indigo-50/35',    blur: 'blur-[160px]' },
  { size: 500, x: '65%', y: '50%',  color: 'dark:bg-indigo-600/8 bg-violet-50/25', blur: 'blur-[140px]' },
];

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const sectionRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);

  // Typewriter
  const codeLines = [
    'Cyber Security Engineer with hands-on AWS and Azure cloud experience',
    'IAM controls, vulnerability management, and cloud posture governance',
    'Supporting Wiz, CyberArk PAM/EPM, Qualys, and Splunk in production',
    'Monitoring SIEM alerts and assisting incident response workflows',
    'Automating cloud security operations with Python and scripts',
    'Focused on scalable cloud risk management and identity security',
    'Currently Cyber Security Engineer at ITPeopleNetwork, Kolkata',
  ];
  const [lineIdx, setLineIdx]   = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [charIdx, setCharIdx]   = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const line = codeLines[lineIdx];
    if (!deleting && charIdx === line.length) {
      const t = setTimeout(() => setDeleting(true), 2600);
      return () => clearTimeout(t);
    }
    if (deleting && charIdx === 0) {
      const t = setTimeout(() => {
        setDeleting(false);
        setLineIdx(p => (p + 1) % codeLines.length);
      }, 380);
      return () => clearTimeout(t);
    }
    const speed = deleting ? 16 : 42;
    const t = setTimeout(() => {
      setDisplayed(line.substring(0, charIdx + (deleting ? -1 : 1)));
      setCharIdx(p => p + (deleting ? -1 : 1));
    }, speed);
    return () => clearTimeout(t);
  }, [charIdx, deleting, lineIdx]);

  // Parallax on scroll
  const { scrollY } = useScroll();
  const yOrb1 = useTransform(scrollY, [0, 600], [0, -80]);

  const socials = [
    {
      href: 'https://github.com/suvadityaroy', icon: FaGithub,
      dark: 'bg-[#0a1628] border-slate-700 text-slate-300 hover:text-white hover:border-sky-500/50 hover:shadow-[0_0_18px_rgba(56,189,248,0.2)]',
      light: 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-indigo-300 hover:shadow-[0_4px_14px_rgba(79,70,229,0.12)]',
    },
    {
      href: 'https://linkedin.com/in/suvadityaroy', icon: FaLinkedin,
      dark: 'bg-blue-600 border-blue-500 text-white hover:bg-blue-500 hover:shadow-[0_0_18px_rgba(59,130,246,0.45)]',
      light: 'bg-blue-600 border-blue-500 text-white hover:bg-blue-700 hover:shadow-[0_4px_14px_rgba(59,130,246,0.35)]',
    },
    {
      href: 'mailto:suvadityaroy.dev@gmail.com', icon: Mail,
      dark: 'bg-emerald-600 border-emerald-500 text-white hover:bg-emerald-500 hover:shadow-[0_0_18px_rgba(16,185,129,0.45)]',
      light: 'bg-emerald-600 border-emerald-500 text-white hover:bg-emerald-700 hover:shadow-[0_4px_14px_rgba(16,185,129,0.35)]',
    },
  ];

  return (
    <section
      id="home"
      ref={sectionRef}
      className={`min-h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-500 ${
        isDark ? 'bg-[#04091e]' : 'bg-[#eaedff]'
      }`}
    >
      {/* ── Backgrounds ────────────────────────────────────── */}
      {isDark && <div className="dot-grid-dark absolute inset-0 opacity-40" />}
      {!isDark && <div className="dot-grid-light absolute inset-0 opacity-35" />}

      {/* Animated orbs with parallax */}
      <motion.div style={{ y: yOrb1 }} className="absolute inset-0 pointer-events-none">
        {orbs.map((orb, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -15, 0], x: [0, 8, 0] }}
            transition={{ duration: 12 + i * 3, repeat: Infinity, ease: 'easeInOut' }}
            className={`absolute rounded-full pointer-events-none ${orb.blur} ${
              isDark ? orb.color.split(' ')[0] : orb.color.split(' ')[1]
            }`}
            style={{ width: orb.size, height: orb.size, left: orb.x, top: orb.y }}
          />
        ))}
      </motion.div>

      {/* ── Main content ───────────────────────────────────── */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-5xl mx-auto text-center"
        >
          {/* Availability badge */}
          <motion.div variants={fadeScale} className="inline-flex items-center gap-2 mb-8">
            <span className={`px-4 py-1.5 rounded-full text-sm font-medium border backdrop-blur-sm ${
              isDark
                ? 'bg-sky-500/8 border-sky-500/22 text-sky-300'
                : 'bg-indigo-50 border-indigo-200 text-indigo-700'
            }`}>
              <span className="inline-block w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse" />
              OPEN TO CYBER SECURITY OPPORTUNITIES
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4 leading-none"
          >
            {isDark ? (
              <span className="gradient-text-dark drop-shadow-[0_0_70px_rgba(56,189,248,0.35)]">
                Suvaditya Roy
              </span>
            ) : (
              <span className="gradient-text-light">Suvaditya Roy</span>
            )}
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={fadeUp}
            className={`text-2xl md:text-3xl font-bold mb-12 ${
              isDark ? 'text-sky-300' : 'text-indigo-600'
            }`}
            whileHover={{ rotateX: -5, rotateY: 5, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200, damping: 25, ease: 'easeOut' }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            Cyber Security Engineer
          </motion.p>

          {/* Code block */}
          <motion.div variants={fadeUp} className="mb-12 max-w-3xl mx-auto">
            <motion.div
              className={`rounded-2xl overflow-hidden border backdrop-blur-md ${
                isDark
                  ? 'bg-[#0a1628]/90 border-sky-500/18 shadow-[0_0_50px_rgba(56,189,248,0.07)]'
                  : 'bg-white border-slate-200 shadow-[0_6px_30px_rgba(79,70,229,0.07)]'
              }`}
              whileHover={{
                scale: 1.012,
                boxShadow: isDark
                  ? '0 0 60px rgba(56,189,248,0.16)'
                  : '0 12px_50px_rgba(79,70,229,0.12)',
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            >
              {/* Chrome bar */}
              <div className={`flex items-center gap-3 px-5 py-3.5 border-b ${
                isDark ? 'bg-[#050d1a]/80 border-sky-500/10' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="flex gap-1.5">
                  {['bg-red-500', 'bg-yellow-500', 'bg-green-500'].map((c, i) => (
                    <motion.div
                      key={i}
                      className={`w-3 h-3 rounded-full ${c}`}
                      whileHover={{ scale: 1.3 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    />
                  ))}
                </div>
                <span className={`text-xs font-mono ml-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  about.js
                </span>
                <div className="ml-auto flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>live</span>
                </div>
              </div>

              {/* Code line */}
              <div className="px-5 py-5 font-mono text-sm md:text-base text-left">
                <div className="flex items-start gap-3">
                  <span className={`select-none text-xs mt-0.5 w-4 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>1</span>
                  <div className="flex-1 flex flex-wrap items-center gap-1 min-h-[1.5em] break-words whitespace-pre-wrap">
                    <span className={isDark ? 'text-purple-400' : 'text-violet-600'}>const</span>
                    <span className={isDark ? 'text-sky-300' : 'text-indigo-600'}>about</span>
                    <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>=</span>
                    <span className={isDark ? 'text-amber-400' : 'text-amber-600'}>"</span>
                    <span className={isDark ? 'text-emerald-400' : 'text-emerald-700'}>
                      {displayed}
                      {mounted && (
                        <span className={`animate-[blink-cursor_0.9s_step-end_infinite] ${isDark ? 'text-sky-300' : 'text-indigo-500'}`}>|</span>
                      )}
                    </span>
                    {charIdx === codeLines[lineIdx].length && (
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
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 mb-14">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} transition={{ type: 'spring', stiffness: 400, damping: 18 }}>
              <Link href="#projects" className={`btn-primary`}>
                <span className="relative">View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} transition={{ type: 'spring', stiffness: 400, damping: 18 }}>
              <Link href="#contact" className={`btn-outline`}>
                Let's Connect
              </Link>
            </motion.div>
          </motion.div>

          {/* Small metric cards: important at-a-glance facts */}
          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap justify-center gap-4">
            {[{
              title: '300+', subtitle: 'Cloud Assets'
            },{
              title: 'AWS + Azure', subtitle: 'Enterprise Security'
            },{
              title: 'CyberArk', subtitle: 'PAM / EPM'
            }].map((m, i) => (
              <motion.div key={i} whileHover={{ y: -8, scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                <div className="px-4 py-3 rounded-xl border backdrop-blur-sm bg-white/6 text-center min-w-[140px] card-dark">
                  <div className="text-2xl font-bold">{m.title}</div>
                  <div className="text-xs mt-1 text-slate-300">{m.subtitle}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Social icons */}
          <motion.div variants={container} className="flex items-center justify-center gap-5">
            {socials.map(({ href, icon: Icon, dark, light }, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.7 },
                  show: {
                    opacity: 1, y: 0, scale: 1,
                    transition: { type: 'spring' as const, stiffness: 320, damping: 20, delay: i * 0.08 },
                  },
                }}
                whileHover={{ y: -5, scale: 1.12, transition: { type: 'spring', stiffness: 400, damping: 16 } }}
                whileTap={{ scale: 0.93 }}
              >
                <Link
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  className={`p-3.5 rounded-xl border transition-all duration-250 inline-flex shadow-sm ${
                    isDark ? dark : light
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Right 3D visual */}
      <div className="absolute right-8 top-24 hidden lg:block w-[420px]">
        <HeroAnimation />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <motion.div
          className={`w-px h-10 origin-top ${
            isDark
              ? 'bg-gradient-to-b from-sky-500/60 to-transparent'
              : 'bg-gradient-to-b from-indigo-400/60 to-transparent'
          }`}
          animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <ChevronDown className={`w-4 h-4 ${isDark ? 'text-slate-600' : 'text-slate-400'}`} />
      </motion.div>
    </section>
  );
}
