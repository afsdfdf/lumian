import { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact - Lumina',
  description: 'Get in touch with the Lumina team. Contact us for partnerships, technical support, or to learn more about our decentralized internet infrastructure.',
  keywords: ['contact Lumina', 'Lumina support', 'blockchain partnerships', 'decentralized internet contact', 'Lumina team contact'],
  openGraph: {
    title: 'Contact Lumina - Get in Touch',
    description: 'Get in touch with the Lumina team. Contact us for partnerships, technical support, or to learn more about our decentralized internet infrastructure.',
    images: [
      {
        url: '/images/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Lumina - Get in Touch',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Lumina - Get in Touch',
    description: 'Get in touch with the Lumina team. Contact us for partnerships, technical support, or to learn more about our decentralized internet infrastructure.',
    images: ['/images/og-contact.jpg'],
  },
}

export default function ContactPage() {
  return <ContactPageClient />;
} 