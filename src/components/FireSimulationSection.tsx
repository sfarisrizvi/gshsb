'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Flame, Play, Pause, Zap, RefreshCw, Sliders, Sparkles, MousePointer2 } from 'lucide-react';

export default function FireSimulationSection() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Control states
  const [isPlaying, setIsPlaying] = useState(true);
  const [intensity, setIntensity] = useState(65);
  const [turbulence, setTurbulence] = useState(1.2);
  const [emberCount, setEmberCount] = useState(150);

  // Internal refs for animation loop to avoid re-binding
  const paramsRef = useRef({ isPlaying, intensity, turbulence, emberCount });
  useEffect(() => {
    paramsRef.current = { isPlaying, intensity, turbulence, emberCount };
  }, [isPlaying, intensity, turbulence, emberCount]);

  // Burst trigger flag
  const burstRef = useRef(false);

  const handleBurst = () => {
    burstRef.current = true;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle Data Structure
    interface FlameParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number;
      maxLife: number;
      heat: number;
      decay: number;
    }

    let particles: FlameParticle[] = [];

    // Helper to spawn a flame particle
    const spawnParticle = (customX?: number, customY?: number, forceVx = 0, forceVy = 0): FlameParticle => {
      const x = customX !== undefined ? customX : Math.random() * width;
      const y = customY !== undefined ? customY : height + Math.random() * 10;
      const maxLife = Math.random() * 60 + 40;
      return {
        x,
        y,
        vx: forceVx || (Math.random() - 0.5) * 1.5,
        vy: forceVy || -(Math.random() * 3.5 + 2.0),
        size: Math.random() * 18 + 12,
        life: 0,
        maxLife,
        heat: 1.0,
        decay: Math.random() * 0.015 + 0.01,
      };
    };

    // Initialize base flame particles
    for (let i = 0; i < paramsRef.current.emberCount; i++) {
      const p = spawnParticle();
      p.y = height - Math.random() * height * 0.5;
      particles.push(p);
    }

    // Interaction handling (Mouse Drag / Move)
    let isMouseDown = false;

    const addMouseSplat = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      for (let i = 0; i < 8; i++) {
        const p = spawnParticle(
          mx + (Math.random() - 0.5) * 20,
          my + (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 4,
          -(Math.random() * 4 + 2)
        );
        particles.push(p);
      }
    };

    const onMouseDown = (e: MouseEvent) => {
      isMouseDown = true;
      addMouseSplat(e);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (isMouseDown) addMouseSplat(e);
    };

    const onMouseUp = () => {
      isMouseDown = false;
    };

    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Color mapper from heat ratio [0..1]
    const getFlameColor = (heat: number, alpha: number) => {
      if (heat > 0.8) {
        return `rgba(255, 255, 255, ${alpha})`;
      } else if (heat > 0.5) {
        return `rgba(255, 140, 66, ${alpha})`;
      } else if (heat > 0.25) {
        return `rgba(228, 98, 34, ${alpha})`;
      } else {
        return `rgba(82, 7, 1, ${alpha})`;
      }
    };

    // Animation Loop
    const render = () => {
      const { isPlaying, intensity, turbulence, emberCount } = paramsRef.current;

      // Dark background trail blur for liquid flame effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
      ctx.fillRect(0, 0, width, height);

      if (isPlaying) {
        // Continuous spawn from bottom based on intensity
        const spawnRate = Math.floor(intensity / 12);
        for (let i = 0; i < spawnRate; i++) {
          if (particles.length < emberCount * 3) {
            particles.push(spawnParticle());
          }
        }

        // Handle manual burst explosion
        if (burstRef.current) {
          for (let b = 0; b < 120; b++) {
            const bx = width / 2 + (Math.random() - 0.5) * width * 0.6;
            const by = height * 0.8;
            particles.push(spawnParticle(bx, by, (Math.random() - 0.5) * 8, -(Math.random() * 8 + 4)));
          }
          burstRef.current = false;
        }

        // Update and draw particles
        for (let i = particles.length - 1; i >= 0; i--) {
          const p = particles[i];
          p.life++;
          p.heat -= p.decay;

          // Turbulence wave motion
          p.vx += Math.sin(p.life * 0.08) * 0.15 * turbulence;
          p.vy -= 0.06; // buoyancy acceleration
          p.x += p.vx;
          p.y += p.vy;
          p.size *= 0.985; // shrink as it ascends

          if (p.heat <= 0 || p.size <= 1 || p.y < -20) {
            particles.splice(i, 1);
            continue;
          }

          // Render glowing flame circle
          ctx.save();
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = getFlameColor(p.heat, p.heat);
          ctx.globalCompositeOperation = 'lighter';
          ctx.shadowBlur = p.size * 1.5;
          ctx.shadowColor = '#e46222';
          ctx.fill();
          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousedown', onMouseDown);
      canvas.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="site-container relative z-10 my-16">
      <div className="glass-card p-8 sm:p-12 border border-[#e46222]/30 relative overflow-hidden space-y-8 shadow-[0_0_50px_rgba(228,98,34,0.2)]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#520701]/80 border border-[#e46222]/40 px-3.5 py-1 rounded-full text-xs font-semibold text-[#e46222] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>REAL-TIME WEBGL SIMULATOR</span>
            </div>
            <h2 className="font-epic text-3xl sm:text-5xl font-black text-white tracking-tight">
              INTERACTIVE <span className="text-gradient-flame">FIRE & FLUID SIMULATION</span>
            </h2>
          </div>
          <p className="text-xs text-gray-400 max-w-md">
            Click or drag across the black canvas to fan the flames. Adjust heat intensity, vortex turbulence, and ember count in real time.
          </p>
        </div>

        {/* Simulation Canvas + Controls Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Canvas Window */}
          <div className="lg:col-span-8 relative min-h-[420px] rounded-24 bg-black border border-white/10 overflow-hidden shadow-[inset_0_0_50px_rgba(0,0,0,0.9)] cursor-crosshair group">
            <canvas ref={canvasRef} className="w-full h-full block" />

            {/* Instruction Overlay */}
            <div className="absolute top-4 left-4 pointer-events-none flex items-center gap-2 bg-black/60 border border-white/10 px-3 py-1.5 rounded-full text-xs text-gray-300 backdrop-blur-md">
              <MousePointer2 className="w-3.5 h-3.5 text-[#e46222] animate-bounce" />
              <span>Click & Drag to ignite custom flames</span>
            </div>
          </div>

          {/* Controls Panel */}
          <div className="lg:col-span-4 glass-card-flame p-6 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-epic text-sm font-bold text-white flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-[#e46222]" />
                  FLAME ENGINE CONTROLS
                </span>
                <span className="text-[10px] font-mono text-emerald-400 border border-emerald-400/30 px-2 py-0.5 rounded">
                  60 FPS LIVE
                </span>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:border-[#e46222] py-2.5 rounded-xl text-xs font-semibold text-white transition-all"
                >
                  {isPlaying ? <Pause className="w-4 h-4 text-[#e46222]" /> : <Play className="w-4 h-4 text-[#e46222]" />}
                  <span>{isPlaying ? 'Pause' : 'Play'}</span>
                </button>

                <button
                  onClick={handleBurst}
                  className="flex items-center justify-center gap-2 bg-[#520701] border border-[#e46222] py-2.5 rounded-xl text-xs font-bold text-white shadow-[0_0_15px_rgba(228,98,34,0.4)] hover:scale-105 transition-all"
                >
                  <Zap className="w-4 h-4 text-[#e46222]" />
                  <span>Flame Burst</span>
                </button>
              </div>

              {/* Intensity Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-300 font-semibold">Heat Intensity</span>
                  <span className="font-mono text-[#e46222]">{intensity}%</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={intensity}
                  onChange={(e) => setIntensity(Number(e.target.value))}
                  className="w-full accent-[#e46222] bg-white/10 rounded-lg cursor-pointer h-2"
                />
              </div>

              {/* Turbulence Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-300 font-semibold">Vortex Turbulence</span>
                  <span className="font-mono text-[#e46222]">{turbulence}x</span>
                </div>
                <input
                  type="range"
                  min="0.2"
                  max="3.0"
                  step="0.1"
                  value={turbulence}
                  onChange={(e) => setTurbulence(Number(e.target.value))}
                  className="w-full accent-[#e46222] bg-white/10 rounded-lg cursor-pointer h-2"
                />
              </div>

              {/* Ember Count Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-300 font-semibold">Ember Density</span>
                  <span className="font-mono text-[#e46222]">{emberCount}</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="300"
                  step="10"
                  value={emberCount}
                  onChange={(e) => setEmberCount(Number(e.target.value))}
                  className="w-full accent-[#e46222] bg-white/10 rounded-lg cursor-pointer h-2"
                />
              </div>
            </div>

            {/* Quick Reset */}
            <button
              onClick={() => {
                setIntensity(65);
                setTurbulence(1.2);
                setEmberCount(150);
              }}
              className="w-full py-2 bg-white/[0.03] hover:bg-white/10 border border-white/5 rounded-xl text-xs font-mono text-gray-400 hover:text-white flex items-center justify-center gap-2 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5 text-[#e46222]" />
              <span>Reset Engine Defaults</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
