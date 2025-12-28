import React from 'react';
import { Section } from './ui/Section';
import { RoadmapItem } from '../types';

const tracks: RoadmapItem[] = [
  {
    track: "01",
    duration: "SPRINT 1",
    title: "Fast Cashflow",
    description: "Setup agency landing page pake high-CTR template kita. Approach local client. Close deal. Basically balik modal in 7 days.",
    tags: ["Freelance", "Agency", "Speed"]
  },
  {
    track: "02",
    duration: "SPRINT 2",
    title: "Web3 Pivot",
    description: "Market lagi bearish? Justru time to build. Pake source code DeFi & NFT marketplace kita buat portfolio. Apply remote job digaji USD.",
    tags: ["Blockchain", "Solidity", "Career"]
  },
  {
    track: "03",
    duration: "SPRINT 3",
    title: "AI Wrapper SaaS",
    description: "Ambil Python notebook AI kita, bungkus jadi simple SaaS UI. Solve one specific problem. Launch di Product Hunt. Easy win.",
    tags: ["Python", "SaaS", "AI"]
  },
  {
    track: "04",
    duration: "LONG TERM",
    title: "Asset Factory",
    description: "Reskin mobile app source code (Flutter/iOS). Publish ke store. Pasang AdMob. Create passive income stream yang scalable.",
    tags: ["Passive", "Mobile", "Reskin"]
  }
];

export const Roadmap: React.FC = () => {
  return (
    <Section id="roadmap">
      <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
            Not a random dump. <br />
            <span className="text-secondary">It's a structured path.</span>
          </h2>
          <p className="text-lg text-secondary">
            Asset segini banyak bisa bikin *overwhelm*. So, kita curated jalurnya biar lo nggak *burnout*. 
            Just pick your lane.
          </p>
        </div>
        <div className="hidden md:block pb-2">
           <span className="font-mono text-xs text-accent border border-accent/20 px-3 py-1 rounded-full">ROADMAP_V2.0</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {tracks.map((item, index) => (
          <div 
            key={index} 
            className="group relative p-8 bg-[#111] border border-white/5 hover:border-white/20 transition-all duration-500 flex flex-col justify-between h-full min-h-[320px]"
          >
            {/* Hover Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <span className="text-5xl font-light text-white/5 group-hover:text-white/10 transition-colors font-mono">
                  {item.track}
                </span>
                <span className="text-[10px] font-mono tracking-widest text-accent uppercase bg-accent/5 px-2 py-1 rounded">
                  {item.duration}
                </span>
              </div>
              
              <h3 className="text-xl font-medium text-white mb-4 group-hover:text-accent transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-secondary/80 text-sm leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
              {item.tags.map(tag => (
                <span key={tag} className="text-[10px] uppercase tracking-wider font-mono text-secondary/40 group-hover:text-secondary/70 transition-colors">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};