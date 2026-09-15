"use client";

import { AI_HEADLINE, AI_CAROUSEL_ITEMS } from "@/lib/constants/landing";
import { revealClass, useReveal } from "@/lib/useReveal";
import FeatureCarousel from "./FeatureCarousel";

export default function AISection() {
  const { ref, revealed } = useReveal<HTMLHeadingElement>(0.9);

  return (
    <div className="snap-start flex min-h-[100svh] min-h-[100dvh] flex-col justify-center border-t border-white/10 bg-brand py-10 text-white sm:py-12">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2
          ref={ref}
          className={`max-w-xl text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl ${revealClass(revealed)}`}
        >
          {AI_HEADLINE}
        </h2>
      </div>

      <div className="mt-8">
        <FeatureCarousel items={AI_CAROUSEL_ITEMS} dark />
      </div>
    </div>
  );
}
