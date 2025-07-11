"use client";

import ParallaxSection from '../../src/components/shared/ParallaxSection';
import { FadeIn, ScrollReveal } from '../../src/components/animations';
import { Button } from '../../src/components/ui';
import { useState } from 'react';

// Milestone component
const Milestone = ({ 
  date, 
  subtitle, 
  title, 
  items, 
  isLeft = false,
  isCompleted = false,
  isCurrent = false
}: { 
  date: string, 
  subtitle: string, 
  title: string, 
  items: string[],
  isLeft?: boolean,
  isCompleted?: boolean,
  isCurrent?: boolean
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const statusColor = isCompleted 
    ? "bg-green-500 dark:bg-green-400" 
    : isCurrent 
      ? "bg-primary dark:bg-primary-dark" 
      : "bg-gray-300 dark:bg-gray-600";
  
  const cardClasses = `border border-border dark:border-border-dark p-6 rounded-xl ${
    isCompleted 
      ? "bg-green-50 dark:bg-green-900/20" 
      : isCurrent 
        ? "bg-primary/5 dark:bg-primary-dark/10" 
        : "bg-white dark:bg-background-card-dark"
  } shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden`;
  
  return (
    <div className="relative mb-24">
      <div className="flex flex-col md:flex-row items-center mb-6">
        {isLeft ? (
          <>
            <div className="w-full md:w-1/2 md:pr-8 text-right order-2 md:order-1">
              <div className={cardClasses}>
                {isCompleted && (
                  <div className="absolute top-2 right-2">
                    <svg className="w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
                <h4 className="text-xl font-heading font-bold mb-4 dark:text-text-heading-dark">{title}</h4>
                <ul className={`list-disc pl-6 text-text-medium dark:text-text-medium-dark space-y-2 ${!isExpanded && items.length > 5 ? 'line-clamp-5' : ''}`}>
                  {items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                {items.length > 5 && (
                  <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-primary dark:text-primary-dark text-sm font-medium mt-2 hover:underline focus:outline-none"
                  >
                    {isExpanded ? 'Show less' : 'Show more'}
                  </button>
                )}
              </div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white dark:border-background-dark z-10 order-1 md:order-2">
              <div className={`w-full h-full rounded-full ${statusColor}`}></div>
            </div>
            <div className="w-full md:w-1/2 md:pl-8 mb-4 md:mb-0 order-1 md:order-3">
              <h3 className="text-2xl font-heading font-bold dark:text-text-heading-dark text-center md:text-left">{date}</h3>
              <p className="text-text-light dark:text-text-light-dark text-center md:text-left">{subtitle}</p>
            </div>
          </>
        ) : (
          <>
            <div className="w-full md:w-1/2 md:pr-8 mb-4 md:mb-0 text-center md:text-right order-1">
              <h3 className="text-2xl font-heading font-bold dark:text-text-heading-dark">{date}</h3>
              <p className="text-text-light dark:text-text-light-dark">{subtitle}</p>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white dark:border-background-dark z-10 order-2">
              <div className={`w-full h-full rounded-full ${statusColor}`}></div>
            </div>
            <div className="w-full md:w-1/2 md:pl-8 order-3">
              <div className={cardClasses}>
                {isCompleted && (
                  <div className="absolute top-2 right-2">
                    <svg className="w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
                <h4 className="text-xl font-heading font-bold mb-4 dark:text-text-heading-dark">{title}</h4>
                <ul className={`list-disc pl-6 text-text-medium dark:text-text-medium-dark space-y-2 ${!isExpanded && items.length > 5 ? 'line-clamp-5' : ''}`}>
                  {items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                {items.length > 5 && (
                  <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-primary dark:text-primary-dark text-sm font-medium mt-2 hover:underline focus:outline-none"
                  >
                    {isExpanded ? 'Show less' : 'Show more'}
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default function RoadmapPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-background dark:bg-background-dark">
        <div className="container mx-auto container-padding">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-text-heading dark:text-text-heading-dark">Roadmap</h1>
              <p className="text-text-medium dark:text-text-medium-dark text-lg mb-8">
                Our development journey and future milestones for the Lumina network.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
      
      <ParallaxSection className="py-24">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <div className="inline-flex items-center mb-6">
                  <div className="w-3 h-3 rounded-full bg-green-500 dark:bg-green-400 mr-2"></div>
                  <span className="text-text-medium dark:text-text-medium-dark">Completed</span>
                  <div className="w-3 h-3 rounded-full bg-primary dark:bg-primary-dark mx-2 ml-6"></div>
                  <span className="text-text-medium dark:text-text-medium-dark">Current Phase</span>
                  <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600 mx-2 ml-6"></div>
                  <span className="text-text-medium dark:text-text-medium-dark">Upcoming</span>
                </div>
                <p className="text-text-medium dark:text-text-medium-dark max-w-2xl mx-auto">
                  Our roadmap outlines key milestones in the development and deployment of the Lumina network. 
                  We are committed to building a robust decentralized internet infrastructure that will transform 
                  how people connect and share data.
                </p>
              </div>
            </ScrollReveal>
            
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-primary to-gray-300 dark:from-primary-dark dark:via-primary-dark dark:to-gray-600 rounded-full"></div>
              
              <ScrollReveal>
                <Milestone 
                  date="Q1 2025"
                  subtitle="Research & Planning"
                  title="Foundation"
                  items={[
                    "Core team formation",
                    "Initial research and concept development",
                    "Market analysis and competitor research",
                    "Technical architecture planning",
                    "Whitepaper publication",
                    "Initial seed funding secured",
                    "Legal and regulatory framework established"
                  ]}
                  isCompleted={true}
                />
              </ScrollReveal>
              
              <ScrollReveal>
                <Milestone 
                  date="Q2 2025"
                  subtitle="Development Kickoff"
                  title="Development Begins"
                  items={[
                    "Core protocol design",
                    "Smart contract development",
                    "Initial prototype development",
                    "Hardware specifications finalized",
                    "Early partnerships established",
                    "Technical team expansion",
                    "Private testnet launch"
                  ]}
                  isLeft={true}
                  isCompleted={true}
                />
              </ScrollReveal>
              
              <ScrollReveal>
                <Milestone 
                  date="Q3 2025"
                  subtitle="Launch & Exchange Listing"
                  title="Public Launch"
                  items={[
                    "Token generation event",
                    "Exchange listings (late July)",
                    "Alpha testnet launch",
                    "Community incentive programs",
                    "Hardware pre-orders begin",
                    "Initial marketing campaign",
                    "Developer documentation release"
                  ]}
                  isCurrent={true}
                />
              </ScrollReveal>
              
              <ScrollReveal>
                <Milestone 
                  date="Q4 2025"
                  subtitle="Network Expansion"
                  title="Network Growth"
                  items={[
                    "Public testnet with incentives",
                    "Beta mobile application release",
                    "First hardware devices shipping",
                    "Developer SDK release",
                    "LSO partnership program",
                    "Regional ambassador program launch",
                    "First dApp integrations"
                  ]}
                  isLeft={true}
                />
              </ScrollReveal>
              
              <ScrollReveal>
                <Milestone 
                  date="Q1 2026"
                  subtitle="Mainnet Launch"
                  title="Full Network Launch"
                  items={[
                    "Mainnet launch",
                    "Data credit system activation",
                    "Mobile app (full version) release",
                    "Initial dApp ecosystem",
                    "Pilot region deployments",
                    "Enterprise customer onboarding",
                    "Network security audits"
                  ]}
                />
              </ScrollReveal>
              
              <ScrollReveal>
                <Milestone 
                  date="Q2-Q4 2026"
                  subtitle="Global Growth"
                  title="Global Expansion"
                  items={[
                    "Global expansion of network coverage",
                    "Enterprise partnerships",
                    "Advanced multi-function hardware release",
                    "Decentralized governance implementation",
                    "Full transition to DAO structure",
                    "Cross-chain interoperability",
                    "Ecosystem grants program expansion"
                  ]}
                  isLeft={true}
                />
              </ScrollReveal>
              
              <ScrollReveal>
                <div className="text-center mt-16">
                  <h3 className="text-2xl font-heading font-bold mb-4 dark:text-text-heading-dark">Beyond 2026</h3>
                  <p className="text-text-medium dark:text-text-medium-dark mb-6 max-w-2xl mx-auto">
                    Our vision extends far beyond our initial roadmap. We are committed to building a 
                    sustainable, decentralized internet infrastructure that will continue to evolve and 
                    expand for decades to come.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button href="/whitepaper" className="hover:scale-105 transition-transform duration-300">
                      Read Whitepaper
                    </Button>
                    <Button href="/technology" variant="outline" className="hover:scale-105 transition-transform duration-300">
                      Explore Technology
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </ParallaxSection>
    </>
  );
} 