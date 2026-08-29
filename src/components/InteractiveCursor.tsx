"use client";
import { useEffect, useRef, useState } from 'react';

export default function InteractiveCursor() {
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  // Avoid React state for high-frequency values — use refs to prevent re-renders
  const hoveringRef = useRef(false);
  const activeRef = useRef(false);
  const previewRef = useRef<HTMLImageElement | null>(null);
  const previewSrc = useRef<string | null>(null);
  const showPreviewRef = useRef(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mq = window.matchMedia('(pointer: fine)');
      const set = () => setEnabled(mq.matches);
      set();
      if (mq.addEventListener) mq.addEventListener('change', set);
      else mq.addListener(set);
      return () => {
        if (mq.removeEventListener) mq.removeEventListener('change', set);
        else mq.removeListener(set);
      };
    }
  }, []);

  useEffect(() => {
    if (!enabled) return;
    function onMove(e: MouseEvent) {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (ringRef.current) ringRef.current.style.opacity = '0.95';
    }

    function onDown() { activeRef.current = true; }
    function onUp() { activeRef.current = false; }

    function onEnter(e: Event) {
      const el = e.target as HTMLElement;
      const cursor = el?.dataset?.cursor;
      if (cursor) hoveringRef.current = true;
      const preview = el?.dataset?.preview;
      if (preview) {
        previewSrc.current = preview;
        showPreviewRef.current = true;
        if (previewRef.current) previewRef.current.src = preview;
      }
    }
    function onLeave(e: Event) {
      const el = e.target as HTMLElement;
      const cursor = el?.dataset?.cursor;
      if (cursor) hoveringRef.current = false;
      const preview = el?.dataset?.preview;
      if (preview) {
        previewSrc.current = null;
        showPreviewRef.current = false;
        if (previewRef.current) previewRef.current.src = '';
      }
    }

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup', onUp);
    document.addEventListener('mouseover', onEnter);
    document.addEventListener('mouseout', onLeave);

    // Temporarily disable heavy cursor effects while scrolling to avoid jank
    let scrollTimer: number | null = null;
    function onScroll() {
      document.documentElement.classList.add('disable-cursor-effects');
      // hide preview during scroll
      showPreviewRef.current = false;
      if (previewRef.current) previewRef.current.style.opacity = '0';
      if (scrollTimer) window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(() => {
        document.documentElement.classList.remove('disable-cursor-effects');
        scrollTimer = null;
      }, 160);
    }
    document.addEventListener('scroll', onScroll, { passive: true });

    const loop = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.18;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.18;
      const x = pos.current.x;
      const y = pos.current.y;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x - 4}px, ${y - 4}px, 0)`;
      }
      if (ringRef.current) {
        const scale = hoveringRef.current ? 1.45 : activeRef.current ? 0.9 : 1;
        ringRef.current.style.transform = `translate3d(${x - 22}px, ${y - 22}px, 0) scale(${scale})`;
        ringRef.current.style.opacity = hoveringRef.current ? '1' : '0.85';
      }
      if (previewRef.current) {
        // follow at an offset to the right-bottom so native cursor remains visible
        const px = x + 40; // more offset to avoid overlap
        const py = y + 28;
        previewRef.current.style.transform = `translate3d(${px}px, ${py}px, 0)`;
        previewRef.current.style.opacity = showPreviewRef.current ? '1' : '0';
        previewRef.current.style.borderColor = hoveringRef.current ? 'rgba(6,182,212,0.28)' : 'rgba(124,58,237,0.14)';
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
      document.removeEventListener('scroll', onScroll);
      if (scrollTimer) window.clearTimeout(scrollTimer);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden />
      <div ref={dotRef} className="cursor-dot" aria-hidden />
      <img ref={previewRef} className="cursor-preview" src="" alt="preview" aria-hidden />
    </>
  );
}
