import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Mail } from "lucide-react";
import { SITE } from "@/lib/constants/landing";

export const metadata: Metadata = {
  title: "Contact — DPA",
  description:
    "Get in touch with the DPA team by email, or book a 30-minute walkthrough of the product.",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-[100svh] min-h-[100dvh] flex-col bg-brand text-white">
      <div className="mx-auto flex h-14 w-full max-w-3xl items-center px-6">
        <Link
          href="/"
          className="animate-fade-up flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          {SITE.name}
        </Link>
      </div>

      <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-6 py-16">
        <h1 className="animate-fade-up-lg text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
          Get in touch
        </h1>
        <p className="animate-fade-up mt-6 max-w-lg text-balance text-xl leading-8 text-white/70 [animation-delay:150ms]">
          We&apos;re a small team, so you&apos;ll reach one of us directly
          rather than a support queue.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <a
            href={`mailto:${SITE.email}`}
            className="animate-fade-up [animation-delay:300ms] group rounded-2xl border border-white/15 bg-white/5 p-6 transition-colors hover:border-white/30 hover:bg-white/10"
          >
            <Mail className="h-5 w-5 text-white/60" />
            <h2 className="mt-4 font-semibold tracking-tight">Email us</h2>
            <p className="mt-1.5 text-sm leading-6 text-white/60">
              Questions about the product, your account, or your data.
            </p>
            <span className="mt-3 block text-sm font-medium text-white group-hover:underline">
              {SITE.email}
            </span>
          </a>

          <a
            href={SITE.demoUrl}
            className="animate-fade-up [animation-delay:420ms] group rounded-2xl border border-white/15 bg-white/5 p-6 transition-colors hover:border-white/30 hover:bg-white/10"
          >
            <CalendarDays className="h-5 w-5 text-white/60" />
            <h2 className="mt-4 font-semibold tracking-tight">Book a demo</h2>
            <p className="mt-1.5 text-sm leading-6 text-white/60">
              Thirty minutes, and we&apos;ll walk you through it with your own
              pipeline in mind.
            </p>
            <span className="mt-3 block text-sm font-medium text-white group-hover:underline">
              Pick a time
            </span>
          </a>
        </div>
      </div>
    </main>
  );
}
