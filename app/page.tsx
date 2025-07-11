'use client';

import ParallaxSection from '../src/components/shared/ParallaxSection';
import { Button } from '../src/components/ui';
import { FadeIn, ScrollReveal } from '../src/components/animations';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="container mx-auto container-padding relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <FadeIn delay={0.2}>
              <div>
                <span className="inline-block px-4 py-2 rounded-full bg-primary bg-opacity-10 text-primary dark:bg-opacity-20 text-sm font-medium mb-6">
                  Decentralized Physical Infrastructure Network
                </span>
                <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                  Bridging the Digital Divide with <span className="gradient-text">Decentralized Infrastructure</span>
                </h1>
                <p className="text-xl text-text-medium mb-8">
                  Lumina is transforming global internet access through a community-driven, blockchain-powered infrastructure network that provides reliable, affordable connectivity with a focus on underserved regions.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href="/technology" variant="gradient" withIcon>
                    Technology
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </Button>
                  <Button href="/whitepaper.html" variant="outline" withIcon>
                    Read Whitepaper
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Button>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="relative h-[400px] flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center animate-pulse-slow">
                  <div className="w-64 h-64 rounded-full bg-blue-500 bg-opacity-20 filter blur-xl"></div>
                </div>
                <Image
                  src="/images/network-illustration.svg"
                                      alt="Lumina Network Illustration"
                  width={500}
                  height={400}
                  className="object-contain relative z-10 hover-lift"
                  priority
                />
              </div>
            </FadeIn>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Scroll to explore
            </span>
            <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Network Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto container-padding">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="glass-morphism p-6 rounded-lg transform transition-all duration-500 hover:scale-105 hover:shadow-lg">
                <div className="text-4xl font-bold mb-2 text-gray-100">10K+</div>
                <div className="text-sm text-gray-200">Network Nodes</div>
              </div>
              <div className="glass-morphism p-6 rounded-lg transform transition-all duration-500 hover:scale-105 hover:shadow-lg">
                <div className="text-4xl font-bold mb-2 text-gray-100">50+</div>
                <div className="text-sm text-gray-200">Countries</div>
              </div>
              <div className="glass-morphism p-6 rounded-lg transform transition-all duration-500 hover:scale-105 hover:shadow-lg">
                <div className="text-4xl font-bold mb-2 text-gray-100">100TB+</div>
                <div className="text-sm text-gray-200">Monthly Data Transfer</div>
              </div>
              <div className="glass-morphism p-6 rounded-lg transform transition-all duration-500 hover:scale-105 hover:shadow-lg">
                <div className="text-4xl font-bold mb-2 text-gray-100">5M+</div>
                <div className="text-sm text-gray-200">Active Users</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Strategic Advantages Section */}
      <ParallaxSection className="py-24 bg-secondary">
        <div className="container mx-auto container-padding">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-primary bg-opacity-10 text-primary dark:bg-opacity-20 text-sm font-medium mb-4">
                Key Features
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Strategic Advantages
              </h2>
              <p className="text-text-medium max-w-3xl mx-auto">
                Our unique approach to decentralized internet infrastructure combines innovative technology with sustainable economics
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="p-8 bg-white dark:bg-gray-800 content-card group">
                <div className="mb-6 w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="4" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">Hybrid Deployment Model</h3>
                <p className="text-text-medium dark:text-gray-300">
                  Uniquely combining grassroots participation with structured LSO partnerships, creating a flexible deployment model that enables faster scaling while maintaining decentralization principles.
                </p>
                <div className="mt-6">
                  <Link href="/technology" className="text-primary dark:text-primary-dark font-medium hover:underline inline-flex items-center gap-2">
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="p-8 bg-white dark:bg-gray-800 content-card group">
                <div className="mb-6 w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">Economic Sustainability</h3>
                <p className="text-text-medium dark:text-gray-300">
                  Our dual token system with data credits provides price stability for users while creating deflationary pressure on the native token, addressing key economic challenges of DePIN projects.
                </p>
                <div className="mt-6">
                  <Link href="/tokenomics" className="text-primary dark:text-primary-dark font-medium hover:underline inline-flex items-center gap-2">
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <div className="p-8 bg-white dark:bg-gray-800 content-card group">
                <div className="mb-6 w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
                    <circle cx="6" cy="18" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
                    <circle cx="18" cy="18" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
                    <line x1="12" y1="10" x2="6" y2="14" stroke="currentColor" strokeWidth="2" />
                    <line x1="12" y1="10" x2="18" y2="14" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">Multi-functional Mining</h3>
                <p className="text-text-medium dark:text-gray-300">
                  Our devices can simultaneously mine multiple blockchain protocols, maximizing hardware utilization and providing diverse revenue streams for network participants.
                </p>
                <div className="mt-6">
                  <Link href="/technology" className="text-primary dark:text-primary-dark font-medium hover:underline inline-flex items-center gap-2">
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto container-padding text-center">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">
                Ready to Join the Decentralized Internet Revolution?
              </h2>
              <p className="text-xl text-white text-opacity-90 mb-8">
                Be part of the future of internet infrastructure. Explore our technology, read our whitepaper, and discover how you can contribute to a more connected world.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button href="/technology" variant="outline" className="bg-white text-primary hover:bg-gray-100">
                  Explore Technology
                </Button>
                <Button href="/community" variant="outline" className="bg-white text-primary hover:bg-gray-100">
                  Join Community
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
