'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import SectionBackground from './SectionBackground';
import { Code, Server, Shield, Brain, Cloud, Wifi, Terminal } from 'lucide-react';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiPython, SiGo, SiMongodb, SiPostgresql, SiRedis,
  SiTensorflow, SiPytorch,
  SiAmazon, SiGooglecloud, SiTerraform,
  SiRaspberrypi, SiArduino,
  SiDocker, SiKubernetes, SiJenkins
} from 'react-icons/si';

const skills = [
  { 
    category: 'Penetration Testing', 
    icon: <Shield className="w-6 h-6 mb-2 text-red-400" />,
    items: [
      { name: 'Metasploit', icon: <Shield className="w-5 h-5 text-red-500" /> },
      { name: 'Burp Suite', icon: <Shield className="w-5 h-5 text-orange-500" /> },
      { name: 'Nmap', icon: <Shield className="w-5 h-5 text-blue-500" /> },
      { name: 'Wireshark', icon: <Shield className="w-5 h-5 text-cyan-500" /> },
      { name: 'Kali Linux', icon: <Terminal className="w-5 h-5 text-purple-500" /> },
      { name: 'OWASP ZAP', icon: <Shield className="w-5 h-5 text-green-500" /> }
    ]
  },
  { 
    category: 'Security Operations', 
    icon: <Shield className="w-6 h-6 mb-2 text-blue-400" />,
    items: [
      { name: 'SIEM (Splunk)', icon: <Shield className="w-5 h-5 text-green-500" /> },
      { name: 'ELK Stack', icon: <Shield className="w-5 h-5 text-yellow-500" /> },
      { name: 'EDR/XDR', icon: <Shield className="w-5 h-5 text-red-500" /> },
      { name: 'Incident Response', icon: <Shield className="w-5 h-5 text-orange-500" /> },
      { name: 'Threat Hunting', icon: <Shield className="w-5 h-5 text-purple-500" /> },
      { name: 'Log Analysis', icon: <Shield className="w-5 h-5 text-blue-500" /> }
    ]
  },
  { 
    category: 'Network Security', 
    icon: <Wifi className="w-6 h-6 mb-2 text-green-400" />,
    items: [
      { name: 'Firewalls', icon: <Shield className="w-5 h-5 text-red-500" /> },
      { name: 'IDS/IPS', icon: <Shield className="w-5 h-5 text-blue-500" /> },
      { name: 'VPN', icon: <Shield className="w-5 h-5 text-green-500" /> },
      { name: 'Network Monitoring', icon: <Wifi className="w-5 h-5 text-cyan-500" /> },
      { name: 'Packet Analysis', icon: <Wifi className="w-5 h-5 text-purple-500" /> },
      { name: 'Zero Trust', icon: <Shield className="w-5 h-5 text-yellow-500" /> }
    ]
  },
  { 
    category: 'Cloud Security', 
    icon: <Cloud className="w-6 h-6 mb-2 text-sky-400" />,
    items: [
      { name: 'AWS Security', icon: <SiAmazon className="w-5 h-5 text-[#FF9900]" /> },
      { name: 'Azure Security', icon: <Cloud className="w-5 h-5 text-[#0078D4]" /> },
      { name: 'GCP Security', icon: <SiGooglecloud className="w-5 h-5 text-[#4285F4]" /> },
      { name: 'IAM', icon: <Shield className="w-5 h-5 text-green-500" /> },
      { name: 'Cloud Compliance', icon: <Shield className="w-5 h-5 text-blue-500" /> },
      { name: 'Container Security', icon: <SiDocker className="w-5 h-5 text-[#2496ED]" /> }
    ]
  },
  { 
    category: 'Security Frameworks', 
    icon: <Shield className="w-6 h-6 mb-2 text-purple-400" />,
    items: [
      { name: 'MITRE ATT&CK', icon: <Shield className="w-5 h-5 text-red-500" /> },
      { name: 'NIST CSF', icon: <Shield className="w-5 h-5 text-blue-500" /> },
      { name: 'ISO 27001', icon: <Shield className="w-5 h-5 text-green-500" /> },
      { name: 'OWASP Top 10', icon: <Shield className="w-5 h-5 text-purple-500" /> },
      { name: 'CIS Controls', icon: <Shield className="w-5 h-5 text-yellow-500" /> },
      { name: 'PCI DSS', icon: <Shield className="w-5 h-5 text-orange-500" /> }
    ]
  },
  { 
    category: 'Programming & Scripting', 
    icon: <Code className="w-6 h-6 mb-2 text-yellow-400" />,
    items: [
      { name: 'Python', icon: <SiPython className="w-5 h-5 text-[#3776AB]" /> },
      { name: 'Bash', icon: <Terminal className="w-5 h-5 text-green-500" /> },
      { name: 'PowerShell', icon: <Terminal className="w-5 h-5 text-blue-500" /> },
      { name: 'Go', icon: <SiGo className="w-5 h-5 text-[#00ADD8]" /> },
      { name: 'JavaScript', icon: <SiTypescript className="w-5 h-5 text-yellow-400" /> },
      { name: 'SQL', icon: <SiPostgresql className="w-5 h-5 text-[#4169E1]" /> }
    ]
  },
  { 
    category: 'Cryptography & Forensics', 
    icon: <Shield className="w-6 h-6 mb-2 text-orange-400" />,
    items: [
      { name: 'Encryption', icon: <Shield className="w-5 h-5 text-yellow-500" /> },
      { name: 'PKI', icon: <Shield className="w-5 h-5 text-green-500" /> },
      { name: 'Digital Forensics', icon: <Shield className="w-5 h-5 text-red-500" /> },
      { name: 'Malware Analysis', icon: <Shield className="w-5 h-5 text-purple-500" /> },
      { name: 'Reverse Engineering', icon: <Code className="w-5 h-5 text-blue-500" /> },
      { name: 'Hash Analysis', icon: <Shield className="w-5 h-5 text-cyan-500" /> }
    ]
  },
];

export default function Skills() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="skills" className={`py-24 relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Background elements */}
      <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-blue-500/5' : 'bg-blue-300/10'}`}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>Technical Skills</h2>
          <div className={`w-20 h-1 mx-auto rounded-full transition-colors ${isDark ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
          <p className={`mt-6 max-w-2xl mx-auto transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Comprehensive security expertise across cloud platforms, enterprise tools, and security frameworks
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.06, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className={`border p-6 rounded-xl transition-all duration-300 hover:shadow-2xl cursor-pointer ${
                isDark
                  ? 'bg-gray-800 border-gray-700 hover:border-blue-500/50 hover:shadow-blue-500/20'
                  : 'bg-white border-gray-200 hover:border-blue-400/50 hover:shadow-blue-300/20'
              }`}
            >
              <div className="flex items-center gap-3 mb-5">
                <motion.div 
                  className={`p-2.5 rounded-lg border transition-all duration-300 ${
                    isDark
                      ? 'bg-gray-900 border-gray-700 group-hover:border-blue-500/50 group-hover:bg-blue-500/10'
                      : 'bg-gray-50 border-gray-200 group-hover:border-blue-400/50 group-hover:bg-blue-50/50'
                  }`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {skillGroup.icon}
                </motion.div>
                <h3 className={`text-base md:text-lg font-semibold transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>{skillGroup.category}</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {skillGroup.items.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.06 + i * 0.03 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`flex items-center gap-2 border rounded-lg p-2.5 transition-all duration-200 cursor-pointer ${
                      isDark
                        ? 'bg-gray-900 border-gray-700 hover:border-blue-500/40 hover:bg-blue-500/5'
                        : 'bg-gray-50 border-gray-200 hover:border-blue-400/40 hover:bg-blue-50/50'
                    }`}
                  >
                    <div className="text-base flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className={`text-xs font-medium leading-tight transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className={`mt-16 border rounded-xl p-8 transition-colors ${
            isDark
              ? 'bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20'
              : 'bg-gradient-to-br from-blue-50/50 to-blue-50/30 border-blue-200/40'
          }`}
        >
          <h3 className={`text-2xl font-bold mb-6 text-center transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>Enterprise Security Tools</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Wiz CSPM', 'CyberArk PAM/EPM', 'Qualys VMDR', 'Veracode SAST', 'Proofpoint', 'DigiCert', 'Splunk SIEM', 'AWS Security Hub'].map((tool, idx) => (
              <span 
                key={idx}
                className={`px-5 py-2.5 border rounded-lg text-sm font-medium transition-all cursor-default ${
                  isDark
                    ? 'bg-gray-900/80 border-blue-500/30 text-white hover:bg-gray-800 hover:border-blue-500/50'
                    : 'bg-white/60 border-blue-300/40 text-gray-900 hover:bg-white hover:border-blue-400/60'
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
