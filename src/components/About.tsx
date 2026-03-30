'use client';

import { motion } from 'framer-motion';
import { Shield, Brain, Cloud, Wifi, Code } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';
import SectionBackground from './SectionBackground';

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="about" className={`py-24 relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-gray-950' : 'bg-gradient-to-b from-white to-blue-50/40'}`}>
      {/* Gradient background */}
      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-gray-900/50 to-transparent' : 'bg-gradient-to-b from-blue-50/60 via-cyan-50/30 to-transparent'}`}></div>
      <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-blue-500/5' : 'bg-blue-300/10'}`}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors ${isDark ? 'text-white' : 'text-blue-900'}`}>About Me</h2>
          <div className={`w-20 h-1 mx-auto rounded-full transition-colors ${isDark ? 'bg-blue-500' : 'bg-gradient-to-r from-blue-600 to-cyan-500'}`}></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-center items-center"
          >
            <div className="relative">
              <div className={`absolute inset-0 rounded-2xl blur-2xl opacity-20 ${isDark ? 'bg-gradient-to-br from-blue-500 to-blue-500' : 'bg-gradient-to-br from-blue-400 to-blue-300'}`}></div>
              <Image 
                src="/profile.jpg"
                alt="Suvaditya Roy - Profile"
                width={350}
                height={450}
                className="rounded-2xl shadow-2xl relative z-10 object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-5"
          >
            <motion.p 
              className={`text-base md:text-lg leading-relaxed transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              I am a <span className={`font-semibold ${isDark ? 'text-white' : 'text-blue-900'}`}>Trainee Security Engineer</span> specializing in Cloud Security at <span className={`font-medium ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>IT People Network (Kolkata)</span>, with hands-on experience in <span className={`font-medium ${isDark ? 'text-white' : 'text-blue-900'}`}>Wiz (CSPM), CyberArk (PAM/EPM), Qualys (VMDR), Veracode, Proofpoint, and DigiCert</span>. Skilled in identifying cloud misconfigurations, supporting vulnerability remediation across 300+ assets, and assisting in access control and security operations.
            </motion.p>
            <motion.p 
              className={`text-base md:text-lg leading-relaxed transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Experience includes <span className={`font-medium ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>CSPM using Wiz</span>, supporting <span className={`font-medium ${isDark ? 'text-white' : 'text-blue-900'}`}>CyberArk PAM</span>, and vulnerability assessment using <span className={`font-medium ${isDark ? 'text-white' : 'text-blue-900'}`}>Qualys VMDR</span>. I also develop <span className={`font-medium ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>Python-based automation</span> for log analysis and alert triage, and support monitoring using Splunk, along with working knowledge of <span className={`font-medium ${isDark ? 'text-white' : 'text-blue-900'}`}>AWS, Azure, Linux, and network security</span>.
            </motion.p>
            <motion.p 
              className={`text-base md:text-lg leading-relaxed transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span className={`font-semibold ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>Springer-published research author</span> in blockchain security, focused on building expertise in CSPM, IAM, vulnerability management, and security automation to secure cloud-native environments.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
