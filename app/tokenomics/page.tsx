import { Metadata } from 'next';
import ParallaxSection from '../../src/components/shared/ParallaxSection';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../../src/components/animations';
import { Button } from '../../src/components/ui';

export const metadata: Metadata = {
  title: 'Tokenomics - Lumina',
  description: 'Explore the comprehensive Lumina token economics, including the dual-token system, deflationary mechanisms, distribution strategy, and governance model.',
  keywords: ['Lumina token', 'Lumina tokenomics', 'token distribution', 'token utility', 'token economics', 'data credits', 'deflationary token', 'token governance'],
  openGraph: {
    title: 'Lumina Tokenomics - Lumina Token Economy',
    description: 'Explore the comprehensive Lumina token economics, including the dual-token system, deflationary mechanisms, distribution strategy, and governance model.',
    images: [
      {
        url: '/images/og-tokenomics.jpg',
        width: 1200,
        height: 630,
        alt: 'Lumina Tokenomics - Lumina Token Economy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumina Tokenomics - Lumina Token Economy',
    description: 'Explore the comprehensive Lumina token economics, including the dual-token system, deflationary mechanisms, distribution strategy, and governance model.',
    images: ['/images/og-tokenomics.jpg'],
  },
}

// Interactive token stats component
const TokenStat = ({ label, value, change, icon }: { label: string, value: string, change?: string, icon: string }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white dark:bg-background-card-dark rounded-xl border border-border dark:border-border-dark shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
      <div className="h-12 w-12 bg-primary bg-opacity-10 dark:bg-primary dark:bg-opacity-20 rounded-full flex items-center justify-center mb-3">
        <svg className="w-6 h-6 text-primary dark:text-primary-dark" fill="currentColor" viewBox="0 0 24 24">
          <path d={icon} />
        </svg>
      </div>
      <div className="text-2xl font-bold text-primary dark:text-primary-dark mb-1">{value}</div>
      <div className="text-sm text-text-medium dark:text-text-medium-dark text-center">{label}</div>
      {change && (
        <div className="text-xs text-green-600 dark:text-green-400 mt-1">{change}</div>
      )}
    </div>
  );
};

// Interactive distribution chart component
const DistributionChart = ({ data }: { data: Array<{ label: string, percentage: number, color: string, description: string }> }) => {
  return (
    <div className="space-y-4">
      {data.map((item, index) => (
        <div key={index} className="border border-border dark:border-border-dark p-6 bg-white dark:bg-background-card-dark rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
          <div className="flex justify-between items-center mb-2">
            <span className="font-heading font-bold dark:text-text-heading-dark">{item.label}</span>
            <span className="font-heading font-bold text-primary dark:text-primary-dark">{item.percentage}%</span>
          </div>
          <div className="w-full bg-background-secondary dark:bg-background-secondary-dark h-4 rounded-full overflow-hidden">
            <div 
              className={`h-4 rounded-full transition-all duration-1000 ease-out`}
              style={{ 
                width: `${item.percentage}%`,
                backgroundColor: item.color
              }}
            ></div>
          </div>
          <p className="text-sm text-text-light dark:text-text-light-dark mt-3">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

// Interactive emission chart component
const EmissionChart = () => {
  const years = ['Y1', 'Y2', 'Y3', 'Y4', 'Y5', 'Y6', 'Y7', 'Y8'];
  const heights = [90, 90, 45, 45, 22, 22, 11, 11];
  
  return (
    <div className="mt-6 h-32 w-full bg-background-secondary dark:bg-background-secondary-dark rounded-lg relative p-4">
      <div className="absolute top-4 left-4 right-4 bottom-8 flex items-end gap-1">
        {heights.map((height, index) => (
          <div 
            key={index}
            className="bg-primary dark:bg-primary-dark rounded-t transition-all duration-1000 ease-out hover:bg-primary/80 dark:hover:bg-primary-dark/80"
            style={{ 
              height: `${height}%`,
              width: `${100 / heights.length - 1}%`
            }}
          ></div>
        ))}
      </div>
      <div className="absolute bottom-0 left-4 right-4 flex justify-between text-xs text-text-medium dark:text-text-medium-dark">
        {years.map((year, index) => (
          <span key={index} className="text-center">{year}</span>
        ))}
      </div>
    </div>
  );
};

export default function TokenomicsPage() {
  const distributionData = [
    {
      label: "Network Incentives",
      percentage: 60,
      color: "#3B82F6",
      description: "10% at TGE, then linear release over 8 years with halving mechanism every 2 years"
    },
    {
      label: "Ecosystem Development",
      percentage: 15,
      color: "#10B981",
      description: "5% at TGE for initial ecosystem bootstrap, remaining 95% locked with linear release over 5 years"
    },
    {
      label: "Team & Advisors",
      percentage: 15,
      color: "#F59E0B",
      description: "2-year cliff followed by 3-year linear vesting with performance-based milestones"
    },
    {
      label: "Private & Public Sale",
      percentage: 10,
      color: "#EF4444",
      description: "Private sale: 10% at TGE, 90% linear vesting over 2 years. Public sale: 25% at TGE, 75% linear vesting over 1 year"
    }
  ];

  return (
    <>
      <section className="pt-32 pb-16 bg-background dark:bg-background-dark">
        <div className="container mx-auto container-padding">
          <div className="max-w-3xl mx-auto">
                            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-text-heading dark:text-text-heading-dark">Lumina Tokenomics</h1>
            <p className="text-text-medium dark:text-text-medium-dark text-lg mb-8">
              The innovative dual-token economic model powering Lumina&apos;s decentralized internet infrastructure, designed for sustainability, value capture, and user-friendly pricing.
            </p>
            
            {/* Token Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
              <TokenStat 
                value="10B" 
                label="Max Supply" 
                icon="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
              />
              <TokenStat 
                value="60%" 
                label="Network Rewards" 
                icon="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              />
              <TokenStat 
                value="0.00001" 
                label="Data Credit Price" 
                icon="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
              />
              <TokenStat 
                value="8 Years" 
                label="Emission Period" 
                icon="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
              />
            </div>
          </div>
        </div>
      </section>
      
      <ParallaxSection className="py-24">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="mb-16">
                <h2 className="text-3xl font-heading font-bold mb-6 dark:text-text-heading-dark">Token Economic Model</h2>
                <p className="text-text-medium dark:text-text-medium-dark mb-8">
                  Lumina implements an innovative dual-token system that addresses key challenges in DePIN projects:
                </p>
                
                <div className="border border-border dark:border-border-dark p-6 mb-8 bg-white dark:bg-background-card-dark rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="text-xl font-heading font-bold mb-4 dark:text-text-heading-dark">Dual-Token System</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-heading font-bold mb-2 dark:text-text-heading-dark">Lumina Token</h4>
                      <ul className="list-disc list-inside text-text-medium dark:text-text-medium-dark space-y-2">
                        <li>Native utility and governance token</li>
                        <li>Fluctuates with market conditions</li>
                        <li>Used for staking and governance</li>
                        <li>Burned to create Data Credits</li>
                        <li>Tradable on exchanges</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold mb-2 dark:text-text-heading-dark">Data Credits (DC)</h4>
                      <ul className="list-disc list-inside text-text-medium dark:text-text-medium-dark space-y-2">
                        <li>Stable-priced utility token</li>
                        <li>Fixed USD value (1 DC = 0.00001)</li>
                        <li>Used to pay for network services</li>
                        <li>Non-transferable</li>
                        <li>Created by burning Lumina tokens</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="border border-border dark:border-border-dark p-6 bg-white dark:bg-background-card-dark rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="text-xl font-heading font-bold mb-4 dark:text-text-heading-dark">Value Flow Mechanism</h3>
                  <p className="text-text-medium dark:text-text-medium-dark mb-4">
                    The token economic model creates a sustainable value flow cycle:
                  </p>
                  <ol className="list-decimal list-inside text-text-medium dark:text-text-medium-dark space-y-3">
                    <li><span className="font-medium dark:text-white">Service Demand:</span> Users need internet connectivity services</li>
                    <li><span className="font-medium dark:text-white">Lumina Acquisition:</span> Users acquire Lumina tokens from markets</li>
                    <li><span className="font-medium dark:text-white">DC Creation:</span> Users burn Lumina to create Data Credits at fixed rates</li>
                    <li><span className="font-medium dark:text-white">Service Payment:</span> Users spend DCs to access network services</li>
                    <li><span className="font-medium dark:text-white">Provider Rewards:</span> Service providers receive Lumina rewards</li>
                    <li><span className="font-medium dark:text-white">Value Capture:</span> Continuous burning creates deflationary pressure on Lumina</li>
                  </ol>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="mb-16">
                <h2 className="text-3xl font-heading font-bold mb-6 dark:text-text-heading-dark">Token Functions</h2>
                
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <StaggerItem>
                    <div className="border border-border dark:border-border-dark p-6 bg-white dark:bg-background-card-dark content-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                      <h3 className="text-xl font-heading font-bold mb-4 dark:text-text-heading-dark">Network Incentives</h3>
                      <p className="text-text-medium dark:text-text-medium-dark">
                        Rewards for connectivity providers are calculated through a multi-factor algorithm considering coverage area, data transmission volume, service quality metrics, and network uptime. The incentive mechanism dynamically adjusts to network conditions and growth stages.
                      </p>
                    </div>
                  </StaggerItem>
                  
                  <StaggerItem>
                    <div className="border border-border dark:border-border-dark p-6 bg-white dark:bg-background-card-dark content-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                      <h3 className="text-xl font-heading font-bold mb-4 dark:text-text-heading-dark">Data Credit System</h3>
                      <p className="text-text-medium dark:text-text-medium-dark">
                        The Data Credit system provides price stability for end users while creating deflationary pressure on Lumina. When users burn Lumina for DCs, the tokens are permanently removed from circulation, directly linking network usage to token value appreciation.
                      </p>
                    </div>
                  </StaggerItem>
                  
                  <StaggerItem>
                    <div className="border border-border dark:border-border-dark p-6 bg-white dark:bg-background-card-dark content-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                      <h3 className="text-xl font-heading font-bold mb-4 dark:text-text-heading-dark">Governance Framework</h3>
                      <p className="text-text-medium dark:text-text-medium-dark">
                        Lumina holders can participate in decentralized governance through proposal submission and voting. The governance system uses a quadratic voting mechanism that balances influence between large and small token holders, with delegation options for passive participants.
                      </p>
                    </div>
                  </StaggerItem>
                  
                  <StaggerItem>
                    <div className="border border-border dark:border-border-dark p-6 bg-white dark:bg-background-card-dark content-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                      <h3 className="text-xl font-heading font-bold mb-4 dark:text-text-heading-dark">Staking Mechanisms</h3>
                      <p className="text-text-medium dark:text-text-medium-dark">
                        Multiple staking options are available with different lock-up periods and reward structures. Staking serves both as a security mechanism and as a way to earn passive income, with bonus rewards for long-term commitments and validator node operation.
                      </p>
                    </div>
                  </StaggerItem>
                </StaggerContainer>
                
                <div className="border border-border dark:border-border-dark p-6 bg-white dark:bg-background-card-dark content-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="text-xl font-heading font-bold mb-4 dark:text-text-heading-dark">Enterprise Solutions</h3>
                  <p className="text-text-medium dark:text-text-medium-dark">
                    For enterprise users, Lumina offers bulk Data Credit purchasing with volume discounts, programmable allocation systems, and customizable service level agreements. Enterprise accounts can manage multiple devices and users under unified billing and administration systems.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal>
              <div className="mb-16">
                <h2 className="text-3xl font-heading font-bold mb-6 dark:text-text-heading-dark">Token Distribution</h2>
                <p className="text-text-medium dark:text-text-medium-dark mb-8">
                  Lumina has a maximum supply of <strong>10 billion</strong> tokens, distributed strategically to ensure sustainable network growth, fair participation, and long-term alignment of interests:
                </p>
                
                <DistributionChart data={distributionData} />
              </div>
            </ScrollReveal>
            
            <ScrollReveal>
              <div className="mb-16">
                <h2 className="text-3xl font-heading font-bold mb-6 dark:text-text-heading-dark">Token Mechanics</h2>
                
                <div className="space-y-8">
                  <div className="border border-border dark:border-border-dark p-6 bg-white dark:bg-background-card-dark content-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <h3 className="text-xl font-heading font-bold mb-4 dark:text-text-heading-dark">Emission Schedule</h3>
                    <p className="text-text-medium dark:text-text-medium-dark">
                      The emission schedule follows a decreasing curve to control inflation and incentivize early participation. The initial emission rate is highest in the first two years to bootstrap network growth, then decreases by approximately 50% every two years until the maximum supply is reached.
                    </p>
                    <EmissionChart />
                  </div>
                  
                  <div className="border border-border dark:border-border-dark p-6 bg-white dark:bg-background-card-dark content-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <h3 className="text-xl font-heading font-bold mb-4 dark:text-text-heading-dark">Burning Mechanism</h3>
                    <p className="text-text-medium dark:text-text-medium-dark mb-4">
                      The token burning mechanism creates a direct correlation between network usage and token value. For every $1 of network services used:
                    </p>
                    <ol className="list-decimal list-inside text-text-medium dark:text-text-medium-dark space-y-2">
                                              <li>100,000 Data Credits are required (at 0.00001 per DC)</li>
                      <li>Lumina tokens worth $1 are permanently burned from circulation</li>
                      <li>As network usage grows, more Lumina is burned, reducing supply</li>
                      <li>Decreasing supply against growing demand creates positive price pressure</li>
                    </ol>
                  </div>
                  
                  <div className="border border-border dark:border-border-dark p-6 bg-white dark:bg-background-card-dark content-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <h3 className="text-xl font-heading font-bold mb-4 dark:text-text-heading-dark">Governance Parameters</h3>
                    <p className="text-text-medium dark:text-text-medium-dark mb-4">
                      The governance system allows token holders to vote on key network parameters:
                    </p>
                    <ul className="list-disc list-inside text-text-medium dark:text-text-medium-dark space-y-2">
                      <li>Reward distribution formulas and weightings</li>
                      <li>Network upgrade proposals and protocol changes</li>
                      <li>Treasury fund allocations and grant approvals</li>
                      <li>Data Credit conversion rates and mechanisms</li>
                      <li>Staking requirements and reward structures</li>
                    </ul>
                    <p className="text-text-medium dark:text-text-medium-dark mt-4">
                      Proposals require minimum thresholds for submission (0.1% of circulating supply) and passing ({'>'}50% approval with minimum 10% participation).
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="mb-8">
                <h2 className="text-3xl font-heading font-bold mb-6 dark:text-text-heading-dark">Economic Security</h2>
                <p className="text-text-medium dark:text-text-medium-dark mb-6">
                  Lumina&apos;s token model incorporates multiple security mechanisms to protect against common vulnerabilities:
                </p>
                
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <StaggerItem>
                    <div className="border border-border dark:border-border-dark p-5 bg-white dark:bg-background-card-dark content-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                      <h3 className="font-heading font-bold mb-2 dark:text-text-heading-dark">Sybil Attack Resistance</h3>
                      <p className="text-sm text-text-medium dark:text-text-medium-dark">
                        Proof of Coverage with hardware-based verification prevents fake node creation, while stake requirements and reputation systems create economic barriers to attack.
                      </p>
                    </div>
                  </StaggerItem>
                  
                  <StaggerItem>
                    <div className="border border-border dark:border-border-dark p-5 bg-white dark:bg-background-card-dark content-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                      <h3 className="font-heading font-bold mb-2 dark:text-text-heading-dark">Market Manipulation Protection</h3>
                      <p className="text-sm text-text-medium dark:text-text-medium-dark">
                        The dual-token system isolates service pricing from token market volatility, while extended vesting schedules prevent large token holders from causing market disruptions.
                      </p>
                    </div>
                  </StaggerItem>
                  
                  <StaggerItem>
                    <div className="border border-border dark:border-border-dark p-5 bg-white dark:bg-background-card-dark content-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                      <h3 className="font-heading font-bold mb-2 dark:text-text-heading-dark">Governance Attack Mitigation</h3>
                      <p className="text-sm text-text-medium dark:text-text-medium-dark">
                        Quadratic voting and time-locked execution of proposals prevent plutocratic control and allow for emergency intervention if malicious proposals are detected.
                      </p>
                    </div>
                  </StaggerItem>
                  
                  <StaggerItem>
                    <div className="border border-border dark:border-border-dark p-5 bg-white dark:bg-background-card-dark content-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                      <h3 className="font-heading font-bold mb-2 dark:text-text-heading-dark">Economic Sustainability</h3>
                      <p className="text-sm text-text-medium dark:text-text-medium-dark">
                        The decreasing emission curve and burning mechanism create long-term token value alignment with network growth, while multiple revenue streams ensure service provider profitability.
                      </p>
                    </div>
                  </StaggerItem>
                </StaggerContainer>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>

      <section className="py-16 bg-secondary dark:bg-secondary-dark">
        <div className="container mx-auto container-padding">
          <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl font-heading font-bold mb-6 dark:text-text-heading-dark">Participate in the Lumina Economy</h2>
            <p className="text-text-medium dark:text-text-medium-dark mb-8">
              Join the decentralized internet revolution as a network provider, token holder, or governance participant.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/whitepaper" className="hover:scale-105 transition-transform duration-300">
                Read Full Whitepaper
              </Button>
              <Button href="/community" variant="outline" className="hover:scale-105 transition-transform duration-300">
                Join Our Community
              </Button>
              <Button href="/demo" variant="secondary" className="hover:scale-105 transition-transform duration-300">
                Try Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 