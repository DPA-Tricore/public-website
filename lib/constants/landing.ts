import type {
  About,
  FeatureCarouselItem,
  HeroSlide,
  PricingTier,
  FooterColumn,
} from "@/lib/types/landing";

export const SITE = {
  name: "DPA",
  tagline: "The CRM built for insurance brokers",
  consoleUrl: "https://app.dpatricore.com",
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    video: "/hero-pipeline.mp4",
    poster: "/hero-pipeline.jpg",
    headline: "Simple",
    description: "Open it up and start working.",
    duration: 2500,
  },
  {
    video: "/hero-automation.mp4",
    poster: "/hero-automation.jpg",
    headline: "Automation",
    description: "You set it up once, and it takes care of itself from there.",
  },
  {
    video: "/hero-ai.mp4",
    poster: "/hero-ai.jpg",
    duration: 12300,
    headline: "Just ask",
    description: "You tell it what you need, and it's done.",
  },
  {
    video: "/hero-team.mp4",
    poster: "/hero-team.jpg",
    duration: 16400,
    headline: "Organized",
    description: "Every lead has one place — exactly where you left it.",
  },
];

// 2 of the eventual 3 feature sections are built (see PipelineSection / AISection).
// Pipeline screenshots are captured from the real app against mocked API data (fictional agency,
// no real contacts). AI screenshots come from the in-app assistant with its SSE reply scripted,
// since its tools query the real DB server-side.
export const PIPELINE_HEADLINE = "Your Pipeline Engine";

export const PIPELINE_CAROUSEL_ITEMS: FeatureCarouselItem[] = [
  {
    title: "Your whole book, one board",
    description:
      "Every lead by stage, from New to Converted — who owns it and what's next, at a glance.",
    imageAlt: "DPA pipeline board with leads by stage",
    image: "/feature-board.png",
  },
  {
    title: "One lead, one place",
    description:
      "Contacts, notes, documents, and full history sit on the lead's record instead of scattered across your inbox.",
    imageAlt: "DPA lead record with contact details, documents, and history",
    image: "/feature-lead.png",
  },
  {
    title: "Set the rules once",
    description:
      "Tasks, emails, and status changes fire on their own as a lead moves through your pipeline.",
    imageAlt: "DPA workflow automation rule builder",
    image: "/feature-automations.png",
  },
  {
    title: "Know your numbers",
    description:
      "Conversion rate, leads by stage, and how each agent is tracking over any date range.",
    imageAlt: "DPA reports showing conversion rate and leads by stage",
    image: "/feature-reports.png",
  },
];

export const AI_HEADLINE = "Just Ask";

export const AI_CAROUSEL_ITEMS: FeatureCarouselItem[] = [
  {
    title: "Ask for a report",
    description:
      "Get a straight answer on your pipeline without opening a spreadsheet.",
    imageAlt: "DPA AI chat answering a question about pipeline numbers",
    image: "/feature-ai-report.png",
  },
  {
    title: "Ask it to remind you",
    description:
      "Say what to follow up on, and when — it remembers so you don't have to.",
    imageAlt: "DPA AI chat setting a follow-up reminder",
    image: "/feature-ai-remind.png",
  },
  {
    title: "Ask it to move a batch",
    description:
      "Shift a whole group of leads to a new stage at once — it checks with you first.",
    imageAlt: "DPA AI chat proposing a bulk stage change",
    image: "/feature-ai-move.png",
  },
  {
    title: "Ask about a lead",
    description:
      "Where they stand, what was said last, and what's still outstanding.",
    imageAlt: "DPA AI chat summarizing a lead's status and history",
    image: "/feature-ai-lead.png",
  },
];

// PLACEHOLDER — team photo is a stock shot, used only to demo the layout.
// Replace before launch (the whiteboard in it belongs to another company).
export const ABOUT: About = {
  headline: "Management",
  intro: "We build tools we want to use ourselves.",
  photo: "/team-PLACEHOLDER.webp",
  photoAlt: "Placeholder photo standing in for the DPA team",
};

// Placeholder pricing — replace with real figures before launch.
export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Starter",
    price: "$49",
    billingNote: "per agent / month",
    description: "For independent brokers getting their pipeline organized.",
    features: [
      "Up to 500 active leads",
      "Lead pipeline & tasks",
      "Email reminders",
      "CSV import & export",
    ],
    ctaLabel: "Start free trial",
    highlighted: false,
  },
  {
    name: "Team",
    price: "$99",
    billingNote: "per agent / month",
    description: "For agencies coordinating multiple agents and teams.",
    features: [
      "Everything in Starter",
      "Unlimited leads",
      "Team & role management",
      "Workflow automations",
      "Document storage",
    ],
    ctaLabel: "Start free trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    billingNote: "volume pricing",
    description: "For larger agencies with custom onboarding needs.",
    features: [
      "Everything in Team",
      "Dedicated onboarding",
      "Priority support",
      "Custom contract terms",
    ],
    ctaLabel: "Contact sales",
    highlighted: false,
  },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "#" },
      { label: "Terms of service", href: "#" },
    ],
  },
];
