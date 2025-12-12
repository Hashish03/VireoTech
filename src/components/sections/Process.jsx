import React from 'react';
import { Search, Palette, Code, TestTube, Rocket, MessageCircle } from 'lucide-react';

export function ProcessSection() {
  const steps = [
    {
      number: '01',
      icon: <Search className="step-icon" />,
      title: 'Discovery & Strategy',
      description: 'We begin by understanding your business goals, target audience, and project requirements.',
      color: '#3b82f6'
    },
    {
      number: '02',
      icon: <Palette className="step-icon" />,
      title: 'Design & Prototyping',
      description: 'Creating wireframes and visual designs that align with your brand and user experience goals.',
      color: '#8b5cf6'
    },
    {
      number: '03',
      icon: <Code className="step-icon" />,
      title: 'Development',
      description: 'Building your solution with clean, efficient code using modern technologies and best practices.',
      color: '#10b981'
    },
    {
      number: '04',
      icon: <TestTube className="step-icon" />,
      title: 'Testing & Quality',
      description: 'Rigorous testing across devices and browsers to ensure flawless performance and security.',
      color: '#f59e0b'
    },
    {
      number: '05',
      icon: <Rocket className="step-icon" />,
      title: 'Deployment',
      description: 'Launching your project with proper hosting, domain setup, and performance optimization.',
      color: '#ef4444'
    },
    {
      number: '06',
      icon: <MessageCircle className="step-icon" />,
      title: 'Support & Growth',
      description: 'Ongoing maintenance, updates, and support to ensure continued success and growth.',
      color: '#06b6d4'
    }
  ];

  return (
    <section className="process-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-subtitle">Our Methodology</span>
          <h2 className="section-title">A Proven Development Process</h2>
          <p className="section-description">
            We follow a structured, transparent process that ensures quality, efficiency, 
            and successful project outcomes every time.
          </p>
        </div>

        <div className="process-timeline">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-header">
                <div className="step-number">{step.number}</div>
                <div className="step-icon-container" style={{ backgroundColor: `${step.color}15` }}>
                  <div style={{ color: step.color }}>
                    {step.icon}
                  </div>
                </div>
              </div>
              <h3 style={{ color: step.color }}>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}