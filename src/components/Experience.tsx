'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useRef } from 'react';

const experiences = [
  {
    company: 'ITPeopleNetwork',
    role: 'Trainee Security Engineer',
    period: 'Feb 2026 – Present',
    duration: '2 mos',
    location: 'Kolkata, West Bengal · On-site',
    current: true,
    description: [
      'Contributed to enterprise security operations across Wiz (CSPM), CyberArk (PAM/EPM), Qualys (VMDR), Veracode (SAST), Proofpoint, and DigiCert in a production environment.',
      'Monitored cloud infrastructure using Wiz, identifying misconfigurations and compliance gaps aligned with cloud security best practices.',
      'Conducted vulnerability assessment and triage using Qualys VMDR across 300+ assets, prioritizing critical risks.',
      'Built Python automation for log analysis, vulnerability tracking, and alert triage, improving SOC efficiency in Splunk workflows.',
    ],
  },
  {
    company: 'University of Engineering & Management (UEM)',
    role: 'Software & Systems Engineering Intern',
    period: 'Jun 2024 – Jan 2026',
    duration: '1 yr 8 mos',
    location: 'West Bengal · Hybrid',
    current: false,
    description: [
      'Developed backend components and automation tools for network scanning and monitoring workflows using Python and Golang.',
      'Designed and implemented RESTful internal APIs for orchestration, task scheduling, and data ingestion pipelines.',
      'Optimized system performance through efficient I/O handling, caching, and structured logging.',
      'Built backend services for real-time diagnostics, observability, and system health tracking.',
      'Collaborated on design reviews, documentation, and performance benchmarking of backend systems.',
    ],
  },
  {
    company: 'CFSS Cyber & Forensics Security Solutions',
    role: 'Cyber Security Intern',
    period: 'Dec 2023 – May 2024',
    duration: '6 mos',
    location: 'India · Remote',
    current: false,
    description: [
      'Conducted vulnerability assessments and configuration audits on Linux-based systems.',
      'Developed Python automation scripts for security testing, log analysis, and credential checks.',
      'Performed network traffic analysis using TCP/IP tools for incident investigation.',
      'Documented findings and supported implementation of security best practices.',
    ],
  },
  {
    company: 'PwC Switzerland',
    role: 'Cyber Security Analyst Intern',
    period: 'Oct 2023 – Nov 2023',
    duration: '2 mos',
    location: 'India · Remote',
    current: false,
    description: [
      'Assisted in application security reviews analyzing authentication flows and access control mechanisms.',
      'Executed vulnerability assessments and supported threat modeling for web applications.',
      'Analyzed datasets to identify anomalies and contributed to risk assessment reports.',
      'Documented issues and recommended mitigation strategies.',
    ],
  },
];

export default function Experience() {
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
      id="experience"
      ref={sectionRef}
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
          <p className={`text-xs font-bold tracking-[0.3em] uppercase mb-3 ${accent}`}>Experience</p>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${strong}`}>Professional Journey</h2>
          <motion.div
            className={`h-1 mx-auto rounded-full ${divider}`}
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline wrapper — needs relative for the animated line */}
          <div className="relative pl-14">

            {/* Animated timeline line that draws down */}
            <motion.div
              className={`absolute left-5 top-3 w-0.5 rounded-full origin-top ${
                isDark
                  ? 'bg-gradient-to-b from-sky-500/70 via-indigo-500/40 to-transparent'
                  : 'bg-gradient-to-b from-indigo-400/60 via-violet-300/30 to-transparent'
              }`}
              initial={{ scaleY: 0, height: '100%' }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              viewport={{ once: true }}
              style={{ height: '95%' }}
            />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true, margin: '-50px' }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-9 top-6 flex items-center justify-center">
                    <div
                      className={`w-4 h-4 rounded-full border-2 z-10 ${
                        exp.current
                          ? isDark
                            ? 'bg-sky-400 border-sky-300 shadow-[0_0_14px_rgba(56,189,248,0.7)] animate-pulse-custom'
                            : 'bg-indigo-600 border-indigo-400 shadow-[0_0_12px_rgba(79,70,229,0.5)] animate-pulse-custom'
                          : isDark
                            ? 'bg-[#030712] border-sky-600/60'
                            : 'bg-white border-indigo-300'
                      }`}
                      style={exp.current ? { '--dur': '2s', '--op-start': 0.7, '--op-mid': 1 } as React.CSSProperties : undefined}
                    />
                    {/* Ping ring for current role */}
                    {exp.current && (
                      <div
                        className={`absolute w-4 h-4 rounded-full border-2 animate-ping ${
                          isDark ? 'border-sky-400' : 'border-indigo-500'
                        }`}
                        style={{ animationDuration: '1.8s' }}
                      />
                    )}
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{
                      y: -4,
                      transition: { type: 'spring' as const, stiffness: 320, damping: 20 },
                    }}
                    className={`p-6 md:p-7 rounded-2xl border transition-all duration-300 group ${
                      isDark
                        ? 'card-dark hover:shadow-[0_0_35px_rgba(56,189,248,0.12)]'
                        : 'card-light hover:shadow-[0_10px_40px_rgba(79,70,229,0.1)]'
                    }`}
                  >
                    {/* Top row */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className={`text-lg font-bold ${strong}`}>{exp.role}</h3>
                          {exp.current && (
                            <span
                              className={`px-2 py-0.5 rounded-full text-xs font-semibold border animate-pulse-custom ${
                                isDark
                                  ? 'bg-sky-500/12 text-sky-300 border-sky-500/25'
                                  : 'bg-green-100 text-green-700 border-green-200'
                              }`}
                              style={{ '--dur': '2.5s', '--op-start': 0.7, '--op-mid': 1 } as React.CSSProperties}
                            >
                              Current
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-1.5 mb-1">
                          <Briefcase className={`w-3.5 h-3.5 ${accent}`} />
                          <p className={`text-sm font-semibold ${accent}`}>{exp.company}</p>
                        </div>
                        <div className={`flex items-center gap-1 text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </div>
                      </div>

                      {/* Period badge */}
                      <div className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border flex-shrink-0 ${
                        isDark
                          ? 'bg-[#050d1a] border-slate-800 text-slate-400'
                          : 'bg-slate-50 border-slate-200 text-slate-500'
                      }`}>
                        <Calendar className="w-3 h-3" />
                        <span>{exp.period}</span>
                        <span className={`ml-1 px-1.5 py-0.5 rounded text-xs ${
                          isDark ? 'bg-slate-800 text-slate-500' : 'bg-slate-200 text-slate-500'
                        }`}>{exp.duration}</span>
                      </div>
                    </div>

                    {/* Bullet points */}
                    <ul className="space-y-2.5">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-2.5 text-sm leading-relaxed ${
                            isDark ? 'text-slate-300' : 'text-slate-600'
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                              isDark ? 'bg-sky-500' : 'bg-indigo-400'
                            }`}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
