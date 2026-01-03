import React from 'react';
import { motion } from 'framer-motion';
import { ImageIcon, Eye } from 'lucide-react';

const productImages: Record<number, string[]> = {
  1: [ // Web3
    "/assets/products/web3_dashboard_1_1767426041937.png",
    "/assets/products/web3_mobile_1_1767426062265.png",
    "/assets/products/web3_laptop_1_1767426079789.png"
  ],
  2: [ // Course
    "/assets/products/course_video_1_1767426095028.png",
    "/assets/products/course_tablet_1_1767426111898.png",
    "/assets/products/course_catalog_1_1767426129769.png"
  ],
  3: [ // Landing Pages
    "/assets/products/landing_page_monitor_1_1767426155064.png",
    "/assets/products/landing_page_pricing_1_1767426173456.png",
    "/assets/products/landing_page_features_1_1767426189204.png"
  ],
  4: [ // Data Science
    "/assets/products/data_science_dashboard_1_1767426210494.png",
    "/assets/products/data_science_notebook_1_1767426225375.png",
    "/assets/products/data_science_network_1_1767426241940.png"
  ],
  5: [ // Mobile Apps
    "/assets/products/mobile_app_fitness_1_1767426268965.png",
    "/assets/products/mobile_app_social_1_1767426284585.png",
    "/assets/products/mobile_app_ecommerce_1_1767426302887.png"
  ],
  6: [ // Automation
    "/assets/products/automation_workflow_1_1767426320295.png",
    "/assets/products/automation_logs_1_1767426337882.png",
    "/assets/products/automation_api_1_1767426354159.png"
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