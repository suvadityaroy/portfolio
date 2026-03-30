'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';
import { Shield, Cloud, Code, Award } from 'lucide-react';

const stats = [
  { icon: Shield, value: '300+', label: 'Assets Secured' },
  { icon: Cloud, value: '3+', label: 'Cloud Platforms' },
  { icon: Code, value: '10+', label: 'Security Tools' },
  { icon: Award, value: '6+', label: 'Certifications' },
];

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="about"
      className={`py-28 relative overflow-hidden transition-colors duration-500 ${
        isDark ? 'bg-[#050d1a]' : 'bg-slate-50'
      }`}
    >
      {/* Background accents */}
      {isDark ? (
        <>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-sky-500/5 blur-[80px]" />
          <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-indigo-500/5 blur-[100px]" />
        </>
      ) : (
        <>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent" />
          <div className="absolute top-10 right-20 w-64 h-64 rounded-full bg-indigo-100/60 blur-[80px]" />
        </>
      )}

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
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
            About Me
          </p>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Who I Am
          </h2>
          <div className={`w-16 h-1 mx-auto rounded-full ${
            isDark
              ? 'bg-gradient-to-r from-sky-500 to-indigo-500'
              : 'bg-gradient-to-r from-indigo-600 to-violet-600'
          }`} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Decorative ring */}
              <motion.div
                className={`absolute -inset-3 rounded-3xl ${
                  isDark
                    ? 'bg-gradient-to-br from-sky-500/20 to-indigo-500/20'
                    : 'bg-gradient-to-br from-indigo-200/60 to-violet-200/60'
                } blur-xl`}
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className={`absolute -inset-px rounded-2xl ${
                isDark
                  ? 'bg-gradient-to-br from-sky-500/30 to-indigo-500/30'
                  : 'bg-gradient-to-br from-indigo-300/40 to-violet-300/40'
              }`} />
              <Image
                src="/profile.jpg"
                alt="Suvaditya Roy"
                width={340}
                height={430}
                className="rounded-2xl object-cover relative z-10 shadow-2xl"
                priority
              />
              {/* Floating badge */}
              <motion.div
                className={`absolute -bottom-4 -right-4 px-4 py-2.5 rounded-xl border z-20 shadow-lg ${
                  isDark
                    ? 'bg-[#0a1628] border-sky-500/25 text-sky-300'
                    : 'bg-white border-indigo-200 text-indigo-700 shadow-indigo-100'
                }`}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <p className="text-xs font-semibold">Security Engineer</p>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>ITPeopleNetwork</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              <>
                I am a <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Trainee Security Engineer</span> specializing in Cloud Security at{' '}
                <span className={`font-medium ${isDark ? 'text-sky-400' : 'text-indigo-600'}`}>IT People Network (Kolkata)</span>, with hands-on experience in{' '}
                <span className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>Wiz (CSPM), CyberArk (PAM/EPM), Qualys (VMDR), Veracode, Proofpoint, and DigiCert</span>. Skilled in identifying cloud misconfigurations and supporting vulnerability remediation across 300+ assets.
              </>,
              <>
                Experience includes <span className={`font-medium ${isDark ? 'text-sky-400' : 'text-indigo-600'}`}>CSPM using Wiz</span>, supporting{' '}
                <span className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>CyberArk PAM</span>, and vulnerability assessment using{' '}
                <span className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>Qualys VMDR</span>. I develop{' '}
                <span className={`font-medium ${isDark ? 'text-sky-400' : 'text-indigo-600'}`}>Python-based automation</span> for log analysis and alert triage, with working knowledge of{' '}
                <span className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>AWS, Azure, Linux, and network security</span>.
              </>,
              <>
                <span className={`font-semibold ${isDark ? 'text-sky-400' : 'text-indigo-600'}`}>Springer-published research author</span> in blockchain security, building expertise in CSPM, IAM, vulnerability management, and security automation for cloud-native environments.
              </>,
            ].map((text, i) => (
              <motion.p
                key={i}
                className={`text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                viewport={{ once: true }}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map(({ icon: Icon, value, label }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`p-5 rounded-2xl border text-center transition-all duration-300 ${
                isDark
                  ? 'card-dark hover:shadow-[0_0_25px_rgba(56,189,248,0.15)]'
                  : 'card-light hover:shadow-[0_8px_30px_rgba(79,70,229,0.1)]'
              }`}
            >
              <Icon className={`w-6 h-6 mx-auto mb-2 ${isDark ? 'text-sky-400' : 'text-indigo-500'}`} />
              <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{value}</p>
              <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
