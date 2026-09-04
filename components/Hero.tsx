"use client";

import { ChevronDown } from "lucide-react";
import { smoothScrollTo } from "@/lib/scroll";

// public/hero-background.mp4 — free-license video (Pexels, photographer Ron Lach)
// public/hero-background.jpg — poster frame / no-JS fallback, same source
export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/hero-background.jpg"
        className="absolute inset-0 h-full w-full object-cover object-bottom"
      >
        <source src="/hero-background.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/55 to-black/0" />

      <div className="relative">
        <h1 className="animate-fade-up mx-auto max-w-4xl text-balance text-6xl font-semibold leading-[1.05] tracking-tight text-white sm:text-7xl">
          Never let leads go cold
        </h1>

        <p className="animate-fade-up mx-auto mt-4 max-w-xl text-balance text-xl leading-8 text-white/80 [animation-delay:150ms]">
          DPA keeps your pipeline, tasks, and documents in one place — so you
          close more policies, not spreadsheets.
        </p>
      </div>

      <a
        href="#features"
        onClick={(e) => {
          e.preventDefault();
          smoothScrollTo("features");
        }}
        aria-label="Scroll to see more"
        className="animate-bounce-arrow absolute inset-x-0 bottom-8 mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white/10"
      >
        <ChevronDown className="h-5 w-5" />
      </a>
    </section>
  );
}
