import React from 'react';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 overflow-hidden">
      {/* Background Grid - mimicking the reference's subtle technical feel */}
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
             backgroundSize: '50px 50px'
           }}>
      </div>
      
      {/* Vignette */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0B0B0B_100%)] pointer-events-none"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-accent font-mono text-xs md:text-sm tracking-widest uppercase">System Online // V2.0</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-semibold text-white tracking-tighter leading-[0.9] mb-8">
            Digital Product <br />
            <span className="text-white/20">Arsenal.</span>
          </h1>

          <p className="text-lg md:text-2xl text-secondary max-w-2xl font-light mb-12 leading-relaxed">
            Stop tutorial hell. Ini <span className="text-white border-b border-accent/50">literally infrastructure</span> buat lo yang 
            prefer <span className="italic text-white">shipping</span> daripada cuma <span className="italic text-white">learning</span>.
            <span className="block mt-4 text-xs md:text-sm font-mono text-secondary/50 uppercase tracking-widest">
              No Fluff • Pure Assets • High ROI
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <Button size="lg" onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})}>
              Secure Access
            </Button>
            <Button size="lg" variant="text" withArrow onClick={() => document.getElementById('contents')?.scrollIntoView({behavior: 'smooth'})}>
              Explore The Stack
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-6 md:left-12 flex items-center gap-4"
      >
        <div className="h-[1px] w-12 bg-white/20"></div>
        <span className="text-[10px] font-mono text-secondary/40 uppercase tracking-[0.2em]">Scroll to Initialize</span>
      </motion.div>
    </section>
  );
};