'use client';

import { motion, useInView, useMotionValue, animate } from 'framer-motion';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';
import { Shield, Cloud, Code, Award } from 'lucide-react';
import { useEffect, useRef } from 'react';

// ── Animated counter ──────────────────────────────────────────
function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const val = useMotionValue(0);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(val, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(v) {
        if (ref.current) ref.current.textContent = Math.round(v) + suffix;
      },
    });
    return () => ctrl.stop();
  }, [inView, to, suffix, val]);

  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { icon: Shield, to: 300, suffix: '+', label: 'Assets Secured' },
  { icon: Cloud,  to: 3,   suffix: '+', label: 'Cloud Platforms' },
  { icon: Code,   to: 10,  suffix: '+', label: 'Security Tools' },
  { icon: Award,  to: 6,   suffix: '+', label: 'Certifications' },
];


export default function About() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // accent helpers
  const accent   = isDark ? 'text-sky-400'   : 'text-indigo-600';
  const strong   = isDark ? 'text-white'      : 'text-slate-900';
  const body     = isDark ? 'text-slate-300'  : 'text-slate-600';
  const divider  = isDark
    ? 'bg-gradient-to-r from-sky-500 to-indigo-500'
    : 'bg-gradient-to-r from-indigo-600 to-violet-600';

  return (
    <section
      id="about"
      className={`py-28 relative overflow-hidden transition-colors duration-500 ${
        isDark ? 'bg-[#050d1a]' : 'bg-slate-50'
      }`}
    >
      {/* Separators */}
      <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent ${
        isDark ? 'via-sky-500/20' : 'via-indigo-200/60'} to-transparent`} />

      {/* Ambient blobs */}
      {isDark && (
        <>
          <motion.div
            className="absolute top-16 right-12 w-80 h-80 rounded-full bg-sky-500/5 blur-[100px] pointer-events-none"
            animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-16 left-8 w-72 h-72 rounded-full bg-indigo-600/5 blur-[90px] pointer-events-none"
            animate={{ scale: [1.1, 1, 1.1] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          />
        </>
      )}
      {!isDark && (
        <motion.div
          className="absolute top-10 right-16 w-72 h-72 rounded-full bg-indigo-100/70 blur-[90px] pointer-events-none"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className={`text-xs font-bold tracking-[0.3em] uppercase mb-3 ${accent}`}>About Me</p>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${strong}`}>Who I Am</h2>
          <motion.div
            className={`h-1 mx-auto rounded-full ${divider}`}
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.94 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <motion.div
                className={`absolute -inset-4 rounded-3xl blur-2xl ${
                  isDark
                    ? 'bg-gradient-to-br from-sky-500/20 to-indigo-500/20'
                    : 'bg-gradient-to-br from-indigo-200/60 to-violet-200/60'
                }`}
                animate={{ opacity: [0.4, 0.75, 0.4], scale: [0.98, 1.02, 0.98] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* Border ring */}
              <div className={`absolute -inset-px rounded-2xl ${
                isDark
                  ? 'bg-gradient-to-br from-sky-500/25 to-indigo-500/25'
                  : 'bg-gradient-to-br from-indigo-300/35 to-violet-300/35'
              }`} />
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring' as const, stiffness: 220, damping: 20 }}
              >
                <Image
                  src="/profile.jpg"
                  alt="Suvaditya Roy"
                  width={340}
                  height={430}
                  className="rounded-2xl object-cover relative z-10 shadow-2xl"
                  priority
                />
              </motion.div>

              {/* Floating role badge */}
              <motion.div
                className={`absolute -bottom-5 -right-5 px-4 py-2.5 rounded-xl border z-20 shadow-xl ${
                  isDark
                    ? 'bg-[#0a1628] border-sky-500/22 text-sky-300 shadow-sky-900/40'
                    : 'bg-white border-indigo-200 text-indigo-700 shadow-indigo-100/80'
                }`}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <p className="text-xs font-bold">Security Engineer</p>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>ITPeopleNetwork</p>
              </motion.div>

              {/* Springer badge */}
              <motion.div
                className={`absolute -top-5 -left-5 px-3 py-2 rounded-xl border z-20 shadow-lg ${
                  isDark
                    ? 'bg-[#0a1628] border-emerald-500/22 text-emerald-300'
                    : 'bg-white border-emerald-200 text-emerald-700'
                }`}
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <p className="text-xs font-bold">Springer Published</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <div className="space-y-6">
            {[0, 1, 2].map((i) => (
              <motion.p
                key={i}
                className={`text-base leading-relaxed ${body}`}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                style={{
                  // apply accent / strong colors via CSS vars so JSX stays clean
                }}
              >
                {/* Re-render with theme-aware spans */}
                {i === 0 && (
                  <>
                    I am a <span className={`font-semibold ${strong}`}>Trainee Security Engineer</span> specializing in Cloud
                    Security at <span className={`font-medium ${accent}`}>IT People Network (Kolkata)</span>, with hands-on
                    experience in <span className={`font-medium ${strong}`}>Wiz (CSPM), CyberArk (PAM/EPM), Qualys (VMDR),
                    Veracode, Proofpoint, and DigiCert</span>. Skilled in identifying cloud misconfigurations and supporting
                    vulnerability remediation across 300+ assets.
                  </>
                )}
                {i === 1 && (
                  <>
                    Experience includes <span className={`font-medium ${accent}`}>CSPM using Wiz</span>, supporting{' '}
                    <span className={`font-medium ${strong}`}>CyberArk PAM</span>, and vulnerability assessment via{' '}
                    <span className={`font-medium ${strong}`}>Qualys VMDR</span>. I develop{' '}
                    <span className={`font-medium ${accent}`}>Python-based automation</span> for log analysis and alert triage,
                    with working knowledge of{' '}
                    <span className={`font-medium ${strong}`}>AWS, Azure, Linux, and network security</span>.
                  </>
                )}
                {i === 2 && (
                  <>
                    <span className={`font-semibold ${accent}`}>Springer-published research author</span> in blockchain security —
                    building expertise in CSPM, IAM, vulnerability management, and security automation for cloud-native environments.
                  </>
                )}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Animated stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ icon: Icon, to, suffix, label }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              whileHover={{
                y: -6, scale: 1.03,
                transition: { type: 'spring' as const, stiffness: 320, damping: 18 },
              }}
              className={`p-5 rounded-2xl border text-center transition-all duration-300 ${
                isDark
                  ? 'card-dark hover:shadow-[0_0_28px_rgba(56,189,248,0.18)]'
                  : 'card-light hover:shadow-[0_8px_32px_rgba(79,70,229,0.12)]'
              }`}
            >
              <motion.div
                whileHover={{ rotate: [0, -12, 12, 0], scale: 1.15 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center mb-2"
              >
                <Icon className={`w-6 h-6 ${accent}`} />
              </motion.div>
              <p className={`text-2xl font-bold tabular-nums ${strong}`}>
                <Counter to={to} suffix={suffix} />
              </p>
              <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
