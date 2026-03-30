'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <footer className={`border-t py-12 transition-colors duration-300 ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-2xl font-bold mb-2 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>
              <span className={isDark ? 'text-blue-400' : 'text-blue-600'}>S</span>uvaditya <span className={isDark ? 'text-blue-400' : 'text-blue-600'}>Roy</span>
            </h3>
            <p className={`text-sm transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Security Engineer | Cloud Security Specialist</p>
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
                className={`p-3 border rounded-lg transition-all ${
                  isDark
                    ? 'bg-gray-800 border-gray-700 text-gray-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/5'
                    : 'bg-white border-gray-200 text-gray-600 hover:text-gray-900 hover:border-blue-400/50 hover:bg-blue-50/50'
                }`}
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
          className={`mt-8 pt-8 border-t text-center transition-colors ${isDark ? 'border-gray-800' : 'border-gray-200'}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className={`text-sm transition-colors ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            &copy; {new Date().getFullYear()} Suvaditya Roy. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
