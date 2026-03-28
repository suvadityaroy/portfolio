'use client';

import { motion } from 'framer-motion';
import { Shield, Brain, Cloud, Wifi, Code } from 'lucide-react';
import Image from 'next/image';
import SectionBackground from './SectionBackground';

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
            className="flex justify-center items-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-blue-500 rounded-2xl blur-2xl opacity-20"></div>
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
              className="text-base md:text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              I am a <span className="text-white font-semibold">Trainee Security Engineer</span> specializing in Cloud Security at <span className="text-primary-400 font-medium">IT People Network (Kolkata)</span>, with hands-on experience in <span className="text-white font-medium">Wiz (CSPM), CyberArk (PAM/EPM), Qualys (VMDR), Veracode, Proofpoint, and DigiCert</span>. Skilled in identifying cloud misconfigurations, supporting vulnerability remediation across 300+ assets, and assisting in access control and security operations.
            </motion.p>
            <motion.p 
              className="text-base md:text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Experience includes <span className="text-primary-400 font-medium">CSPM using Wiz</span>, supporting <span className="text-white font-medium">CyberArk PAM</span>, and vulnerability assessment using <span className="text-white font-medium">Qualys VMDR</span>. I also develop <span className="text-primary-400 font-medium">Python-based automation</span> for log analysis and alert triage, and support monitoring using Splunk, along with working knowledge of <span className="text-white font-medium">AWS, Azure, Linux, and network security</span>.
            </motion.p>
            <motion.p 
              className="text-base md:text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span className="text-primary-400 font-semibold">Springer-published research author</span> in blockchain security, focused on building expertise in CSPM, IAM, vulnerability management, and security automation to secure cloud-native environments.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
