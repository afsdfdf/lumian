'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from '../ui/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'Technology', href: '/technology' },
        { name: 'Demo', href: '/demo' },
        { name: 'Examples', href: '/examples' },
        { name: 'Roadmap', href: '/roadmap' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/resources' },
        { name: 'Whitepaper', href: '/whitepaper' },
        { name: 'Community', href: '/community' },
        { name: 'Contact', href: '/contact' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Tokenomics', href: '/tokenomics' },
        { name: 'Careers', href: '#' },
        { name: 'Privacy Policy', href: '#' },
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: 'twitter' },
    { name: 'Discord', href: '#', icon: 'discord' },
    { name: 'Telegram', href: '#', icon: 'telegram' },
    { name: 'GitHub', href: '#', icon: 'github' },
  ];

  const companyInfo = {
    name: 'Lumina',
    description: 'Building the future of decentralized internet infrastructure through blockchain technology to provide global connectivity.',
    email: 'hello@lumina.network',
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
                             <div className="mb-4">
                 <Logo />
               </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                {companyInfo.description}
              </p>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Email: <a href={`mailto:${companyInfo.email}`} className="text-primary hover:underline">
                    {companyInfo.email}
                  </a>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              className="space-y-4"
            >
              <h3 className="font-semibold text-foreground">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <hr className="my-8 border-border" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm text-muted-foreground"
          >
            © {currentYear} {companyInfo.name}. All rights reserved.
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex space-x-4"
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2"
                aria-label={social.name}
              >
                <div className="w-5 h-5 bg-current rounded" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 