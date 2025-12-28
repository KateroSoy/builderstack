import React from 'react';
import { Section } from './ui/Section';
import { X, Check, Minus } from 'lucide-react';

export const Comparison: React.FC = () => {
  return (
    <Section className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
          The <span className="text-accent">unfair</span> advantage.
        </h2>
        <p className="text-secondary">Belajar itu penting. Tapi <span className="text-white italic">shipping</span> is everything.</p>
      </div>

      <div className="overflow-x-auto pb-4">
        <table className="w-full border-collapse min-w-[700px]">
          <thead>
            <tr>
              <th className="py-6 px-6 text-left text-xs font-mono tracking-widest text-secondary/50 w-1/3">CRITERIA</th>
              <th className="py-6 px-6 text-center text-xs font-mono tracking-widest text-secondary/50 w-1/3">TYPICAL E-COURSE</th>
              <th className="py-6 px-6 text-center text-xs font-mono tracking-widest text-accent w-1/3 border-t-2 border-accent bg-accent/5">DIGITAL ARSENAL</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            <tr>
              <td className="py-6 px-6 text-white font-medium">Actionable Assets</td>
              <td className="py-6 px-6 text-center text-secondary flex justify-center"><Minus className="w-5 h-5 opacity-20" /></td>
              <td className="py-6 px-6 text-center bg-accent/[0.02]">
                <div className="flex items-center justify-center gap-2 text-white">
                  <Check className="w-4 h-4 text-accent" />
                  <span>Ready to Deploy</span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="py-6 px-6 text-white font-medium">Commercial Rights</td>
              <td className="py-6 px-6 text-center text-secondary text-sm">Strict / No Resell</td>
              <td className="py-6 px-6 text-center bg-accent/[0.02] text-white text-sm">Freelance & Agency OK</td>
            </tr>
            <tr>
              <td className="py-6 px-6 text-white font-medium">Update Frequency</td>
              <td className="py-6 px-6 text-center text-secondary text-sm">One-time</td>
              <td className="py-6 px-6 text-center bg-accent/[0.02] text-white text-sm">Weekly Drop</td>
            </tr>
            <tr>
              <td className="py-6 px-6 text-white font-medium">Primary Goal</td>
              <td className="py-6 px-6 text-center text-secondary text-sm">Watching Videos</td>
              <td className="py-6 px-6 text-center bg-accent/[0.02] text-white text-sm font-bold">Building & Selling</td>
            </tr>
            <tr>
              <td className="py-6 px-6 text-white font-medium">Total Size</td>
              <td className="py-6 px-6 text-center text-secondary text-sm">~10-20 GB</td>
              <td className="py-6 px-6 text-center bg-accent/[0.02] text-white text-sm">1.5 TB+ (Cloud)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Section>
  );
};