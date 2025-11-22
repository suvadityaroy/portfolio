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

      {/* Static gradient overlay - no animation for better performance */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient1} opacity-60`} />
      <div className={`absolute inset-0 bg-gradient-to-tr ${colors.gradient2} opacity-40`} />

      {/* Static subtle orbs without blur for performance */}
      <div className={`absolute -top-32 -left-32 w-[600px] h-[600px] ${colors.orb1} rounded-full opacity-10`} />
      <div className={`absolute -bottom-32 -right-32 w-[700px] h-[700px] ${colors.orb2} rounded-full opacity-10`} />
      <div className={`absolute top-1/2 left-1/2 w-[500px] h-[500px] ${colors.orb3} rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2`} />


    </div>
  );
}
