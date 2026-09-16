'use client';

import React, { useEffect, useRef } from 'react';

interface CursorSpark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
}

export default function FireEmbersCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Only run on desktop/pointing devices to save mobile battery
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    if (!ctx) return;

    let animId: number | null = null;
    let isRunning = false;
    let lastX = 0;
    let lastY = 0;
    let lastTime = 0;

    // Cap resolution at 1x to avoid retina canvas performance drop
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const sparks: CursorSpark[] = [];
    const colors = ['#ffffff', '#ffcf66', '#ff8c33', '#e46222', '#b33000'];

    const spawnSparks = (x: number, y: number) => {
      // Spawn only 2-3 light sparks per move
      const count = 2;
      for (let i = 0; i < count; i++) {
        if (sparks.length > 30) {
          sparks.shift(); // keep particle count capped
        }
        sparks.push({
          x: x + (Math.random() - 0.5) * 6,
          y: y + (Math.random() - 0.5) * 6,
          vx: (Math.random() - 0.5) * 1.0,
          vy: -(Math.random() * 1.8 + 0.8), // rise upward
          size: Math.random() * 4 + 2.5,
          alpha: 0.95,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }

      // Wake up the render loop if sleeping
      if (!isRunning) {
        isRunning = true;
        animId = requestAnimationFrame(loop);
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      // Throttle spawn to max ~60 times/sec to prevent event flood
      if (now - lastTime > 16) {
        lastTime = now;
        const dx = e.clientX - lastX;
        const dy = e.clientY - lastY;
        // Only spawn if mouse actually moved more than 2px
        if (dx * dx + dy * dy > 4) {
          lastX = e.clientX;
          lastY = e.clientY;
          spawnSparks(e.clientX, e.clientY);
        }
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    const loop = () => {
      if (sparks.length === 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        isRunning = false;
        animId = null;
        return; // Sleep until next mouse move! Zero CPU usage when idle.
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'lighter';

      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.size *= 0.94; // shrink smoothly
        s.alpha -= 0.04; // fade quickly

        if (s.alpha <= 0.05 || s.size <= 0.5) {
          sparks.splice(i, 1);
          continue;
        }

        ctx.globalAlpha = s.alpha;
        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = 'source-over';
      animId = requestAnimationFrame(loop);
    };

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      aria-hidden="true"
    />
  );
}
