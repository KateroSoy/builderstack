import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Authority } from './components/Authority';
import { Pillars } from './components/Pillars';
import { Roadmap } from './components/Roadmap';
import { UseCases } from './components/UseCases';
import { Comparison } from './components/Comparison';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { WelcomeModal } from './components/WelcomeModal';
import { AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [voucherActive, setVoucherActive] = useState(false);

  useEffect(() => {
    // Open modal on load
    const timer = setTimeout(() => {
        setShowModal(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-background text-primary selection:bg-accent/20 selection:text-white">
      <AnimatePresence>
        {showModal && (
            <WelcomeModal 
                onClose={() => setShowModal(false)}
                onApply={() => setVoucherActive(true)}
            />
        )}
      </AnimatePresence>
      
      <Navbar />
      <main className="flex flex-col w-full overflow-hidden">
        <Hero />
        <Authority />
        <Pillars />
        <Roadmap />
        <UseCases />
        <Comparison />
        <Testimonials />
        <Pricing initialVoucherState={voucherActive} />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;