'use client';

import Image from 'next/image';
import ParallaxSection from '../../src/components/shared/ParallaxSection';
import { FadeIn, ScrollReveal, StaggerContainer, StaggerItem } from '../../src/components/animations';
import { Button } from '../../src/components/ui';
import { useState } from 'react';

// Metadata is now defined in a separate metadata.ts file since this is a client component

// Feature card component with hover effect
const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  items 
}: { 
  icon: string, 
  title: string, 
  description: string, 
  items: string[] 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="border border-border dark:border-border-dark p-8 h-full rounded-xl bg-white dark:bg-background-card-dark shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`h-16 w-16 bg-primary bg-opacity-10 dark:bg-primary-dark dark:bg-opacity-20 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}>
        <Image 
          src={icon} 
          alt={title} 
          width={40} 
          height={40} 
          className="text-primary dark:text-primary-dark"
        />
      </div>
      <h3 className="text-xl font-heading font-bold mb-4 dark:text-text-heading-dark">{title}</h3>
      <p className="text-text-medium dark:text-text-medium-dark mb-6">
        {description}
      </p>
      <ul className="list-disc list-inside text-text-medium dark:text-text-medium-dark space-y-2 mb-6">
        {items.map((item, index) => (
          <li key={index} className="transition-all duration-300 hover:translate-x-1">{item}</li>
        ))}
      </ul>
    </div>
  );
};

// Feature section with image
const FeatureSection = ({ 
  title, 
  description, 
  items, 
  image, 
  imageAlt, 
  reverse = false 
}: { 
  title: string, 
  description: string, 
  items: string[], 
  image: string, 
  imageAlt: string, 
  reverse?: boolean 
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className={reverse ? 'order-1 md:order-2' : ''}>
        <h3 className="text-xl font-heading font-bold mb-4 dark:text-text-heading-dark">{title}</h3>
        <p className="text-text-medium dark:text-text-medium-dark mb-4">
          {description}
        </p>
        <ul className="list-disc list-inside text-text-medium dark:text-text-medium-dark space-y-2">
          {items.map((item, index) => (
            <li key={index} className="transition-all duration-300 hover:translate-x-1">{item}</li>
          ))}
        </ul>
      </div>
      <div className={`flex items-center justify-center ${reverse ? 'order-2 md:order-1' : ''}`}>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
          <div className="relative bg-white dark:bg-background-card-dark rounded-full p-4">
            <Image 
              src={image} 
              alt={imageAlt} 
              width={200} 
              height={200} 
              className="transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TechnologyPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-background dark:bg-background-dark">
        <div className="container mx-auto container-padding">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-text-heading dark:text-text-heading-dark">Our Technology</h1>
              <p className="text-text-medium dark:text-text-medium-dark text-lg mb-8">
                                  Lumina&apos;s comprehensive technology stack integrates blockchain, hardware, and advanced protocols to create a secure, efficient, and globally accessible decentralized physical infrastructure network.
              </p>
              
              {/* Tech stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
                <div className="p-4 text-center">
                  <div className="text-3xl font-bold text-primary dark:text-primary-dark mb-1">99.9%</div>
                  <div className="text-sm text-text-medium dark:text-text-medium-dark">Network Uptime</div>
                </div>
                <div className="p-4 text-center">
                  <div className="text-3xl font-bold text-primary dark:text-primary-dark mb-1">5,000+</div>
                  <div className="text-sm text-text-medium dark:text-text-medium-dark">TPS Capacity</div>
                </div>
                <div className="p-4 text-center">
                  <div className="text-3xl font-bold text-primary dark:text-primary-dark mb-1">1M+</div>
                  <div className="text-sm text-text-medium dark:text-text-medium-dark">Node Capacity</div>
                </div>
                <div className="p-4 text-center">
                  <div className="text-3xl font-bold text-primary dark:text-primary-dark mb-1">256-bit</div>
                  <div className="text-sm text-text-medium dark:text-text-medium-dark">Encryption</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      
      <ParallaxSection className="py-24">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="mb-24">
                <h2 className="text-3xl font-heading font-bold mb-8 text-center dark:text-text-heading-dark">Technical Architecture</h2>
                <p className="text-text-medium dark:text-text-medium-dark text-center mb-12 max-w-2xl mx-auto">
                  Our multi-layered architecture ensures security, scalability, and performance across the entire network ecosystem.
                </p>
                
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <StaggerItem>
                    <FeatureCard 
                      icon="/images/technology/blockchain.svg"
                      title="Blockchain Layer"
                      description="Our blockchain infrastructure utilizes a hybrid consensus mechanism combining Delegated Proof of Stake with Proof of Coverage for optimal performance and security."
                      items={[
                        "High-throughput transaction processing",
                        "Advanced smart contract capabilities",
                        "Cross-chain interoperability",
                        "Decentralized governance framework",
                        "Data Credit management system"
                      ]}
                    />
                  </StaggerItem>
                  
                  <StaggerItem>
                    <FeatureCard 
                      icon="/images/technology/hardware.svg"
                      title="Hardware Infrastructure"
                      description="Our specialized hardware devices form the physical backbone of the network, with multiple configurations to address different deployment scenarios."
                      items={[
                        "Multi-radio connectivity options",
                        "Energy-efficient design with solar options",
                        "Tamper-resistant security features",
                        "Modular architecture for upgradability",
                        "Integrated multi-functional mining capabilities"
                      ]}
                    />
                  </StaggerItem>
                  
                  <StaggerItem>
                    <FeatureCard 
                      icon="/images/technology/security.svg"
                      title="Security Architecture"
                      description="Comprehensive security framework protecting both network infrastructure and user data through multiple defensive layers."
                      items={[
                        "Zero-knowledge proof verification systems",
                        "Hardware-based cryptographic elements",
                        "Decentralized identity management",
                        "Threat detection and prevention systems",
                        "Secure boot and attestation protocols"
                      ]}
                    />
                  </StaggerItem>
                </StaggerContainer>
              </div>
            </ScrollReveal>
            
            <ScrollReveal>
              <div className="mb-24">
                <h2 className="text-3xl font-heading font-bold mb-8 text-center dark:text-text-heading-dark">Network Protocol Stack</h2>
                <p className="text-text-medium dark:text-text-medium-dark text-center mb-12 max-w-2xl mx-auto">
                  Our innovative protocols enable secure, efficient, and scalable network operations across diverse environments.
                </p>
                
                <div className="space-y-16">
                  <FeatureSection 
                    title="Proof of Coverage & Service"
                    description="Our innovative dual verification system ensures both network coverage and service quality:"
                    items={[
                      "Geographic Verification: Cryptographic proof of device location and coverage area",
                      "Service Validation: Multi-dimensional metrics for service quality assessment",
                      "Challenge-Response Protocol: Continuous validation through randomized challenges",
                      "Reputation System: Progressive trust scoring based on historical performance"
                    ]}
                    image="/images/technology/protocol-coverage.svg"
                    imageAlt="Proof of Coverage Illustration"
                  />
                  
                  <FeatureSection 
                    title="Mesh Network Protocol"
                    description="Advanced mesh networking capabilities create resilient, self-healing network topologies:"
                    items={[
                      "Dynamic Routing: Intelligent path selection based on network conditions",
                      "Multi-Radio Support: Simultaneous operation across multiple frequency bands",
                      "Adaptive Bandwidth Management: Optimized resource allocation based on demand",
                      "Seamless Handoff: Continuous connectivity during node transitions"
                    ]}
                    image="/images/technology/protocol-mesh.svg"
                    imageAlt="Mesh Network Illustration"
                    reverse={true}
                  />
                  
                  <FeatureSection 
                    title="Consensus & Incentive Protocol"
                    description="Economic and governance mechanisms that align participant incentives with network health:"
                    items={[
                      "Tokenized Incentives: Economic rewards for network participation and service provision",
                      "Governance Integration: On-chain voting and proposal mechanisms",
                      "Resource Allocation: Efficient distribution of network resources",
                      "Fraud Prevention: Cryptographic mechanisms to prevent gaming of the system"
                    ]}
                    image="/images/technology/protocol-consensus.svg"
                    imageAlt="Consensus Protocol Illustration"
                  />
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal>
              <div className="mb-24">
                <h2 className="text-3xl font-heading font-bold mb-8 text-center dark:text-text-heading-dark">Development Roadmap</h2>
                <p className="text-text-medium dark:text-text-medium-dark text-center mb-12 max-w-2xl mx-auto">
                  Our technology development follows a strategic roadmap with clear milestones and objectives.
                </p>
                
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>
                  
                  <div className="relative z-10">
                    {/* Phase 1 */}
                    <div className="mb-16">
                      <div className="flex items-center justify-center mb-4">
                        <div className="bg-primary text-white dark:bg-primary-dark dark:text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">1</div>
                      </div>
                      <div className="bg-white dark:bg-background-card-dark p-6 rounded-xl shadow-md max-w-2xl mx-auto">
                        <h3 className="text-xl font-heading font-bold mb-4 dark:text-text-heading-dark">Foundation Phase (Completed)</h3>
                        <ul className="list-disc list-inside text-text-medium dark:text-text-medium-dark space-y-2">
                          <li>Core protocol development and testing</li>
                          <li>Initial hardware prototyping</li>
                          <li>Security architecture design</li>
                          <li>Testnet deployment</li>
                        </ul>
                      </div>
                    </div>
                    
                    {/* Phase 2 */}
                    <div className="mb-16">
                      <div className="flex items-center justify-center mb-4">
                        <div className="bg-primary text-white dark:bg-primary-dark dark:text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">2</div>
                      </div>
                      <div className="bg-white dark:bg-background-card-dark p-6 rounded-xl shadow-md max-w-2xl mx-auto">
                        <h3 className="text-xl font-heading font-bold mb-4 dark:text-text-heading-dark">Expansion Phase (Current)</h3>
                        <ul className="list-disc list-inside text-text-medium dark:text-text-medium-dark space-y-2">
                          <li>Mainnet launch with core functionality</li>
                          <li>Hardware production scaling</li>
                          <li>Initial deployment in target regions</li>
                          <li>Developer SDK and API release</li>
                        </ul>
                      </div>
                    </div>
                    
                    {/* Phase 3 */}
                    <div>
                      <div className="flex items-center justify-center mb-4">
                        <div className="bg-gray-400 text-white dark:bg-gray-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">3</div>
                      </div>
                      <div className="bg-white dark:bg-background-card-dark p-6 rounded-xl shadow-md max-w-2xl mx-auto">
                        <h3 className="text-xl font-heading font-bold mb-4 dark:text-text-heading-dark">Maturity Phase (Upcoming)</h3>
                        <ul className="list-disc list-inside text-text-medium dark:text-text-medium-dark space-y-2">
                          <li>Advanced protocol features activation</li>
                          <li>Global network expansion</li>
                          <li>Cross-chain integration enhancements</li>
                          <li>Enterprise-grade service offerings</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>
      
      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto container-padding text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Experience Our Technology</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
                              See Lumina in action with our interactive demonstrations and technical documentation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/demo" variant="white" withIcon>
                View Demo
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </Button>
              <Button href="/whitepaper.html" variant="outlineWhite" withIcon>
                Read Whitepaper
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
} 