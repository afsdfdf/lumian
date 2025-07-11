'use client';

import { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

export default function StaggerContainer({
  children,
  className = '',
  delay = 0,
  staggerDelay = 0.1,
}: StaggerContainerProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = '',
  direction = 'up',
  distance = 20,
}: {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
}) {
  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, ...directionMap[direction] },
    show: { 
      opacity: 1, 
      x: 0, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: [0.25, 0.1, 0.25, 1] // cubic-bezier equivalent of 'easeOut'
      } 
    },
  };

  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
} 