import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources - Lumina',
  description: 'Access documentation, whitepapers, and other resources for the Lumina decentralized internet infrastructure project.',
  keywords: ['Lumina resources', 'blockchain whitepaper', 'decentralized internet documentation', 'Lumina docs'],
  openGraph: {
    title: 'Lumina Resources - Documentation & Whitepapers',
    description: 'Access documentation, whitepapers, and other resources for the Lumina decentralized internet infrastructure project.',
    images: [
      {
        url: '/images/og-resources.jpg',
        width: 1200,
        height: 630,
        alt: 'Lumina Resources - Documentation & Whitepapers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumina Resources - Documentation & Whitepapers',
    description: 'Access documentation, whitepapers, and other resources for the Lumina decentralized internet infrastructure project.',
    images: ['/images/og-resources.jpg'],
  },
}; 