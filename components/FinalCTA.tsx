import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';

export const FinalCTA: React.FC = () => {
  return (
    <Section className="py-32">
      <div className="relative border border-white/10 bg-[#0B0B0B] p-12 md:p-24 text-center overflow-hidden">
        
        {/* Animated Background Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-8 tracking-tighter leading-[0.95]">
            Build faster. <br />
            Sell smarter. <br />
            <span className="text-white/20">Own your stack.</span>
          </h2>
          
          <div className="flex flex-col items-center gap-8">
            <Button size="lg" className="min-w-[200px] h-14 text-lg" onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})}>
              Get Access Now
            </Button>
            <p className="text-secondary/40 text-sm font-mono">
              Masih ragu? <a href="#" className="text-white border-b border-white/30 hover:border-white transition-colors pb-0.5">DM dulu aja</a>. Kita bantu arahin.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};