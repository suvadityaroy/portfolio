'use client';

import { useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

const projects = [
  {
    title: 'Cloud Intrusion Detection System',
    description: 'Python-based IDS for cloud environments leveraging ML algorithms to identify anomalous behavior and security threats in real-time across AWS infrastructure.',
    tags: ['Python', 'AWS', 'Machine Learning', 'IDS'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/suvadityaroy/Cloud-Intrusion-Detection-System',
    demo: '',
    tagColor: { dark: 'bg-sky-500/15 text-sky-300 border-sky-500/25', light: 'bg-sky-100 text-sky-700 border-sky-200' },
  },
  {
    title: 'AWS IAM Policy Audit Tool',
    description: 'Automated Python tool for auditing AWS IAM policies, identifying overly permissive permissions, privilege escalation risks, and compliance violations.',
    tags: ['Python', 'AWS', 'IAM', 'Security Automation'],
    image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/suvadityaroy/AWS-IAM-Policy-Audit',
    demo: '',
    tagColor: { dark: 'bg-orange-500/15 text-orange-300 border-orange-500/25', light: 'bg-orange-100 text-orange-700 border-orange-200' },
  },
  {
    title: 'AWS Security Scanner',
    description: 'Comprehensive security assessment tool for AWS environments scanning for misconfigurations, exposed resources, and compliance violations with auto remediation.',
    tags: ['Python', 'AWS', 'CSPM', 'Vulnerability Assessment'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/suvadityaroy/AWS-Security-Scanner',
    demo: '',
    tagColor: { dark: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/25', light: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
  },
  {
    title: 'GoScan — Advanced Network Scanner',
    description: 'High-performance network scanner in Go leveraging Nmap for vulnerability assessment, port scanning, and asset discovery with concurrent execution.',
    tags: ['Go', 'Nmap', 'Network Security', 'VAPT'],
    image: 'https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/suvadityaroy/GoScan-Advance-Network-Scanner-Using-Nmap',
    demo: '',
    tagColor: { dark: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/25', light: 'bg-cyan-100 text-cyan-700 border-cyan-200' },
  },
  {
    title: 'Blockchain Voting System',
    description: 'Decentralized voting platform using blockchain for tamper-proof elections with end-to-end encryption, voter anonymity, and immutable audit trails.',
    tags: ['Blockchain', 'Smart Contracts', 'Cryptography', 'Web3'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/suvadityaroy/Online-Voting-System-Using-Blockchain-Technology',
    demo: '',
    tagColor: { dark: 'bg-violet-500/15 text-violet-300 border-violet-500/25', light: 'bg-violet-100 text-violet-700 border-violet-200' },
  },
  {
    title: 'Custom Network Firewall',
    description: 'Python-based stateful packet inspection firewall with deep packet analysis, custom rule-based filtering, and real-time threat blocking.',
    tags: ['Python', 'Network Security', 'Firewall', 'Packet Analysis'],
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/suvadityaroy/Firewall',
    demo: '',
    tagColor: { dark: 'bg-red-500/15 text-red-300 border-red-500/25', light: 'bg-red-100 text-red-700 border-red-200' },
  },
  {
    title: 'Fake News Detector',
    description: 'ML-based system for detecting fake news using NLP, behavioral analysis, and source credibility scoring with 95%+ accuracy.',
    tags: ['AI', 'NLP', 'Machine Learning', 'Python'],
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/suvadityaroy/Fake-News-Detector',
    demo: 'https://fake-news-detector.up.railway.app/static/index.html',
    tagColor: { dark: 'bg-pink-500/15 text-pink-300 border-pink-500/25', light: 'bg-pink-100 text-pink-700 border-pink-200' },
  },
];

// Floating particle dots for dark bg
const floatingParticles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 1,
  duration: Math.random() * 8 + 6,
  delay: Math.random() * 5,
}));

// 3D tilt card wrapper
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const springCfg = { stiffness: 130, damping: 16, mass: 0.7 };

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  const rotateXSpring = useSpring(rotateX, springCfg);
  const rotateYSpring = useSpring(rotateY, springCfg);
  const scale = useSpring(1, { stiffness: 200, damping: 20 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateX.set((0.5 - py) * 14);
    rotateY.set((px - 0.5) * 14);
    glowX.set(px * 100);
    glowY.set(py * 100);
  }, [rotateX, rotateY, glowX, glowY]);

  const handleMouseEnter = useCallback(() => { scale.set(1.02); }, [scale]);
  const handleMouseLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  }, [rotateX, rotateY, scale]);

  const glowBg = useTransform(
    [glowX, glowY],
    ([x, y]) =>
      `radial-gradient(220px circle at ${x}% ${y}%, rgba(56,189,248,0.08), transparent 70%)`
  );

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
        scale,
        transformStyle: 'preserve-3d',
        transformPerspective: 800,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {/* Dynamic glow layer */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none z-0"
        style={{ background: glowBg }}
      />
      {children}
    </motion.div>
  );
}

export default function Projects() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="projects"
      className={`py-28 relative overflow-hidden transition-colors duration-500 ${
        isDark ? 'bg-[#050d1a]' : 'bg-slate-50'
      }`}
    >
      {/* Top separator */}
      <div className={`absolute top-0 left-0 w-full h-px ${
        isDark
          ? 'bg-gradient-to-r from-transparent via-sky-500/25 to-transparent'
          : 'bg-gradient-to-r from-transparent via-indigo-200 to-transparent'
      }`} />

      {/* Dark mode: floating ambient orbs */}
      {isDark && (
        <>
          <motion.div
            className="absolute top-16 left-8 w-[500px] h-[500px] rounded-full bg-sky-500/5 blur-[120px] pointer-events-none"
            animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-16 right-8 w-[400px] h-[400px] rounded-full bg-indigo-600/6 blur-[100px] pointer-events-none"
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.3, 0.5] }}
            transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          />
          {/* Floating particles */}
          {floatingParticles.map(p => (
            <motion.div
              key={p.id}
              className="absolute rounded-full bg-sky-400/25 pointer-events-none"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: p.size,
                height: p.size,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.sin(p.id) * 12, 0],
                opacity: [0.15, 0.55, 0.15],
                scale: [1, 1.6, 1],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: 'easeInOut',
              }}
            />
          ))}
        </>
      )}

      {/* Light mode: subtle blobs */}
      {!isDark && (
        <>
          <motion.div
            className="absolute top-20 right-20 w-80 h-80 rounded-full bg-indigo-100/70 blur-[90px] pointer-events-none"
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-violet-100/60 blur-[80px] pointer-events-none"
            animate={{ scale: [1.1, 1, 1.1] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
        </>
      )}

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.2em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.3em' }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`text-xs font-bold tracking-[0.3em] uppercase mb-4 ${
              isDark ? 'text-sky-400' : 'text-indigo-600'
            }`}
          >
            Projects
          </motion.p>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Featured Work
          </h2>
          <motion.div
            className={`h-1 mx-auto rounded-full ${
              isDark
                ? 'bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500'
                : 'bg-gradient-to-r from-indigo-600 via-violet-500 to-purple-600'
            }`}
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          />
          <p className={`mt-5 max-w-xl mx-auto text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Cloud security tools, automation platforms, and research projects
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 44, scale: 0.93 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                type: 'spring' as const,
                stiffness: 220,
                damping: 22,
                delay: index * 0.08,
              }}
              viewport={{ once: true, margin: '-50px' }}
              className="relative"
            >
              <TiltCard
                className={`relative flex flex-col rounded-2xl border overflow-hidden h-full transition-all duration-300 cursor-default ${
                  isDark
                    ? 'bg-[#0a1628] border-sky-500/12 hover:border-sky-400/35 shadow-lg shadow-black/20 hover:shadow-[0_8px_50px_rgba(56,189,248,0.18)]'
                    : 'bg-white border-slate-200 hover:border-indigo-300/70 shadow-sm hover:shadow-[0_12px_50px_rgba(79,70,229,0.13)]'
                }`}
              >
                {/* ── Image area ── */}
                <div className="relative h-52 overflow-hidden flex-shrink-0">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    style={{ opacity: 0.9 }}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                  />
                  {/* Subtle bottom fade only — no whitish overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${
                    isDark
                      ? 'from-[#0a1628]/70 via-[#0a1628]/10 to-transparent'
                      : 'from-black/25 via-black/5 to-transparent'
                  }`} />

                  {/* Featured badge */}
                  <motion.span
                    initial={{ opacity: 0, y: -8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 + 0.3 }}
                    viewport={{ once: true }}
                    className={`absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-semibold backdrop-blur-md border ${
                      isDark
                        ? 'bg-black/40 border-white/10 text-white'
                        : 'bg-white/70 border-slate-200/80 text-slate-700'
                    }`}
                  >
                    Featured
                  </motion.span>

                  {/* GitHub icon top-right — visible on hover */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.08 + 0.35 }}
                    viewport={{ once: true }}
                    className="absolute top-3 right-3"
                  >
                    <Link
                      href={project.github}
                      target="_blank"
                      className={`p-2 rounded-lg backdrop-blur-md border transition-all duration-200 flex items-center ${
                        isDark
                          ? 'bg-black/40 border-white/10 text-white hover:bg-sky-500/30 hover:border-sky-400/40'
                          : 'bg-white/70 border-slate-200/80 text-slate-700 hover:bg-indigo-50 hover:border-indigo-300'
                      }`}
                      onClick={e => e.stopPropagation()}
                    >
                      <FaGithub className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </div>

                {/* ── Content ── */}
                <div className="p-5 flex flex-col flex-1 relative z-10">
                  <h3 className={`text-base font-bold mb-2 leading-snug ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-4 flex-1 ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map(tag => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.06, y: -1 }}
                        className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                          isDark ? project.tagColor.dark : project.tagColor.light
                        }`}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Footer links */}
                  <div className={`flex items-center gap-3 pt-3.5 border-t ${
                    isDark ? 'border-slate-800' : 'border-slate-100'
                  }`}>
                    <Link
                      href={project.github}
                      target="_blank"
                      className={`flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 group/lnk ${
                        isDark
                          ? 'text-slate-400 hover:text-sky-300'
                          : 'text-slate-500 hover:text-indigo-700'
                      }`}
                    >
                      <FaGithub className="w-3.5 h-3.5 group-hover/lnk:scale-110 transition-transform" />
                      View Code
                    </Link>
                    {project.demo && (
                      <Link
                        href={project.demo}
                        target="_blank"
                        className={`flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 group/lnk ${
                          isDark
                            ? 'text-slate-400 hover:text-emerald-300'
                            : 'text-slate-500 hover:text-emerald-700'
                        }`}
                      >
                        <ExternalLink className="w-3 h-3 group-hover/lnk:-translate-y-0.5 group-hover/lnk:translate-x-0.5 transition-transform" />
                        Live Demo
                      </Link>
                    )}
                    <div className="ml-auto flex items-center gap-1">
                      {[0, 1, 2].map(i => (
                        <motion.div
                          key={i}
                          className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-sky-500/40' : 'bg-indigo-400/40'}`}
                          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                          transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.25, ease: 'easeInOut' }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
