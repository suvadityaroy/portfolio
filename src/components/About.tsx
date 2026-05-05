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
      className={`py-28 relative overflow-hidden transition-colors duration-500 bg-transparent`}
    >
      {/* Separators */}
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
              <div
                className={`absolute -inset-4 rounded-3xl blur-2xl animate-scale-pulse ${
                  isDark
                    ? 'bg-gradient-to-br from-sky-500/20 to-indigo-500/20'
                    : 'bg-gradient-to-br from-indigo-200/60 to-violet-200/60'
                }`}
                style={{ '--dur': '5s', '--scale-start': 0.98, '--scale-mid': 1.02, '--op-start': 0.4, '--op-mid': 0.75 } as React.CSSProperties}
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
                whileHover={{ rotateX: -10, rotateY: 10, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30, ease: 'easeOut' }}
                style={{
                  transformStyle: 'preserve-3d',
                  '--dur': '3.5s',
                  '--dy': '-6px'
                } as React.CSSProperties}
                className={`absolute -bottom-5 -right-5 px-4 py-2.5 rounded-xl border z-20 shadow-xl animate-float-y ${
                  isDark
                    ? 'bg-[#0a1628] border-sky-500/22 text-sky-300 shadow-sky-900/40'
                    : 'bg-white border-indigo-200 text-indigo-700 shadow-indigo-100/80'
                }`}
              >
                <p className="text-xs font-bold">Security Engineer</p>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>ITPeopleNetwork</p>
              </motion.div>

              {/* Springer badge */}
              <div
                className={`absolute -top-5 -left-5 px-3 py-2 rounded-xl border z-20 shadow-lg animate-float-y ${
                  isDark
                    ? 'bg-[#0a1628] border-emerald-500/22 text-emerald-300'
                    : 'bg-white border-emerald-200 text-emerald-700'
                }`}
                style={{ '--dur': '4s', '--delay': '1s', '--dy': '6px' } as React.CSSProperties}
              >
                <p className="text-xs font-bold">Springer Published</p>
              </div>
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
                    Security Engineer with hands-on experience securing enterprise cloud environments across AWS and Azure.
                    Experienced in IAM controls, vulnerability management, cloud posture management, SIEM monitoring, and security operations.
                  </>
                )}
                {i === 1 && (
                  <>
                    Worked with tools such as <span className={`font-medium ${accent}`}>Wiz</span>, <span className={`font-medium ${accent}`}>CyberArk</span>,
                    <span className={`font-medium ${accent}`}> Qualys</span>, and <span className={`font-medium ${accent}`}>Splunk</span> to support access governance,
                    threat visibility, and risk reduction.
                  </>
                )}
                {i === 2 && (
                  <>
                    Currently focused on Cloud Security Engineering opportunities involving cloud risk management,
                    identity security, automation, and scalable security controls.
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
