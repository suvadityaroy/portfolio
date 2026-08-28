import React from 'react';

export default function HeroAnimation() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-rotate-slow">
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop stopColor="#7C3AED" offset="0" />
            <stop stopColor="#06B6D4" offset="1" />
          </linearGradient>
        </defs>
        <g transform="translate(110,110)">
          <circle cx="0" cy="0" r="78" fill="url(#g1)" opacity="0.06" />
          <g>
            <circle cx="0" cy="0" r="46" fill="transparent" stroke="url(#g1)" strokeWidth="3" opacity="0.9" />
            <path d="M0 -38 L9 -24 L24 -20 L12 -9 L14 9 L0 2 L-14 9 L-12 -9 L-24 -20 L-9 -24 Z" fill="url(#g1)" opacity="0.95">
              <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="9s" repeatCount="indefinite" />
            </path>
          </g>

          <g>
            <circle cx="-64" cy="-64" r="6" fill="#7C3AED">
              <animate attributeName="r" values="6;12;6" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="72" cy="54" r="5" fill="#06B6D4">
              <animate attributeName="r" values="5;10;5" dur="4s" repeatCount="indefinite" />
            </circle>
          </g>
        </g>
      </svg>
      <style jsx>{`
        .animate-rotate-slow { transform-origin: center; }
        @keyframes slow-rot { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-rotate-slow { animation: slow-rot 18s linear infinite; }
      `}</style>
    </div>
  );
}
