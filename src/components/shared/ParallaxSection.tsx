'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import GeometricElements from './GeometricElements';

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
}

export default function ParallaxSection({ children, className = '' }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Create multiple layers with different speeds
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Background geometric elements - reduced opacity */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          y: y1,
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.05, 0.1, 0.05]), // Reduced opacity
        }}
      >
        <GeometricElements />
      </motion.div>
      
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          y: y2,
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.05, 0.08, 0.05]), // Reduced opacity
        }}
      >
        <GeometricElements />
      </motion.div>
      
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          y: y3,
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.05, 0.1, 0.05]), // Reduced opacity
        }}
      >
        <GeometricElements />
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
} 