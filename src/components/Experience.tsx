'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import SectionBackground from './SectionBackground';

const experiences = [
  {
    company: 'ITPeopleNetwork',
    role: 'Trainee Security Engineer',
    period: 'Feb 2026 – Present · 2 mos',
    location: 'Kolkata, West Bengal, India · On-site',
    description: [
      'Contributed to enterprise security operations across Wiz (CSPM), CyberArk (PAM/EPM), Qualys (VMDR), Veracode (SAST), Proofpoint, and DigiCert in a production environment.',
      'Monitored cloud infrastructure using Wiz, identifying misconfigurations and compliance gaps, and enabling remediation aligned with cloud security best practices.',
      'Supported CyberArk PAM & EPM operations, assisting in privileged access management and enforcing least-privilege controls across 20+ endpoints.',
      'Conducted vulnerability assessment and triage using Qualys VMDR across 300+ assets, prioritizing critical risks and coordinating remediation with internal teams.',
      'Managed certificate lifecycle operations using DigiCert, including issuance, renewal, and validation of 100+ enterprise certificates.',
      'Built Python-based automation for log analysis, vulnerability tracking, and alert triage, improving SOC efficiency and reducing manual workload in Splunk workflows.'
    ]
  },
  {
    company: 'University of Engineering & Management (UEM)',
    role: 'Software & Systems Engineering Intern',
    period: 'Jun 2024 – Jan 2026 · 1 yr 8 mos',
    location: 'West Bengal, India · Hybrid',
    description: [
      'Developed backend components and automation tools for network scanning and monitoring workflows using Python and Golang, improving reliability across distributed environments.',
      'Designed and implemented RESTful internal APIs for orchestration, task scheduling, and data ingestion pipelines.',
      'Optimized system performance through efficient I/O handling, caching mechanisms, and structured logging, reducing re-scan latency and improving throughput.',
      'Built backend services to support real-time diagnostics, observability, and system health tracking.',
      'Collaborated with senior engineers on design reviews, documentation, and performance benchmarking of backend systems.'
    ]
  },
  {
    company: 'CFSS Cyber & Forensics Security Solutions',
    role: 'Cyber Security Intern',
    period: 'Dec 2023 – May 2024 · 6 mos',
    location: 'India · Remote',
    description: [
      'Conducted vulnerability assessments and configuration audits on Linux-based systems to identify security gaps and misconfigurations.',
      'Developed Python automation scripts to streamline security testing, log analysis, and credential checks.',
      'Performed network traffic analysis using TCP/IP tools to assist in incident investigation and system hardening.',
      'Documented findings and supported implementation of security best practices to reduce risk exposure.'
    ]
  },
  {
    company: 'PwC Switzerland',
    role: 'Cyber Security Analyst Intern',
    period: 'Oct 2023 – Nov 2023 · 2 mos',
    location: 'India · Remote',
    description: [
      'Assisted in application security reviews by analyzing authentication flows, access control mechanisms, and secure data-handling practices.',
      'Executed vulnerability assessments and supported threat modeling for web applications.',
      'Analyzed datasets to identify anomalies and contributed to risk assessment reports.',
      'Supported security review processes by documenting issues and recommending mitigation strategies.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-dark-850 border border-dark-800 p-8 rounded-xl hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-bold text-white mb-1">
                      {exp.role}
                    </h3>
                    <h4 className="text-lg text-primary-400 font-medium mb-2">{exp.company}</h4>
                    {exp.location && (
                      <p className="text-sm text-gray-500">{exp.location}</p>
                    )}
                  </div>
                  <span className="text-sm text-gray-400 bg-dark-900 border border-dark-700 px-4 py-2 rounded-lg mt-3 md:mt-0 w-fit">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-3 mt-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
      
      {/* Twinkling stars */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute rounded-full bg-white"
          style={{
            width: `${1 + Math.random() * 2}px`,
            height: `${1 + Math.random() * 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: '0 0 4px rgba(255, 255, 255, 0.8)',
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 1.5 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
      
      {/* Shooting stars */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`shooting-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent"
          style={{
            width: '100px',
            top: `${20 + i * 25}%`,
            left: '-100px',
          }}
          animate={{
            x: ['0vw', '110vw'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 5 + 3,
            ease: "easeOut",
          }}
        />
      ))}
      
      {/* Star clusters */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`cluster-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          {[...Array(4)].map((_, j) => (
            <motion.div
              key={j}
              className="absolute w-1 h-1 rounded-full bg-purple-400/60"
              style={{
                left: `${j * 5}px`,
                top: `${Math.sin(j) * 5}px`,
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                delay: j * 0.2,
              }}
            />
          ))}
        </motion.div>
      ))}
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 border-l-2 border-gray-800 last:pb-0"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
              <motion.div 
                className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-bold text-white flex items-center">
                    <Briefcase className="w-5 h-5 mr-2 text-blue-400" />
                    {exp.role}
                  </h3>
                  <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                    {exp.period}
                  </span>
                </div>
                <h4 className="text-lg text-blue-400 mb-2">{exp.company}</h4>
                {exp.location && (
                  <p className="text-sm text-gray-500 mb-3">{exp.location}</p>
                )}
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
