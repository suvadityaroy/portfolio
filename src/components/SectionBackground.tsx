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
      <div
        className={`absolute inset-0 bg-gradient-to-br ${colors.gradient1} opacity-60 animate-pulse-custom`}
        style={{ '--dur': '25s', '--op-start': 0.4, '--op-mid': 0.7 } as React.CSSProperties}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-tr ${colors.gradient2} animate-pulse-custom`}
        style={{ '--dur': '30s', '--op-start': 0.25, '--op-mid': 0.5 } as React.CSSProperties}
      />

      {/* Large blurred orbs — translate only */}
      <div
        className={`absolute -top-32 -left-32 w-[600px] h-[600px] ${colors.orb1} rounded-full blur-[100px] animate-orb`}
        style={{ '--dx': '70px', '--dy': '-35px', '--dur': '35s' } as React.CSSProperties}
      />
      <div
        className={`absolute -bottom-32 -right-32 w-[700px] h-[700px] ${colors.orb2} rounded-full blur-[120px] animate-orb`}
        style={{ '--dx': '-55px', '--dy': '55px', '--dur': '40s' } as React.CSSProperties}
      />
      <div className="absolute top-1/2 left-1/2 w-0 h-0">
        <div
          className={`absolute -left-[250px] -top-[250px] w-[500px] h-[500px] ${colors.orb3} rounded-full blur-[90px] animate-orb`}
          style={{ '--dx': '35px', '--dy': '-45px', '--dur': '32s' } as React.CSSProperties}
        />
      </div>

      {/* Particles — pre-computed positions, translate + opacity only */}
      {PARTICLE_POSITIONS.map((pos, i) => (
        <div
          key={i}
          className={`absolute w-1 h-1 ${colors.particles} rounded-full blur-[2px] animate-particle`}
          style={{ 
            left: pos.x, 
            top: pos.y, 
            '--dx': `${PARTICLE_ANIMATIONS[i].dx}px`,
            '--dy': `${PARTICLE_ANIMATIONS[i].dy}px`,
            '--dur': `${PARTICLE_ANIMATIONS[i].dur}s`,
            '--delay': `${PARTICLE_ANIMATIONS[i].delay}s`,
            '--op-start': 0.2,
            '--op-mid': 0.5
          } as React.CSSProperties}
        />
      ))}

      {/* Accent lines — opacity only */}
      <div
        className={`absolute top-1/4 right-1/3 w-px h-20 ${colors.orb1} blur-sm animate-pulse-custom`}
        style={{ '--dur': '4s', '--op-start': 0, '--op-mid': 0.3 } as React.CSSProperties}
      />
      <div
        className={`absolute bottom-1/3 left-1/4 w-20 h-px ${colors.orb2} blur-sm animate-pulse-custom`}
        style={{ '--dur': '5s', '--delay': '1s', '--op-start': 0, '--op-mid': 0.3 } as React.CSSProperties}
      />
    </div>
  );
}
