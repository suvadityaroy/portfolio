'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import SectionBackground from './SectionBackground';

const projects = [
  {
    title: 'Advanced Network Scanner with Nmap',
    description: 'Comprehensive vulnerability scanner leveraging Nmap with automated reporting, asset discovery, and threat intelligence integration.',
    tags: ['Go', 'Nmap', 'Pentesting', 'Automation'],
    image: 'https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/suvadityaroy/Advance-Network-Scanner-Using-Nmap',
    demo: ''
  },
  {
    title: 'Custom Firewall Implementation',
    description: 'Python-based stateful packet inspection firewall with deep packet analysis, rule-based filtering, and real-time threat blocking.',
    tags: ['Python', 'Network Security', 'Packet Analysis'],
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/suvadityaroy/Firewall',
    demo: ''
  },
  {
    title: 'Security Operations Center (SOC) Dashboard',
    description: 'Real-time threat monitoring dashboard with ML-powered anomaly detection, automated incident response, and SIEM integration.',
    tags: ['Python', 'SIEM', 'Threat Detection', 'ML'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/suvadityaroy/Real-Time-Anomaly-Detection-Dashboard',
    demo: 'https://real-time-anomaly-detection-dashboard.up.railway.app'
  },
  {
    title: 'Blockchain-Based Secure Voting System',
    description: 'Decentralized voting platform using blockchain for tamper-proof elections with end-to-end encryption and voter anonymity.',
    tags: ['Blockchain', 'Cryptography', 'Security', 'Smart Contracts'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/suvadityaroy/Online-Voting-System-Using-Blockchain-Technology',
    demo: ''
  },
  {
    title: 'Automated Vulnerability Assessment Platform',
    description: 'Comprehensive VAPT platform integrating multiple security tools, generating detailed reports with CVSS scoring and remediation guides.',
    tags: ['Python', 'VAPT', 'Automation', 'Reporting'],
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/suvadityaroy',
    demo: ''
  },
  {
    title: 'AI-Powered Phishing Detection System',
    description: 'Machine learning model trained to detect phishing emails and malicious URLs with 98% accuracy using NLP and behavioral analysis.',
    tags: ['AI', 'NLP', 'Threat Intelligence', 'Python'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/suvadityaroy/Fake-News-Detector',
    demo: 'https://fake-news-detector.up.railway.app/static/index.html'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-black via-pink-950/30 via-fuchsia-950/25 to-black relative overflow-hidden">
      <SectionBackground variant="violet" />
      
      {/* Star field pattern */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-pink-400/40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
      
      {/* Rotating triangles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`tri-${i}`}
          className="absolute border-2 border-fuchsia-500/10"
          style={{
            width: 0,
            height: 0,
            borderLeft: `${30 + i * 15}px solid transparent`,
            borderRight: `${30 + i * 15}px solid transparent`,
            borderBottom: `${50 + i * 25}px solid rgba(217, 70, 239, 0.1)`,
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 2) * 40}%`,
          }}
          animate={{
            rotate: [0, 360],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 18 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-500"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/20 group-hover:bg-transparent transition-colors z-10"></div>
                {/* Placeholder for image since we can't use external images easily without configuring next.config.js, but I'll use a colored div as fallback or just the img tag and hope it works if I configure it or if it's just a standard img tag */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white transition-colors text-sm">
                    <Github className="w-4 h-4 mr-2" /> Code
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:text-blue-400 transition-colors text-sm font-medium">
                      Live Demo <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
