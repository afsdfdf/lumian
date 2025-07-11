import { Metadata } from 'next';
import { ContentCard, Button } from '../../src/components/ui';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../../src/components/animations';

export const metadata: Metadata = {
  title: 'Component Examples - Lumina',
  description: 'Examples of Lumina UI components with improved text visibility',
}

export default function ExamplesPage() {
  return (
    <section className="pt-32 pb-24">
      <div className="container mx-auto container-padding">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Component Examples</h1>
          <p className="text-lg text-text-medium mb-12">
            Examples of UI components with improved text visibility on various backgrounds.
          </p>
          
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-heading font-bold mb-6">Content Cards</h2>
              <ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <ContentCard variant="light" bordered={true}>
                    <h3 className="text-xl font-heading font-bold mb-3">Light Card</h3>
                    <p className="mb-4">This card has a light background with visible text, suitable for displaying content on darker backgrounds.</p>
                    <Button variant="primary">Primary Button</Button>
                  </ContentCard>
                  
                  <ContentCard variant="dark" bordered={true}>
                    <h3 className="text-xl font-heading font-bold mb-3">Dark Card</h3>
                    <p className="mb-4">This card has a dark background with light text, suitable for displaying content on lighter backgrounds.</p>
                    <Button variant="white">White Button</Button>
                  </ContentCard>
                  
                  <ContentCard variant="glass" bordered={true}>
                    <h3 className="text-xl font-heading font-bold mb-3">Glass Card</h3>
                    <p className="mb-4">This card has a semi-transparent glass effect, allowing some of the background to show through while ensuring text remains readable.</p>
                    <Button variant="outline">Outline Button</Button>
                  </ContentCard>
                  
                  <ContentCard variant="glassDark" bordered={true}>
                    <h3 className="text-xl font-heading font-bold mb-3">Dark Glass Card</h3>
                    <p className="mb-4">This card has a semi-transparent dark glass effect, providing high contrast for text on light backgrounds.</p>
                    <Button variant="outlineWhite">Outline White Button</Button>
                  </ContentCard>
                </div>
              </ScrollReveal>
            </div>
            
            <div>
              <h2 className="text-2xl font-heading font-bold mb-6">Button Styles</h2>
              <ScrollReveal>
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <StaggerItem>
                    <ContentCard variant="light" bordered={true}>
                      <h3 className="text-xl font-heading font-bold mb-3">Light Buttons</h3>
                      <div className="space-y-4">
                        <Button variant="primary" className="w-full">Primary Button</Button>
                        <Button variant="secondary" className="w-full">Secondary Button</Button>
                        <Button variant="outline" className="w-full">Outline Button</Button>
                      </div>
                    </ContentCard>
                  </StaggerItem>
                  
                  <StaggerItem>
                    <ContentCard variant="dark" bordered={true}>
                      <h3 className="text-xl font-heading font-bold mb-3">Dark Buttons</h3>
                      <div className="space-y-4">
                        <Button variant="white" className="w-full">White Button</Button>
                        <Button variant="outlineWhite" className="w-full">Outline White</Button>
                        <Button variant="glass" className="w-full">Glass Button</Button>
                      </div>
                    </ContentCard>
                  </StaggerItem>
                  
                  <StaggerItem>
                    <ContentCard variant="glass" bordered={true}>
                      <h3 className="text-xl font-heading font-bold mb-3">Size Variants</h3>
                      <div className="space-y-4">
                        <Button variant="primary" size="sm">Small Button</Button>
                        <Button variant="primary">Default Button</Button>
                        <Button variant="primary" size="lg">Large Button</Button>
                      </div>
                    </ContentCard>
                  </StaggerItem>
                </StaggerContainer>
              </ScrollReveal>
            </div>
            
            <div>
              <h2 className="text-2xl font-heading font-bold mb-6">Content Overlay Examples</h2>
              <ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative h-64 overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-heading font-bold mb-2 text-gray-100">Gradient Overlay</h3>
                      <p className="text-gray-200">Text on gradient background remains visible with proper contrast.</p>
                    </div>
                  </div>
                  
                  <div className="relative h-64 overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ContentCard variant="glassDark">
                        <h3 className="text-xl font-heading font-bold mb-2">Semi-Transparent Overlay</h3>
                        <p>Glass effect with dark background ensures text visibility.</p>
                      </ContentCard>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 