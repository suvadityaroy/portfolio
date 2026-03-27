'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-dark-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-heading font-bold text-white mb-2">
              <span className="text-primary-400">S</span>uvaditya <span className="text-primary-400">Roy</span>
            </h3>
            <p className="text-gray-400 text-sm">Security Engineer | Cloud Security Specialist</p>
          </motion.div>
          
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {[
              { href: 'https://github.com/suvadityaroy', icon: Github, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/suvadityaroy/', icon: Linkedin, label: 'LinkedIn' },
              { href: 'mailto:suvadityaroy.dev@gmail.com', icon: Mail, label: 'Email' }
            ].map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.label !== 'Email' ? '_blank' : undefined}
                rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="p-3 bg-dark-800 border border-dark-700 rounded-lg text-gray-400 hover:text-white hover:border-primary-500/50 hover:bg-primary-500/5 transition-all"
                whileHover={{ y: -4, scale: 1.05 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                viewport={{ once: true }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-8 pt-8 border-t border-dark-800 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Suvaditya Roy. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
