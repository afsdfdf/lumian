import './globals.css';
import type { Metadata } from 'next';
import { fontHeading, fontBody } from '../src/lib/fonts';
import ClientLayout from './client-layout';

export const metadata: Metadata = {
  title: {
    template: '%s | Lumina',
    default: 'Lumina - Decentralized Internet Infrastructure Network',
  },
  description: 'Lumina is building a global decentralized physical infrastructure network (DePIN) that provides affordable, high-speed internet connectivity through blockchain technology and the Lumina token economy.',
  keywords: [
    'decentralized internet',
    'DePIN',
    'decentralized physical infrastructure network',
    'blockchain connectivity',
    'mesh network',
    'web3 infrastructure',
    'Lumina token',
    'Lumina token',
    'token economy',
    'internet access',
    'global connectivity',
    'community-owned network',
    'hotspot mining',
    'network incentives',
    'blockchain technology',
    'internet infrastructure',
  ],
  authors: [{ name: 'Lumina Team' }],
  creator: 'Lumina',
  publisher: 'Lumina',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lumina.io'),
  openGraph: {
    title: 'Lumina - Decentralized Internet Infrastructure Network',
    description: 'Building a global decentralized physical infrastructure network (DePIN) that provides affordable, high-speed internet connectivity through blockchain technology and the Lumina token economy.',
    url: 'https://lumina.io',
    siteName: 'Lumina',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Lumina - Decentralized Internet Infrastructure Network',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumina - Decentralized Internet Infrastructure Network',
    description: 'Building a global decentralized physical infrastructure network (DePIN) that provides affordable, high-speed internet connectivity through blockchain technology and the Lumina token economy.',
    creator: '@lumina',
    images: ['/images/og-home.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/logo.png',
  },
  alternates: {
    canonical: 'https://lumina.io',
  },
  verification: {
    google: 'google-site-verification-code', // Replace with actual verification code when available
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fontBody.variable} ${fontHeading.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="alternate icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="font-sans antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
