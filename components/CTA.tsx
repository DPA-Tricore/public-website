"use client";

import { SITE } from "@/lib/constants/landing";
import { revealClass, revealHeading, useReveal } from "@/lib/useReveal";

export default function CTA() {
  const { ref, revealed } = useReveal<HTMLDivElement>(0.6);

  return (
    <section className="snap-start flex min-h-[100svh] min-h-[100dvh] flex-col justify-center border-t border-white/10 bg-brand py-10 sm:py-12">
      <div ref={ref} className="mx-auto w-full max-w-6xl px-6 text-center">
        <h2
          className={`mx-auto max-w-2xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl ${revealHeading(revealed)}`}
        >
          Ready to organize your book of business?
        </h2>
        <p
          className={`mx-auto mt-6 max-w-lg text-balance text-xl leading-8 text-white/70 ${revealClass(revealed, "delay-100")}`}
        >
          Import your leads in minutes and see your whole pipeline in one place.
        </p>

        <div
          className={`mt-10 flex flex-col justify-center gap-4 sm:flex-row ${revealClass(revealed, "delay-200")}`}
        >
          <a
            href={SITE.signupUrl}
            className="rounded-lg bg-white px-6 py-3 text-center text-base font-semibold text-brand transition-colors hover:bg-brand-subtle"
          >
            Start free trial
          </a>
          <a
            href={SITE.demoUrl}
            className="rounded-lg border border-white/30 px-6 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            Book a demo
          </a>
        </div>
      </div>
    </section>
  );
}
