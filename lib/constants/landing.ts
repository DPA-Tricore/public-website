import type {
  FeatureSection,
  FeatureCarouselItem,
  HeroSlide,
  Step,
  PricingTier,
  FooterColumn,
} from "@/lib/types/landing";

export const SITE = {
  name: "DPA",
  tagline: "The CRM built for insurance brokers",
};

// AI slide is placeholder copy — DPA has no confirmed AI feature yet.
// Verify against the actual product before this goes live.
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

// Only 2 of the eventual 3 feature sections are drafted so far (see PipelineSection / AISection).
// Pipeline screenshots are captured from the real app against mocked API data (fictional agency,
// no real contacts). AI section is still a placeholder — the feature doesn't exist yet.
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
    title: "Know what's due today",
    description:
      "Follow-ups, renewals, and deadlines land on your task list before they're late.",
    imageAlt: "DPA task list showing what's due",
    image: "/feature-tasks.png",
  },
];

export const AI_SECTION: FeatureSection = {
  headline: "Just Ask",
  description:
    "A chat built into the system. Ask for what you need, and it's done — no menus, no digging.",
  imageAlt: "DPA AI chat responding to a prompt",
  points: [
    {
      title: "Ask for a report",
      description:
        "Get a straight answer on your pipeline without opening a spreadsheet.",
    },
    {
      title: "Ask it to build",
      description: "Describe a pipeline or workflow, and it sets it up.",
    },
    {
      title: "Ask it to remind you",
      description:
        "Say what to follow up on, and when — it remembers so you don't have to.",
    },
  ],
};

export const HOW_IT_WORKS_STEPS: Step[] = [
  {
    number: "01",
    title: "Import your book of business",
    description:
      "Upload a CSV of your existing leads or add them manually. Duplicates are flagged automatically, so your pipeline starts clean.",
  },
  {
    number: "02",
    title: "Automate your pipeline",
    description:
      "Set rules for follow-ups, reminders, and status changes so leads keep moving even when you're on a call.",
  },
  {
    number: "03",
    title: "Close with confidence",
    description:
      "Track every touchpoint — call, email, document — until the policy is signed, all in one shared record.",
  },
];

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
      { label: "How it works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
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
