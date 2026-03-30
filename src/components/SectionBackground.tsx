'use client';

import { motion } from 'framer-motion';

interface SectionBackgroundProps {
  variant?: 'blue' | 'indigo' | 'violet' | 'cyan' | 'teal' | 'emerald';
}

// Pre-computed stable positions for particles — no Math.random() in render
const PARTICLE_POSITIONS = [
  { x: '15%',  y: '25%' },
  { x: '38%',  y: '70%' },
  { x: '62%',  y: '15%' },
  { x: '80%',  y: '55%' },
  { x: '28%',  y: '88%' },
  { x: '92%',  y: '38%' },
];

const PARTICLE_ANIMATIONS = [
  { dy: -22, dx: 5,  dur: 7.2, delay: 0 },
  { dy: -18, dx: -4, dur: 8.5, delay: 1.2 },
  { dy: -25, dx: 7,  dur: 6.8, delay: 0.5 },
  { dy: -20, dx: -6, dur: 9.0, delay: 2.0 },
  { dy: -15, dx: 4,  dur: 7.8, delay: 0.8 },
  { dy: -24, dx: -5, dur: 8.2, delay: 1.6 },
];

export default function SectionBackground({ variant = 'blue' }: SectionBackgroundProps) {
  const getColors = () => {
    switch (variant) {
      case 'blue':    return { gradient1: 'from-blue-500/8 to-cyan-500/8',     gradient2: 'from-sky-500/6 to-blue-500/6',    orb1: 'bg-blue-500/15',    orb2: 'bg-cyan-500/15',    orb3: 'bg-sky-500/12',     particles: 'bg-blue-400/20'    };
      case 'indigo':  return { gradient1: 'from-indigo-500/8 to-purple-500/8', gradient2: 'from-violet-500/6 to-indigo-500/6',orb1: 'bg-indigo-500/15',  orb2: 'bg-purple-500/15',  orb3: 'bg-violet-500/12',  particles: 'bg-indigo-400/20'  };
      case 'violet':  return { gradient1: 'from-violet-500/8 to-fuchsia-500/8',gradient2: 'from-purple-500/6 to-violet-500/6',orb1: 'bg-violet-500/15',  orb2: 'bg-fuchsia-500/15', orb3: 'bg-purple-500/12',  particles: 'bg-violet-400/20'  };
      case 'cyan':    return { gradient1: 'from-cyan-500/8 to-teal-500/8',     gradient2: 'from-sky-500/6 to-cyan-500/6',    orb1: 'bg-cyan-500/15',    orb2: 'bg-teal-500/15',    orb3: 'bg-sky-500/12',     particles: 'bg-cyan-400/20'    };
      case 'teal':    return { gradient1: 'from-teal-500/8 to-emerald-500/8',  gradient2: 'from-green-500/6 to-teal-500/6',  orb1: 'bg-teal-500/15',    orb2: 'bg-emerald-500/15', orb3: 'bg-green-500/12',   particles: 'bg-teal-400/20'    };
      case 'emerald': return { gradient1: 'from-emerald-500/8 to-green-500/8', gradient2: 'from-teal-500/6 to-emerald-500/6',orb1: 'bg-emerald-500/15', orb2: 'bg-green-500/15',   orb3: 'bg-teal-500/12',    particles: 'bg-emerald-400/20' };
    }
  };

  const colors = getColors();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Animated gradient overlays — opacity only (no rotate/scale) */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${colors.gradient1} opacity-60`}
        style={{ willChange: 'opacity' }}
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className={`absolute inset-0 bg-gradient-to-tr ${colors.gradient2}`}
        style={{ willChange: 'opacity' }}
        animate={{ opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Large blurred orbs — translate only */}
      <motion.div
        className={`absolute -top-32 -left-32 w-[600px] h-[600px] ${colors.orb1} rounded-full blur-[100px]`}
        style={{ willChange: 'transform', transform: 'translateZ(0)' }}
        animate={{ x: [0, 70, 0], y: [0, -35, 0] }}
        transition={{ duration: 35, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className={`absolute -bottom-32 -right-32 w-[700px] h-[700px] ${colors.orb2} rounded-full blur-[120px]`}
        style={{ willChange: 'transform', transform: 'translateZ(0)' }}
        animate={{ x: [0, -55, 0], y: [0, 55, 0] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className={`absolute top-1/2 left-1/2 w-[500px] h-[500px] ${colors.orb3} rounded-full blur-[90px] -translate-x-1/2 -translate-y-1/2`}
        style={{ willChange: 'transform', transform: 'translate(-50%, -50%) translateZ(0)' }}
        animate={{ x: [0, 35, 0], y: [0, -45, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Particles — pre-computed positions, translate + opacity only */}
      {PARTICLE_POSITIONS.map((pos, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 ${colors.particles} rounded-full blur-[2px]`}
          style={{ left: pos.x, top: pos.y, willChange: 'transform, opacity', transform: 'translateZ(0)' }}
          animate={{
            y: [0, PARTICLE_ANIMATIONS[i].dy, 0],
            x: [0, PARTICLE_ANIMATIONS[i].dx, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: PARTICLE_ANIMATIONS[i].dur, repeat: Infinity, delay: PARTICLE_ANIMATIONS[i].delay, ease: 'easeInOut' }}
        />
      ))}

      {/* Accent lines — opacity only */}
      <motion.div
        className={`absolute top-1/4 right-1/3 w-px h-20 ${colors.orb1} blur-sm`}
        style={{ willChange: 'opacity' }}
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className={`absolute bottom-1/3 left-1/4 w-20 h-px ${colors.orb2} blur-sm`}
        style={{ willChange: 'opacity' }}
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
    </div>
  );
}
