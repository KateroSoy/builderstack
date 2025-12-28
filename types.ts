export interface NavItem {
  label: string;
  href: string;
}

export interface Pillar {
  id: number;
  title: string;
  description: string;
  details: string[];
  count: string;
}

export interface RoadmapItem {
  track: string;
  duration: string;
  title: string;
  description: string;
  tags: string[];
}

export interface PricingTier {
  name: string;
  price: string;
  originalPrice?: string; // Added for strike-through price
  discountLabel?: string; // Added for % saved
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}