import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Pillar } from '../types';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductVisual } from './ui/ProductVisuals';
import { ProductGallery } from './ui/ProductGallery';

const pillars: Pillar[] = [
  {
    id: 1,
    title: "Web3 & Blockchain Projects",
    description: "Full-stack dApps. Gak cuma smart contract snippet. Frontend connect-nya ready.",
    count: "1000+",
    details: ["NFT Marketplaces", "DAO Governance", "Crypto Wallets", "Solidity Contracts"]
  },
  {
    id: 2,
    title: "Global Course Materials",
    description: "Library mahal. Curated dari source international. Gak perlu beli course receh lagi.",
    count: "800GB+",
    details: ["AI Engineering", "Ethical Hacking", "Advanced React", "SaaS Business Models"]
  },
  {
    id: 3,
    title: "SEO-Ready Landing Pages",
    description: "Template yang convert. Bukan cuma cantik doang. Copywriting structure udah baked-in.",
    count: "5001+",
    details: ["SaaS Landings", "Agency Portfolios", "Waitlist Pages", "E-commerce Fronts"]
  },
  {
    id: 4,
    title: "Data Science & AI Models",
    description: "Python notebooks, datasets, pre-trained models. Tinggal run di Colab/Jupyter.",
    count: "2000+",
    details: ["NLP Processing", "Computer Vision", "Predictive Analytics", "Trading Bots"]
  },
  {
    id: 5,
    title: "Mobile App Source Codes",
    description: "Flutter & React Native ecosystem. Reskin, build, submit to App Store. Cuan.",
    count: "1000+",
    details: ["On-Demand Apps", "Social Networks", "E-commerce Apps", "Fitness Trackers"]
  },
  {
    id: 6,
    title: "n8n Automation Templates",
    description: "7000+ workflow siap pakai. Automate everything dari CRM, Email, sampe Social Media. Gak perlu start from scratch.",
    count: "7000+",
    details: ["Marketing Auto", "CRM Sync", "Chatbot Flows", "Data Scraping", "Email Outreach"]
  }
];

export const Pillars: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setSelectedId(selectedId === id ? null : id);
  };

  return (
    <Section id="contents" className="bg-[#0F0F10]">
       <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-6">
        <div>
          <h3 className="text-sm font-mono text-accent mb-2">THE VAULT</h3>
          <h2 className="text-3xl text-white font-medium">Inside The Arsenal</h2>
        </div>
        <span className="text-xs font-mono text-secondary/50 hidden md:block">DATABASE_SIZE: 1.5TB+</span>
      </div>

      <div className="flex flex-col">
        {pillars.map((pillar) => {
          const isSelected = selectedId === pillar.id;

          return (
            <motion.div 
              key={pillar.id}
              initial={false}
              className={`group relative border-b border-white/5 overflow-hidden transition-all duration-500 cursor-pointer ${
                isSelected ? 'bg-white/[0.03]' : 'hover:bg-white/[0.02]'
              }`}
              onClick={() => handleToggle(pillar.id)}
            >
              {/* Highlight Line */}
              <motion.div 
                className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: isSelected ? 1 : 0, height: isSelected ? '100%' : '0%' }}
                transition={{ duration: 0.3 }}
              />

              <div className="py-8 md:py-10 px-4 md:px-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                  <div className="flex items-baseline gap-6 md:gap-12">
                    <span className={`font-mono text-sm transition-colors duration-300 ${isSelected ? 'text-accent' : 'text-secondary/30'}`}>
                      0{pillar.id}
                    </span>
                    <div>
                      <h3 className={`text-2xl md:text-4xl font-medium transition-colors duration-300 ${isSelected ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
                        {pillar.title}
                      </h3>
                      <p className={`mt-2 text-lg max-w-xl transition-colors duration-300 ${isSelected ? 'text-secondary' : 'text-secondary/60 group-hover:text-secondary'}`}>
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 self-start md:self-center pl-16 md:pl-0">
                    <span className="font-mono text-sm text-white/30 hidden md:block">{pillar.count} ASSETS</span>
                    <motion.div 
                      animate={{ rotate: isSelected ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className={`w-6 h-6 transition-colors ${isSelected ? 'text-accent' : 'text-white/20 group-hover:text-white'}`} />
                    </motion.div>
                  </div>
                </div>
                
                <AnimatePresence>
                  {isSelected && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className="pt-8 pl-0 md:pl-16">
                         {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {pillar.details.map((detail, idx) => (
                            <span key={idx} className="text-xs font-mono border border-white/10 bg-white/5 text-white/70 px-3 py-1 rounded-sm">
                              {detail}
                            </span>
                          ))}
                        </div>

                        {/* Visual Animation Section */}
                        <div className="relative w-full mb-8">
                           <div className="absolute top-0 left-0 text-[10px] font-mono text-accent/50 tracking-widest z-10 ml-2 mt-2">
                             LIVE_PREVIEW_RENDER
                           </div>
                           <ProductVisual id={pillar.id} />
                        </div>

                        {/* Gallery Section */}
                        <ProductGallery id={pillar.id} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};