'use client';

import { motion } from 'framer-motion';
import { Award, ShieldCheck, Cloud, Terminal, Brain } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
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
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="certifications" className={`py-24 relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-gradient-to-b from-white to-blue-50/40'}`}>
      {/* Subtle gradient */}
      <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-blue-600/5' : 'bg-blue-300/10'}`}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors ${isDark ? 'text-white' : 'text-blue-900'}`}>Certifications</h2>
          <div className={`w-20 h-1 mx-auto rounded-full transition-colors ${isDark ? 'bg-blue-500' : 'bg-gradient-to-r from-blue-600 to-cyan-500'}`}></div>
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
              className={`p-6 rounded-xl transition-all duration-300 flex flex-col hover:shadow-2xl group cursor-pointer border ${
                isDark
                  ? 'bg-gray-800 border-gray-700 hover:border-blue-500/50 hover:shadow-blue-500/20'
                  : 'bg-blue-50/60 border-blue-300 hover:border-blue-400/80 hover:shadow-blue-400/30'
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <motion.div 
                  className={`p-3 rounded-lg flex-shrink-0 border transition-all ${
                    isDark
                      ? 'bg-gray-700 border-gray-600 group-hover:border-blue-500/50 group-hover:bg-blue-500/10'
                      : 'bg-blue-100/60 border-blue-300 group-hover:border-blue-400/60 group-hover:bg-blue-100/80'
                  }`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {cert.icon}
                </motion.div>
                <div className="flex-1">
                  <h3 className={`text-base md:text-lg font-semibold mb-1 leading-tight transition-colors ${isDark ? 'text-white group-hover:text-blue-400' : 'text-blue-900 group-hover:text-blue-700'}`}>{cert.name}</h3>
                  <p className={`font-medium text-sm transition-colors ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>{cert.issuer}</p>
                </div>
              </div>
              <p className={`text-sm mt-auto pt-4 border-t transition-colors ${isDark ? 'text-gray-500 border-gray-700 group-hover:border-blue-500/30' : 'text-blue-600 border-blue-200 group-hover:border-blue-400/50'}`}>{cert.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
