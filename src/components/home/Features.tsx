'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'Multi-functional Mining',
    description: 'Maximize hardware ROI through multiple token mining capabilities',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="30" height="30" stroke="#333333" strokeWidth="1" fill="none" />
        <rect x="10" y="10" width="20" height="20" stroke="#333333" strokeWidth="1" fill="none" />
        <circle cx="20" cy="20" r="5" stroke="#333333" strokeWidth="1" fill="none" />
      </svg>
    )
  },
  {
    title: 'Data Credits System',
    description: 'Stable pricing for users with deflationary mechanism for tokens',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="15" stroke="#333333" strokeWidth="1" fill="none" />
        <path d="M15 15L25 25" stroke="#333333" strokeWidth="1" />
        <path d="M15 25L25 15" stroke="#333333" strokeWidth="1" />
      </svg>
    )
  },
  {
    title: 'Decentralized Governance',
    description: 'Community-driven decision making through transparent processes',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="10" r="5" stroke="#333333" strokeWidth="1" fill="none" />
        <circle cx="10" cy="30" r="5" stroke="#333333" strokeWidth="1" fill="none" />
        <circle cx="30" cy="30" r="5" stroke="#333333" strokeWidth="1" fill="none" />
        <line x1="20" y1="15" x2="10" y2="25" stroke="#333333" strokeWidth="1" />
        <line x1="20" y1="15" x2="30" y2="25" stroke="#333333" strokeWidth="1" />
      </svg>
    )
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Features() {
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {features.map((feature, index) => (
        <motion.div 
          key={index} 
          className="p-8 border border-border flex flex-col items-center text-center"
          variants={itemVariants}
        >
          <div className="mb-6">
            {feature.icon}
          </div>
          <h3 className="text-xl font-heading font-bold mb-3">{feature.title}</h3>
          <p className="text-text-medium">{feature.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
} 