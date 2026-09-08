import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface HeroSlide {
  video: string;
  poster: string;
  headline: string;
  description: string;
  duration?: number;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface PricingTier {
  name: string;
  price: string;
  billingNote: string;
  description: string;
  features: string[];
  ctaLabel: string;
  highlighted: boolean;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}
