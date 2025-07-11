import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lumina App Demo - Lumina',
  description: 'Experience the Lumina technology with our interactive Lumina demo app',
  keywords: ['Lumina demo', 'Lumina app', 'blockchain demo', 'DePIN demo', 'network visualization', 'crypto wallet demo'],
  openGraph: {
    title: 'Lumina App Demo - Experience Lumina Technology',
    description: 'Experience the Lumina technology with our interactive Lumina demo app',
    images: [
      {
        url: '/images/og-demo.jpg',
        width: 1200,
        height: 630,
                  alt: 'Lumina App Demo - Experience Lumina Technology',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumina App Demo - Experience Lumina Technology',
    description: 'Experience the Lumina technology with our interactive Lumina demo app',
    images: ['/images/og-demo.jpg'],
  },
}; 