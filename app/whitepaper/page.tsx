import { Metadata } from 'next';
import Link from 'next/link';
import { FadeIn, ScrollReveal } from '../../src/components/animations';

export const metadata: Metadata = {
  title: 'Whitepaper - Lumina',
  description: 'The official Lumina whitepaper detailing our decentralized internet infrastructure technology, token economics, and roadmap.',
  keywords: ['whitepaper', 'blockchain', 'DePIN', 'decentralized internet', 'token economics', 'Lumina technology'],
  openGraph: {
    title: 'AetherLink Whitepaper - Decentralized Internet Infrastructure',
    description: 'Explore the technical details of AetherLink&apos;s decentralized internet infrastructure, token economics, and roadmap.',
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
    title: 'AetherLink Whitepaper - Decentralized Internet Infrastructure',
    description: 'Explore the technical details of AetherLink&apos;s decentralized internet infrastructure, token economics, and roadmap.',
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
                          Introduction
                        </a>
                      </li>
                      <li>
                        <a href="#market-analysis" className="text-text-medium hover:text-primary flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary text-sm">2</span>
                          Market Analysis
                        </a>
                      </li>
                      <li>
                        <a href="#technology" className="text-text-medium hover:text-primary flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary text-sm">3</span>
                          Technology Architecture
                        </a>
                      </li>
                      <li>
                        <a href="#token-economics" className="text-text-medium hover:text-primary flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary text-sm">4</span>
                          Token Economics
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-primary">Implementation</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="#network-deployment" className="text-text-medium hover:text-primary flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary text-sm">5</span>
                          Network Deployment
                        </a>
                      </li>
                      <li>
                        <a href="#governance" className="text-text-medium hover:text-primary flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary text-sm">6</span>
                          Governance Model
                        </a>
                      </li>
                      <li>
                        <a href="#roadmap" className="text-text-medium hover:text-primary flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary text-sm">7</span>
                          Roadmap
                        </a>
                      </li>
                      <li>
                        <a href="#conclusion" className="text-text-medium hover:text-primary flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary text-sm">8</span>
                          Conclusion
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
              <h2 className="text-3xl font-heading font-bold mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-xl">1</span>
                Introduction
              </h2>
              <div className="prose prose-lg max-w-none">
                <p>
                                      Lumina aims to address global internet connectivity challenges, particularly in emerging markets, through a Decentralized Physical Infrastructure Network (DePIN) model. We are committed to building a community-driven, scalable, and cost-effective decentralized internet infrastructure that provides users with high-speed, reliable, and affordable internet access.
                </p>
                <p>
                  The digital revolution has transformed how we live, work, and interact, making internet access an essential utility rather than a luxury. However, the traditional centralized approach to internet infrastructure has created significant barriers to universal connectivity.
                </p>
                <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Vision and Mission</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6">
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                    <h4 className="text-xl font-bold mb-2 text-blue-600">Vision</h4>
                    <p className="text-gray-700">
                      To become the world&apos;s leading decentralized internet infrastructure, empowering digital inclusivity and driving global internet access equity and efficiency.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                    <h4 className="text-xl font-bold mb-2 text-green-600">Mission</h4>
                    <p className="text-gray-700">
                      To leverage blockchain technology and the DePIN model to build an open, transparent, community-maintained global internet network that provides seamless connectivity to underserved regions while creating sustainable value for all ecosystem participants.
                    </p>
                  </div>
                </div>
                <h3 className="text-2xl font-heading font-bold mt-8 mb-4">The Promise of DePIN for Global Connectivity</h3>
                <p>
                  Decentralized Physical Infrastructure Networks (DePIN) represent one of the most promising applications of blockchain technology to real-world infrastructure challenges. By combining cryptoeconomic incentives with physical infrastructure deployment, DePINs create self-sustaining systems where participants are rewarded for contributing resources that benefit the entire network.
                </p>
                <div className="my-6 bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4">Key Advantages of the DePIN Model</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-bold">Lower Capital Requirements:</span> By distributing infrastructure costs across many participants, DePINs reduce the massive capital expenditure typically required for network deployment.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-bold">Community Ownership:</span> Users become stakeholders in the network, aligning incentives between service providers and consumers.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-bold">Rapid Deployment:</span> The distributed nature of DePINs enables faster and more flexible infrastructure deployment, particularly in areas overlooked by traditional providers.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-bold">Censorship Resistance:</span> Decentralized networks are inherently more resistant to censorship and single points of failure.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-bold">Economic Opportunities:</span> DePINs create new economic opportunities for individuals and communities to earn income by providing valuable infrastructure services.
                      </div>
                    </li>
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
              <h2 className="text-3xl font-heading font-bold mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-xl">2</span>
                Market Analysis
              </h2>
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Global Internet Access Status</h3>
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-bold mb-4 text-primary">Digital Divide Statistics</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          <div>
                            <span className="font-bold">2.9 billion</span> people have never used the internet
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          <div>
                            <span className="font-bold">37%</span> of the world&apos;s population lacks internet access
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          <div>
                            <span className="font-bold">96%</span> of this unconnected population is in developing countries
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-4 text-primary">Affordability Challenges</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            Cost of 1GB data exceeds <span className="font-bold">2%</span> of average monthly income in many developing countries
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            High infrastructure costs make rural deployment <span className="font-bold">economically unfeasible</span> for traditional providers
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-heading font-bold mt-8 mb-4">DePIN Market Growth</h3>
                <p>
                  The DePIN sector has emerged as one of the fastest-growing segments within the blockchain ecosystem. Projects focused on decentralized wireless networks, storage, computing, and sensing have demonstrated the viability of token-incentivized infrastructure models.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-md my-6">
                  <h4 className="text-xl font-bold mb-4 text-primary">Market Projections</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600 mb-2">$3.2T</div>
                      <p className="text-gray-700">Global internet infrastructure market by 2030</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600 mb-2">45%</div>
                      <p className="text-gray-700">CAGR for DePIN sector (2023-2028)</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600 mb-2">1B+</div>
                      <p className="text-gray-700">New internet users expected by 2030</p>
                    </div>
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