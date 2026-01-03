import React, { useState, useEffect } from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { PricingTier } from '../types';
import { Check, AlertCircle, Ticket, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PricingProps {
  initialVoucherState?: boolean;
}

interface PricingTierWithLink extends PricingTier {
  checkoutUrl: string;
}

const tiers: PricingTierWithLink[] = [
  {
    name: "STARTER",
    price: "IDR 199K",
    originalPrice: "Rp 850.000",
    discountLabel: "SAVE 75%",
    description: "Cuma seharga sekali nongkrong di Senoparty. Good start buat explore assets.",
    checkoutUrl: "http://lynk.id/katero/1dvo62kegoe5/checkout",
    features: [
      "Access to Learning Materials (800GB)",
      "Standard Landing Pages",
      "Community Access",
      "No Weekly Updates"
    ]
  },
  {
    name: "PRO BUILDER",
    price: "IDR 399K",
    originalPrice: "Rp 4.500.000",
    discountLabel: "BEST VALUE • 90% OFF",
    description: "The 'No-Brainer'. Bayar sekali, balik modal pas dapet 1 client project. Literally.",
    checkoutUrl: "http://lynk.id/katero/j9kvjeplkwj1/checkout",
    features: [
      "Everything in Starter",
      "All Source Codes (Web3, AI, App)",
      "Premium Landing Page Templates",
      "Commercial License (Valid)",
      "Weekly Updates (3 Months)"
    ],
    isPopular: true
  },
  {
    name: "ULTIMATE",
    price: "IDR 699K",
    originalPrice: "Rp 12.000.000",
    discountLabel: "AGENCY PACK",
    description: "Buat yang serius mau build empire. Lifetime supply asset, priority request, & mentorship.",
    checkoutUrl: "http://lynk.id/katero/2yz0l5552yl0/checkout",
    features: [
      "Everything in Pro",
      "Lifetime Weekly Updates",
      "Priority Request Assets",
      "Private Inner Circle Group",
      "Resell Rights Mentorship"
    ]
  }
];

export const Pricing: React.FC<PricingProps> = ({ initialVoucherState = false }) => {
  const [voucherApplied, setVoucherApplied] = useState(initialVoucherState);

  useEffect(() => {
    if (initialVoucherState) {
      setVoucherApplied(true);
    }
  }, [initialVoucherState]);

  const getDiscountedPrice = (priceStr: string) => {
    // Visual feedback only - actual discount happens at checkout
    if (priceStr.includes("199K")) return "IDR 149K";
    if (priceStr.includes("399K")) return "IDR 299K";
    if (priceStr.includes("699K")) return "IDR 499K";
    return priceStr;
  };

  return (
    <Section id="pricing" className="border-t border-white/5">
      {/* FOMO Banner */}
      <div className="w-full flex items-center justify-center mb-16">
        <div className="bg-accent/10 border border-accent/20 px-4 py-2 rounded-full flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
          <span className="text-xs font-mono text-accent tracking-wide uppercase">
            Early Bird Pricing • Price increases after 500 members
          </span>
        </div>
      </div>

      <div className="mb-12 max-w-3xl mx-auto text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-medium text-white mb-6 leading-tight">
          Invest in your <span className="text-secondary">stack.</span> <br />
          <span className="text-white/30 text-3xl md:text-5xl">Stop burning cash on tools.</span>
        </h2>
        <p className="text-lg text-secondary leading-relaxed mb-8">
          Harga di bawah ini <strong>gak masuk akal</strong> kalau dibandingin sama value 1.5TB+ assets & 7000+ automation templates yang lo dapet.
          Ini bukan "biaya", ini <span className="text-white border-b border-accent/50 italic">unloading cost</span> buat bisnis lo.
        </p>

        {/* VOUCHER STATUS */}
        <div className="flex flex-col items-center md:items-start min-h-[40px]">
          {voucherApplied && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-accent/10 border border-accent rounded-lg"
            >
              <div className="p-1 bg-accent rounded-full text-black">
                <Check className="w-3 h-3" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-accent/70 leading-none mb-1">VOUCHER CLAIMED</span>
                <span className="text-sm font-bold text-accent tracking-wide">VOUCHER GO TO 2026</span>
              </div>
              <button onClick={() => setVoucherApplied(false)} className="ml-2 text-accent/50 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          )}
          {!voucherApplied && (
            <div className="flex items-center gap-2 text-secondary/50 text-sm">
              <Ticket className="w-4 h-4" />
              <span>Have a code? Apply it at checkout.</span>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {/* Psychological Anchor Line */}
        <div className="hidden md:block absolute top-[180px] -left-4 -right-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent border-t border-dashed border-white/10 z-0"></div>

        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative p-8 flex flex-col h-full border transition-all duration-300 group z-10 rounded-sm ${tier.isPopular
              ? 'bg-[#121212] border-accent shadow-[0_0_60px_rgba(0,229,255,0.1)] scale-105'
              : 'bg-black/40 border-white/10 hover:border-white/30 hover:bg-white/[0.02]'
              }`}
          >
            {tier.isPopular && (
              <div className="absolute top-0 inset-x-0 h-1 bg-accent shadow-[0_0_20px_#00E5FF]"></div>
            )}

            {tier.isPopular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-black text-[10px] font-bold px-3 py-1 uppercase tracking-widest shadow-lg rounded-sm">
                Most Builders Pick This
              </div>
            )}

            <div className="mb-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className={`text-xs font-mono tracking-widest uppercase ${tier.isPopular ? 'text-accent' : 'text-secondary'}`}>
                  {tier.name}
                </h3>
                {tier.discountLabel && (
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${tier.isPopular ? 'bg-accent/20 text-accent border-accent/30' : 'bg-white/10 text-white/50 border-white/10'
                    }`}>
                    {tier.discountLabel}
                  </span>
                )}
              </div>

              {/* Price Anchoring Section */}
              <div className="flex flex-col">
                {tier.originalPrice && (
                  <div className="text-secondary/40 text-sm line-through decoration-white/30 decoration-1 font-mono mb-1">
                    {tier.originalPrice}
                  </div>
                )}
                <div className="flex items-baseline gap-1">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={voucherApplied ? "discounted" : "normal"}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className={`text-4xl md:text-5xl font-bold tracking-tighter ${voucherApplied ? 'text-accent drop-shadow-[0_0_8px_rgba(0,229,255,0.5)]' : 'text-white'}`}
                    >
                      {voucherApplied ? getDiscountedPrice(tier.price) : tier.price}
                    </motion.div>
                  </AnimatePresence>
                  <span className="text-xs text-secondary/50 font-normal">/ lifetime</span>
                </div>
                {voucherApplied && (
                  <motion.span
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="text-[10px] font-mono text-accent mt-1"
                  >
                    *USE CODE AT CHECKOUT
                  </motion.span>
                )}
              </div>

              <div className="mt-4 min-h-[50px]">
                <p className={`text-sm leading-relaxed ${tier.isPopular ? 'text-white' : 'text-secondary/70'}`}>
                  {tier.description}
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-white/5 mb-8"></div>

            <div className="flex-grow space-y-4 mb-10">
              {tier.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className={`mt-0.5 p-0.5 rounded-full flex-shrink-0 ${tier.isPopular ? 'bg-accent text-black' : 'bg-white/10'}`}>
                    <Check className={`w-3 h-3 ${tier.isPopular ? 'text-black' : 'text-white/50'}`} />
                  </div>
                  <span className={`text-sm font-light ${tier.isPopular ? 'text-gray-200' : 'text-gray-400'}`}>{feature}</span>
                </div>
              ))}
            </div>

            <a href={tier.checkoutUrl} target="_blank" rel="noopener noreferrer" className="block w-full mt-auto">
              <Button
                variant={tier.isPopular ? 'primary' : 'outline'}
                className={`w-full ${tier.isPopular ? 'shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,229,255,0.4)]' : ''}`}
              >
                Secure Access Now
              </Button>
            </a>

            <div className="mt-4 flex items-center justify-center gap-2">
              <AlertCircle className="w-3 h-3 text-secondary/30" />
              <span className="text-[10px] text-secondary/30 font-mono uppercase tracking-wider">
                30-Day Money Back Guarantee
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full bg-white/5">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="w-6 h-6 rounded-full bg-gray-700 border border-[#0B0B0B]"></div>
            ))}
          </div>
          <p className="text-xs text-secondary/60">
            Join <span className="text-white font-bold">200+ builders</span> who joined this week.
          </p>
        </div>
      </div>
    </Section>
  );
};