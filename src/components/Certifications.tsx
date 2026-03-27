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
    <section id="certifications" className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.06, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.3 } }}
              className="bg-dark-900 border border-dark-800 p-6 rounded-xl hover:border-primary-500/50 transition-all duration-300 flex flex-col hover:shadow-2xl hover:shadow-primary-500/20 group cursor-pointer"
            >
              <div className="flex items-start gap-4 mb-4">
                <motion.div 
                  className="p-3 bg-dark-800 rounded-lg border border-dark-700 flex-shrink-0 group-hover:border-primary-500/50 group-hover:bg-primary-500/5 transition-all"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {cert.icon}
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-heading font-semibold text-white mb-1 leading-tight group-hover:text-primary-400 transition-colors">{cert.name}</h3>
                  <p className="text-primary-400 font-medium text-sm">{cert.issuer}</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm mt-auto pt-4 border-t border-dark-800 group-hover:border-primary-500/30 transition-colors">{cert.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
