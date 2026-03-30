'use client';

import { motion } from 'framer-motion';

// Pre-computed stable positions — never recalculated on re-render
const PARTICLES = [
  { x: '8%',  y: '12%', color: 'bg-blue-400/40',   dur: 6.2,  delay: 0 },
  { x: '22%', y: '78%', color: 'bg-purple-400/40',  dur: 7.8,  delay: 1.1 },
  { x: '35%', y: '35%', color: 'bg-pink-400/40',    dur: 5.5,  delay: 0.4 },
  { x: '48%', y: '60%', color: 'bg-cyan-400/40',    dur: 8.1,  delay: 2.0 },
  { x: '62%', y: '18%', color: 'bg-indigo-400/40',  dur: 6.7,  delay: 0.7 },
  { x: '75%', y: '82%', color: 'bg-blue-400/40',    dur: 7.2,  delay: 1.5 },
  { x: '88%', y: '42%', color: 'bg-purple-400/40',  dur: 5.9,  delay: 0.3 },
  { x: '14%', y: '55%', color: 'bg-pink-400/40',    dur: 8.4,  delay: 2.3 },
  { x: '28%', y: '20%', color: 'bg-cyan-400/40',    dur: 6.0,  delay: 0.9 },
  { x: '55%', y: '90%', color: 'bg-indigo-400/40',  dur: 7.5,  delay: 1.7 },
  { x: '70%', y: '65%', color: 'bg-blue-400/40',    dur: 5.8,  delay: 0.5 },
  { x: '82%', y: '28%', color: 'bg-purple-400/40',  dur: 8.0,  delay: 2.1 },
  { x: '42%', y: '5%',  color: 'bg-pink-400/40',    dur: 6.5,  delay: 1.3 },
  { x: '5%',  y: '88%', color: 'bg-cyan-400/40',    dur: 7.1,  delay: 0.6 },
  { x: '95%', y: '75%', color: 'bg-indigo-400/40',  dur: 6.8,  delay: 1.9 },
];

const ORBS = [
  { top: '25%',  left: '-12%', size: 600, color: 'bg-blue-500/20',   blur: 'blur-[120px]', dx: [0,  60, 0], dy: [0, -40, 0], dur: 22 },
  { top: '33%',  right: '-12%', size: 700, color: 'bg-purple-500/18', blur: 'blur-[140px]', dx: [0, -50, 0], dy: [0,  55, 0], dur: 28 },
  { bottom: '25%', left: '33%', size: 550, color: 'bg-pink-500/15',   blur: 'blur-[110px]', dx: [0,  45, 0], dy: [0, -45, 0], dur: 25 },
  { bottom: '33%', right: '25%', size: 500, color: 'bg-cyan-500/16',  blur: 'blur-[100px]', dx: [0, -40, 0], dy: [0,  40, 0], dur: 30 },
];

const RINGS = [
  { left: '25%', top: '20%', size: 150, color: 'border-blue-500/20',   dur: 20 },
  { left: '40%', top: '32%', size: 200, color: 'border-purple-500/20', dur: 25 },
  { left: '55%', top: '44%', size: 250, color: 'border-pink-500/20',   dur: 30 },
  { left: '70%', top: '56%', size: 300, color: 'border-cyan-500/20',   dur: 35 },
];

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Background base */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black" />

      {/* Animated gradient overlays — opacity only, no scale/rotate → compositor-only */}
      <motion.div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(circle at 20% 30%, rgba(59,130,246,0.15) 0%, transparent 50%)', willChange: 'opacity' }}
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(circle at 80% 70%, rgba(168,85,247,0.12) 0%, transparent 50%)', willChange: 'opacity' }}
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(236,72,153,0.1) 0%, transparent 50%)', willChange: 'opacity' }}
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Animated orbs — translate only (GPU composited) */}
      {ORBS.map((orb, i) => (
        <motion.div
          key={`orb-${i}`}
          className={`absolute rounded-full ${orb.color} ${orb.blur}`}
          style={{
            width: orb.size,
            height: orb.size,
            ...(orb.top    ? { top: orb.top }       : {}),
            ...(orb.bottom ? { bottom: orb.bottom }  : {}),
            ...(orb.left   ? { left: orb.left }      : {}),
            ...(orb.right  ? { right: orb.right }    : {}),
            willChange: 'transform',
            transform: 'translateZ(0)',
          }}
          animate={{ x: orb.dx, y: orb.dy }}
          transition={{ duration: orb.dur, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Particles — translate + opacity only */}
      {PARTICLES.map((p, i) => (
        <motion.div
          key={`p-${i}`}
          className={`absolute w-2 h-2 rounded-full ${p.color} blur-sm`}
          style={{ left: p.x, top: p.y, willChange: 'transform, opacity', transform: 'translateZ(0)' }}
          animate={{ y: [0, -36, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: p.dur, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
        />
      ))}

      {/* Accent lines */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-px h-40 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent"
        style={{ willChange: 'opacity' }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-40 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
        style={{ willChange: 'opacity' }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-px h-32 bg-gradient-to-b from-transparent via-pink-500/50 to-transparent"
        style={{ willChange: 'opacity' }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />
      <motion.div
        className="absolute top-2/3 right-1/3 w-32 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
        style={{ willChange: 'opacity' }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />

      {/* Animated rings — opacity only, no rotation */}
      {RINGS.map((ring, i) => (
        <motion.div
          key={`ring-${i}`}
          className={`absolute rounded-full border ${ring.color}`}
          style={{
            left: ring.left,
            top: ring.top,
            width: ring.size,
            height: ring.size,
            willChange: 'opacity',
          }}
          animate={{ opacity: [0.15, 0.45, 0.15] }}
          transition={{ duration: ring.dur, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}
