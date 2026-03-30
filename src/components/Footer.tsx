'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';

const socials = [
  { href: 'https://github.com/suvadityaroy', icon: FaGithub, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/suvadityaroy/', icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'mailto:suvadityaroy.dev@gmail.com', icon: Mail, label: 'Email' },
];

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <footer className={`border-t py-12 transition-colors duration-500 ${
      isDark
        ? 'bg-[#050d1a] border-sky-500/10'
        : 'bg-slate-50 border-slate-200'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className={`text-xl font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              <span className={isDark ? 'text-sky-400' : 'text-indigo-600'}>Suvaditya</span>{' '}
              <span className={isDark ? 'text-white' : 'text-slate-900'}>Roy</span>
            </h3>
            <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Security Engineer · Cloud Security Specialist
            </p>
          </motion.div>

          <motion.div
            className="flex gap-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.label !== 'Email' ? '_blank' : undefined}
                rel={s.label !== 'Email' ? 'noopener noreferrer' : undefined}
                aria-label={s.label}
                className={`p-2.5 rounded-xl border transition-all duration-300 ${
                  isDark
                    ? 'bg-[#0a1628] border-slate-800 text-slate-400 hover:text-sky-300 hover:border-sky-500/40 hover:bg-sky-500/8'
                    : 'bg-white border-slate-200 text-slate-500 hover:text-indigo-700 hover:border-indigo-300 hover:shadow-sm'
                }`}
                whileHover={{ y: -3, scale: 1.08 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.15 + i * 0.06 }}
                viewport={{ once: true }}
              >
                <s.icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className={`mt-8 pt-6 border-t text-center ${
            isDark ? 'border-slate-800/60' : 'border-slate-200'
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
            &copy; {new Date().getFullYear()} Suvaditya Roy. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
