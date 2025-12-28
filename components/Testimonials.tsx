import React from 'react';
import { Section } from './ui/Section';
import { Quote, Star, BadgeCheck } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Dimas A.",
    role: "Agency Founder @ SCBD",
    content: "Jujurly awalnya skeptis. Tapi pas liat library landing page-nya, gila sih. Gw bisa deliver 3 project client dalam seminggu pake asset ini. Auto balik modal in 2 weeks. No debat.",
    rating: 5
  },
  {
    name: "Kevin W.",
    role: "Web3 Developer",
    content: "Source code NFT marketplace-nya clean banget structure-nya. Gw cuma perlu tweak UI dikit, connect wallet, deploy, kelar. Hemat waktu 2 bulan coding dari nol. Literally life saver.",
    rating: 5
  },
  {
    name: "Sarah T.",
    role: "Indie Hacker",
    content: "No cap, ini cheat code buat solo founder. Asset stack-nya lengkap dari AI models sampe mobile apps. Buat yang mau shipping cepet tanpa drama hiring dev mahal, this is it.",
    rating: 5
  },
  {
    name: "Raka P.",
    role: "Freelance Fullstack",
    content: "Investasi paling worth it tahun ini fix. Daripada beli course jutaan cuma nonton video, mending beli ini dapet 'senjata' buat cari duit. The update speed is crazy too.",
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <Section className="bg-[#0B0B0B] border-t border-white/5 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 blur-[100px] pointer-events-none rounded-full"></div>

      <div className="relative z-10 text-center mb-16">
        <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <Star className="w-4 h-4 text-accent fill-accent" />
            <Star className="w-4 h-4 text-accent fill-accent" />
            <Star className="w-4 h-4 text-accent fill-accent" />
            <Star className="w-4 h-4 text-accent fill-accent" />
        </div>
        <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">
          Word on the <span className="text-secondary italic">street.</span>
        </h2>
        <p className="text-lg text-secondary max-w-2xl mx-auto">
          Apa kata mereka yang udah stop "belajar doang" dan mulai <span className="text-white">printing money</span>.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {testimonials.map((item, index) => (
          <div 
            key={index}
            className="p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 rounded-sm group hover:border-white/10"
          >
            <div className="mb-6 opacity-30 group-hover:opacity-100 transition-opacity">
              <Quote className="w-8 h-8 text-accent" />
            </div>
            
            <p className="text-white/90 text-lg leading-relaxed mb-8 font-light">
              "{item.content}"
            </p>

            <div className="flex items-center justify-between border-t border-white/5 pt-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-white font-medium">{item.name}</h4>
                  <BadgeCheck className="w-4 h-4 text-accent" />
                </div>
                <p className="text-xs font-mono text-secondary/60 uppercase tracking-wider">{item.role}</p>
              </div>
              <div className="flex gap-1 opacity-50">
                 {[...Array(item.rating)].map((_, i) => (
                   <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
                 ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-xs font-mono text-secondary/30 uppercase tracking-[0.2em]">
          Verified Builders • Real Results • No Bot Reviews
        </p>
      </div>
    </Section>
  );
};