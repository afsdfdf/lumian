import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roadmap - Lumina',
  description: 'Explore the development roadmap and future plans for Lumina',
  keywords: ['Lumina roadmap', 'blockchain roadmap', 'decentralized internet timeline', 'Lumina development', 'DePIN project roadmap'],
  openGraph: {
    title: 'Lumina Development Roadmap',
    description: 'Explore the development roadmap and future plans for the Lumina decentralized internet infrastructure.',
    images: [
      {
        url: '/images/og-roadmap.jpg',
        width: 1200,
        height: 630,
                  alt: 'Lumina Roadmap',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumina Development Roadmap',
    description: 'Explore the development roadmap and future plans for the Lumina decentralized internet infrastructure.',
    images: ['/images/og-roadmap.jpg'],
  },
} 