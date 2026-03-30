'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { Code, Shield, Cloud, Wifi, Terminal } from 'lucide-react';

// Stagger variants
const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.94 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring' as const, stiffness: 240, damping: 22 },
  },
};
import {
  SiPython, SiGo, SiPostgresql, SiTypescript,
  SiAmazon, SiGooglecloud, SiDocker,
} from 'react-icons/si';

const skills = [
  {
    category: 'Penetration Testing',
    icon: Shield,
    color: { dark: 'text-red-400', light: 'text-red-500' },
    items: [
      { name: 'Metasploit', icon: <Shield className="w-4 h-4 text-red-500" /> },
      { name: 'Burp Suite', icon: <Shield className="w-4 h-4 text-orange-500" /> },
      { name: 'Nmap', icon: <Shield className="w-4 h-4 text-blue-500" /> },
      { name: 'Wireshark', icon: <Shield className="w-4 h-4 text-cyan-500" /> },
      { name: 'Kali Linux', icon: <Terminal className="w-4 h-4 text-purple-500" /> },
      { name: 'OWASP ZAP', icon: <Shield className="w-4 h-4 text-green-500" /> },
    ],
  },
  {
    category: 'Network Security',
    icon: Wifi,
    color: { dark: 'text-emerald-400', light: 'text-emerald-600' },
    items: [
      { name: 'Firewalls', icon: <Shield className="w-4 h-4 text-red-500" /> },
      { name: 'IDS/IPS', icon: <Shield className="w-4 h-4 text-blue-500" /> },
      { name: 'VPN', icon: <Shield className="w-4 h-4 text-green-500" /> },
      { name: 'Network Monitoring', icon: <Wifi className="w-4 h-4 text-cyan-500" /> },
      { name: 'Packet Analysis', icon: <Wifi className="w-4 h-4 text-purple-500" /> },
      { name: 'Zero Trust', icon: <Shield className="w-4 h-4 text-yellow-500" /> },
    ],
  },
  {
    category: 'Cloud Security',
    icon: Cloud,
    color: { dark: 'text-blue-400', light: 'text-blue-600' },
    items: [
      { name: 'AWS Security', icon: <SiAmazon className="w-4 h-4 text-[#FF9900]" /> },
      { name: 'Azure Security', icon: <Cloud className="w-4 h-4 text-[#0078D4]" /> },
      { name: 'GCP Security', icon: <SiGooglecloud className="w-4 h-4 text-[#4285F4]" /> },
      { name: 'IAM', icon: <Shield className="w-4 h-4 text-green-500" /> },
      { name: 'Cloud Compliance', icon: <Shield className="w-4 h-4 text-blue-500" /> },
      { name: 'Container Security', icon: <SiDocker className="w-4 h-4 text-[#2496ED]" /> },
    ],
  },
  {
    category: 'Security Frameworks',
    icon: Shield,
    color: { dark: 'text-violet-400', light: 'text-violet-600' },
    items: [
      { name: 'MITRE ATT&CK', icon: <Shield className="w-4 h-4 text-red-500" /> },
      { name: 'NIST CSF', icon: <Shield className="w-4 h-4 text-blue-500" /> },
      { name: 'ISO 27001', icon: <Shield className="w-4 h-4 text-green-500" /> },
      { name: 'OWASP Top 10', icon: <Shield className="w-4 h-4 text-purple-500" /> },
      { name: 'CIS Controls', icon: <Shield className="w-4 h-4 text-yellow-500" /> },
      { name: 'PCI DSS', icon: <Shield className="w-4 h-4 text-orange-500" /> },
    ],
  },
  {
    category: 'Programming & Scripting',
    icon: Code,
    color: { dark: 'text-amber-400', light: 'text-amber-600' },
    items: [
      { name: 'Python', icon: <SiPython className="w-4 h-4 text-[#3776AB]" /> },
      { name: 'Bash', icon: <Terminal className="w-4 h-4 text-green-500" /> },
      { name: 'PowerShell', icon: <Terminal className="w-4 h-4 text-blue-500" /> },
      { name: 'Go', icon: <SiGo className="w-4 h-4 text-[#00ADD8]" /> },
      { name: 'JavaScript', icon: <SiTypescript className="w-4 h-4 text-yellow-400" /> },
      { name: 'SQL', icon: <SiPostgresql className="w-4 h-4 text-[#4169E1]" /> },
    ],
  },
];

const enterpriseTools = [
  'Wiz CSPM', 'CyberArk PAM/EPM', 'Qualys VMDR',
  'Veracode SAST', 'Proofpoint', 'DigiCert',
  'Splunk SIEM', 'AWS Security Hub',
];

export default function Skills() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="skills"
      className={`py-28 relative overflow-hidden transition-colors duration-500 bg-transparent`}
    >
      {/* Subtly darkened top line just to separate sections if desired */}
      <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent ${
        isDark ? 'via-sky-500/20' : 'via-indigo-200'
      } to-transparent`} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className={`text-xs font-bold tracking-[0.3em] uppercase mb-3 ${
            isDark ? 'text-sky-400' : 'text-indigo-600'
          }`}>
            Technical Skills
          </p>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            What I Work With
          </h2>
          <motion.div
            className={`h-1 mx-auto rounded-full ${
              isDark
                ? 'bg-gradient-to-r from-sky-500 to-indigo-500'
                : 'bg-gradient-to-r from-indigo-600 to-violet-600'
            }`}
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          />
          <p className={`mt-5 max-w-xl mx-auto text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Comprehensive security expertise across cloud platforms, enterprise tools, and frameworks
          </p>
        </motion.div>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skills.map((group, index) => {
            const IconComp = group.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -6, scale: 1.02,
                  transition: { type: 'spring' as const, stiffness: 320, damping: 20 },
                }}
                className={`p-5 rounded-2xl border transition-all duration-300 group ${
                  isDark
                    ? 'card-dark hover:shadow-[0_0_30px_rgba(56,189,248,0.14)]'
                    : 'card-light hover:shadow-[0_8px_32px_rgba(79,70,229,0.11)]'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className={`p-2 rounded-lg border transition-all duration-300 ${
                      isDark
                        ? 'bg-[#050d1a] border-sky-500/15 group-hover:border-sky-500/40 group-hover:bg-sky-500/10'
                        : 'bg-slate-50 border-slate-200 group-hover:border-indigo-300 group-hover:bg-indigo-50'
                    }`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.55, ease: 'easeInOut' }}
                  >
                    <IconComp className={`w-5 h-5 ${isDark ? group.color.dark : group.color.light}`} />
                  </motion.div>
                  <h3 className={`text-sm font-semibold leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {group.category}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {group.items.map((item, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-1.5 px-2 py-2 rounded-lg border text-xs font-medium cursor-default transition-colors duration-150 ${
                        isDark
                          ? 'bg-[#050d1a] border-slate-800 text-slate-300 hover:border-sky-500/35 hover:bg-sky-500/6'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-indigo-300 hover:bg-indigo-50/70'
                      }`}
                    >
                      <span className="flex-shrink-0">{item.icon}</span>
                      <span className="leading-tight truncate">{item.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enterprise tools banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className={`mt-14 p-8 rounded-2xl border transition-all duration-300 ${
            isDark
              ? 'bg-gradient-to-br from-sky-500/5 via-[#0a1628] to-indigo-500/5 border-sky-500/15'
              : 'bg-gradient-to-br from-indigo-50 to-violet-50 border-indigo-200'
          }`}
        >
          <h3 className={`text-lg font-bold mb-6 text-center ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Enterprise Security Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {enterpriseTools.map((tool, i) => (
              <span
                key={i}
                className={`px-4 py-2 rounded-lg text-sm font-medium border cursor-default transition-colors duration-150 ${
                  isDark
                    ? 'bg-[#0a1628] border-sky-500/20 text-sky-300 hover:border-sky-400/50 hover:bg-sky-500/10'
                    : 'bg-white border-indigo-200 text-indigo-700 hover:border-indigo-400 hover:shadow-sm shadow-indigo-100'
                }`}
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
