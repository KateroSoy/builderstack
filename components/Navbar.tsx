import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import { Button } from './ui/Button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems: NavItem[] = [
  { label: 'Contents', href: '#contents' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobile = () => setIsMobileOpen(!isMobileOpen);

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled ? 'bg-[#0B0B0B]/80 backdrop-blur-md border-white/5 py-4' : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="text-lg font-bold tracking-tight text-white hover:opacity-80 transition-opacity">
            DPA<span className="text-accent">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-sm text-secondary hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="w-px h-4 bg-white/10 mx-2"></div>
            <span className="text-xs font-mono text-secondary cursor-pointer hover:text-white">ID / EN</span>
            <Button size="sm" variant="secondary" className="ml-2" onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})}>
              Get Access
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button onClick={toggleMobile} className="md:hidden text-white p-2">
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0B0B0B] pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6 text-2xl">
              {navItems.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href} 
                  onClick={() => setIsMobileOpen(false)}
                  className="text-white hover:text-accent transition-colors border-b border-white/5 pb-4"
                >
                  {item.label}
                </a>
              ))}
              <Button className="mt-4 w-full" onClick={() => {
                 setIsMobileOpen(false);
                 document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'});
              }}>
                Get Access Now
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};