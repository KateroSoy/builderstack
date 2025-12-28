import React from 'react';
import { motion } from 'framer-motion';

// Helper for random positions
const getRandomPos = (min: number, max: number) => Math.random() * (max - min) + min;

interface VisualWrapperProps {
  children?: React.ReactNode;
  className?: string;
}

// Shared wrapper for hover effects
const VisualWrapper: React.FC<VisualWrapperProps> = ({ children, className = "" }) => (
  <motion.div
    className={`w-full h-[320px] relative overflow-hidden bg-[#080808] border border-white/5 rounded-lg cursor-pointer ${className}`}
    whileHover={{ 
      scale: 1.025,
      boxShadow: "0 0 40px -5px rgba(0, 229, 255, 0.25)",
      borderColor: "rgba(0, 229, 255, 0.5)"
    }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

// 1. WEB3 VISUAL: Connected Nodes / Network
const VisualWeb3 = () => {
  return (
    <VisualWrapper className="flex items-center justify-center">
      <div className="absolute inset-0 opacity-20" 
           style={{ backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>
      
      {/* Central Node */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-16 h-16 rounded-full border-2 border-accent bg-accent/10 z-10 flex items-center justify-center shadow-[0_0_30px_rgba(0,229,255,0.3)]"
      >
        <div className="w-4 h-4 bg-accent rounded-full animate-pulse" />
      </motion.div>

      {/* Satellite Nodes & Lines */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2"
          initial={{ rotate: i * 60, x: 0 }}
          animate={{ rotate: i * 60 + 360, x: 0 }} // Rotation container
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: [50, 120, 50], opacity: 1 }}
            transition={{ duration: 3, delay: i * 0.2, repeat: Infinity, repeatType: "reverse" }}
            className="relative"
          >
            <div className="w-3 h-3 bg-white rounded-full absolute -top-1.5 -left-1.5 shadow-[0_0_10px_white]" />
            <div className="w-32 h-[1px] bg-gradient-to-r from-accent to-transparent origin-left -ml-32 absolute top-0" />
          </motion.div>
        </motion.div>
      ))}
      
      <div className="absolute bottom-4 left-4 font-mono text-[10px] text-accent">
        STATUS: BLOCK_CONFIRMED
      </div>
    </VisualWrapper>
  );
};

// 2. COURSE VISUAL: Knowledge Download / Stacking
const VisualCourse = () => {
  return (
    <VisualWrapper className="p-8 flex flex-col justify-center">
      <div className="font-mono text-xs text-secondary mb-2 flex justify-between">
        <span>DOWNLOADING_MODULES...</span>
        <motion.span 
          animate={{ opacity: [1, 0.5, 1] }} 
          transition={{ duration: 1, repeat: Infinity }}
          className="text-accent"
        >
          98%
        </motion.span>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full h-1 bg-white/10 mb-8 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: "0%" }}
          animate={{ width: "98%" }}
          transition={{ duration: 2, ease: "circOut" }}
          className="h-full bg-accent shadow-[0_0_20px_rgba(0,229,255,0.5)]"
        />
      </div>

      {/* Stacking Files */}
      <div className="relative h-48 w-full flex items-center justify-center perspective-1000">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -50, opacity: 0, scale: 0.9 }}
            animate={{ y: i * 15, opacity: 1 - (i * 0.1), scale: 1 - (i * 0.05) }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            className="absolute top-0 w-64 h-16 bg-[#1A1A1A] border border-white/10 rounded flex items-center px-4 gap-3 shadow-lg"
            style={{ zIndex: 5 - i }}
          >
            <div className="w-2 h-2 rounded-full bg-accent/50" />
            <div className="h-1 w-32 bg-white/10 rounded-full" />
            <div className="ml-auto text-[8px] font-mono text-white/20">.mp4</div>
          </motion.div>
        ))}
      </div>
    </VisualWrapper>
  );
};

// 3. LANDING PAGE VISUAL: Wireframe Construction
const VisualLanding = () => {
  return (
    <VisualWrapper className="p-6 flex flex-col gap-4">
      {/* Navbar */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full h-10 border border-white/10 rounded flex items-center justify-between px-4 bg-white/[0.02]"
      >
        <div className="w-8 h-2 bg-accent/40 rounded-sm" />
        <div className="flex gap-2">
          <div className="w-12 h-2 bg-white/10 rounded-sm" />
          <div className="w-12 h-2 bg-white/10 rounded-sm" />
        </div>
      </motion.div>

      <div className="flex gap-4 h-full">
        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-4">
            <motion.div 
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ delay: 0.4 }}
               className="w-3/4 h-12 bg-white/10 rounded-sm"
            />
            <motion.div 
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="w-1/2 h-6 bg-white/5 rounded-sm"
            />
            <div className="flex gap-2 mt-2">
                <motion.div 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="w-24 h-10 bg-accent rounded-sm"
                />
                <motion.div 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="w-24 h-10 border border-white/20 rounded-sm"
                />
            </div>
            
            <div className="grid grid-cols-3 gap-2 mt-4">
               {[1,2,3].map(i => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 + (i * 0.1) }}
                   className="h-20 bg-white/[0.02] rounded border border-white/5"
                 />
               ))}
            </div>
        </div>

        {/* Sidebar / Image */}
        <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="w-1/3 h-full border border-dashed border-white/20 rounded-sm flex items-center justify-center bg-white/[0.02]"
        >
            <div className="text-white/10 font-mono text-xs">IMG_PLACEHOLDER</div>
        </motion.div>
      </div>

      {/* Cursor */}
      <motion.div
        initial={{ x: 300, y: 300 }}
        animate={{ x: 100, y: 100 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute w-4 h-4 pointer-events-none z-20"
      >
        <svg viewBox="0 0 24 24" fill="white" className="w-full h-full drop-shadow-lg">
           <path d="M5.5 3.5l10.5 10.5h-5.5l5 5.5-2.5 1.5-5-5.5v5.5z" />
        </svg>
      </motion.div>
    </VisualWrapper>
  );
};

// 4. DATA SCIENCE VISUAL: Matrix / Analysis
const VisualData = () => {
  return (
    <VisualWrapper className="flex font-mono text-[10px] leading-tight p-4">
       {/* Falling Matrix Columns */}
       {[...Array(12)].map((_, i) => (
         <div key={i} className="flex-1 flex flex-col items-center opacity-50">
           <motion.div
             initial={{ y: -200 }}
             animate={{ y: 0 }}
             transition={{ duration: getRandomPos(2, 5), repeat: Infinity, ease: "linear" }}
             className="flex flex-col gap-1 text-center"
           >
             {[...Array(30)].map((_, j) => (
                <span key={j} className={Math.random() > 0.8 ? "text-accent font-bold" : "text-white/20"}>
                  {Math.random() > 0.5 ? '1' : '0'}
                </span>
             ))}
           </motion.div>
         </div>
       ))}
       
       {/* Scanning Line */}
       <motion.div 
         initial={{ top: "0%" }}
         animate={{ top: "100%" }}
         transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
         className="absolute left-0 w-full h-[1px] bg-accent shadow-[0_0_10px_#00E5FF] z-10"
       />
       
       <div className="absolute bottom-4 right-4 bg-black/80 border border-white/20 px-3 py-1 text-xs text-accent">
         ANALYZING_DATASET: 99.9%
       </div>
    </VisualWrapper>
  );
};

// 5. MOBILE APP VISUAL: Device Frame & Touch Interactions
const VisualMobile = () => {
  return (
    <VisualWrapper className="flex items-center justify-center p-6">
      <div className="relative w-40 h-72 border-2 border-white/20 rounded-2xl p-2 bg-[#111] shadow-2xl">
        {/* Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-b-lg z-10" />
        
        {/* Screen Content */}
        <div className="w-full h-full bg-[#050505] rounded-xl overflow-hidden relative">
           {/* Header */}
           <div className="h-14 w-full bg-white/5 mb-3" />
           {/* List items */}
           <div className="space-y-3 p-3">
             {[...Array(4)].map((_, i) => (
               <motion.div 
                 key={i}
                 initial={{ x: -20, opacity: 0 }}
                 animate={{ x: 0, opacity: 1 }}
                 transition={{ delay: i * 0.2 }}
                 className="h-10 w-full bg-white/5 rounded flex items-center px-2 gap-2"
               >
                 <div className="w-6 h-6 rounded-full bg-accent/20" />
                 <div className="h-2 w-20 bg-white/10 rounded" />
               </motion.div>
             ))}
           </div>
           
           {/* Touch interaction */}
           <motion.div 
             className="absolute top-1/2 left-1/2 w-10 h-10 rounded-full border-2 border-accent/50 z-20"
             initial={{ scale: 0, opacity: 0 }}
             animate={{ scale: 1.5, opacity: 0 }}
             transition={{ duration: 1.5, repeat: Infinity }}
           />
        </div>
      </div>
      
      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [-10, 10, -10] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-10 top-10 px-3 py-1 bg-[#1A1A1A] border border-white/10 rounded-lg text-[10px] text-white/50 shadow-xl"
      >
        Flutter
      </motion.div>
      <motion.div 
        animate={{ y: [10, -10, 10] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-10 bottom-20 px-3 py-1 bg-[#1A1A1A] border border-white/10 rounded-lg text-[10px] text-white/50 shadow-xl"
      >
        React Native
      </motion.div>
    </VisualWrapper>
  );
};

// 6. AUTOMATION VISUAL: Nodes & Workflows
const VisualAutomation = () => {
    return (
      <VisualWrapper className="flex items-center justify-center group">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        {/* WIDE & CENTERED DIAGRAM CONTAINER */}
        <div className="relative w-full h-full flex items-center justify-center">
            
            {/* SVG Lines Layer - Using non-scaling-stroke to keep lines thin while scaling */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(0,229,255,0.2)" />
                        <stop offset="50%" stopColor="#00E5FF" />
                        <stop offset="100%" stopColor="rgba(0,229,255,0.2)" />
                    </linearGradient>
                </defs>

                {/* Path 1: 20% to 50% */}
                <path 
                    d="M 20 50 Q 35 30 50 50" 
                    fill="none" 
                    stroke="rgba(255,255,255,0.1)" 
                    strokeWidth="0.5"
                    vectorEffect="non-scaling-stroke"
                />
                <motion.path 
                    d="M 20 50 Q 35 30 50 50" 
                    fill="none" 
                    stroke="url(#flowGradient)" 
                    strokeWidth="0.5"
                    vectorEffect="non-scaling-stroke"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Path 2: 50% to 80% */}
                <path 
                    d="M 50 50 Q 65 70 80 50" 
                    fill="none" 
                    stroke="rgba(255,255,255,0.1)" 
                    strokeWidth="0.5"
                    vectorEffect="non-scaling-stroke"
                />
                 <motion.path 
                    d="M 50 50 Q 65 70 80 50" 
                    fill="none" 
                    stroke="url(#flowGradient)" 
                    strokeWidth="0.5"
                    vectorEffect="non-scaling-stroke"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1, repeat: Infinity }}
                />
                
                {/* Moving Particles */}
                <motion.circle 
                    r="1" 
                    fill="#fff"
                    animate={{ 
                        offsetDistance: "100%" 
                    }}
                    style={{ 
                        offsetPath: "path('M 20 50 Q 35 30 50 50')" 
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <motion.circle 
                    r="1" 
                    fill="#00E5FF"
                    animate={{ 
                        offsetDistance: "100%" 
                    }}
                    style={{ 
                        offsetPath: "path('M 50 50 Q 65 70 80 50')" 
                    }}
                    transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "linear" }}
                />
            </svg>

            {/* Nodes - Positioned using absolute percentages to match SVG */}
            
            {/* 1. Trigger Node (Left - 20%) */}
            <motion.div 
                className="absolute left-[20%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-10"
                initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }}
            >
                <div className="w-12 h-12 bg-[#1A1A1A] border border-accent rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.15)] relative group cursor-pointer hover:scale-110 transition-transform">
                     <div className="absolute inset-0 bg-accent/5 animate-pulse rounded-xl"></div>
                     <span className="font-mono text-[10px] text-accent font-bold">TRIG</span>
                </div>
                <div className="px-3 py-1 bg-black/80 border border-white/10 rounded-full text-[9px] text-secondary font-mono tracking-wide backdrop-blur-md">
                    WEBHOOK
                </div>
            </motion.div>

            {/* 2. Process Node (Center - 50%) */}
             <motion.div 
                className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-10"
                initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4 }}
            >
                <div className="w-16 h-16 bg-[#1A1A1A] border border-white/30 rounded-xl flex items-center justify-center relative group cursor-pointer hover:border-white transition-colors">
                     <span className="font-mono text-[10px] text-white font-bold">AI_LOGIC</span>
                </div>
                <div className="px-3 py-1 bg-black/80 border border-white/10 rounded-full text-[9px] text-secondary font-mono tracking-wide backdrop-blur-md">
                    PROCESSOR
                </div>
            </motion.div>

            {/* 3. Action Node (Right - 80%) */}
            <motion.div 
                className="absolute left-[80%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-10"
                initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.6 }}
            >
                <div className="w-12 h-12 bg-[#1A1A1A] border border-green-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.15)] relative group cursor-pointer hover:scale-110 transition-transform">
                     <span className="font-mono text-[10px] text-green-500 font-bold">DONE</span>
                </div>
                <div className="px-3 py-1 bg-black/80 border border-white/10 rounded-full text-[9px] text-secondary font-mono tracking-wide backdrop-blur-md">
                    OUTPUT
                </div>
            </motion.div>
             
             <div className="absolute bottom-4 right-4 font-mono text-[10px] text-green-500 flex items-center gap-2 bg-black/50 px-3 py-1.5 rounded border border-white/5 backdrop-blur-sm shadow-lg">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                WORKFLOW_ACTIVE
             </div>
        </div>
      </VisualWrapper>
    );
};

export const ProductVisual: React.FC<{ id: number }> = ({ id }) => {
  switch (id) {
    case 1: return <VisualWeb3 />;
    case 2: return <VisualCourse />;
    case 3: return <VisualLanding />;
    case 4: return <VisualData />;
    case 5: return <VisualMobile />;
    case 6: return <VisualAutomation />;
    default: return <VisualWeb3 />;
  }
};