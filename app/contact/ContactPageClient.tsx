"use client";

import { useState } from 'react';
import ParallaxSection from '../../src/components/shared/ParallaxSection';
import { Button, Input, TextArea } from '../../src/components/ui';
import { FadeIn, ScrollReveal } from '../../src/components/animations';

// Contact info card component
const ContactInfoCard = ({ icon, title, children }: { icon: string, title: string, children: React.ReactNode }) => {
  return (
    <div className="border border-border dark:border-border-dark p-6 rounded-xl bg-white dark:bg-background-card-dark shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
      <div className="flex items-start">
        <div className="h-12 w-12 bg-primary bg-opacity-10 dark:bg-primary dark:bg-opacity-20 rounded-full flex items-center justify-center mr-4 text-primary dark:text-primary-dark">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d={icon} />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-heading font-bold mb-2 dark:text-text-heading-dark">{title}</h3>
          {children}
        </div>
      </div>
    </div>
  );
};

// FAQ accordion component
const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-border dark:border-border-dark rounded-xl overflow-hidden bg-white dark:bg-background-card-dark shadow-sm hover:shadow-md transition-all duration-300">
      <button 
        className="w-full text-left p-5 flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-heading font-bold dark:text-text-heading-dark">{question}</h3>
        <svg 
          className={`w-6 h-6 text-primary dark:text-primary-dark transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-5 pt-0 border-t border-border dark:border-border-dark">
          <p className="text-text-medium dark:text-text-medium-dark">{answer}</p>
        </div>
      </div>
    </div>
  );
};

// Social media button component
const SocialButton = ({ href, icon, label }: { href: string, icon: string, label: string }) => {
  return (
    <a 
      href={href} 
      className="flex items-center justify-center h-10 w-10 rounded-full bg-background-secondary dark:bg-background-secondary-dark text-text-medium dark:text-text-medium-dark hover:text-primary dark:hover:text-primary-dark hover:scale-110 transition-all duration-300"
      aria-label={label}
    >
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d={icon} />
      </svg>
    </a>
  );
};

export default function ContactPageClient() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
        const form = e.target as HTMLFormElement;
        form.reset();
      }, 3000);
    }, 1500);
  };
  
  return (
    <>
      <section className="pt-32 pb-16 bg-background dark:bg-background-dark">
        <div className="container mx-auto container-padding">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-text-heading dark:text-text-heading-dark">Contact Us</h1>
              <p className="text-text-medium dark:text-text-medium-dark text-lg mb-8">
                Have questions about Lumina? Interested in partnerships or investment opportunities? Get in touch with our team.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
      
      <ParallaxSection className="py-24">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white dark:bg-background-card-dark p-8 rounded-xl border border-border dark:border-border-dark shadow-sm">
                  <h2 className="text-2xl font-heading font-bold mb-6 dark:text-text-heading-dark">Send Us a Message</h2>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-text-medium dark:text-text-medium-dark mb-2">Name</label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your name"
                          required
                          disabled={formStatus === 'submitting' || formStatus === 'success'}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-text-medium dark:text-text-medium-dark mb-2">Email</label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Your email address"
                          required
                          disabled={formStatus === 'submitting' || formStatus === 'success'}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-text-medium dark:text-text-medium-dark mb-2">Subject</label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="What is this regarding?"
                        required
                        disabled={formStatus === 'submitting' || formStatus === 'success'}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-text-medium dark:text-text-medium-dark mb-2">Message</label>
                      <TextArea
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="Your message"
                        required
                        disabled={formStatus === 'submitting' || formStatus === 'success'}
                      />
                    </div>
                    
                    <div className="flex justify-end">
                      <Button 
                        type="submit"
                        disabled={formStatus === 'submitting' || formStatus === 'success'}
                        className={`relative overflow-hidden ${formStatus === 'submitting' ? 'opacity-80' : ''} ${formStatus === 'success' ? 'bg-green-600 hover:bg-green-700' : ''}`}
                      >
                        {formStatus === 'idle' && 'Send Message'}
                        {formStatus === 'submitting' && (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        )}
                        {formStatus === 'success' && (
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Message Sent!
                          </span>
                        )}
                      </Button>
                    </div>
                  </form>
                </div>
                
                <div className="space-y-6">
                  <ContactInfoCard
                    icon="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    title="Email Us"
                  >
                    <a href="mailto:hello@lumina.io" className="text-primary dark:text-primary-dark hover:underline">
                      hello@lumina.io
                    </a>
                    <p className="text-text-medium dark:text-text-medium-dark text-sm mt-1">
                      General inquiries & support
                    </p>
                  </ContactInfoCard>
                  
                  <ContactInfoCard
                    icon="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    title="Join Our Community"
                  >
                    <div className="flex space-x-3 mt-2">
                      <SocialButton
                        href="https://discord.gg/lumina"
                        icon="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9554 2.4189-2.1568 2.4189Z"
                        label="Discord"
                      />
                      <SocialButton
                        href="https://twitter.com/lumina"
                        icon="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                        label="Twitter"
                      />
                      <SocialButton
                        href="https://t.me/lumina"
                        icon="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                        label="Telegram"
                      />
                    </div>
                  </ContactInfoCard>
                  
                  <ContactInfoCard
                    icon="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    title="Office Location"
                  >
                    <p className="text-text-medium dark:text-text-medium-dark">
                      Beijing, China<br />
                      Remote-first team
                    </p>
                  </ContactInfoCard>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>
      
      <section className="py-16 bg-background-secondary dark:bg-background-secondary-dark">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl font-heading font-bold mb-12 text-center dark:text-text-heading-dark">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <FAQItem
                  question="How can I get involved with Lumina?"
                  answer="There are several ways to get involved: join our community on Discord and Telegram, participate in our beta testing program, become a network operator by running a hotspot, or explore partnership opportunities with our team."
                />
                <FAQItem
                  question="What partnership opportunities are available?"
                  answer="We're interested in partnerships with hardware manufacturers, telecommunications companies, internet service providers, blockchain projects, and organizations focused on digital inclusion. Contact us to discuss how we can collaborate."
                />
                <FAQItem
                  question="How can I become a network operator?"
                  answer="Network operators run Lumina hotspots to provide internet connectivity and earn rewards. You'll need compatible hardware and a suitable location. Join our community to learn about the operator program and hardware requirements."
                />
                <FAQItem
                  question="Do you offer technical support?"
                  answer="Yes, we provide technical support for network operators, developers building on our platform, and partners integrating our technology. Reach out through our support channels or contact us directly."
                />
                <FAQItem
                  question="How can I invest in Lumina?"
                  answer="We're always interested in connecting with aligned investors who share our vision of democratizing internet access. Please reach out to discuss investment opportunities and our current funding status."
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
} 