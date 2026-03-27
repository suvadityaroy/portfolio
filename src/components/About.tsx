'use client';

import { motion } from 'framer-motion';
import { Shield, Brain, Cloud, Wifi, Code } from 'lucide-react';
import Image from 'next/image';
import SectionBackground from './SectionBackground';

const features = [
  {
    icon: <Cloud className="w-8 h-8 text-blue-500" />,
    title: 'Cloud Security (CSPM)',
    description: 'Securing cloud environments using Wiz CSPM, identifying misconfigurations and compliance gaps across AWS and Azure.'
  },
  {
    icon: <Shield className="w-8 h-8 text-purple-500" />,
    title: 'Privileged Access Management',
    description: 'Managing enterprise PAM/EPM operations with CyberArk, enforcing least-privilege controls across 20+ endpoints.'
  },
  {
    icon: <Shield className="w-8 h-8 text-red-500" />,
    title: 'Vulnerability Management',
    description: 'Conducting vulnerability assessments using Qualys VMDR across 300+ assets, prioritizing remediation and coordinating with teams.'
   },
  {
    icon: <Brain className="w-8 h-8 text-green-500" />,
    title: 'Security Automation',
    description: 'Building Python automation for log analysis, alert triage, vulnerability tracking, and cloud security workflows.'
  },
  {
    icon: <Shield className="w-8 h-8 text-yellow-500" />,
    title: 'Security Operations',
    description: 'Supporting incident detection and response using Splunk, network traffic analysis, and certificate lifecycle management.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-5"
          >
            <motion.p 
              className="text-base md:text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              I am a <span className="text-white font-semibold">Security Engineer</span> with a strong focus on Cloud Security, currently working at <span className="text-primary-400 font-medium">IT People Network (Kolkata)</span>, with hands-on experience in enterprise tools including <span className="text-white font-medium">Wiz (CSPM), CyberArk (PAM & EPM), Qualys (VMDR), Veracode (SAST), Proofpoint, and DigiCert</span>.
            </motion.p>
            <motion.p 
              className="text-base md:text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              I contribute to securing cloud environments by identifying misconfigurations, supporting access control enforcement, and assisting in vulnerability remediation across production systems, with a growing focus on <span className="text-primary-400 font-medium">AWS and Azure security</span>.
            </motion.p>
            <motion.p 
              className="text-base md:text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              My core experience includes cloud security posture management using <span className="text-white font-medium">Wiz</span>, privileged access management with <span className="text-white font-medium">CyberArk</span>, and vulnerability assessment and prioritization using <span className="text-white font-medium">Qualys VMDR across 300+ assets</span>.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-5"
          >
            <motion.p 
              className="text-base md:text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              I develop <span className="text-primary-400 font-medium">Python-based automation</span> for log analysis, alert triage, and cloud security workflows, improving operational efficiency. Additionally, I support incident detection and response using <span className="text-white font-medium">Splunk</span>, along with network traffic analysis and Linux-based vulnerability assessments.
            </motion.p>
            <motion.p 
              className="text-base md:text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              I am a <span className="text-primary-400 font-semibold">Springer-published research author</span> in blockchain security and am actively seeking Cloud Security Engineer roles in product-based companies, startups, and MNCs.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-3 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {['Wiz CSPM', 'CyberArk PAM', 'Qualys VMDR', 'AWS Security', 'Python Automation'].map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + (i * 0.05) }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 bg-dark-800 border border-dark-700 rounded-lg text-sm text-gray-300 hover:border-primary-500/50 hover:bg-primary-500/5 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group bg-dark-900 border border-dark-800 p-6 rounded-xl hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/20 cursor-pointer"
            >
              <motion.div 
                className="mb-4 p-3 bg-dark-800 rounded-lg w-fit group-hover:bg-primary-500/10 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-lg md:text-xl font-heading font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">{feature.title}</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
