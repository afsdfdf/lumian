'use client';

import { useEffect, useRef } from 'react';

interface GeometricElementsProps {
  className?: string;
}

export default function GeometricElements({ className = '' }: GeometricElementsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Elements to draw
    const elements: {
      type: 'circle' | 'square' | 'line';
      x: number;
      y: number;
      size?: number;
      x2?: number;
      y2?: number;
      opacity: number;
    }[] = [];

    // Generate random geometric elements
    const generateElements = () => {
      elements.length = 0;
      const width = canvas.width;
      const height = canvas.height;
      
      // Generate circles
      for (let i = 0; i < 15; i++) {
        elements.push({
          type: 'circle',
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 8 + 2,
          opacity: Math.random() * 0.1 + 0.05 // Reduced opacity from 0.1-0.3 to 0.05-0.15
        });
      }
      
      // Generate squares
      for (let i = 0; i < 10; i++) {
        elements.push({
          type: 'square',
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 15 + 5,
          opacity: Math.random() * 0.1 + 0.05 // Reduced opacity from 0.1-0.3 to 0.05-0.15
        });
      }
      
      // Generate lines
      for (let i = 0; i < 20; i++) {
        const x1 = Math.random() * width;
        const y1 = Math.random() * height;
        const angle = Math.random() * Math.PI * 2;
        const length = Math.random() * 100 + 50;
        
        elements.push({
          type: 'line',
          x: x1,
          y: y1,
          x2: x1 + Math.cos(angle) * length,
          y2: y1 + Math.sin(angle) * length,
          opacity: Math.random() * 0.08 + 0.02 // Reduced opacity from 0.05-0.2 to 0.02-0.1
        });
      }
    };

    // Draw all elements
    const drawElements = () => {
      if (!ctx || !canvas) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Generate elements if none exist
      if (elements.length === 0) {
        generateElements();
      }
      
      // Draw each element
      elements.forEach(el => {
        ctx.globalAlpha = el.opacity;
        
        switch (el.type) {
          case 'circle':
            ctx.beginPath();
            ctx.arc(el.x, el.y, el.size || 5, 0, Math.PI * 2);
            ctx.fillStyle = '#000';
            ctx.fill();
            break;
            
          case 'square':
            const size = el.size || 10;
            ctx.fillStyle = '#000';
            ctx.fillRect(el.x - size / 2, el.y - size / 2, size, size);
            break;
            
          case 'line':
            if (typeof el.x2 !== 'undefined' && typeof el.y2 !== 'undefined') {
              ctx.beginPath();
              ctx.moveTo(el.x, el.y);
              ctx.lineTo(el.x2, el.y2);
              ctx.strokeStyle = '#000';
              ctx.lineWidth = 1;
              ctx.stroke();
            }
            break;
        }
      });
      
      // Reset global alpha
      ctx.globalAlpha = 1;
    };

    // Set canvas to full size of parent
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      
      // Redraw when resized
      drawElements();
    };

    // Initial resize
    resizeCanvas();
    
    // Listen for window resize
    window.addEventListener('resize', resizeCanvas);

    // Initial draw
    drawElements();

    // Clean up
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} />;
} 