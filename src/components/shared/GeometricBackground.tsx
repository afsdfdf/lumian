'use client';

import { useEffect, useRef } from 'react';

interface GeometricBackgroundProps {
  className?: string;
  isDark?: boolean;
}

export default function GeometricBackground({ className = '', isDark = false }: GeometricBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    
    // Particle system
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      opacity: number;
      size: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.size = Math.random() * 2 + 1;
      }

      update(width: number, height: number) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        // Modified color scheme, reduced opacity
        ctx.fillStyle = isDark ? '#ffffff' : '#000000';
        ctx.fill();
      }
    }

    // Static geometric shapes
    const shapes = [
      {
        type: 'square',
        x: 100,
        y: 100,
        size: 50,
        rotation: 0,
        rotationSpeed: 0.005,
        background: 'rgba(255, 255, 255, 0.01)', // Reduced opacity
      },
      {
        type: 'circle',
        x: 200,
        y: 300,
        size: 30,
        rotation: 0,
        rotationSpeed: -0.003,
        background: 'rgba(0, 0, 0, 0.01)', // Reduced opacity
      },
      {
        type: 'triangle',
        x: 400,
        y: 200,
        size: 40,
        rotation: 0,
        rotationSpeed: 0.007,
      }
    ];

    const particles: Particle[] = [];

    // Initialize particles
    const initializeParticles = (width: number, height: number) => {
      particles.length = 0;
      const particleCount = Math.floor((width * height) / 10000);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(width, height));
      }
    };

    // Animation loop
    const animate = () => {
      if (!canvas || !ctx) return;

      const { width, height } = canvas;
      
      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Draw particles
      particles.forEach(particle => {
        particle.update(width, height);
        particle.draw(ctx);
      });

      // Draw static shapes
      shapes.forEach(shape => {
        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation);
        
        switch (shape.type) {
          case 'square':
            ctx.strokeStyle = shape.background || (isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)');
            ctx.lineWidth = 1;
            ctx.strokeRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
            break;
            
                     case 'circle':
             ctx.strokeStyle = shape.background || (isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)');
             ctx.lineWidth = 1;
             ctx.beginPath();
             ctx.arc(0, 0, shape.size, 0, Math.PI * 2);
             ctx.stroke();
             break;
            
          case 'triangle':
            ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(0, -shape.size / 2);
            ctx.lineTo(-shape.size / 2, shape.size / 2);
            ctx.lineTo(shape.size / 2, shape.size / 2);
            ctx.closePath();
            ctx.stroke();
            break;
        }
        
        ctx.restore();
        
        // Update rotation
        shape.rotation += shape.rotationSpeed;
      });

      // Reset global alpha
      ctx.globalAlpha = 1;

      animationFrameId = requestAnimationFrame(animate);
    };

    // Handle resize
    const handleResize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      
      initializeParticles(canvas.width, canvas.height);
    };

    // Initial setup
    handleResize();
    animate();

    // Listen for resize
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ zIndex: -1 }}
    />
  );
} 