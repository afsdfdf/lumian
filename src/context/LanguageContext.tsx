'use client';

import React, { createContext, useContext } from 'react';

interface LanguageContextType {
  t: (key: string) => string;
}

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  t: (key: string) => key,
});

// Translation data
const translations: Record<string, string> = {
  // Navigation
  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.technology': 'Technology',
  'nav.demo': 'Demo',
  'nav.tokenomics': 'Tokenomics',
  'nav.roadmap': 'Roadmap',
  'nav.community': 'Community',
  'nav.resources': 'Resources',
  'nav.contact': 'Contact',
  
  // About dropdown
  'nav.about.mission': 'Our Mission',
  'nav.about.team': 'Team',
  'nav.about.partners': 'Partners',
  
  // Resources dropdown
  'nav.resources.whitepaper': 'Whitepaper',
  'nav.resources.documentation': 'Documentation',
  'nav.resources.faqs': 'FAQs',
  
  // Common buttons
  'button.learn_more': 'Learn More',
  'button.get_started': 'Get Started',
  'button.join_community': 'Join Community',
  'button.read_whitepaper': 'Read Whitepaper',
  'button.view_demo': 'View Demo',
  'button.try_now': 'Try Now',
  'button.download': 'Download',
  'button.submit': 'Submit',
  'button.send_message': 'Send Message',
  
  // Home page
  'home.hero.title': 'The Future of Decentralized Physical Infrastructure',
  'home.hero.subtitle': 'Building a global network of decentralized internet infrastructure powered by blockchain technology',
  'home.features.title': 'Why Choose AetherLink',
  'home.features.decentralized.title': 'Truly Decentralized',
  'home.features.decentralized.description': 'Our network is built from the ground up to be fully decentralized, with no single point of failure or control.',
  'home.features.scalable.title': 'Highly Scalable',
  'home.features.scalable.description': 'Designed to scale globally with millions of nodes working together to provide reliable connectivity.',
  'home.features.secure.title': 'Security First',
  'home.features.secure.description': 'Advanced encryption and blockchain verification ensure your data remains private and secure.',
  'home.features.incentivized.title': 'Token Incentives',
  'home.features.incentivized.description': 'Participants earn Lumina tokens for contributing resources to the network.',
  'home.mission.title': 'Our Mission',
  'home.mission.description': 'We believe internet access is a fundamental right. AetherLink is building the infrastructure to make global connectivity affordable and accessible to everyone, everywhere.',
  'home.stats.nodes': 'Active Nodes',
  'home.stats.countries': 'Countries',
  'home.stats.users': 'Users',
  'home.stats.transactions': 'Daily Transactions',
  
  // Technology page
  'tech.hero.title': 'Our Technology',
  'tech.hero.subtitle': 'Cutting-edge blockchain and networking technologies powering the future of decentralized connectivity',
  'tech.blockchain.title': 'Blockchain Architecture',
  'tech.blockchain.description': 'Our custom blockchain is optimized for high-throughput network operations with minimal latency and energy consumption.',
  'tech.network.title': 'Mesh Networking',
  'tech.network.description': 'Dynamic mesh topology allows the network to self-organize and heal, creating resilient connectivity even in challenging environments.',
  'tech.hardware.title': 'Hardware Solutions',
  'tech.hardware.description': 'From consumer-grade hotspots to enterprise infrastructure, our hardware ecosystem supports diverse deployment scenarios.',
  'tech.protocol.title': 'AetherLink Protocol',
  'tech.protocol.description': 'Our novel consensus mechanism ensures fair reward distribution while maintaining network integrity and performance.',
  'tech.security.title': 'Security Framework',
  'tech.security.description': 'Multi-layered security approach protects both the network infrastructure and user data with state-of-the-art encryption.',
  'tech.roadmap.title': 'Technology Roadmap',
  'tech.roadmap.description': 'Our development plan focuses on continuous innovation while maintaining backward compatibility and network stability.',
  
  // Demo page
  'demo.hero.title': 'Experience AetherLink',
  'demo.hero.subtitle': 'See our technology in action with interactive demonstrations and simulations',
  'demo.network.title': 'Network Visualization',
  'demo.network.description': 'Explore a live visualization of the AetherLink test network, showing nodes, connections, and data flow in real-time.',
  'demo.wallet.title': 'Wallet Demo',
  'demo.wallet.description': 'Try our user-friendly wallet interface for managing Lumina tokens and interacting with network services.',
  'demo.node.title': 'Node Operation',
  'demo.node.description': 'Experience what it\'s like to run an AetherLink node with our interactive simulation.',
  'demo.marketplace.title': 'Service Marketplace',
  'demo.marketplace.description': 'Browse the decentralized marketplace where users can buy and sell connectivity and other network services.',
  
  // Footer
  'footer.rights': 'All rights reserved',
  'footer.connect': 'Connect with us',
  'footer.company': 'Company',
  'footer.resources': 'Resources',
  'footer.community': 'Community',
  'footer.legal.privacy': 'Privacy Policy',
  'footer.legal.terms': 'Terms of Service',
  'footer.legal.cookies': 'Cookie Policy',
  'footer.copyright': 'All rights reserved',
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Translation function
  const t = (key: string): string => {
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext); 