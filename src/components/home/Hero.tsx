'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-white bg-opacity-30 backdrop-filter backdrop-blur-sm"></div>
      
      <div className="container mx-auto container-padding pt-20 z-10">
        <div className="max-w-3xl mx-auto text-center content-bg p-8 md:p-12">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Digital <span className="accent-blue">Geometrics</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-10 text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Minimal geometric design illustrating network connections and data flow.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              href="/about" 
              className="inline-block px-8 py-3 border border-gray-800 bg-gray-800 text-gray-100 hover:bg-blue-600 hover:border-blue-600 transition-all"
            >
              LEARN MORE
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 