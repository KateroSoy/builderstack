import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Ticket, Copy, CheckCircle } from 'lucide-react';
import { Button } from './ui/Button';

interface WelcomeModalProps {
  onClose: () => void;
  onApply: () => void;
}

export const WelcomeModal: React.FC<WelcomeModalProps> = ({ onClose, onApply }) => {
  const [copied, setCopied] = useState(false);

  const voucherCode = "2026LUSUKSES";

  const handleCopy = () => {
    navigator.clipboard.writeText(voucherCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClaim = () => {
    onApply();
    // Small delay to allow visual confirmation if needed, but here we just close
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/90 backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="w-full max-w-md bg-[#0F0F0F] border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] relative"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors z-20"
        >
          <X size={20} />
        </button>

        {/* Top Gradient Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>

        <div className="p-8 md:p-10 flex flex-col items-center text-center">
            
            {/* Icon Animation */}
            <div className="relative mb-6">
                <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full animate-pulse"></div>
                <div className="relative w-20 h-20 bg-white/5 rounded-full flex items-center justify-center border border-white/10 shadow-inner">
                    <Ticket className="w-10 h-10 text-accent" />
                </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
                VOUCHER GO TO 2026
            </h2>
            
            <p className="text-secondary/70 text-sm mb-8 leading-relaxed max-w-xs mx-auto">
                Claim your exclusive voucher code below for extra discounts at checkout.
            </p>

            <div className="w-full space-y-4">
                {/* Copyable Code Section */}
                <div 
                    onClick={handleCopy}
                    className="relative group cursor-pointer w-full bg-white/5 border border-dashed border-accent/30 hover:border-accent hover:bg-accent/5 rounded-xl p-4 transition-all duration-300 flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] font-mono text-secondary uppercase tracking-widest">Tap to Copy</span>
                    <div className="flex items-center gap-3">
                        <span className="text-2xl font-mono font-bold text-white tracking-wider select-all">
                            {voucherCode}
                        </span>
                        {copied ? (
                             <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                             <Copy className="w-5 h-5 text-secondary group-hover:text-white transition-colors" />
                        )}
                    </div>
                    {copied && (
                        <motion.span 
                            initial={{ opacity: 0, y: 5 }} 
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute -bottom-6 text-[10px] text-green-500 font-mono"
                        >
                            COPIED TO CLIPBOARD
                        </motion.span>
                    )}
                </div>
                
                <div className="pt-4">
                    <Button 
                        onClick={handleClaim} 
                        className="w-full h-12 bg-white text-black hover:bg-gray-200 border-none font-bold tracking-wide shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                    >
                        CLAIM & ENTER ARSENAL
                    </Button>
                </div>
                
                <button 
                    onClick={onClose} 
                    className="text-[10px] text-secondary/40 hover:text-white transition-colors font-mono tracking-widest uppercase mt-2"
                >
                    No thanks, I'll pay full price
                </button>
            </div>
        </div>
      </motion.div>
    </motion.div>
  );
};