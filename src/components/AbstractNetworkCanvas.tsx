"use client";

import { useEffect, useRef } from "react";

export default function AbstractNetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
        init(); // reinitialize particles on resize to fill the space correctly
      }
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;

      constructor() {
        if (!canvas) {
          this.x = 0; this.y = 0; this.vx = 0; this.vy = 0; this.radius = 0; this.color = "";
          return;
        }
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.4;
        this.vy = prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 2 + 1.5;
        this.color = Math.random() > 0.5 ? "rgba(27, 75, 143, 0.7)" : "rgba(18, 167, 131, 0.7)"; // Blue or Teal
      }

      update() {
        if (!prefersReducedMotion && canvas) {
          this.x += this.vx;
          this.y += this.vy;

          if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
          if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      if (!canvas) return;
      // Calculate a responsive number of particles based on screen size
      const numParticles = Math.min(Math.floor((canvas.width * canvas.height) / 9000), 120);
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 140) {
            ctx.beginPath();
            // Network line fading out over distance
            const alpha = 0.2 - (distance / 700);
            ctx.strokeStyle = `rgba(27, 75, 143, ${alpha > 0 ? alpha : 0})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    window.addEventListener("resize", resize);
    resize();
    if (!prefersReducedMotion) {
       animate();
    } else {
       // if reduced motion is on, just draw once
       animate(); 
    }

    return () => {
      window.removeEventListener("resize", resize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        opacity: 0.9,
      }}
    />
  );
}
