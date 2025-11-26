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
    category: 'Frontend', 
    icon: <Code className="w-6 h-6 mb-2 text-blue-400" />,
    items: [
      { name: 'React', icon: <SiReact className="w-5 h-5 text-[#61DAFB]" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="w-5 h-5 text-white" /> },
      { name: 'TypeScript', icon: <SiTypescript className="w-5 h-5 text-[#3178C6]" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-5 h-5 text-[#06B6D4]" /> }
    ]
  },
  { 
    category: 'Backend', 
    icon: <Server className="w-6 h-6 mb-2 text-green-400" />,
    items: [
      { name: 'Node.js', icon: <SiNodedotjs className="w-5 h-5 text-[#339933]" /> },
      { name: 'Python', icon: <SiPython className="w-5 h-5 text-[#3776AB]" /> },
      { name: 'Go', icon: <SiGo className="w-5 h-5 text-[#00ADD8]" /> },
      { name: 'MongoDB', icon: <SiMongodb className="w-5 h-5 text-[#47A248]" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="w-5 h-5 text-[#4169E1]" /> },
      { name: 'Redis', icon: <SiRedis className="w-5 h-5 text-[#DC382D]" /> }
    ]
  },
  { 
    category: 'Cybersecurity', 
    icon: <Shield className="w-6 h-6 mb-2 text-red-400" />,
    items: [
      { name: 'VAPT', icon: <Shield className="w-5 h-5 text-red-500" /> },
      { name: 'SOC Analyst', icon: <Shield className="w-5 h-5 text-blue-500" /> },
      { name: 'Network Security', icon: <Shield className="w-5 h-5 text-green-500" /> },
      { name: 'Cryptography', icon: <Shield className="w-5 h-5 text-yellow-500" /> },
      { name: 'OWASP Top 10', icon: <Shield className="w-5 h-5 text-purple-500" /> }
    ]
  },
  { 
    category: 'AI & Data', 
    icon: <Brain className="w-6 h-6 mb-2 text-purple-400" />,
    items: [
      { name: 'Generative AI', icon: <Brain className="w-5 h-5 text-yellow-400" /> },
      { name: 'TensorFlow', icon: <SiTensorflow className="w-5 h-5 text-[#FF6F00]" /> },
      { name: 'PyTorch', icon: <SiPytorch className="w-5 h-5 text-[#EE4C2C]" /> },
      { name: 'NLP', icon: <Brain className="w-5 h-5 text-purple-400" /> },
      { name: 'Data Analysis', icon: <Brain className="w-5 h-5 text-blue-400" /> }
    ]
  },
  { 
    category: 'Cloud Computing', 
    icon: <Cloud className="w-6 h-6 mb-2 text-sky-400" />,
    items: [
      { name: 'AWS', icon: <SiAmazon className="w-5 h-5 text-[#FF9900]" /> },
      { name: 'Azure', icon: <Cloud className="w-5 h-5 text-[#0078D4]" /> },
      { name: 'Google Cloud', icon: <SiGooglecloud className="w-5 h-5 text-[#4285F4]" /> },
      { name: 'Serverless', icon: <Cloud className="w-5 h-5 text-cyan-400" /> },
      { name: 'Terraform', icon: <SiTerraform className="w-5 h-5 text-[#7B42BC]" /> }
    ]
  },
  { 
    category: 'IoT', 
    icon: <Wifi className="w-6 h-6 mb-2 text-orange-400" />,
    items: [
      { name: 'Raspberry Pi', icon: <SiRaspberrypi className="w-5 h-5 text-[#C51A4A]" /> },
      { name: 'Arduino', icon: <SiArduino className="w-5 h-5 text-[#00979D]" /> },
      { name: 'Sensors', icon: <Wifi className="w-5 h-5 text-orange-400" /> }
    ]
  },
  { 
    category: 'DevOps', 
    icon: <Terminal className="w-6 h-6 mb-2 text-yellow-400" />,
    items: [
      { name: 'Docker', icon: <SiDocker className="w-5 h-5 text-[#2496ED]" /> },
      { name: 'Kubernetes', icon: <SiKubernetes className="w-5 h-5 text-[#326CE5]" /> },
      { name: 'CI/CD', icon: <Terminal className="w-5 h-5 text-green-400" /> },
      { name: 'Jenkins', icon: <SiJenkins className="w-5 h-5 text-[#D24939]" /> }
    ]
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-cyan-950/30 via-blue-950/25 to-black relative overflow-hidden">
      <SectionBackground variant="cyan" />
      
      {/* Circuit board pattern */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0v100M0 50h100' stroke='%2306b6d4' stroke-width='1'/%3E%3Ccircle cx='50' cy='50' r='5' fill='%2306b6d4'/%3E%3C/svg%3E")`,
          backgroundSize: '50px 50px',
        }}
        animate={{
          opacity: [0.02, 0.05, 0.02],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />
      
      {/* Tech nodes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-cyan-500/30 shadow-lg shadow-cyan-500/50"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/10"
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gray-900 rounded-lg mr-3">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-400">{skillGroup.category}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="flex flex-col items-center justify-center bg-gray-900 border border-gray-800 hover:border-blue-500 rounded-lg p-4 min-w-[80px] cursor-default transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                    whileHover={{ scale: 1.08, y: -2 }}
                  >
                    <div className="text-3xl mb-2">
                      {item.icon}
                    </div>
                    <span className="text-xs text-gray-400 text-center">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
