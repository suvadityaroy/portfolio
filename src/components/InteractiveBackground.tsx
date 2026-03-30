'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

interface Orb {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: { r: number; g: number; b: number };
}

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false }); // Optimize by making canvas opaque if we draw background manually, wait no, let's keep alpha true so we can layer it over the solid CSS background
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Mouse coordinates (default to center)
    let mouseX = width / 2;
    let mouseY = height / 2;
    let isMouseIn = false;

    const setSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    setSize();
    window.addEventListener('resize', setSize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMouseIn = true;
    };
    const handleMouseLeave = () => {
      isMouseIn = false;
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    // Initialize Particles
    const numParticles = Math.min(Math.floor((width * height) / 15000), 80); // scale up with screen
    const particles: Particle[] = [];
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 2 + 1,
      });
    }

    // Initialize Orbs (fluid glowing blobs)
    const orbs: Orb[] = isDark ? [
      { x: width * 0.2, y: height * 0.2, vx: 0.2, vy: -0.1, radius: 400, color: { r: 56, g: 189, b: 248 } }, // sky-400
      { x: width * 0.8, y: height * 0.8, vx: -0.15, vy: 0.2, radius: 500, color: { r: 79, g: 70, b: 229 } }, // indigo-600
      { x: width * 0.5, y: height * 0.5, vx: 0.1, vy: 0.1, radius: 350, color: { r: 99, g: 102, b: 241 } }  // indigo-500
    ] : [
      { x: width * 0.2, y: height * 0.2, vx: 0.2, vy: -0.1, radius: 400, color: { r: 99, g: 102, b: 241 } }, // indigo-500
      { x: width * 0.8, y: height * 0.8, vx: -0.15, vy: 0.2, radius: 500, color: { r: 167, g: 139, b: 250 } }, // violet-400
      { x: width * 0.5, y: height * 0.5, vx: 0.1, vy: 0.1, radius: 350, color: { r: 124, g: 58, b: 237 } }  // violet-600
    ];

    const particleColor = isDark ? '100, 150, 250' : '99, 102, 241';

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Orbs
      orbs.forEach(orb => {
        orb.x += orb.vx;
        orb.y += orb.vy;

        // Bounce off walls gently
        if (orb.x < -orb.radius || orb.x > width + orb.radius) orb.vx *= -1;
        if (orb.y < -orb.radius || orb.y > height + orb.radius) orb.vy *= -1;

        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
        gradient.addColorStop(0, `rgba(${orb.color.r}, ${orb.color.g}, ${orb.color.b}, ${isDark ? 0.08 : 0.06})`);
        gradient.addColorStop(1, `rgba(${orb.color.r}, ${orb.color.g}, ${orb.color.b}, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Draw Subtle Grid Pattern
      ctx.strokeStyle = isDark ? 'rgba(56, 189, 248, 0.03)' : 'rgba(99, 102, 241, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 60;
      ctx.beginPath();
      for (let x = 0; x < width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // 3. Update & Draw Particles
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse interaction (repel)
        if (isMouseIn) {
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 180;
          
          if (distance < maxDist) {
            const force = (maxDist - distance) / maxDist;
            p.x -= (dx / distance) * force * 1.5;
            p.y -= (dy / distance) * force * 1.5;
          }
        }

        // Draw particle
        ctx.fillStyle = `rgba(${particleColor}, ${isDark ? 0.4 : 0.6})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.strokeStyle = `rgba(${particleColor}, ${(1 - dist / 120) * (isDark ? 0.2 : 0.3)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', setSize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none transition-opacity duration-1000 ${isDark ? 'opacity-100' : 'opacity-80'}`}
      style={{ zIndex: -1 }} // Place it in the background
    />
  );
}
