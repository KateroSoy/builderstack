import React from 'react';
import { Section } from './ui/Section';

export const Authority: React.FC = () => {
  return (
    <Section className="border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-7">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] text-white">
            Honestly, clients don't care about your clean code. <br />
            <span className="text-white/30">They care about results.</span>
          </h2>
        </div>
        <div className="lg:col-span-5 flex flex-col justify-end h-full">
          <div className="pl-0 lg:pl-8 border-l-0 lg:border-l border-white/10">
            <p className="text-lg text-secondary leading-relaxed mb-6">
              Let's be real. Kalau lo masih coding login page dari nol in 2024, lo *wasting time*.
              <br /><br />
              Digital Arsenal itu *basically* cheat sheet buat agency & founder yang mau skip process "reinventing the wheel" dan langsung fokus ke revenue. 
              <span className="block mt-4 text-white font-medium">Work smart, not hard. No cap.</span>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};