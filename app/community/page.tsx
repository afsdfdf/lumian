import { Metadata } from 'next';
import ParallaxSection from '../../src/components/shared/ParallaxSection';
import { Button } from '../../src/components/ui';
import { FadeIn, ScrollReveal, StaggerContainer, StaggerItem } from '../../src/components/animations';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Community - Lumina',
  description: 'Join the Lumina community and help build the decentralized internet of the future',
  keywords: ['Lumina community', 'blockchain community', 'DePIN community', 'decentralized internet', 'ambassador program', 'developer grants', 'governance'],
  openGraph: {
    title: 'AetherLink Community - Join the Movement',
    description: 'Join the global AetherLink community and help shape the future of decentralized internet infrastructure.',
    images: [
      {
        url: '/images/og-community.jpg',
        width: 1200,
        height: 630,
        alt: 'Lumina Community',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AetherLink Community - Join the Movement',
    description: 'Join the global AetherLink community and help shape the future of decentralized internet infrastructure.',
    images: ['/images/og-community.jpg'],
  },
}

// Social platform card component
const SocialCard = ({ 
  title, 
  description, 
  icon, 
  href, 
  linkText 
}: { 
  title: string, 
  description: string, 
  icon: React.ReactNode, 
  href: string, 
  linkText: string 
}) => {
  return (
    <div className="border border-border dark:border-border-dark p-6 rounded-xl bg-white dark:bg-background-card-dark flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
      <div className="w-16 h-16 flex items-center justify-center bg-primary bg-opacity-10 dark:bg-primary dark:bg-opacity-20 rounded-full mb-4 text-primary dark:text-primary-dark">
        {icon}
      </div>
      <h3 className="text-xl font-heading font-bold mb-2 dark:text-text-heading-dark">{title}</h3>
      <p className="text-text-medium dark:text-text-medium-dark mb-4">{description}</p>
      <Button href={href} variant="outline" size="sm" className="hover:scale-105 transition-transform duration-300">
        {linkText}
      </Button>
    </div>
  );
};

// Program card component
const ProgramCard = ({ 
  title, 
  description, 
  href, 
  linkText, 
  image 
}: { 
  title: string, 
  description: string, 
  href: string, 
  linkText: string, 
  image?: string 
}) => {
  return (
    <div className="border border-border dark:border-border-dark rounded-xl overflow-hidden bg-white dark:bg-background-card-dark shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
      {image && (
        <div className="relative h-40 w-full">
          <Image 
            src={image} 
            alt={title} 
            fill 
            className="object-cover" 
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-heading font-bold mb-4 dark:text-text-heading-dark">{title}</h3>
        <p className="text-text-medium dark:text-text-medium-dark mb-4">
          {description}
        </p>
        <Button href={href} variant="outline" size="sm" className="hover:scale-105 transition-transform duration-300">
          {linkText} →
        </Button>
      </div>
    </div>
  );
};

// Governance step component
const GovernanceStep = ({ number, title, description }: { number: number, title: string, description: string }) => {
  return (
    <div className="text-center relative">
      <div className="w-16 h-16 flex items-center justify-center bg-primary bg-opacity-10 dark:bg-primary dark:bg-opacity-20 rounded-full mb-4 mx-auto text-primary dark:text-primary-dark">
        <span className="font-bold text-xl">{number}</span>
      </div>
      <h4 className="font-heading font-bold mb-2 dark:text-text-heading-dark">{title}</h4>
      <p className="text-text-medium dark:text-text-medium-dark text-sm">
        {description}
      </p>
    </div>
  );
};

// Stats component
const CommunityStats = () => {
  const stats = [
    { value: '50K+', label: 'Community Members' },
    { value: '120+', label: 'Countries' },
    { value: '1.2K+', label: 'Active Contributors' },
    { value: '250+', label: 'Community Projects' }
  ];
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
      {stats.map((stat, index) => (
        <div key={index} className="p-4 text-center">
          <div className="text-3xl font-bold text-primary dark:text-primary-dark mb-1">{stat.value}</div>
          <div className="text-sm text-text-medium dark:text-text-medium-dark">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default function CommunityPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-background dark:bg-background-dark">
        <div className="container mx-auto container-padding">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-text-heading dark:text-text-heading-dark">Community</h1>
              <p className="text-text-medium dark:text-text-medium-dark text-lg mb-8">
                Join the global Lumina community and help shape the future of decentralized internet infrastructure.
              </p>
              
              <CommunityStats />
            </div>
          </FadeIn>
        </div>
      </section>
      
      <ParallaxSection className="py-24">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl font-heading font-bold mb-12 text-center dark:text-text-heading-dark">Connect With Us</h2>
              
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <StaggerItem>
                  <SocialCard 
                    title="Twitter"
                    description="Follow us for the latest updates and announcements"
                    icon={
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                      </svg>
                    }
                    href="https://twitter.com/lumina"
                    linkText="@lumina"
                  />
                </StaggerItem>
                
                <StaggerItem>
                  <SocialCard 
                    title="Discord"
                    description="Join our community chat for discussions and support"
                    icon={
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    }
                    href="https://discord.gg/lumina"
                    linkText="discord.gg/lumina"
                  />
                </StaggerItem>
                
                <StaggerItem>
                  <SocialCard 
                    title="GitHub"
                    description="Explore our open-source code and contribute"
                    icon={
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    }
                    href="https://github.com/lumina"
                    linkText="github.com/lumina"
                  />
                </StaggerItem>
              </StaggerContainer>
            </ScrollReveal>
            
            <ScrollReveal>
              <h2 className="text-3xl font-heading font-bold mb-8 text-center mt-16 dark:text-text-heading-dark">Community Programs</h2>
              
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <StaggerItem>
                  <ProgramCard 
                    title="Ambassador Program"
                    description="Become a Lumina ambassador and help grow our community worldwide. Ambassadors receive exclusive benefits and rewards for their contributions."
                    href="#"
                    linkText="Apply to become an ambassador"
                    image="/images/community/ambassador.svg"
                  />
                </StaggerItem>
                
                <StaggerItem>
                  <ProgramCard 
                    title="Developer Grants"
                    description="We support developers building applications and tools on the Lumina network through our grants program, providing funding and technical support."
                    href="#"
                    linkText="Learn about developer grants"
                    image="/images/community/developer.svg"
                  />
                </StaggerItem>
                
                <StaggerItem>
                  <ProgramCard 
                    title="Community Events"
                    description="Join our regular online and in-person events, including hackathons, AMAs, and technical workshops to learn and connect with other community members."
                    href="#"
                    linkText="View upcoming events"
                    image="/images/community/events.svg"
                  />
                </StaggerItem>
                
                <StaggerItem>
                  <ProgramCard 
                    title="Education Program"
                    description="Access free educational resources, tutorials, and courses to learn about decentralized infrastructure, blockchain technology, and the AetherLink ecosystem."
                    href="#"
                    linkText="Explore educational resources"
                    image="/images/community/education.svg"
                  />
                </StaggerItem>
              </StaggerContainer>
            </ScrollReveal>
            
            <ScrollReveal>
              <div className="mb-16 p-8 bg-gradient-to-br from-background to-background-secondary dark:from-background-dark dark:to-background-secondary-dark rounded-xl border border-border dark:border-border-dark shadow-md">
                <h2 className="text-3xl font-heading font-bold mb-8 text-center dark:text-text-heading-dark">Governance</h2>
                <p className="text-text-medium dark:text-text-medium-dark text-center mb-12 max-w-2xl mx-auto">
                  Lumina is committed to decentralized governance, allowing token holders to participate in key decisions about the network&apos;s future.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <GovernanceStep 
                    number={1}
                    title="Proposal"
                    description="Token holders can submit improvement proposals for network changes"
                  />
                  
                  <div className="hidden md:flex items-center justify-center text-primary dark:text-primary-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                  
                  <GovernanceStep 
                    number={2}
                    title="Discussion"
                    description="Community discusses and refines proposals in governance forums"
                  />
                  
                  <div className="hidden md:flex items-center justify-center text-primary dark:text-primary-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                  
                  <GovernanceStep 
                    number={3}
                    title="Voting"
                    description="Token holders vote on proposals, with voting power based on holdings"
                  />
                  
                  <div className="hidden md:flex items-center justify-center text-primary dark:text-primary-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                  
                  <GovernanceStep 
                    number={4}
                    title="Implementation"
                    description="Approved proposals are implemented by the core team or community contributors"
                  />
                </div>
                
                <div className="text-center mt-12">
                  <Button href="/whitepaper#governance" variant="primary" className="hover:scale-105 transition-transform duration-300">
                    Learn more about governance
                  </Button>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal>
              <div className="text-center p-8 bg-white dark:bg-background-card-dark rounded-xl border border-border dark:border-border-dark shadow-md">
                <h2 className="text-3xl font-heading font-bold mb-6 dark:text-text-heading-dark">Join Our Community Today</h2>
                <p className="text-text-medium dark:text-text-medium-dark mb-8 max-w-2xl mx-auto">
                  Be part of the movement to build a more decentralized, accessible, and equitable internet infrastructure for everyone.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button href="https://discord.gg/lumina" className="hover:scale-105 transition-transform duration-300">
                    Join Discord
                  </Button>
                  <Button href="https://twitter.com/lumina" variant="outline" className="hover:scale-105 transition-transform duration-300">
                    Follow on Twitter
                  </Button>
                  <Button href="/whitepaper" variant="secondary" className="hover:scale-105 transition-transform duration-300">
                    Read Whitepaper
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>
    </>
  );
} 