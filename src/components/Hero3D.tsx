'use client';

import React from 'react';

// Lightweight SVG-based visualization that mimics a small node graph.
export default function Hero3D() {
  return (
    <div className="w-full h-[420px] md:h-[520px] lg:h-[560px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#07111F]/60 to-transparent border border-slate-800 p-4">
      <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* connections */}
        <g stroke="#22d3ee" strokeOpacity="0.18" strokeWidth="1.8" strokeLinecap="round">
          <line x1="60" y1="160" x2="150" y2="80" />
          <line x1="150" y1="80" x2="280" y2="120" />
          <line x1="280" y1="120" x2="220" y2="220" />
        </g>

        {/* nodes */}
        <g filter="url(#soft)">
          <circle cx="60" cy="160" r="14" fill="#60a5fa" fillOpacity="0.95" />
          <circle cx="150" cy="80" r="12" fill="#22d3ee" fillOpacity="0.95" />
          <circle cx="280" cy="120" r="13" fill="#38bdf8" fillOpacity="0.95" />
          <circle cx="220" cy="220" r="11" fill="#a78bfa" fillOpacity="0.95" />
        </g>

        {/* labels */}
        <text x="60" y="188" fontSize="10" fill="#cfe9ff" textAnchor="middle">Cloud</text>
        <text x="150" y="108" fontSize="10" fill="#cfe9ff" textAnchor="middle">Identity</text>
        <text x="280" y="148" fontSize="10" fill="#cfe9ff" textAnchor="middle">Security</text>
        <text x="220" y="248" fontSize="10" fill="#cfe9ff" textAnchor="middle">Monitoring</text>

        {/* subtle animated particles (CSS handles motion) */}
        <circle className="particle pulse-1" cx="100" cy="130" r="2" fill="#22d3ee" />
        <circle className="particle pulse-2" cx="200" cy="100" r="2" fill="#60a5fa" />
        <circle className="particle pulse-3" cx="250" cy="180" r="2" fill="#a78bfa" />
      </svg>
    </div>
  );
}
