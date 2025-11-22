'use client';

import { motion } from 'framer-motion';

interface SectionBackgroundProps {
  variant?: 'blue' | 'indigo' | 'violet' | 'cyan' | 'teal' | 'emerald';
}

export default function SectionBackground({ variant = 'blue' }: SectionBackgroundProps) {
  const getColors = () => {
    switch (variant) {
      case 'blue':
        return {
          gradient1: 'from-blue-500/8 to-cyan-500/8',
          gradient2: 'from-sky-500/6 to-blue-500/6',
          orb1: 'bg-blue-500/15',
          orb2: 'bg-cyan-500/15',
          orb3: 'bg-sky-500/12',
          particles: 'bg-blue-400/20',
        };
      case 'indigo':
        return {
          gradient1: 'from-indigo-500/8 to-purple-500/8',
          gradient2: 'from-violet-500/6 to-indigo-500/6',
          orb1: 'bg-indigo-500/15',
          orb2: 'bg-purple-500/15',
          orb3: 'bg-violet-500/12',
          particles: 'bg-indigo-400/20',
        };
      case 'violet':
        return {
          gradient1: 'from-violet-500/8 to-fuchsia-500/8',
          gradient2: 'from-purple-500/6 to-violet-500/6',
          orb1: 'bg-violet-500/15',
          orb2: 'bg-fuchsia-500/15',
          orb3: 'bg-purple-500/12',
          particles: 'bg-violet-400/20',
        };
      case 'cyan':
        return {
          gradient1: 'from-cyan-500/8 to-teal-500/8',
          gradient2: 'from-sky-500/6 to-cyan-500/6',
          orb1: 'bg-cyan-500/15',
          orb2: 'bg-teal-500/15',
          orb3: 'bg-sky-500/12',
          particles: 'bg-cyan-400/20',
        };
      case 'teal':
        return {
          gradient1: 'from-teal-500/8 to-emerald-500/8',
          gradient2: 'from-green-500/6 to-teal-500/6',
          orb1: 'bg-teal-500/15',
          orb2: 'bg-emerald-500/15',
          orb3: 'bg-green-500/12',
          particles: 'bg-teal-400/20',
        };
      case 'emerald':
        return {
          gradient1: 'from-emerald-500/8 to-green-500/8',
          gradient2: 'from-teal-500/6 to-emerald-500/6',
          orb1: 'bg-emerald-500/15',
          orb2: 'bg-green-500/15',
          orb3: 'bg-teal-500/12',
          particles: 'bg-emerald-400/20',
        };
    }
  };

  const colors = getColors();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Animated gradient waves */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${colors.gradient1} opacity-60`}
        animate={{
          scale: [1, 1.08, 1],
          rotate: [0, 3, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className={`absolute inset-0 bg-gradient-to-tr ${colors.gradient2} opacity-40`}
        animate={{
          scale: [1.08, 1, 1.08],
          rotate: [0, -3, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Large blurred orbs - more subtle */}
      <motion.div
        className={`absolute -top-32 -left-32 w-[600px] h-[600px] ${colors.orb1} rounded-full blur-[100px]`}
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className={`absolute -bottom-32 -right-32 w-[700px] h-[700px] ${colors.orb2} rounded-full blur-[120px]`}
        animate={{
          x: [0, -60, 0],
          y: [0, 60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className={`absolute top-1/2 left-1/2 w-[500px] h-[500px] ${colors.orb3} rounded-full blur-[90px] -translate-x-1/2 -translate-y-1/2`}
        animate={{
          x: [0, 40, 0],
          y: [0, -50, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Subtle floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 ${colors.particles} rounded-full blur-[2px]`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -25, 0],
            x: [0, Math.random() * 15 - 7.5, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Subtle accent lines */}
      <motion.div
        className={`absolute top-1/4 right-1/3 w-px h-20 ${colors.orb1} blur-sm`}
        animate={{
          opacity: [0, 0.3, 0],
          scaleY: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className={`absolute bottom-1/3 left-1/4 w-20 h-px ${colors.orb2} blur-sm`}
        animate={{
          opacity: [0, 0.3, 0],
          scaleX: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
}
