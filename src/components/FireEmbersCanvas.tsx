'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
  color: string;
  alpha: number;
  decay: number;
}

export default function FireEmbersCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const particles: Particle[] = [];
    const colors = ['#ffffff', '#ff9e42', '#e46222', '#b83f09', '#520701'];

    // Mouse Tracking for Cursor Flame Trail
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      // Spawn subtle flame trail sparks at cursor
      for (let i = 0; i < 3; i++) {
        particles.push({
          x: x + (Math.random() - 0.5) * 8,
          y: y + (Math.random() - 0.5) * 8,
          vx: (Math.random() - 0.5) * 1.2,
          vy: -(Math.random() * 2 + 1),
          size: Math.random() * 6 + 4,
          life: 0,
          maxLife: Math.random() * 30 + 20,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 0.9,
          decay: Math.random() * 0.03 + 0.02,
        });
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const x = e.touches[0].clientX;
        const y = e.touches[0].clientY;
        for (let i = 0; i < 3; i++) {
          particles.push({
            x: x + (Math.random() - 0.5) * 8,
            y: y + (Math.random() - 0.5) * 8,
            vx: (Math.random() - 0.5) * 1.2,
            vy: -(Math.random() * 2 + 1),
            size: Math.random() * 6 + 4,
            life: 0,
            maxLife: Math.random() * 30 + 20,
            color: colors[Math.floor(Math.random() * colors.length)],
            alpha: 0.9,
            decay: Math.random() * 0.03 + 0.02,
          });
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    // Sequential Periodic Flame Plumes rising from bottom
    let lastPlumeTime = Date.now();

    const spawnSequentialFlamePlume = () => {
      const plumeX = Math.random() * (width - 100) + 50;
      const count = Math.floor(Math.random() * 15 + 15);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: plumeX + (Math.random() - 0.5) * 40,
          y: height + Math.random() * 20,
          vx: (Math.random() - 0.5) * 1.8,
          vy: -(Math.random() * 4 + 2.5),
          size: Math.random() * 12 + 8,
          life: 0,
          maxLife: Math.random() * 60 + 40,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 0.8,
          decay: Math.random() * 0.015 + 0.01,
        });
      }
    };

    // Ambient floating background embers
    const ambientEmbers: Particle[] = [];
    for (let i = 0; i < 35; i++) {
      ambientEmbers.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: -(Math.random() * 1.2 + 0.3),
        size: Math.random() * 3 + 1,
        life: 0,
        maxLife: Math.random() * 180 + 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.6 + 0.2,
        decay: Math.random() * 0.005 + 0.002,
      });
    }

    // Animation Render Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const now = Date.now();
      // Periodically trigger a soft rising flame plume every 2.5 seconds
      if (now - lastPlumeTime > 2500) {
        spawnSequentialFlamePlume();
        lastPlumeTime = now;
      }

      // Draw ambient background embers
      for (let i = 0; i < ambientEmbers.length; i++) {
        const e = ambientEmbers[i];
        e.life++;
        e.y += e.vy;
        e.x += e.vx + Math.sin(e.life * 0.04) * 0.3;
        e.alpha -= e.decay;

        if (e.alpha <= 0 || e.y < -10 || e.life >= e.maxLife) {
          ambientEmbers[i] = {
            x: Math.random() * width,
            y: height + 10,
            vx: (Math.random() - 0.5) * 0.6,
            vy: -(Math.random() * 1.2 + 0.3),
            size: Math.random() * 3 + 1,
            life: 0,
            maxLife: Math.random() * 180 + 100,
            color: colors[Math.floor(Math.random() * colors.length)],
            alpha: Math.random() * 0.6 + 0.2,
            decay: Math.random() * 0.005 + 0.002,
          };
        } else {
          ctx.save();
          ctx.beginPath();
          ctx.arc(e.x, e.y, e.size, 0, Math.PI * 2);
          ctx.fillStyle = e.color;
          ctx.globalAlpha = Math.max(0, e.alpha);
          ctx.shadowBlur = 8;
          ctx.shadowColor = e.color;
          ctx.fill();
          ctx.restore();
        }
      }

      // Draw active cursor flame trail & sequential flame particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.alpha -= p.decay;
        p.size *= 0.96; // gracefully shrink
        p.x += p.vx + Math.sin(p.life * 0.1) * 0.5;
        p.y += p.vy;

        if (p.alpha <= 0 || p.size <= 0.5 || p.life >= p.maxLife) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.globalCompositeOperation = 'lighter';
        ctx.shadowBlur = p.size * 2;
        ctx.shadowColor = '#e46222';
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30"
      aria-hidden="true"
    />
  );
}
