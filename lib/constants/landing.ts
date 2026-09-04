import {
  Workflow,
  BellRing,
  Contact,
  Zap,
  FileText,
  Users,
  type LucideIcon,
} from "lucide-react";
import type {
  Feature,
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
    headline: "Never let leads go cold",
    description:
      "DPA keeps your pipeline, tasks, and documents in one place — so you close more policies, not spreadsheets.",
  },
  {
    video: "/hero-automation.mp4",
    poster: "/hero-automation.jpg",
    headline: "Automate the busywork",
    description:
      "Trigger tasks, emails, and status changes automatically as a lead moves through your pipeline — so follow-ups never depend on memory.",
  },
  {
    video: "/hero-ai.mp4",
    poster: "/hero-ai.jpg",
    headline: "AI that works the pipeline with you",
    description:
      "Smart suggestions surface which leads need attention next, so your team spends time closing, not sorting.",
  },
  {
    video: "/hero-team.mp4",
    poster: "/hero-team.jpg",
    headline: "Built for the whole team",
    description:
      "Organize agents into teams under your agency, with role-based access that keeps every book of business in the right hands.",
  },
];

export const FEATURES: Feature[] = [
  {
    icon: Workflow as LucideIcon,
    title: "Lead pipeline",
    description:
      "Move leads from New to Converted without dropping a single one. Track stage, owner, and full history in one view.",
  },
  {
    icon: BellRing as LucideIcon,
    title: "Tasks & reminders",
    description:
      "Automated email reminders make sure no follow-up call, renewal, or deadline slips through the cracks.",
  },
  {
    icon: Contact as LucideIcon,
    title: "Contacts, centralized",
    description:
      "Keep every phone number, email, and message thread tied to the right lead — no more digging through your inbox.",
  },
  {
    icon: Zap as LucideIcon,
    title: "Workflow automation",
    description:
      "Trigger tasks, emails, and status changes automatically as a lead moves through your pipeline.",
  },
  {
    icon: FileText as LucideIcon,
    title: "Document storage",
    description:
      "Attach quotes, policies, and signed documents directly to a lead's record, so nothing lives in a separate folder.",
  },
  {
    icon: Users as LucideIcon,
    title: "Team & role management",
    description:
      "Organize agents into teams under your agency, with role-based access to keep every book of business in the right hands.",
  },
];

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
