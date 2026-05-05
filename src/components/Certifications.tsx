'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Cloud, Terminal, Brain } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useRef } from 'react';

const certifications = [
  {
    name: 'AWS Security Fundamentals',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Mar 2026',
    icon: Cloud,
    iconColor: 'text-orange-500',
    badge: { dark: 'bg-orange-500/10 border-orange-500/22', light: 'bg-orange-50 border-orange-200' },
    glow:  { dark: 'hover:shadow-[0_0_30px_rgba(249,115,22,0.12)]', light: 'hover:shadow-[0_8px_30px_rgba(249,115,22,0.1)]' },
  },
  {
    name: 'Introduction to Generative AI',
    issuer: 'Google',
    date: 'Jun 2025',
    icon: Brain,
    iconColor: 'text-yellow-500',
    badge: { dark: 'bg-yellow-500/10 border-yellow-500/22', light: 'bg-yellow-50 border-yellow-200' },
    glow:  { dark: 'hover:shadow-[0_0_30px_rgba(234,179,8,0.12)]', light: 'hover:shadow-[0_8px_30px_rgba(234,179,8,0.1)]' },
  },
  {
    name: 'Certified Ethical Hacking (v12) Specialization',
    issuer: 'LearnKartS',
    date: 'Jan 2025',
    icon: Terminal,
    iconColor: 'text-violet-500',
    badge: { dark: 'bg-violet-500/10 border-violet-500/22', light: 'bg-violet-50 border-violet-200' },
    glow:  { dark: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]', light: 'hover:shadow-[0_8px_30px_rgba(139,92,246,0.1)]' },
  },
  {
    name: 'IBM Cybersecurity Analyst',
    issuer: 'IBM',
    date: 'May 2024',
    icon: ShieldCheck,
    iconColor: 'text-blue-500',
    badge: { dark: 'bg-blue-500/10 border-blue-500/22', light: 'bg-blue-50 border-blue-200' },
    glow:  { dark: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.12)]', light: 'hover:shadow-[0_8px_30px_rgba(59,130,246,0.1)]' },
  },
  {
    name: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Mar 2024',
    icon: Cloud,
    iconColor: 'text-orange-500',
    badge: { dark: 'bg-orange-500/10 border-orange-500/22', light: 'bg-orange-50 border-orange-200' },
    glow:  { dark: 'hover:shadow-[0_0_30px_rgba(249,115,22,0.12)]', light: 'hover:shadow-[0_8px_30px_rgba(249,115,22,0.1)]' },
  },
  {
    name: 'Certified in Cybersecurity Specialization',
    issuer: 'ISC2',
    date: 'Nov 2023',
    icon: ShieldCheck,
    iconColor: 'text-red-500',
    badge: { dark: 'bg-red-500/10 border-red-500/22', light: 'bg-red-50 border-red-200' },
    glow:  { dark: 'hover:shadow-[0_0_30px_rgba(239,68,68,0.12)]', light: 'hover:shadow-[0_8px_30px_rgba(239,68,68,0.1)]' },
  },
  {
    name: 'CISSP Training Course',
    issuer: 'Simplilearn',
    date: 'Nov 2023',
    icon: ShieldCheck,
    iconColor: 'text-slate-400',
    badge: { dark: 'bg-slate-500/10 border-slate-500/22', light: 'bg-slate-50 border-slate-200' },
    glow:  { dark: 'hover:shadow-[0_0_30px_rgba(100,116,139,0.12)]', light: 'hover:shadow-[0_8px_30px_rgba(100,116,139,0.1)]' },
  },
  {
    name: 'Google Cybersecurity Specialization',
    issuer: 'Google',
    date: 'Oct 2023',
    icon: Cloud,
    iconColor: 'text-blue-500',
    badge: { dark: 'bg-sky-500/10 border-sky-500/22', light: 'bg-sky-50 border-sky-200' },
    glow:  { dark: 'hover:shadow-[0_0_30px_rgba(56,189,248,0.12)]', light: 'hover:shadow-[0_8px_30px_rgba(56,189,248,0.1)]' },
  },
];

// stagger container
const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const card = {
  hidden: { opacity: 0, y: 36, scale: 0.93 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring' as const, stiffness: 240, damping: 22 },
  },
};

export default function Certifications() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const sectionRef = useRef<HTMLElement>(null);

  const accent  = isDark ? 'text-sky-400'  : 'text-indigo-600';
  const strong  = isDark ? 'text-white'    : 'text-slate-900';
  const divider = isDark
    ? 'bg-gradient-to-r from-sky-500 to-indigo-500'
    : 'bg-gradient-to-r from-indigo-600 to-violet-600';

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className={`py-28 relative overflow-hidden transition-colors duration-500 bg-transparent`}
    >
      <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent ${
        isDark ? 'via-sky-500/20' : 'via-indigo-200/60'} to-transparent`} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className={`text-xs font-bold tracking-[0.3em] uppercase mb-3 ${accent}`}>Certifications</p>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${strong}`}>Credentials & Badges</h2>
          <motion.div
            className={`h-1 mx-auto rounded-full ${divider}`}
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Stagger grid */}
        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto"
        >
          {certifications.map((cert, index) => {
            const IconComp = cert.icon;
            return (
              <motion.div
                key={index}
                variants={card}
                whileHover={{
                  y: -5, scale: 1.02, rotateX: -3, rotateY: 3,
                  transition: { type: 'spring' as const, stiffness: 250, damping: 30, ease: 'easeOut' },
                }}
                style={{ transformStyle: 'preserve-3d' }}
                className={`p-5 rounded-2xl border flex flex-col cursor-default group transition-all duration-300 ${
                  isDark
                    ? `card-dark ${cert.glow.dark}`
                    : `card-light ${cert.glow.light}`
                }`}
              >
                <div className="flex items-start gap-4 mb-auto">
                  {/* Icon badge with wobble on hover */}
                  <motion.div
                    className={`p-3 rounded-xl border flex-shrink-0 transition-all duration-300 ${
                      isDark ? cert.badge.dark : cert.badge.light
                    }`}
                    whileHover={{
                      rotate: [0, -10, 10, -6, 0],
                      scale: 1.12,
                      transition: { duration: 0.5 },
                    }}
                  >
                    <IconComp className={`w-8 h-8 ${cert.iconColor}`} />
                  </motion.div>

                  <div className="flex-1 min-w-0">
                    <h3 className={`text-sm font-semibold leading-snug mb-1 transition-colors ${
                      isDark
                        ? 'text-white group-hover:text-sky-300'
                        : 'text-slate-900 group-hover:text-indigo-700'
                    }`}>
                      {cert.name}
                    </h3>
                    <p className={`text-xs font-semibold ${accent}`}>{cert.issuer}</p>
                  </div>
                </div>

                {/* Footer */}
                <div className={`flex items-center justify-between mt-4 pt-4 border-t ${
                  isDark ? 'border-slate-800' : 'border-slate-100'
                }`}>
                  <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {cert.date}
                  </span>
                  {/* Verified badge with shimmer */}
                  <motion.span
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium border relative overflow-hidden ${
                      isDark
                        ? 'bg-[#050d1a] border-slate-800 text-slate-400'
                        : 'bg-slate-100 border-slate-200 text-slate-600'
                    }`}
                    whileHover={{ scale: 1.06 }}
                  >
                    <span className="relative z-10">Verified ✓</span>
                  </motion.span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
