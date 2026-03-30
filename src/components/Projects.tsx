'use client';

import { motion } from 'framer-motion';
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
    accent: { dark: 'from-sky-500/20 to-blue-600/10', light: 'from-sky-100 to-blue-50' },
  },
  {
    title: 'AWS IAM Policy Audit Tool',
    description: 'Automated Python tool for auditing AWS IAM policies, identifying overly permissive permissions, privilege escalation risks, and compliance violations.',
    tags: ['Python', 'AWS', 'IAM', 'Security Automation'],
    image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/suvadityaroy/AWS-IAM-Policy-Audit',
    demo: '',
    accent: { dark: 'from-orange-500/15 to-amber-600/10', light: 'from-orange-50 to-amber-50' },
  },
  {
    title: 'AWS Security Scanner',
    description: 'Comprehensive security assessment tool for AWS environments scanning for misconfigurations, exposed resources, and compliance violations with auto remediation.',
    tags: ['Python', 'AWS', 'CSPM', 'Vulnerability Assessment'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/suvadityaroy/AWS-Security-Scanner',
    demo: '',
    accent: { dark: 'from-emerald-500/15 to-teal-600/10', light: 'from-emerald-50 to-teal-50' },
  },
  {
    title: 'GoScan — Advanced Network Scanner',
    description: 'High-performance network scanner in Go leveraging Nmap for vulnerability assessment, port scanning, and asset discovery with concurrent execution.',
    tags: ['Go', 'Nmap', 'Network Security', 'VAPT'],
    image: 'https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/suvadityaroy/GoScan-Advance-Network-Scanner-Using-Nmap',
    demo: '',
    accent: { dark: 'from-cyan-500/15 to-sky-600/10', light: 'from-cyan-50 to-sky-50' },
  },
  {
    title: 'Blockchain Voting System',
    description: 'Decentralized voting platform using blockchain for tamper-proof elections with end-to-end encryption, voter anonymity, and immutable audit trails.',
    tags: ['Blockchain', 'Smart Contracts', 'Cryptography', 'Web3'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/suvadityaroy/Online-Voting-System-Using-Blockchain-Technology',
    demo: '',
    accent: { dark: 'from-violet-500/15 to-purple-600/10', light: 'from-violet-50 to-purple-50' },
  },
  {
    title: 'Custom Network Firewall',
    description: 'Python-based stateful packet inspection firewall with deep packet analysis, custom rule-based filtering, and real-time threat blocking.',
    tags: ['Python', 'Network Security', 'Firewall', 'Packet Analysis'],
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/suvadityaroy/Firewall',
    demo: '',
    accent: { dark: 'from-red-500/15 to-rose-600/10', light: 'from-red-50 to-rose-50' },
  },
  {
    title: 'Fake News Detector',
    description: 'ML-based system for detecting fake news using NLP, behavioral analysis, and source credibility scoring with 95%+ accuracy.',
    tags: ['AI', 'NLP', 'Machine Learning', 'Python'],
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/suvadityaroy/Fake-News-Detector',
    demo: 'https://fake-news-detector.up.railway.app/static/index.html',
    accent: { dark: 'from-pink-500/15 to-fuchsia-600/10', light: 'from-pink-50 to-fuchsia-50' },
  },
];

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
      {isDark && (
        <>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
          <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-sky-500/5 blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-indigo-600/5 blur-[80px]" />
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
            Projects
          </p>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Featured Work
          </h2>
          <div className={`w-16 h-1 mx-auto rounded-full ${
            isDark
              ? 'bg-gradient-to-r from-sky-500 to-indigo-500'
              : 'bg-gradient-to-r from-indigo-600 to-violet-600'
          }`} />
          <p className={`mt-5 max-w-xl mx-auto text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Cloud security tools, automation platforms, and research projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.55, delay: index * 0.07, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className={`group flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 ${
                isDark
                  ? 'card-dark hover:shadow-[0_8px_40px_rgba(56,189,248,0.15)]'
                  : 'card-light hover:shadow-[0_12px_40px_rgba(79,70,229,0.12)]'
              }`}
            >
              {/* Image */}
              <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${
                isDark ? project.accent.dark : project.accent.light
              }`}>
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.5 }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${
                  isDark
                    ? 'from-[#0a1628] via-[#0a1628]/40 to-transparent'
                    : 'from-white/80 via-white/20 to-transparent'
                }`} />
                <span className={`absolute top-3 right-3 px-2.5 py-1 rounded-lg text-xs font-semibold ${
                  isDark
                    ? 'bg-sky-500/20 border border-sky-500/30 text-sky-300 backdrop-blur-sm'
                    : 'bg-indigo-600 text-white'
                }`}>
                  Featured
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className={`text-base font-bold mb-2 transition-colors ${
                  isDark
                    ? 'text-white group-hover:text-sky-300'
                    : 'text-slate-900 group-hover:text-indigo-700'
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
                    <span
                      key={tag}
                      className={`px-2.5 py-1 rounded-md text-xs font-medium border ${
                        isDark
                          ? 'bg-[#050d1a] border-slate-800 text-slate-300'
                          : 'bg-slate-100 border-slate-200 text-slate-600'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className={`flex items-center gap-4 pt-4 border-t ${
                  isDark ? 'border-slate-800' : 'border-slate-100'
                }`}>
                  <Link
                    href={project.github}
                    target="_blank"
                    className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                      isDark
                        ? 'text-slate-400 hover:text-sky-300'
                        : 'text-slate-500 hover:text-indigo-700'
                    }`}
                  >
                    <FaGithub className="w-4 h-4" />
                    Code
                  </Link>
                  {project.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                        isDark
                          ? 'text-slate-400 hover:text-sky-300'
                          : 'text-slate-500 hover:text-indigo-700'
                      }`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </Link>
                  )}
                  <Link
                    href={project.github}
                    target="_blank"
                    className={`ml-auto flex items-center gap-1 text-xs font-medium transition-all ${
                      isDark
                        ? 'text-sky-400 hover:text-sky-300'
                        : 'text-indigo-600 hover:text-indigo-800'
                    }`}
                  >
                    View Project
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
