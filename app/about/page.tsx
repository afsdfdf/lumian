import { Metadata } from 'next';
import Image from 'next/image';
import ParallaxSection from '../../src/components/shared/ParallaxSection';
import { FadeIn, ScrollReveal, StaggerContainer, StaggerItem } from '../../src/components/animations';
import { Button } from '../../src/components/ui';

export const metadata: Metadata = {
  title: 'About - Lumina',
  description: 'Learn about Lumina\'s mission to bridge the digital divide through decentralized infrastructure, our core values, and the team driving this revolutionary technology.',
  keywords: ['about Lumina', 'Lumina team', 'Lumina mission', 'decentralized internet vision', 'blockchain team', 'DePIN project'],
  openGraph: {
    title: 'About Lumina - Our Mission and Team',
    description: 'Learn about Lumina\'s mission to bridge the digital divide through decentralized infrastructure, our core values, and the team driving this revolutionary technology.',
    images: [
      {
        url: '/images/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'About Lumina - Our Mission and Team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Lumina - Our Mission and Team',
    description: 'Learn about Lumina\'s mission to bridge the digital divide through decentralized infrastructure, our core values, and the team driving this revolutionary technology.',
    images: ['/images/og-about.jpg'],
  },
}

// Interactive stats component
const StatCard = ({ value, label, icon }: { value: string, label: string, icon: string }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white dark:bg-background-card-dark rounded-xl border border-border dark:border-border-dark shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
      <div className="h-12 w-12 bg-primary bg-opacity-10 dark:bg-primary dark:bg-opacity-20 rounded-full flex items-center justify-center mb-3">
        <Image 
          src={icon} 
          alt={label} 
          width={24} 
          height={24} 
        />
      </div>
      <div className="text-2xl font-bold text-primary dark:text-primary-dark mb-1">{value}</div>
      <div className="text-sm text-text-medium dark:text-text-medium-dark text-center">{label}</div>
    </div>
  );
};

// Team member card with hover effects
const TeamMember = ({ 
  name, 
  role, 
  description, 
  image, 
  socialLinks 
}: { 
  name: string, 
  role: string, 
  description: string, 
  image: string, 
  socialLinks?: { twitter?: string, linkedin?: string, github?: string } 
}) => {
  return (
    <div className="text-center group">
      <div className="relative h-48 w-48 mx-auto mb-4 overflow-hidden rounded-full border-4 border-border dark:border-border-dark transition-all duration-300 group-hover:border-primary dark:group-hover:border-primary-dark group-hover:scale-105">
        <Image 
          src={image}
          alt={`${name} - ${role}`}
          fill
          style={{objectFit: 'cover'}}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <h3 className="font-heading font-bold text-lg dark:text-text-heading-dark">{name}</h3>
      <p className="text-text-medium dark:text-text-medium-dark font-medium">{role}</p>
      <p className="text-sm text-text-light dark:text-text-light-dark mt-2 max-w-xs mx-auto">{description}</p>
      {socialLinks && (
        <div className="flex justify-center gap-3 mt-3">
          {socialLinks.twitter && (
            <a href={socialLinks.twitter} className="text-text-light dark:text-text-light-dark hover:text-primary dark:hover:text-primary-dark transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          )}
          {socialLinks.linkedin && (
            <a href={socialLinks.linkedin} className="text-text-light dark:text-text-light-dark hover:text-primary dark:hover:text-primary-dark transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          )}
          {socialLinks.github && (
            <a href={socialLinks.github} className="text-text-light dark:text-text-light-dark hover:text-primary dark:hover:text-primary-dark transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-background dark:bg-background-dark">
        <div className="container mx-auto container-padding">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
                              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-text-heading dark:text-text-heading-dark">About Lumina</h1>
              <p className="text-text-medium dark:text-text-medium-dark text-lg mb-8">
                Building a decentralized internet infrastructure that bridges the digital divide and empowers communities worldwide through innovative blockchain technology.
              </p>
              
              {/* Company Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
                <StatCard 
                  value="500K+" 
                  label="Network Nodes" 
                  icon="/images/technology/hardware.svg" 
                />
                <StatCard 
                  value="85%" 
                  label="Global Coverage" 
                  icon="/images/technology/network.svg" 
                />
                <StatCard 
                  value="50+" 
                  label="Countries" 
                  icon="/images/technology/blockchain.svg" 
                />
                <StatCard 
                  value="99.9%" 
                  label="Uptime" 
                  icon="/images/technology/security.svg" 
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      
      <ParallaxSection className="py-24">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                <div>
                  <h2 className="text-3xl font-heading font-bold mb-6 dark:text-text-heading-dark">Our Mission</h2>
                  <p className="text-text-medium dark:text-text-medium-dark mb-6">
                    Lumina is committed to building a global, decentralized internet infrastructure that provides reliable, affordable connectivity to underserved regions while creating sustainable economic opportunities for network participants.
                  </p>
                  <p className="text-text-medium dark:text-text-medium-dark">
                    We believe that internet access is a fundamental right, and through our innovative DePIN model, we aim to close the digital divide by incentivizing community-driven network expansion in areas where traditional infrastructure deployment is economically challenging.
                  </p>
                </div>
                <div className="relative h-64 w-full overflow-hidden rounded-xl border border-border dark:border-border-dark shadow-md">
                  <Image 
                    src="/images/about/mission.svg"
                    alt="Lumina Mission Illustration"
                    fill
                    style={{objectFit: 'contain'}}
                    priority
                    className="hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                <div className="order-2 md:order-1 relative h-64 w-full overflow-hidden rounded-xl border border-border dark:border-border-dark shadow-md">
                  <Image 
                    src="/images/about/vision.svg"
                    alt="Lumina Vision Illustration"
                    fill
                    style={{objectFit: 'contain'}}
                    priority
                    className="hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-3xl font-heading font-bold mb-6 dark:text-text-heading-dark">Our Vision</h2>
                  <p className="text-text-medium dark:text-text-medium-dark mb-6">
                    To create a world where everyone has equitable access to high-quality internet connectivity, empowering individuals and communities to fully participate in the digital economy regardless of geographic or economic circumstances.
                  </p>
                  <p className="text-text-medium dark:text-text-medium-dark">
                    We envision a future where decentralized infrastructure networks, governed by their users and operators, provide essential services more efficiently, fairly, and sustainably than traditional centralized models.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            
            <div className="mb-24">
              <ScrollReveal>
                <h2 className="text-3xl font-heading font-bold mb-8 text-center dark:text-text-heading-dark">Core Values</h2>
              </ScrollReveal>
              
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <StaggerItem>
                  <div className="border border-border dark:border-border-dark p-6 bg-white dark:bg-background-card-dark content-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                    <h3 className="text-xl font-heading font-bold mb-4 dark:text-text-heading-dark">Decentralization</h3>
                    <p className="text-text-medium dark:text-text-medium-dark">
                      We are committed to distributing power, control, and economic benefits across the network, avoiding single points of failure while enhancing resilience and user autonomy.
                    </p>
                  </div>
                </StaggerItem>
                
                <StaggerItem>
                  <div className="border border-border dark:border-border-dark p-6 bg-white dark:bg-background-card-dark content-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                    <h3 className="text-xl font-heading font-bold mb-4 dark:text-text-heading-dark">Accessibility</h3>
                    <p className="text-text-medium dark:text-text-medium-dark">
                      We design our technology and economic models to ensure internet access is available to everyone, regardless of geographic location or economic circumstances.
                    </p>
                  </div>
                </StaggerItem>
                
                <StaggerItem>
                  <div className="border border-border dark:border-border-dark p-6 bg-white dark:bg-background-card-dark content-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                    <h3 className="text-xl font-heading font-bold mb-4 dark:text-text-heading-dark">Innovation</h3>
                    <p className="text-text-medium dark:text-text-medium-dark">
                      We continuously push the boundaries of decentralized technology, developing novel solutions for connectivity challenges through research and creative problem-solving.
                    </p>
                  </div>
                </StaggerItem>
                
                <StaggerItem>
                  <div className="border border-border dark:border-border-dark p-6 bg-white dark:bg-background-card-dark content-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                    <h3 className="text-xl font-heading font-bold mb-4 dark:text-text-heading-dark">Sustainability</h3>
                    <p className="text-text-medium dark:text-text-medium-dark">
                      We create economically self-sustaining systems that align incentives between all stakeholders, ensuring the network can grow and evolve without reliance on external subsidies.
                    </p>
                  </div>
                </StaggerItem>
                
                <StaggerItem>
                  <div className="border border-border dark:border-border-dark p-6 bg-white dark:bg-background-card-dark content-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                    <h3 className="text-xl font-heading font-bold mb-4 dark:text-text-heading-dark">Privacy</h3>
                    <p className="text-text-medium dark:text-text-medium-dark">
                      We respect user privacy as a fundamental right, building systems that protect personal data and communications while giving users control over their digital identity.
                    </p>
                  </div>
                </StaggerItem>
                
                <StaggerItem>
                  <div className="border border-border dark:border-border-dark p-6 bg-white dark:bg-background-card-dark content-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                    <h3 className="text-xl font-heading font-bold mb-4 dark:text-text-heading-dark">Community</h3>
                    <p className="text-text-medium dark:text-text-medium-dark">
                      We foster an inclusive global community of contributors, developers, and users who collaborate to build and govern the network through transparent, participatory processes.
                    </p>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>
            
            <div>
              <ScrollReveal>
                <h2 className="text-3xl font-heading font-bold mb-8 text-center dark:text-text-heading-dark">Our Team</h2>
              </ScrollReveal>
              
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                <StaggerItem>
                  <TeamMember
                    name="Ming Zhang"
                    role="CEO & Co-Founder"
                    description="With over 10 years of experience in the blockchain industry, has successfully incubated and led multiple Web3 projects. Has a deep understanding and strategic insight into the DePIN track."
                    image="/images/team/ming-zhang.jpg"
                    socialLinks={{
                      twitter: "https://twitter.com/mingzhang",
                      linkedin: "https://linkedin.com/in/mingzhang"
                    }}
                  />
                </StaggerItem>
                
                <StaggerItem>
                  <TeamMember
                    name="Hua Li"
                    role="CTO & Co-Founder"
                    description="Seasoned network architect and software engineer with over 15 years of experience in telecommunications and wireless communications. Expert in distributed systems and high-performance network design."
                    image="/images/team/hua-li.jpg"
                    socialLinks={{
                      twitter: "https://twitter.com/huali",
                      linkedin: "https://linkedin.com/in/huali",
                      github: "https://github.com/huali"
                    }}
                  />
                </StaggerItem>
                
                <StaggerItem>
                  <TeamMember
                    name="Fang Wang"
                    role="COO"
                    description="8 years of experience in marketing, community management, and business development. Successfully driven user growth and ecosystem prosperity for multiple Web3 projects."
                    image="/images/team/fang-wang.jpg"
                    socialLinks={{
                      twitter: "https://twitter.com/fangwang",
                      linkedin: "https://linkedin.com/in/fangwang"
                    }}
                  />
                </StaggerItem>
                
                <StaggerItem>
                  <TeamMember
                    name="Qiang Zhao"
                    role="Head of Hardware Engineering"
                    description="12 years of hardware R&D experience, focusing on IoT devices and wireless communication hardware design. Has led the mass production of multiple smart hardware products."
                    image="/images/team/qiang-zhao.jpg"
                    socialLinks={{
                      linkedin: "https://linkedin.com/in/qiangzhao",
                      github: "https://github.com/qiangzhao"
                    }}
                  />
                </StaggerItem>
              </StaggerContainer>

              <ScrollReveal>
                <h2 className="text-3xl font-heading font-bold mb-8 text-center mt-16 dark:text-text-heading-dark">Advisory Board</h2>
              </ScrollReveal>

              <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <StaggerItem>
                  <div className="border border-border dark:border-border-dark p-6 bg-white dark:bg-background-card-dark text-center content-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                    <h3 className="font-heading font-bold text-lg dark:text-text-heading-dark">Gang Chen</h3>
                    <p className="text-text-medium dark:text-text-medium-dark mb-3">Blockchain Strategy Advisor</p>
                    <p className="text-sm text-text-light dark:text-text-light-dark">Well-known blockchain investor, early evangelist in the DePIN field, providing strategic guidance to multiple leading projects.</p>
                  </div>
                </StaggerItem>
                
                <StaggerItem>
                  <div className="border border-border dark:border-border-dark p-6 bg-white dark:bg-background-card-dark text-center content-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                    <h3 className="font-heading font-bold text-lg dark:text-text-heading-dark">Li Liu</h3>
                    <p className="text-text-medium dark:text-text-medium-dark mb-3">Legal and Compliance Advisor</p>
                    <p className="text-sm text-text-light dark:text-text-light-dark">Seasoned legal expert focusing on cryptocurrency and blockchain industry regulations. Rich experience in international compliance and policy-making.</p>
                  </div>
                </StaggerItem>
                
                <StaggerItem>
                  <div className="border border-border dark:border-border-dark p-6 bg-white dark:bg-background-card-dark text-center content-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                    <h3 className="font-heading font-bold text-lg dark:text-text-heading-dark">Tao Sun</h3>
                    <p className="text-text-medium dark:text-text-medium-dark mb-3">Telecommunications Industry Advisor</p>
                    <p className="text-sm text-text-light dark:text-text-light-dark">20 years of telecom industry experience, former executive at major telecom operators, with unique insights into global telecom markets and infrastructure construction.</p>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>
        </div>
      </ParallaxSection>


      
      <section className="py-24 bg-secondary dark:bg-secondary-dark">
        <div className="container mx-auto container-padding text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-heading font-bold mb-6 dark:text-text-heading-dark">Join Our Mission</h2>
            <p className="text-text-medium dark:text-text-medium-dark max-w-2xl mx-auto mb-8">
              Lumina is building more than just a network—we&apos;re creating a movement toward a more equitable digital future. Join us in our mission to connect the unconnected and transform how internet infrastructure is built and maintained.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/community" className="hover:scale-105 transition-transform duration-300">
                Join Our Community
              </Button>
              <Button href="/whitepaper" variant="outline" className="hover:scale-105 transition-transform duration-300">
                Read Our Whitepaper
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
} 