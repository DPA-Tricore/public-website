"use client";

import { Check } from "lucide-react";
import { PRICING_TIERS, SITE } from "@/lib/constants/landing";
import { STAGGER, revealScale, useReveal } from "@/lib/useReveal";

export default function Pricing() {
  const { ref, revealed } = useReveal<HTMLDivElement>(0.5);

  return (
    <section
      id="pricing"
      className="snap-start flex min-h-[100svh] min-h-[100dvh] flex-col justify-center border-t border-border bg-surface py-10 sm:py-12"
    >
      <div ref={ref} className="mx-auto w-full max-w-6xl px-6">
        <h2
          className={`max-w-xl text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-4xl ${revealScale(revealed)}`}
        >
          Simple, transparent pricing
        </h2>
        <p
          className={`mt-4 max-w-lg text-balance text-xl leading-8 text-muted-foreground ${revealScale(revealed, "delay-100")}`}
        >
          Start free. Upgrade as your team grows.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PRICING_TIERS.map((tier, i) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-2xl border p-6 ${revealScale(
                revealed,
                STAGGER[(i + 1) % STAGGER.length],
              )} ${
                tier.highlighted
                  ? "border-brand bg-white ring-1 ring-brand"
                  : "border-border bg-white"
              }`}
            >
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {tier.name}
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                {tier.description}
              </p>

              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight text-foreground">
                  {tier.price}
                </span>
                <span className="text-sm text-subtle-foreground">
                  {tier.billingNote}
                </span>
              </div>

              <a
                href={tier.ctaAction === "demo" ? SITE.demoUrl : SITE.signupUrl}
                className={`mt-5 block w-full rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition-colors ${
                  tier.highlighted
                    ? "bg-brand text-white hover:bg-brand-hover"
                    : "border border-border text-foreground hover:bg-surface"
                }`}
              >
                {tier.ctaLabel}
              </a>

              <ul className="mt-6 space-y-2.5">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm leading-6 text-muted-foreground"
                  >
                    <Check className="mt-1 h-4 w-4 flex-none text-brand" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p
          className={`mt-8 text-sm text-subtle-foreground ${revealScale(revealed, "delay-300")}`}
        >
          Placeholder pricing — figures above are for layout purposes only.
        </p>
      </div>
    </section>
  );
}
