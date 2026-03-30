'use client';

import { motion } from 'framer-motion';
import { Award, ShieldCheck, Cloud, Terminal, Brain } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const certifications = [
  {
    name: 'Introduction to Generative AI',
    issuer: 'Google',
    date: 'Jun 2025',
    icon: Brain,
    iconColor: 'text-yellow-500',
    badgeColor: { dark: 'bg-yellow-500/10 border-yellow-500/20', light: 'bg-yellow-50 border-yellow-200' },
  },
  {
    name: 'Certified Ethical Hacking (v12)',
    issuer: 'LearnKartS',
    date: 'Jan 2025',
    icon: ShieldCheck,
    iconColor: 'text-emerald-500',
    badgeColor: { dark: 'bg-emerald-500/10 border-emerald-500/20', light: 'bg-emerald-50 border-emerald-200' },
  },
  {
    name: 'IBM Cybersecurity Analyst',
    issuer: 'IBM',
    date: 'May 2024',
    icon: ShieldCheck,
    iconColor: 'text-blue-500',
    badgeColor: { dark: 'bg-blue-500/10 border-blue-500/20', light: 'bg-blue-50 border-blue-200' },
  },
  {
    name: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services',
    date: 'Mar 2024',
    icon: Cloud,
    iconColor: 'text-orange-500',
    badgeColor: { dark: 'bg-orange-500/10 border-orange-500/20', light: 'bg-orange-50 border-orange-200' },
  },
  {
    name: 'Certified Information Systems Security Professional (CISSP)',
    issuer: 'Simplilearn',
    date: 'Nov 2023',
    icon: Award,
    iconColor: 'text-purple-500',
    badgeColor: { dark: 'bg-purple-500/10 border-purple-500/20', light: 'bg-purple-50 border-purple-200' },
  },
  {
    name: 'Certified in Cybersecurity Specialization (CC)',
    issuer: 'ISC2',
    date: 'Nov 2023',
    icon: Terminal,
    iconColor: 'text-cyan-500',
    badgeColor: { dark: 'bg-cyan-500/10 border-cyan-500/20', light: 'bg-cyan-50 border-cyan-200' },
  },
];

export default function Certifications() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="certifications"
      className={`py-28 relative overflow-hidden transition-colors duration-500 ${
        isDark ? 'bg-[#050d1a]' : 'bg-slate-50'
      }`}
    >
      {isDark && (
        <>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
          <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-indigo-600/5 blur-[90px]" />
          <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-sky-500/5 blur-[80px]" />
        </>
      )}
      {!isDark && (
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
      )}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className={`text-sm font-semibold tracking-widest uppercase mb-3 ${
            isDark ? 'text-sky-400' : 'text-indigo-600'
          }`}>
            Certifications
          </p>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Credentials & Badges
          </h2>
          <div className={`w-16 h-1 mx-auto rounded-full ${
            isDark
              ? 'bg-gradient-to-r from-sky-500 to-indigo-500'
              : 'bg-gradient-to-r from-indigo-600 to-violet-600'
          }`} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {certifications.map((cert, index) => {
            const IconComp = cert.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.07, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-40px' }}
                whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25 } }}
                className={`p-5 rounded-2xl border flex flex-col transition-all duration-300 group cursor-default ${
                  isDark
                    ? 'card-dark hover:shadow-[0_8px_30px_rgba(56,189,248,0.12)]'
                    : 'card-light hover:shadow-[0_8px_30px_rgba(79,70,229,0.1)]'
                }`}
              >
                <div className="flex items-start gap-4 mb-auto">
                  {/* Icon badge */}
                  <motion.div
                    className={`p-3 rounded-xl border flex-shrink-0 transition-all duration-300 ${
                      isDark ? cert.badgeColor.dark : cert.badgeColor.light
                    } group-hover:scale-110`}
                    whileHover={{ rotate: [0, -8, 8, -8, 0] }}
                    transition={{ duration: 0.5 }}
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
                    <p className={`text-xs font-medium ${isDark ? 'text-sky-400' : 'text-indigo-600'}`}>
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className={`flex items-center justify-between mt-4 pt-4 border-t ${
                  isDark ? 'border-slate-800' : 'border-slate-100'
                }`}>
                  <span className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    {cert.date}
                  </span>
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${
                    isDark
                      ? 'bg-[#050d1a] border-slate-800 text-slate-400'
                      : 'bg-slate-50 border-slate-200 text-slate-500'
                  }`}>
                    Verified ✓
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
