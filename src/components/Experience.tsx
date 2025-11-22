'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import SectionBackground from './SectionBackground';

const experiences = [
  {
    company: 'University of Engineering & Management Kolkata — IEDC Lab',
    role: 'Software & Systems Engineering Intern',
    period: 'Jun 2024 – Present',
    description: [
      'Developed a high-performance network scanner in Golang using concurrency patterns, increasing scan throughput by 40%.',
      'Designed an asynchronous distributed upload pipeline with SQL-backed caching, reducing re-scan time by 60%.',
      'Automated multi-host Nmap assessments and optimized execution flow for large-scale system analysis.'
    ]
  },
  {
    company: 'CFSS Cyber & Forensics Solutions',
    role: 'Cyber Security Intern',
    period: 'Dec 2023 – May 2024',
    description: [
      'Analyzed backend systems, identified vulnerabilities, and improved system reliability using Python-based automation.',
      'Implemented password policy audits reducing unauthorized access attempts by 40%.',
      'Collaborated within an agile SDLC environment, focusing on documentation, testing, and issue triaging.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-800 via-purple-950/20 via-violet-950/30 to-gray-800 relative overflow-hidden">
      <SectionBackground variant="violet" />
      
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
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-blue-500/30 transition-colors">
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
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
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
