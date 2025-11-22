'use client';

import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Background base */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black" />
      
      {/* Animated gradient overlays */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.12) 0%, transparent 50%)',
        }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)',
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Animated colorful light beams */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.15), rgba(168, 85, 247, 0.12), transparent)',
        }}
        animate={{
          x: ['-100%', '200%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.12), transparent)',
        }}
        animate={{
          x: ['100%', '-100%'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(45deg, transparent, rgba(6, 182, 212, 0.08), transparent)',
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Colorful animated orbs */}
      <motion.div
        className="absolute top-1/4 -left-48 w-[600px] h-[600px] rounded-full blur-[120px] bg-blue-500/20"
        animate={{
          x: [0, 80, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-1/3 -right-48 w-[700px] h-[700px] rounded-full blur-[140px] bg-purple-500/18"
        animate={{
          x: [0, -60, 0],
          y: [0, 70, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/3 w-[550px] h-[550px] rounded-full blur-[110px] bg-pink-500/15"
        animate={{
          x: [0, 60, 0],
          y: [0, -60, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full blur-[100px] bg-cyan-500/16"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
          scale: [1, 1.15, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-1/2 left-1/4 w-[450px] h-[450px] rounded-full blur-[90px] bg-indigo-500/14"
        animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Colorful particles */}
      {[...Array(30)].map((_, i) => {
        const colors = ['bg-blue-400/40', 'bg-purple-400/40', 'bg-pink-400/40', 'bg-cyan-400/40', 'bg-indigo-400/40'];
        const randomColor = colors[i % colors.length];
        return (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${randomColor} blur-sm`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        );
      })}

      {/* Colorful accent lines */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-px h-40 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent"
        animate={{
          opacity: [0, 1, 0],
          scaleY: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-40 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
        animate={{
          opacity: [0, 1, 0],
          scaleX: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-px h-32 bg-gradient-to-b from-transparent via-pink-500/50 to-transparent"
        animate={{
          opacity: [0, 1, 0],
          scaleY: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      <motion.div
        className="absolute top-2/3 right-1/3 w-32 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
        animate={{
          opacity: [0, 1, 0],
          scaleX: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
      
      {/* Animated rings */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`ring-${i}`}
          className={`absolute rounded-full border ${
            i % 4 === 0 ? 'border-blue-500/20' :
            i % 4 === 1 ? 'border-purple-500/20' :
            i % 4 === 2 ? 'border-pink-500/20' :
            'border-cyan-500/20'
          }`}
          style={{
            left: `${25 + i * 15}%`,
            top: `${20 + i * 12}%`,
            width: `${150 + i * 50}px`,
            height: `${150 + i * 50}px`,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}
