import { Metadata } from 'next';
import Link from 'next/link';
import { FadeIn, ScrollReveal } from '../../src/components/animations';

export const metadata: Metadata = {
  title: 'Whitepaper - Lumina',
  description: 'The official Lumina whitepaper detailing our decentralized internet infrastructure technology, token economics, and roadmap.',
  keywords: ['whitepaper', 'blockchain', 'DePIN', 'decentralized internet', 'token economics', 'Lumina technology', 'LUMINA token'],
  openGraph: {
    title: 'Lumina Whitepaper - Decentralized Internet Infrastructure',
    description: 'Explore the technical details of Lumina&apos;s decentralized internet infrastructure, token economics, and roadmap.',
    images: [
      {
        url: '/images/og-whitepaper.jpg',
        width: 1200,
        height: 630,
        alt: 'Lumina Whitepaper',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumina Whitepaper - Decentralized Internet Infrastructure',
    description: 'Explore the technical details of Lumina&apos;s decentralized internet infrastructure, token economics, and roadmap.',
    images: ['/images/og-whitepaper.jpg'],
  },
}

export default function WhitepaperPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="container mx-auto container-padding">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Lumina Whitepaper</h1>
              <p className="text-xl text-text-medium mb-8">
                Decentralized Internet Infrastructure for Global Connectivity
              </p>
              <div className="flex justify-center gap-4">
                <a 
                  href="/whitepaper.html" 
                  target="_blank" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
                >
                  View Full HTML Version
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a 
                  href="/whitepaper.pdf" 
                  download 
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors"
                >
                  Download PDF
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-12 bg-secondary">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="bg-white p-8 rounded-lg shadow-md content-card">
                <h2 className="text-2xl font-heading font-bold mb-4">Table of Contents</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-primary">Core Concepts</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="#introduction" className="text-text-medium hover:text-primary flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary text-sm">1</span>
                          Introduction & Vision
                        </a>
                      </li>
                      <li>
                        <a href="#market-analysis" className="text-text-medium hover:text-primary flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary text-sm">2</span>
                          Market Analysis (2025 Update)
                        </a>
                      </li>
                      <li>
                        <a href="#technology" className="text-text-medium hover:text-primary flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary text-sm">3</span>
                          Enhanced Technical Architecture
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-primary">Economics & Strategy</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="#tokenomics" className="text-text-medium hover:text-primary flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary text-sm">4</span>
                          LUMINA Token Economics
                        </a>
                      </li>
                      <li>
                        <a href="#roadmap" className="text-text-medium hover:text-primary flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary text-sm">5</span>
                          Development Roadmap
                        </a>
                      </li>
                      <li>
                        <a href="#governance" className="text-text-medium hover:text-primary flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary text-sm">6</span>
                          Governance & Community
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="introduction" className="py-16">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="mb-12">
                <h2 className="text-3xl font-heading font-bold mb-6">1. Introduction</h2>
              <div className="prose prose-lg max-w-none">
                  <h3 className="text-xl font-heading font-bold mb-4">Project Overview</h3>
                  <p className="text-text-medium mb-6">
                                      Lumina aims to address global internet connectivity challenges, particularly in emerging markets, through a Decentralized Physical Infrastructure Network (DePIN) model. We are committed to building a community-driven, scalable, and cost-effective decentralized internet infrastructure that provides users with high-speed, reliable, and affordable internet access.
                </p>
                  
                  <h3 className="text-xl font-heading font-bold mb-4">Vision & Mission</h3>
                  <div className="bg-secondary p-6 rounded-lg mb-6">
                    <p className="mb-4"><strong>Vision:</strong> To become the world&apos;s leading decentralized internet infrastructure, empowering digital inclusivity and driving global internet access equity and efficiency.</p>
                    <p><strong>Mission:</strong> To leverage blockchain technology and the DePIN model to build an open, transparent, community-maintained global internet network that provides seamless connectivity to underserved regions while creating sustainable value for all ecosystem participants.</p>
                  </div>

                  <h3 className="text-xl font-heading font-bold mb-4">Key Differentiators</h3>
                  <ul className="list-disc list-inside space-y-2 text-text-medium">
                    <li>Multi-functional mining hardware combining Wi-Fi, 5G, IoT, and edge computing</li>
                    <li>Partnership model with Local Service Operators (LSOs) for rapid deployment</li>
                    <li>Data Credits system ensuring stable pricing regardless of token volatility</li>
                    <li>Specific focus on emerging markets with high growth potential</li>
                    <li>Community-driven governance transitioning to full DAO control</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="market-analysis" className="py-16 bg-secondary">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-heading font-bold mb-6">2. Market Analysis (2025 Update)</h2>
                
                <h3 className="text-xl font-heading font-bold mb-4">Current Digital Divide</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-secondary p-6 rounded-lg">
                    <h4 className="font-bold text-primary mb-2">Global Connectivity Gap</h4>
                    <ul className="text-sm space-y-1">
                      <li>• 2.6 billion people still lack internet access</li>
                      <li>• 33% of global population remains unconnected</li>
                      <li>• 95% of unconnected live in developing countries</li>
                      <li>• Rural areas 4x less likely to have access</li>
                    </ul>
                  </div>
                  <div className="bg-secondary p-6 rounded-lg">
                    <h4 className="font-bold text-primary mb-2">DePIN Market Growth</h4>
                    <ul className="text-sm space-y-1">
                      <li>• $60+ billion total market cap (Q4 2024)</li>
                      <li>• 55% projected CAGR through 2028</li>
                      <li>• 650+ active DePIN projects globally</li>
                      <li>• $12+ billion in investments in 2024</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-heading font-bold mb-4">Competitive Positioning</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2">Project</th>
                        <th className="text-left py-2">Focus</th>
                        <th className="text-left py-2">Market Cap</th>
                        <th className="text-left py-2">Key Differentiation</th>
                      </tr>
                    </thead>
                    <tbody className="space-y-2">
                      <tr className="border-b border-border">
                        <td className="py-2 font-bold text-primary">Lumina</td>
                        <td className="py-2">Connectivity</td>
                        <td className="py-2">Mainnet pending</td>
                        <td className="py-2">Multi-service integration, emerging market focus</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2">Helium</td>
                        <td className="py-2">IoT/5G</td>
                        <td className="py-2">$1.2B</td>
                        <td className="py-2">First mover, established ecosystem</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2">Filecoin</td>
                        <td className="py-2">Storage</td>
                        <td className="py-2">$2.1B</td>
                        <td className="py-2">Large-scale storage networks</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="technology" className="py-16">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="mb-12">
                <h2 className="text-3xl font-heading font-bold mb-6">3. Enhanced Technical Architecture</h2>
                
                <h3 className="text-xl font-heading font-bold mb-4">Blockchain Infrastructure</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-secondary p-6 rounded-lg text-center">
                    <h4 className="font-bold text-primary mb-2">High Throughput</h4>
                    <p className="text-2xl font-bold text-text-heading">65,000+</p>
                    <p className="text-sm text-text-medium">Transactions per second</p>
                  </div>
                  <div className="bg-secondary p-6 rounded-lg text-center">
                    <h4 className="font-bold text-primary mb-2">Low Latency</h4>
                    <p className="text-2xl font-bold text-text-heading">400ms</p>
                    <p className="text-sm text-text-medium">Average block time</p>
                  </div>
                  <div className="bg-secondary p-6 rounded-lg text-center">
                    <h4 className="font-bold text-primary mb-2">Low Cost</h4>
                    <p className="text-2xl font-bold text-text-heading">&lt;$0.01</p>
                    <p className="text-sm text-text-medium">Typical transaction cost</p>
                  </div>
                </div>

                <h3 className="text-xl font-heading font-bold mb-4">Multi-Functional Hardware Capabilities</h3>
                <div className="bg-secondary p-6 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold text-primary mb-2">Connectivity Services</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Wi-Fi 6E (tri-band support)</li>
                        <li>• 5G Small Cell capabilities</li>
                        <li>• Mesh networking protocols</li>
                        <li>• IoT gateway functionality</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-2">Computing & Storage</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Edge computing (8-16 ARM cores)</li>
                        <li>• Local content caching</li>
                        <li>• 256GB-1TB SSD storage</li>
                        <li>• Hardware security modules</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="tokenomics" className="py-16 bg-secondary">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-heading font-bold mb-6">4. LUMINA Token Economics</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-4">Token Distribution</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-secondary rounded">
                        <span className="font-semibold">Network Mining Rewards</span>
                        <span className="text-primary font-bold">55%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-secondary rounded">
                        <span className="font-semibold">Ecosystem Development</span>
                        <span className="text-primary font-bold">20%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-secondary rounded">
                        <span className="font-semibold">Team & Advisors</span>
                        <span className="text-primary font-bold">15%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-secondary rounded">
                        <span className="font-semibold">Public & Private Sales</span>
                        <span className="text-primary font-bold">8%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-secondary rounded">
                        <span className="font-semibold">Treasury & Partnerships</span>
                        <span className="text-primary font-bold">2%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-4">Utility Mechanisms</h3>
                    <div className="space-y-4">
                      <div className="p-4 border border-border rounded-lg">
                        <h4 className="font-bold text-primary mb-2">Data Credits System</h4>
                        <p className="text-sm text-text-medium">Stable pricing through token burn mechanism. 1 Data Credit = 1 MB of data transfer.</p>
                      </div>
                      <div className="p-4 border border-border rounded-lg">
                        <h4 className="font-bold text-primary mb-2">Staking Rewards</h4>
                        <p className="text-sm text-text-medium">5-15% APY based on lock duration. Minimum stake: 1,000 LUMINA.</p>
                      </div>
                      <div className="p-4 border border-border rounded-lg">
                        <h4 className="font-bold text-primary mb-2">Governance Rights</h4>
                        <p className="text-sm text-text-medium">Participate in protocol decisions and treasury management.</p>
                    </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-secondary rounded-lg">
                  <h3 className="text-xl font-heading font-bold mb-4">Total Supply</h3>
                  <div className="text-center">
                    <span className="text-4xl font-bold text-primary">10,000,000,000</span>
                    <p className="text-lg font-semibold text-text-heading">LUMINA Tokens</p>
                    <p className="text-sm text-text-medium mt-2">Fixed maximum supply with dynamic emission over 20 years</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="roadmap" className="py-16">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="mb-12">
                <h2 className="text-3xl font-heading font-bold mb-6">5. Development Roadmap</h2>
                
                <div className="space-y-8">
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
                    <h3 className="text-xl font-heading font-bold mb-3 text-primary">Q2 2026: Foundation Building</h3>
                    <ul className="space-y-2 text-text-medium">
                      <li>• Complete core protocol development and security audits</li>
                      <li>• Launch public testnet with bug bounty program</li>
                      <li>• Establish LSO partnerships and hardware collaborations</li>
                      <li>• Build global community and publish final whitepaper</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
                    <h3 className="text-xl font-heading font-bold mb-3 text-primary">Q3 2026: Mainnet Launch</h3>
                    <ul className="space-y-2 text-text-medium">
                      <li>• Execute Token Generation Event (TGE)</li>
                      <li>• Deploy first hotspot devices in pilot regions</li>
                      <li>• Activate Data Credit system</li>
                      <li>• Release alpha mobile application</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
                    <h3 className="text-xl font-heading font-bold mb-3 text-text-heading">Q4 2026: Ecosystem Expansion</h3>
                    <ul className="space-y-2 text-text-medium">
                      <li>• Scale LSO integration and hardware distribution</li>
                      <li>• Launch official mobile application</li>
                      <li>• Activate on-chain governance modules</li>
                      <li>• Begin multi-functional hardware development</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-text-medium">
                    <h3 className="text-xl font-heading font-bold mb-3 text-text-heading">2027+: Global Scale</h3>
                    <ul className="space-y-2 text-text-medium">
                      <li>• Advanced network features and cross-chain interoperability</li>
                      <li>• Complete transition to DAO governance</li>
                      <li>• Global market expansion and enterprise solutions</li>
                      <li>• Continuous technology upgrades and innovation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl font-heading font-bold mb-6">Want to Learn More?</h2>
              <p className="text-xl text-text-medium mb-8">
                Download our full whitepaper or explore our technology section for more detailed information.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/whitepaper.html" 
                  target="_blank" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
                >
                  View Full HTML Version
                </a>
                <a 
                  href="/whitepaper.pdf" 
                  download 
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors"
                >
                  Download PDF
                </a>
                <Link 
                  href="/technology" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-text-dark rounded-md hover:bg-gray-200 transition-colors"
                >
                  Explore Technology
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
} 