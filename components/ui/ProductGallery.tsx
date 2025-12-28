import React from 'react';
import { motion } from 'framer-motion';
import { ImageIcon, Eye } from 'lucide-react';

const productImages: Record<number, string[]> = {
  1: [ // Web3
    "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1620321023374-d1a68fddadb3?q=80&w=800&auto=format&fit=crop"
  ],
  2: [ // Course
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop"
  ],
  3: [ // Landing Pages
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  ],
  4: [ // Data Science
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop"
  ],
  5: [ // Mobile Apps
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=800&auto=format&fit=crop"
  ],
  6: [ // n8n Automation
    "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop", // Logic code
    "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=800&auto=format&fit=crop", // Connector
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"  // Tech background
  ]
};

export const ProductGallery: React.FC<{ id: number }> = ({ id }) => {
  const images = productImages[id] || [];

  return (
    <div className="mt-8 border-t border-white/5 pt-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <ImageIcon className="w-3 h-3 text-accent" />
          <h4 className="text-xs font-mono text-secondary/70 uppercase tracking-widest">Asset_Previews.jpg</h4>
        </div>
        <span className="text-[10px] text-secondary/30 font-mono">HOVER TO INSPECT</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((src, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx, duration: 0.5 }}
            className="group relative aspect-[4/3] overflow-hidden rounded-sm border border-white/10 bg-white/[0.02]"
          >
            {/* Image */}
            <img 
              src={src} 
              alt={`Preview ${idx + 1}`} 
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0"
            />
            
            {/* Tech Overlay lines */}
            <div className="absolute inset-0 pointer-events-none border border-white/0 group-hover:border-accent/30 transition-colors duration-300"></div>
            
            {/* Hover Action */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
              <div className="flex items-center gap-2 text-xs font-mono text-white border border-white/20 px-3 py-1.5 bg-black/50">
                <Eye className="w-3 h-3 text-accent" />
                <span>VIEW_SOURCE</span>
              </div>
            </div>

            {/* Corner Markers */}
            <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-accent/0 group-hover:border-accent/50 transition-colors"></div>
            <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-accent/0 group-hover:border-accent/50 transition-colors"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};