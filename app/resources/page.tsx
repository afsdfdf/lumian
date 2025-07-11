'use client';

import { useState } from 'react';
import { Button } from '../../src/components/ui';
import { FadeIn, ScrollReveal, StaggerContainer, StaggerItem } from '../../src/components/animations';

export default function ResourcesPage() {
  const [downloadingWhitepaper, setDownloadingWhitepaper] = useState(false);
  
  const handleDownloadWhitepaper = () => {
    setDownloadingWhitepaper(true);
    
    // Create an invisible iframe to trigger the print dialog
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = '/whitepaper.html';
    document.body.appendChild(iframe);
    
    iframe.onload = () => {
      setTimeout(() => {
        try {
          iframe.contentWindow?.print();
        } catch (error) {
          console.error('Error printing whitepaper:', error);
          // Fallback: open in new tab
          window.open('/whitepaper.html', '_blank');
        }
        
        // Clean up
        setTimeout(() => {
          document.body.removeChild(iframe);
          setDownloadingWhitepaper(false);
        }, 1000);
      }, 500);
    };
  };
  
  return (
    <>
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto container-padding">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Resources</h1>
              <p className="text-text-medium text-lg mb-8">
                Access comprehensive documentation, whitepapers, and other resources to learn more about the Lumina decentralized internet infrastructure.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
      
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="bg-white p-8 shadow-md mb-12">
                <h2 className="text-3xl font-heading font-bold mb-4">Whitepaper</h2>
                <p className="text-text-medium mb-6">
                  Our whitepaper provides a comprehensive overview of Lumina&apos;s vision, technology, and tokenomics. Learn about our DePIN model, the Lumina token economy, and how we&apos;re building the decentralized internet infrastructure of the future.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    onClick={handleDownloadWhitepaper} 
                    disabled={downloadingWhitepaper}
                  >
                    {downloadingWhitepaper ? 'Preparing...' : 'Download Whitepaper'}
                  </Button>
                  <Button 
                    href="/whitepaper.html" 
                    target="_blank" 
                    variant="outline"
                  >
                    View Online
                  </Button>
                </div>

                <div className="mt-6 border-t border-border pt-6">
                  <h3 className="font-heading font-bold mb-3">Whitepaper Contents:</h3>
                  <ul className="list-disc list-inside text-text-medium space-y-2">
                    <li>Introduction to Lumina and our DePIN model</li>
                    <li>Market analysis and current internet infrastructure challenges</li>
                    <li>The Lumina platform: technical architecture and ecosystem participants</li>
                    <li>Lumina token economic model, distribution, and mechanics</li>
                    <li>Development roadmap and future outlook</li>
                    <li>Team, advisors, and governance</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal>
              <div className="bg-white p-8 shadow-md mb-12">
                <h2 className="text-3xl font-heading font-bold mb-4">Technical Documentation</h2>
                <p className="text-text-medium mb-6">
                  Technical documentation for developers, network operators, and other stakeholders interested in participating in the Lumina ecosystem.
                </p>
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <StaggerItem>
                    <div className="border border-border p-6">
                      <h3 className="text-xl font-heading font-bold mb-4">Developer Docs</h3>
                      <p className="text-text-medium mb-4">
                        API references, SDKs, and integration guides for building on the Lumina network.
                      </p>
                      <Button href="#" variant="outline" size="sm">
                        Coming Soon
                      </Button>
                    </div>
                  </StaggerItem>
                  
                  <StaggerItem>
                    <div className="border border-border p-6">
                      <h3 className="text-xl font-heading font-bold mb-4">Node Operator Guide</h3>
                      <p className="text-text-medium mb-4">
                        Learn how to set up and maintain a Lumina node to earn Lumina tokens.
                      </p>
                      <Button href="#" variant="outline" size="sm">
                        Coming Soon
                      </Button>
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="border border-border p-6">
                      <h3 className="text-xl font-heading font-bold mb-4">Hardware Specifications</h3>
                      <p className="text-text-medium mb-4">
                        Technical specifications for Lumina-compatible hardware devices and deployment guidelines.
                      </p>
                      <Button href="#" variant="outline" size="sm">
                        Coming Soon
                      </Button>
                    </div>
                  </StaggerItem>
                  
                  <StaggerItem>
                    <div className="border border-border p-6">
                      <h3 className="text-xl font-heading font-bold mb-4">Governance Portal</h3>
                      <p className="text-text-medium mb-4">
                        Learn how to participate in Lumina&apos;s decentralized governance process using Lumina tokens.
                      </p>
                      <Button href="#" variant="outline" size="sm">
                        Coming Soon
                      </Button>
                    </div>
                  </StaggerItem>
                </StaggerContainer>
              </div>
            </ScrollReveal>
            
            <ScrollReveal>
              <div className="bg-white p-8 shadow-md">
                <h2 className="text-3xl font-heading font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-text-medium mb-6">
                  Answers to commonly asked questions about Lumina.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-2">What is Lumina?</h3>
                    <p className="text-text-medium">
                      Lumina is a decentralized physical infrastructure network (DePIN) that aims to provide global internet connectivity through blockchain technology and community-owned hardware. We&apos;re building an open, transparent, and community-maintained global internet network that provides seamless connectivity to underserved areas while creating sustainable value for all ecosystem participants.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-2">How does Lumina work?</h3>
                    <p className="text-text-medium">
                                              Lumina combines high-performance blockchain technology with customized hardware devices to create a network of independently operated nodes that collectively provide internet connectivity. Various participants (hotspot owners, local service operators, backhaul providers, location owners) contribute resources to the network and earn Lumina tokens based on their contributions.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-2">What is the Lumina token?</h3>
                    <p className="text-text-medium">
                      Lumina is the native utility token of the Lumina ecosystem. It serves multiple functions: incentivizing network participants, facilitating data credit acquisition, enabling governance participation, supporting staking mechanisms, and serving as a payment medium within the ecosystem.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-2">When will Lumina launch?</h3>
                    <p className="text-text-medium">
                      Lumina is currently in the development phase. We plan to launch our testnet in Q2 2026, followed by the mainnet in Q3 2026. Please refer to our roadmap section in the whitepaper for more details on our development timeline.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-2">How can I get involved?</h3>
                    <p className="text-text-medium">
                      You can join our community on Discord, follow us on social media, or contact us directly if you&apos;re interested in becoming a connectivity provider, developer, or partner. Early supporters can stay updated on hardware availability and token launch information through our newsletter.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
} 