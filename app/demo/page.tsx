'use client';

import ParallaxSection from '../../src/components/shared/ParallaxSection';
import { FadeIn, ScrollReveal } from '../../src/components/animations';
import { Button } from '../../src/components/ui';
import { useState } from 'react';

// Feature step component
const FeatureStep = ({ 
  number, 
  title, 
  description 
}: { 
  number: number, 
  title: string, 
  description: string 
}) => {
  return (
    <li className="flex items-start group">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary dark:bg-primary-dark flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300">
        {number}
      </div>
      <div className="ml-4">
        <h3 className="font-bold dark:text-text-heading-dark group-hover:text-primary dark:group-hover:text-primary-dark transition-colors duration-300">{title}</h3>
        <p className="text-text-light dark:text-text-light-dark text-sm">{description}</p>
      </div>
    </li>
  );
};

// Feature preview component
const FeaturePreview = ({ 
  title, 
  description, 
  features, 
  icon, 
  reverse = false 
}: { 
  title: string, 
  description: string, 
  features: string[], 
  icon: React.ReactNode, 
  reverse?: boolean 
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className={`flex flex-col justify-center ${reverse ? 'order-1 md:order-2' : ''}`}>
        <h3 className="text-2xl font-heading font-bold mb-4 dark:text-text-heading-dark">{title}</h3>
        <p className="text-text-medium dark:text-text-medium-dark mb-6">
          {description}
        </p>
        <ul className="space-y-3 text-text-medium dark:text-text-medium-dark">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary dark:text-primary-dark mr-3 group-hover:scale-125 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="group-hover:translate-x-1 transition-transform duration-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={`${reverse ? 'order-2 md:order-1' : ''}`}>
        <div className="bg-background-secondary dark:bg-background-secondary-dark rounded-xl p-6 h-80 flex items-center justify-center group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary-dark/10 dark:to-secondary-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="text-center relative z-10">
            {icon}
            <p className="text-text-medium dark:text-text-medium-dark mt-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300">Coming in Q3 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function DemoPage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <>
      <section className="pt-32 pb-16 bg-background dark:bg-background-dark">
        <div className="container mx-auto container-padding">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary bg-opacity-10 dark:bg-primary-dark dark:bg-opacity-20 text-primary dark:text-primary-dark text-sm font-semibold">
                Technical Preview
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-text-heading dark:text-text-heading-dark">LUNA App Demo</h1>
              <p className="text-text-medium dark:text-text-medium-dark text-lg mb-8">
                Experience the future of decentralized internet infrastructure with our interactive demo. 
                This technical demonstration showcases the core features and capabilities of the Lumina network.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button 
                  href="#join-waitlist"
                  className="hover:scale-105 transition-transform duration-300"
                >
                  Join Demo Waitlist
                </Button>
                <Button 
                  href="/whitepaper"
                  variant="outline"
                  className="hover:scale-105 transition-transform duration-300"
                >
                  Read Technical Paper
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      
      <ParallaxSection className="py-12 bg-background-secondary dark:bg-background-secondary-dark">
        <div className="container mx-auto container-padding">
          <ScrollReveal>
            <div className="max-w-6xl mx-auto">
              <div className="p-8 bg-white dark:bg-background-card-dark border border-border dark:border-border-dark rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 pr-0 lg:pr-8 mb-8 lg:mb-0">
                    <h2 className="text-2xl font-heading font-bold mb-6 dark:text-text-heading-dark">Demo Features</h2>
                    <ul className="space-y-6">
                      <FeatureStep 
                        number={1}
                        title="Network Visualization"
                        description="Explore the simulated Lumina hotspot network across different regions"
                      />
                      <FeatureStep 
                        number={2}
                        title="Data Dashboard"
                        description="View simulated network statistics and performance metrics"
                      />
                      <FeatureStep 
                        number={3}
                        title="Wallet Integration"
                        description="Experience our simplified wallet interface with virtual Lumina tokens"
                      />
                      <FeatureStep 
                        number={4}
                        title="Multi-Mining Simulator"
                        description="See how Lumina devices can mine multiple tokens simultaneously"
                      />
                    </ul>
                  </div>
                  <div className="lg:w-2/3 bg-background-secondary dark:bg-background-secondary-dark rounded-xl overflow-hidden relative min-h-[500px] flex items-center justify-center group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary-dark/10 dark:to-secondary-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="text-center p-8 relative z-10">
                      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 dark:bg-primary-dark/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-primary dark:text-primary-dark">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 dark:text-text-heading-dark">Interactive Demo Coming Soon</h3>
                      <p className="text-text-medium dark:text-text-medium-dark mb-8 max-w-md mx-auto">
                        Our technical demo is currently under development and will be available in Q3 2025. 
                        Join our waitlist to be among the first to experience it.
                      </p>
                      <Button 
                        href="#join-waitlist"
                        className="hover:scale-110 transition-transform duration-300"
                      >
                        Join Waitlist
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </ParallaxSection>
      
      <section className="py-24 bg-background dark:bg-background-dark">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl font-heading font-bold mb-8 text-center dark:text-text-heading-dark">Demo Sections Preview</h2>
              <p className="text-text-medium dark:text-text-medium-dark text-center mb-16 max-w-2xl mx-auto">
                Get a glimpse of what to expect in our upcoming interactive demo. These features will allow you to 
                explore and experience the Lumina network capabilities firsthand.
              </p>
            </ScrollReveal>
            
            {/* Network Map Preview */}
            <ScrollReveal>
              <FeaturePreview 
                title="Hotspot Network Map"
                description="Visualize the global distribution of Lumina hotspots. The interactive map will show coverage areas, signal strength, and real-time network activity."
                features={[
                  "Filter hotspots by status and performance",
                  "View detailed hotspot information",
                  "Simulate network growth over time"
                ]}
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 mx-auto text-primary dark:text-primary-dark">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                  </svg>
                }
              />
            </ScrollReveal>
            
            {/* Data Dashboard Preview */}
            <ScrollReveal>
              <FeaturePreview 
                title="Data Analytics Dashboard"
                description="Monitor network performance and token economics with real-time data visualizations. Track hotspot earnings, network usage, and growth metrics."
                features={[
                  "Customizable data visualization widgets",
                  "Historical data analysis",
                  "Predictive earnings calculator"
                ]}
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 mx-auto text-primary dark:text-primary-dark">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                  </svg>
                }
                reverse={true}
              />
            </ScrollReveal>
            
            {/* Multi-Mining Preview */}
            <ScrollReveal>
              <FeaturePreview 
                title="Multi-Mining Capabilities"
                description="Experience how Lumina devices can simultaneously mine multiple tokens, maximizing your hardware ROI and revenue streams."
                features={[
                  "Simulate earnings across multiple tokens",
                  "Hardware resource allocation settings",
                  "Compare different mining strategies"
                ]}
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 mx-auto text-primary dark:text-primary-dark">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                  </svg>
                }
              />
            </ScrollReveal>
            
            {/* Wallet Integration */}
            <ScrollReveal>
              <FeaturePreview 
                title="Wallet Integration"
                description="Experience our intuitive wallet interface with virtual Lumina tokens. Send, receive, and manage your tokens in a secure environment."
                features={[
                  "Virtual token transactions",
                  "Token staking simulation",
                  "Data Credit conversion tools"
                ]}
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 mx-auto text-primary dark:text-primary-dark">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                  </svg>
                }
                reverse={true}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      <section id="join-waitlist" className="py-24 bg-background-secondary dark:bg-background-secondary-dark">
        <div className="container mx-auto container-padding">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
                              <h2 className="text-3xl font-heading font-bold mb-6 dark:text-text-heading-dark">Join the Lumina Demo Waitlist</h2>
              <p className="text-text-medium dark:text-text-medium-dark mb-8">
                Be among the first to experience the LUNA App Demo when it launches in Q3 2025. 
                Sign up now to receive updates and early access opportunities.
              </p>
              <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email" 
                    className="flex-1 px-4 py-3 rounded-lg border border-border dark:border-border-dark bg-white dark:bg-background-card-dark text-text-dark dark:text-text-light-dark focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-transparent"
                    disabled={isSubmitting || isSubmitted}
                    required
                  />
                  <Button 
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className={`${isSubmitting ? 'opacity-80' : ''} ${isSubmitted ? 'bg-green-600 hover:bg-green-700' : ''}`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : isSubmitted ? (
                      <span className="flex items-center">
                        <svg className="-ml-1 mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Joined!
                      </span>
                    ) : (
                      'Join Waitlist'
                    )}
                  </Button>
                </div>
                {isSubmitted && (
                  <p className="text-green-600 dark:text-green-400 mt-3 text-sm">
                    Thank you for joining! We&apos;ll notify you when the demo is available.
                  </p>
                )}
              </form>
              
              <div className="mt-12 pt-12 border-t border-border dark:border-border-dark">
                <h3 className="text-xl font-heading font-bold mb-4 dark:text-text-heading-dark">Want to learn more?</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    href="/technology" 
                    variant="outline"
                    className="hover:scale-105 transition-transform duration-300"
                  >
                    Explore Our Technology
                  </Button>
                  <Button 
                    href="/community" 
                    variant="secondary"
                    className="hover:scale-105 transition-transform duration-300"
                  >
                    Join Our Community
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
} 