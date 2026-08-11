'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  fadeRate: number;
  color: string;
  maxLife: number;
  life: number;
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
    const particleCount = 45;
    const colors = ['#e46222', '#ff7834', '#ff4500', '#520701', '#ffa500'];

    const createParticle = (): Particle => ({
      x: Math.random() * width,
      y: height + Math.random() * 50,
      size: Math.random() * 2.5 + 0.8,
      speedY: -(Math.random() * 1.5 + 0.5),
      speedX: (Math.random() - 0.5) * 0.8,
      opacity: Math.random() * 0.8 + 0.2,
      fadeRate: Math.random() * 0.005 + 0.002,
      color: colors[Math.floor(Math.random() * colors.length)],
      maxLife: Math.random() * 200 + 100,
      life: 0,
    });

    for (let i = 0; i < particleCount; i++) {
      const p = createParticle();
      p.y = Math.random() * height; // distribute initially
      particles.push(p);
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle background ambient fire glow gradient at top & bottom
      const ambientGlow = ctx.createRadialGradient(
        width / 2,
        height * 0.3,
        50,
        width / 2,
        height * 0.3,
        width * 0.6
      );
      ambientGlow.addColorStop(0, 'rgba(228, 98, 34, 0.04)');
      ambientGlow.addColorStop(0.5, 'rgba(82, 7, 1, 0.03)');
      ambientGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = ambientGlow;
      ctx.fillRect(0, 0, width, height);

      // Render embers
      particles.forEach((p, index) => {
        p.life++;
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.life * 0.05) * 0.4;
        p.opacity -= p.fadeRate;

        if (p.opacity <= 0 || p.y < -10 || p.life >= p.maxLife) {
          particles[index] = createParticle();
        } else {
          ctx.save();
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = Math.max(0, p.opacity);
          ctx.shadowBlur = 12;
          ctx.shadowColor = p.color;
          ctx.fill();
          ctx.restore();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
