'use client';

import { motion } from 'framer-motion';
import { Shield, Brain, Cloud, Wifi, Code } from 'lucide-react';
import Image from 'next/image';
import SectionBackground from './SectionBackground';

const features = [
  {
    icon: <Code className="w-8 h-8 text-blue-500" />,
    title: 'Software Engineering',
    description: 'Building robust, scalable applications using modern frameworks and best practices.'
  },
  {
    icon: <Shield className="w-8 h-8 text-green-500" />,
    title: 'Cybersecurity',
    description: 'Implementing secure coding practices and understanding threat landscapes.'
  },
  {
    icon: <Brain className="w-8 h-8 text-purple-500" />,
    title: 'Artificial Intelligence',
    description: 'Leveraging machine learning models to solve complex problems and automate tasks.'
  },
  {
    icon: <Cloud className="w-8 h-8 text-sky-500" />,
    title: 'Cloud Computing',
    description: 'Designing and deploying scalable, reliable, and secure cloud-native architectures.'
  },
  {
    icon: <Wifi className="w-8 h-8 text-orange-500" />,
    title: 'Internet of Things',
    description: 'Connecting physical devices to the digital world for smarter solutions.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-blue-950/30 via-slate-900 to-gray-900 relative overflow-hidden">
      <SectionBackground variant="blue" />
      
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
              I am a <span className="text-blue-400 font-semibold">Software Developer</span> with strong engineering fundamentals and hands-on experience in Cloud, Cybersecurity, AI tools, Blockchain, and IoT. I build scalable, secure, and high-performance systems with clean architecture and production-grade reliability.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              My work philosophy is simple: <span className="text-purple-400 font-semibold">build intentionally</span>, <span className="text-blue-400 font-semibold">automate wherever possible</span>, and deliver solutions that meet the standards of top-tier engineering teams.
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
