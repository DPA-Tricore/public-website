export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureCarouselItem {
  title: string;
  description: string;
  imageAlt: string;
  image?: string;
  /** Takes precedence over `image` when set. Muted, looping, no controls. */
  video?: string;
  poster?: string;
}

export interface HeroSlide {
  video: string;
  poster: string;
  headline: string;
  description: string;
  duration?: number;
}


export interface About {
  headline: string;
  intro: string;
  photo: string;
  photoAlt: string;
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
