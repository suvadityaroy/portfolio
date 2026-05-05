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

    // alpha: true (default) — canvas is transparent, body/html provides page background
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    let mouseX = width / 2;
    let mouseY = height / 2;
    let isMouseIn = false;
    let pendingMouseFrame: number | null = null;

    const setSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    setSize();
    window.addEventListener('resize', setSize, { passive: true });

    // Throttle mousemove with requestAnimationFrame
    const handleMouseMove = (e: MouseEvent) => {
      if (pendingMouseFrame !== null) return;
      pendingMouseFrame = requestAnimationFrame(() => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        isMouseIn = true;
        pendingMouseFrame = null;
      });
    };
    const handleMouseLeave = () => { isMouseIn = false; };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseout', handleMouseLeave, { passive: true });

    // Fewer particles on mobile for performance
    const isMobile = width < 768;
    const numParticles = isMobile
      ? Math.min(Math.floor((width * height) / 30000), 35)
      : Math.min(Math.floor((width * height) / 15000), 70);

    const particles: Particle[] = [];
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        size: Math.random() * 1.8 + 0.8,
      });
    }

    const orbs: Orb[] = isDark ? [
      { x: width * 0.2, y: height * 0.2, vx: 0.2, vy: -0.1, radius: 400, color: { r: 56, g: 189, b: 248 } },
      { x: width * 0.8, y: height * 0.8, vx: -0.15, vy: 0.2, radius: 500, color: { r: 79, g: 70, b: 229 } },
      { x: width * 0.5, y: height * 0.5, vx: 0.1, vy: 0.1, radius: 350, color: { r: 99, g: 102, b: 241 } },
    ] : [
      { x: width * 0.2, y: height * 0.2, vx: 0.2, vy: -0.1, radius: 350, color: { r: 99, g: 102, b: 241 } },
      { x: width * 0.8, y: height * 0.8, vx: -0.15, vy: 0.2, radius: 420, color: { r: 139, g: 92, b: 246 } },
      { x: width * 0.5, y: height * 0.5, vx: 0.1, vy: 0.1, radius: 300, color: { r: 124, g: 58, b: 237 } },
    ];

    const particleColor = isDark ? '100, 150, 250' : '99, 102, 241';
    const orbAlpha     = isDark ? 0.05 : 0.035;
    const particleAlpha = isDark ? 0.30 : 0.28;
    const lineAlpha    = isDark ? 0.14 : 0.13;

    const render = () => {
      // Clear to transparent — the html/body CSS background provides the page color
      ctx.clearRect(0, 0, width, height);

      // Draw orbs
      orbs.forEach(orb => {
        orb.x += orb.vx;
        orb.y += orb.vy;
        if (orb.x < -orb.radius || orb.x > width + orb.radius) orb.vx *= -1;
        if (orb.y < -orb.radius || orb.y > height + orb.radius) orb.vy *= -1;

        const g = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
        g.addColorStop(0, `rgba(${orb.color.r},${orb.color.g},${orb.color.b},${orbAlpha})`);
        g.addColorStop(1, `rgba(${orb.color.r},${orb.color.g},${orb.color.b},0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw particles and connections
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse repel (desktop only)
        if (isMouseIn && !isMobile) {
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const distSq = dx * dx + dy * dy;
          const maxDist = 160;
          if (distSq < maxDist * maxDist) {
            const dist = Math.sqrt(distSq);
            const force = (maxDist - dist) / maxDist;
            p.x -= (dx / dist) * force * 1.4;
            p.y -= (dy / dist) * force * 1.4;
          }
        }

        ctx.fillStyle = `rgba(${particleColor},${particleAlpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < 120 * 120) {
            const dist = Math.sqrt(distSq);
            ctx.strokeStyle = `rgba(${particleColor},${(1 - dist / 120) * lineAlpha})`;
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
      if (pendingMouseFrame !== null) cancelAnimationFrame(pendingMouseFrame);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
}
