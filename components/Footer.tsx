import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 bg-[#0B0B0B] pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Digital Product Arsenal<span className="text-accent">.</span>
          </h2>
          <p className="text-secondary text-sm max-w-sm">
            Premium assets for builders, by builders. <br />
            Stop starting from scratch.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-sm text-secondary">
          <div className="flex flex-col gap-2">
            <span className="text-white font-medium mb-2">Legal</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">License Agreement</a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-white font-medium mb-2">Connect</span>
            <a href="#" className="hover:text-white transition-colors">Twitter / X</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-secondary/30 font-mono">
          © {new Date().getFullYear()} DIGITAL PRODUCT ARSENAL. ALL RIGHTS RESERVED.
        </p>
        <p className="text-xs text-secondary/30 font-mono">
          JAKARTA • SINGAPORE • TOKYO
        </p>
      </div>
    </footer>
  );
};