"use client";
import { useEffect, useRef, useState } from 'react';

export default function InteractiveCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    function onMove(e: MouseEvent) {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (ringRef.current) ringRef.current.style.opacity = '0.95';
    }

    function onDown() { setActive(true); }
    function onUp() { setActive(false); }

    function onEnter(e: Event) {
      const el = e.target as HTMLElement;
      const cursor = el?.dataset?.cursor;
      if (cursor) setHovering(true);
    }
    function onLeave(e: Event) {
      const el = e.target as HTMLElement;
      const cursor = el?.dataset?.cursor;
      if (cursor) setHovering(false);
    }

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup', onUp);
    document.addEventListener('mouseover', onEnter);
    document.addEventListener('mouseout', onLeave);

    const loop = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.18;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.18;
      const x = pos.current.x;
      const y = pos.current.y;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x - 4}px, ${y - 4}px, 0)`;
      }
      if (ringRef.current) {
        const scale = hovering ? 1.45 : active ? 0.9 : 1;
        ringRef.current.style.transform = `translate3d(${x - 22}px, ${y - 22}px, 0) scale(${scale})`;
        ringRef.current.style.opacity = hovering ? '1' : '0.85';
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout', onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [hovering, active]);

  return (
    <>
      <div ref={ringRef} className={`cursor-ring ${hovering ? 'cursor--hover' : ''} ${active ? 'cursor--active' : ''}`} aria-hidden />
      <div ref={dotRef} className="cursor-dot" aria-hidden />
    </>
  );
}
