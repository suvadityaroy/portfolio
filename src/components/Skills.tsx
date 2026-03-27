'use client';

import { motion } from 'framer-motion';
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
  return (
    <section id="skills" className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Comprehensive security expertise across cloud platforms, enterprise tools, and security frameworks
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-dark-850 border border-dark-800 p-6 rounded-xl hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 bg-dark-900 rounded-lg border border-dark-700">
                  {skillGroup.icon}
                </div>
                <h3 className="text-lg font-heading font-semibold text-white">{skillGroup.category}</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {skillGroup.items.map((item, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-2 bg-dark-900 border border-dark-700 rounded-lg p-3 hover:border-primary-500/30 transition-colors"
                  >
                    <div className="text-lg flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-xs text-gray-300 font-medium leading-tight">{item.name}</span>
                  </div>
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
          className="mt-16 bg-gradient-to-br from-primary-500/10 to-blue-500/5 border border-primary-500/20 rounded-xl p-8"
        >
          <h3 className="text-2xl font-heading font-bold text-white mb-6 text-center">Enterprise Security Tools</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Wiz CSPM', 'CyberArk PAM/EPM', 'Qualys VMDR', 'Veracode SAST', 'Proofpoint', 'DigiCert', 'Splunk SIEM', 'AWS Security Hub'].map((tool, idx) => (
              <span 
                key={idx}
                className="px-5 py-2.5 bg-dark-900/80 border border-primary-500/30 rounded-lg text-sm font-medium text-white hover:bg-dark-800 hover:border-primary-500/50 transition-all cursor-default"
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
