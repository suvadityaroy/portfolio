'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import SectionBackground from './SectionBackground';

const projects = [
  {
    title: 'Cloud Intrusion Detection System',
    description: 'Python-based intrusion detection system for cloud environments, leveraging ML algorithms to identify anomalous behavior and security threats in real-time across AWS infrastructure.',
    tags: ['Python', 'AWS', 'Machine Learning', 'IDS'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/suvadityaroy/Cloud-Intrusion-Detection-System',
    demo: ''
  },
  {
    title: 'AWS IAM Policy Audit Tool',
    description: 'Automated Python tool for auditing AWS IAM policies, identifying overly permissive permissions, privilege escalation risks, and compliance violations across cloud accounts.',
    tags: ['Python', 'AWS', 'IAM', 'Security Automation'],
    image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/suvadityaroy/AWS-IAM-Policy-Audit',
    demo: ''
  },
  {
    title: 'AWS Security Scanner',
    description: 'Comprehensive security assessment tool for AWS environments, scanning for misconfigurations, exposed resources, and compliance violations with automated remediation recommendations.',
    tags: ['Python', 'AWS', 'CSPM', 'Vulnerability Assessment'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/suvadityaroy/AWS-Security-Scanner',
    demo: ''
  },
  {
    title: 'GoScan - Advanced Network Scanner',
    description: 'High-performance network scanner built in Go, leveraging Nmap for comprehensive vulnerability assessment, port scanning, and asset discovery with concurrent execution.',
    tags: ['Go', 'Nmap', 'Network Security', 'VAPT'],
    image: 'https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/suvadityaroy/GoScan-Advance-Network-Scanner-Using-Nmap',
    demo: ''
  },
  {
    title: 'Blockchain-Based Secure Voting System',
    description: 'Decentralized voting platform using blockchain technology for tamper-proof elections with end-to-end encryption, voter anonymity, and immutable audit trails.',
    tags: ['Blockchain', 'Smart Contracts', 'Cryptography', 'Web3'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/suvadityaroy/Online-Voting-System-Using-Blockchain-Technology',
    demo: ''
  },
  {
    title: 'Custom Network Firewall',
    description: 'Python-based stateful packet inspection firewall with deep packet analysis, custom rule-based filtering, and real-time threat blocking for network traffic control.',
    tags: ['Python', 'Network Security', 'Firewall', 'Packet Analysis'],
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/suvadityaroy/Firewall',
    demo: ''
  },
  {
    title: 'AI-Powered Misinformation Detector',
    description: 'Machine learning-based system for detecting fake news and misinformation using NLP, behavioral analysis, and source credibility scoring with 95%+ accuracy.',
    tags: ['AI', 'NLP', 'Machine Learning', 'Python'],
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/suvadityaroy/Fake-News-Detector',
    demo: 'https://fake-news-detector.up.railway.app/static/index.html'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary-500/5 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Cloud security tools, automation platforms, and research projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.06, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group bg-dark-900 border border-dark-800 rounded-xl overflow-hidden hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/20"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-dark-800 to-dark-850">
                <motion.img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-60 transition-all duration-500"
                  whileHover={{ scale: 1.1, opacity: 0.9 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
                <motion.div 
                  className="absolute top-3 right-3 flex gap-2"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06 + 0.2 }}
                >
                  <div className="px-2 py-1 bg-primary-500/90 backdrop-blur-sm rounded text-xs font-semibold text-white">Featured</div>
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-heading font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">{project.title}</h3>
                <p className="text-sm md:text-base text-gray-400 mb-4 leading-relaxed line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <motion.span 
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.06 + i * 0.03 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-dark-800 border border-dark-700 text-primary-400 rounded-md text-xs font-medium hover:border-primary-500/50 hover:bg-primary-500/5 transition-all cursor-default"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <div className="flex gap-3 pt-4 border-t border-dark-800">
                  <Link 
                    href={project.github} 
                    target="_blank"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium group/link"
                  >
                    <Github className="w-4 h-4 group-hover/link:rotate-12 transition-transform" />
                    Code
                  </Link>
                  {project.demo && (
                    <Link 
                      href={project.demo} 
                      target="_blank"
                      className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors text-sm font-medium group/link"
                    >
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      Live Demo
                    </Link>
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
