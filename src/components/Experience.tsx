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
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="relative"
            >
              <div className="bg-dark-850 border border-dark-800 p-6 md:p-8 rounded-xl hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/20 group">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div className="flex-1">
                    <motion.h3 
                      className="text-xl md:text-2xl font-heading font-bold text-white mb-1 group-hover:text-primary-400 transition-colors"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.08 + 0.2 }}
                    >
                      {exp.role}
                    </motion.h3>
                    <h4 className="text-base md:text-lg text-primary-400 font-medium mb-2">{exp.company}</h4>
                    {exp.location && (
                      <p className="text-sm text-gray-500">{exp.location}</p>
                    )}
                  </div>
                  <motion.span 
                    className="text-sm text-gray-400 bg-dark-900 border border-dark-700 px-4 py-2 rounded-lg mt-3 md:mt-0 w-fit group-hover:border-primary-500/30 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    {exp.period}
                  </motion.span>
                </div>
                <ul className="space-y-3 mt-6">
                  {exp.description.map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start gap-3 text-sm md:text-base text-gray-300"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 + i * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                      <span className="leading-relaxed">{item}</span>
                    </motion.li>
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
