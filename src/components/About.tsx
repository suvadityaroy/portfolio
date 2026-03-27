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
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a <span className="text-white font-semibold">Security Engineer</span> with a strong focus on Cloud Security, currently working at <span className="text-primary-400 font-medium">IT People Network (Kolkata)</span>, with hands-on experience in enterprise tools including <span className="text-white font-medium">Wiz (CSPM), CyberArk (PAM & EPM), Qualys (VMDR), Veracode (SAST), Proofpoint, and DigiCert</span>.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I contribute to securing cloud environments by identifying misconfigurations, supporting access control enforcement, and assisting in vulnerability remediation across production systems, with a growing focus on <span className="text-primary-400 font-medium">AWS and Azure security</span>.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My core experience includes cloud security posture management using <span className="text-white font-medium">Wiz</span>, privileged access management with <span className="text-white font-medium">CyberArk</span>, and vulnerability assessment and prioritization using <span className="text-white font-medium">Qualys VMDR across 300+ assets</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I develop <span className="text-primary-400 font-medium">Python-based automation</span> for log analysis, alert triage, and cloud security workflows, improving operational efficiency. Additionally, I support incident detection and response using <span className="text-white font-medium">Splunk</span>, along with network traffic analysis and Linux-based vulnerability assessments.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a <span className="text-primary-400 font-semibold">Springer-published research author</span> in blockchain security and am actively seeking Cloud Security Engineer roles in product-based companies, startups, and MNCs.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 bg-dark-800 border border-dark-700 rounded-lg text-sm text-gray-300">Wiz CSPM</span>
              <span className="px-4 py-2 bg-dark-800 border border-dark-700 rounded-lg text-sm text-gray-300">CyberArk PAM</span>
              <span className="px-4 py-2 bg-dark-800 border border-dark-700 rounded-lg text-sm text-gray-300">Qualys VMDR</span>
              <span className="px-4 py-2 bg-dark-800 border border-dark-700 rounded-lg text-sm text-gray-300">AWS Security</span>
              <span className="px-4 py-2 bg-dark-800 border border-dark-700 rounded-lg text-sm text-gray-300">Python Automation</span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-dark-900 border border-dark-800 p-6 rounded-xl hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10"
            >
              <div className="mb-4 p-3 bg-dark-800 rounded-lg w-fit group-hover:bg-primary-500/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
      
      {/* Floating particles with trails */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full bg-blue-400/30"
          style={{
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Animated connecting lines */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
          style={{
            width: '200px',
            left: `${i * 20}%`,
            top: `${30 + (i % 2) * 30}%`,
            transformOrigin: 'center',
          }}
          animate={{
            rotate: [0, 360],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      
      {/* Orbiting rings */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`ring-${i}`}
          className="absolute border border-blue-400/10 rounded-full"
          style={{
            width: `${150 + i * 100}px`,
            height: `${150 + i * 100}px`,
            left: '50%',
            top: '50%',
            marginLeft: `-${75 + i * 50}px`,
            marginTop: `-${75 + i * 50}px`,
          }}
          animate={{
            rotate: [0, i % 2 === 0 ? 360 : -360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      
      {/* Glowing nodes */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute w-2 h-2 rounded-full bg-blue-500/50"
          style={{
            left: `${10 + i * 12}%`,
            top: `${15 + (i % 3) * 30}%`,
            boxShadow: '0 0 15px rgba(59, 130, 246, 0.8)',
          }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.4,
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <div className="relative w-64 h-64 mx-auto">
              <Image
                src="/profile.jpg"
                alt="Profile"
                fill
                className="rounded-2xl object-cover border-4 border-blue-500/30 shadow-2xl shadow-blue-500/20"
                priority
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              I am a <span className="text-blue-400 font-semibold">Security Engineer</span> with a strong focus on Cloud Security, currently working at IT People Network (Kolkata), with hands-on experience in enterprise tools including <span className="text-blue-400 font-semibold">Wiz (CSPM), CyberArk (PAM & EPM), Qualys (VMDR), Veracode (SAST), Proofpoint, and DigiCert</span>. I contribute to securing cloud environments by identifying misconfigurations, supporting access control enforcement, and assisting in vulnerability remediation across production systems, with a growing focus on AWS and Azure security.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              My core experience includes cloud security posture management using <span className="text-purple-400 font-semibold">Wiz</span>, privileged access management with <span className="text-purple-400 font-semibold">CyberArk</span>, and vulnerability assessment and prioritization using <span className="text-purple-400 font-semibold">Qualys VMDR across 300+ assets</span>. I also develop Python-based automation for log analysis, alert triage, and cloud security workflows, improving operational efficiency. Additionally, I support incident detection and response using Splunk, along with network traffic analysis and Linux-based vulnerability assessments.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              I am a <span className="text-blue-400 font-semibold">Springer-published research author</span> in blockchain security and am actively seeking Cloud Security Engineer roles in product-based companies, startups, and MNCs, where I can contribute to securing scalable, cloud-native systems through CSPM, IAM, vulnerability management, and security automation.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-xl hover:bg-gray-750 transition-colors border border-gray-700 hover:border-blue-500/50 w-full"
            >
              <div className="mb-4 p-3 bg-gray-900 rounded-lg w-fit">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
