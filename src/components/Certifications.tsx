'use client';

import { motion } from 'framer-motion';
import { Award, ShieldCheck, Cloud, Terminal, Brain } from 'lucide-react';
import SectionBackground from './SectionBackground';

const certifications = [
  {
    name: 'Introduction to Generative AI',
    issuer: 'Google',
    date: 'Jun 2025',
    icon: <Brain className="w-10 h-10 text-yellow-500" />
  },
  {
    name: 'Certified Ethical Hacking (v12)',
    issuer: 'LearnKartS',
    date: 'Jan 2025',
    icon: <ShieldCheck className="w-10 h-10 text-green-500" />
  },
  {
    name: 'IBM Cybersecurity Analyst',
    issuer: 'IBM',
    date: 'May 2024',
    icon: <ShieldCheck className="w-10 h-10 text-blue-500" />
  },
  {
    name: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services',
    date: 'Mar 2024',
    icon: <Cloud className="w-10 h-10 text-orange-500" />
  },
  {
    name: 'Certified Information Systems Security Professional (CISSP)',
    issuer: 'Simplilearn',
    date: 'Nov 2023',
    icon: <Award className="w-10 h-10 text-purple-500" />
  },
  {
    name: 'Certified in Cybersecurity Specialization (CC)',
    issuer: 'ISC2',
    date: 'Nov 2023',
    icon: <Terminal className="w-10 h-10 text-cyan-500" />
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-slate-800 via-indigo-950/30 via-blue-950/20 to-slate-800 relative overflow-hidden">
      <SectionBackground variant="indigo" />
      
      {/* Diamond pattern */}
      <motion.div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0L80 40L40 80L0 40z' fill='none' stroke='%236366f1' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '80px 80px'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Spinning diamonds */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute border-2 border-indigo-500/10"
          style={{
            width: `${50 + i * 20}px`,
            height: `${50 + i * 20}px`,
            left: `${10 + i * 12}%`,
            top: `${10 + (i % 3) * 30}%`,
            transform: 'rotate(45deg)',
          }}
          animate={{
            rotate: [45, 405],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all flex flex-col items-center text-center"
            >
              <div className="mb-6 p-4 bg-gray-800 rounded-full">
                {cert.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{cert.name}</h3>
              <p className="text-blue-500 font-medium mb-2">{cert.issuer}</p>
              <p className="text-gray-400 text-sm">{cert.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
