'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface LogoProps {
  variant?: 'default' | 'white';
  size?: 'sm' | 'md' | 'lg';
  withText?: boolean;
}

export default function Logo({
  variant = 'default',
  size = 'md',
  withText = true,
}: LogoProps) {
  // Size mapping
  const sizeMap = {
    sm: { logo: 24, text: 'text-lg' },
    md: { logo: 32, text: 'text-xl' },
    lg: { logo: 48, text: 'text-3xl' },
  };
  
  // Color mapping
  const colorMap = {
    default: {
      text: 'text-text-dark',
    },
    white: {
      text: 'text-gray-100',
    },
  };
  
  const colors = colorMap[variant];
  const dimensions = sizeMap[size];
  
  return (
    <Link href="/" className="flex items-center gap-2">
      <motion.div
        className="relative"
        style={{ width: dimensions.logo, height: dimensions.logo }}
        initial={{ rotate: -10, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Image
          src="/logo.png"
                      alt="Lumina Logo"
          width={dimensions.logo}
          height={dimensions.logo}
          className="rounded-full"
          priority
        />
      </motion.div>
      
      {withText && (
        <motion.span
          className={`font-heading font-bold ${dimensions.text} ${colors.text}`}
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Lumina
        </motion.span>
      )}
    </Link>
  );
} 