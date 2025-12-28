import React from 'react';
import { Section } from './ui/Section';
import { CheckCircle2, Terminal, Code2, Ticket } from 'lucide-react';

export const UseCases: React.FC = () => {
  return (
    <Section className="bg-[#0B0B0B] border-y border-white/5 relative overflow-hidden">
      {/* Background noise texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* Left Content */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Terminal className="w-5 h-5 text-accent" />
            <span className="font-mono text-sm text-accent uppercase tracking-wider">Use Cases</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-medium text-white mb-10 leading-tight">
            Real scenario. <br />
            <span className="text-secondary">Tangible Output.</span>
          </h2>

          <div className="space-y-10">
            <div className="group">
              <div className="flex gap-4 items-start">
                <div className="mt-1 p-1 bg-white/5 rounded-full group-hover:bg-accent/10 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-white group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <h4 className="text-white text-lg font-medium mb-2">Agency Owner / Freelancer</h4>
                  <p className="text-secondary text-sm leading-relaxed max-w-md">
                    Lo bisa deliver project landing page client dalam hitungan jam, bukan minggu.
                    <span className="text-white/60 italic"> "Lowkey ini life saver banget buat ngejar deadline."</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex gap-4 items-start">
                <div className="mt-1 p-1 bg-white/5 rounded-full group-hover:bg-accent/10 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-white group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <h4 className="text-white text-lg font-medium mb-2">Students & Career Switchers</h4>
                  <p className="text-secondary text-sm leading-relaxed max-w-md">
                    Clone project Web3 dari library kita, bedah codenya, modif dikit, masukin portfolio.
                    Cheat code paling valid buat dapet kerjaan remote salary USD.
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex gap-4 items-start">
                <div className="mt-1 p-1 bg-white/5 rounded-full group-hover:bg-accent/10 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-white group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <h4 className="text-white text-lg font-medium mb-2">Indie Hackers</h4>
                  <p className="text-secondary text-sm leading-relaxed max-w-md">
                    Skip bagian boring kayak auth system atau dashboard UI. Ambil boilerplate,
                    pasang *core value* lo, langsung ship. Validasi ide itu harus cepet.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 p-5 bg-accent/5 border border-accent/20 rounded-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
              <Ticket className="w-12 h-12 text-accent" />
            </div>
            <h4 className="text-white text-base font-medium mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              Limited Offer
            </h4>
            <p className="text-secondary text-sm mb-3 max-w-sm">
              Claim your exclusive voucher code below for extra discounts at checkout.
              Gunakan kode voucher ini jika masih tersedia saat melakukan pembayaran
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/40 border border-white/10 rounded font-mono text-sm text-accent">
              VOUCHER GO TO 2026
            </div>
          </div>
        </div>

        {/* Right Visual - Code Block Aesthetic */}
        <div className="relative pt-12 pl-12">
          {/* Decorative elements behind */}
          <div className="absolute top-0 left-0 w-full h-full border border-white/5 bg-white/[0.01] -z-10 translate-x-4 translate-y-4"></div>
          <div className="absolute top-0 left-0 w-full h-full border border-white/5 bg-white/[0.01] -z-20 translate-x-8 translate-y-8"></div>

          <div className="bg-[#050505] border border-white/10 rounded-sm overflow-hidden shadow-2xl">
            {/* Window Header */}
            <div className="bg-[#0f0f0f] border-b border-white/5 px-4 py-3 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-secondary/40">
                <Code2 className="w-3 h-3" />
                terminal — -zsh — 80x24
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 md:p-8 font-mono text-xs md:text-sm leading-loose">
              <div className="space-y-1">
                <p className="text-secondary/50"># Initiating hustle mode...</p>
                <div className="flex gap-2">
                  <span className="text-accent">➜</span>
                  <span className="text-white">git clone</span>
                  <span className="text-secondary">digital-arsenal/saas-starter-kit</span>
                </div>
                <p className="text-secondary/60 pl-4">Cloning into 'saas-starter-kit'...</p>
                <p className="text-secondary/60 pl-4">Unpacking objects: 100% (450/450), done.</p>

                <div className="flex gap-2 mt-4">
                  <span className="text-accent">➜</span>
                  <span className="text-white">cd</span>
                  <span className="text-secondary">saas-starter-kit</span>
                </div>

                <div className="flex gap-2">
                  <span className="text-accent">➜</span>
                  <span className="text-white">npm install && npm run deploy</span>
                </div>

                <div className="mt-4 border-l-2 border-green-500/50 pl-4 py-2 bg-green-500/5">
                  <p className="text-green-400">✔ Build successful.</p>
                  <p className="text-green-400">✔ Deployed to production.</p>
                  <p className="text-white/80">   &gt; Live at: https://your-startup.com</p>
                </div>

                <div className="flex gap-2 mt-4 items-center">
                  <span className="text-accent">➜</span>
                  <span className="w-2 h-4 bg-white/50 animate-pulse block"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
};