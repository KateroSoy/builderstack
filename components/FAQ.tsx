import React, { useState } from 'react';
import { Section } from './ui/Section';
import { FAQItem } from '../types';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs: FAQItem[] = [
  {
    question: "Is this legit full source code?",
    answer: "Yes, 100%. Lo dapet full folder project. Bukan cuma snippet. Bisa di-run di local, bisa di-deploy. Lo bisa bedah structure-nya buat belajar, atau langsung pake buat project client."
  },
  {
    question: "Gw newbie banget, bakal overwhelm gak?",
    answer: "To be honest, ini emang optimized buat yang udah ngerti tech dikit. Tapi, kalau lo tipe yang 'learning by doing' alias langsung bedah code orang, ini gold mine. Daripada nonton tutorial 10 jam bikin ngantuk."
  },
  {
    question: "Commercial Use? Boleh buat client?",
    answer: "Absolutely. Itu value utamanya. Kita provide 'ammunition' biar lo bisa tembak project client lebih cepet. Yang nggak boleh cuma satu: lo jual lagi mentahan file-nya."
  },
  {
    question: "Update mechanism-nya gimana?",
    answer: "Kita ada private channel & cloud drive. Tiap minggu ada drop asset baru (landing page, scripts, UI kits). Selama lo active member, lo dapet akses terus. No hidden fees."
  },
  {
    question: "Do I need to download 1.5TB?",
    answer: "Gak perlu. Gila aja download segitu. Semuanya hosted di cloud premium kita. Lo tinggal preview, pilih yang lo butuh hari ini, download folder itu aja. Hemat storage lo."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="faq" className="max-w-[800px] mx-auto py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-medium text-white mb-2">Common Questions</h2>
        <p className="text-secondary text-sm">Everything you need to know.</p>
      </div>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`border transition-all duration-300 ${openIndex === index ? 'border-white/20 bg-white/[0.03]' : 'border-white/5 bg-transparent hover:border-white/10'}`}
          >
            <button
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className={`text-sm md:text-base font-medium transition-colors ${openIndex === index ? 'text-white' : 'text-secondary'}`}>
                {faq.question}
              </span>
              {openIndex === index ? (
                <Minus className="w-4 h-4 text-accent flex-shrink-0" />
              ) : (
                <Plus className="w-4 h-4 text-secondary flex-shrink-0" />
              )}
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-0 text-secondary/80 text-sm leading-relaxed max-w-2xl">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Section>
  );
};