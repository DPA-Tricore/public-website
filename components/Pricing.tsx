import { Check } from "lucide-react";
import { PRICING_TIERS } from "@/lib/constants/landing";

export default function Pricing() {
  return (
    <section id="pricing" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-balance text-xl leading-8 text-muted-foreground">
            Start free. Upgrade as your team grows.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl border p-8 ${
                tier.highlighted
                  ? "border-brand bg-white shadow-lg ring-1 ring-brand"
                  : "border-border bg-white"
              }`}
            >
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {tier.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight text-foreground">
                  {tier.price}
                </span>
                <span className="text-sm text-subtle-foreground">
                  {tier.billingNote}
                </span>
              </div>

              <a
                href="#"
                className={`mt-6 block w-full rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition-colors ${
                  tier.highlighted
                    ? "bg-brand text-white hover:bg-brand-hover"
                    : "border border-border text-foreground hover:bg-surface"
                }`}
              >
                {tier.ctaLabel}
              </a>

              <ul className="mt-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-brand" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-subtle-foreground">
          Placeholder pricing — figures above are for layout purposes only.
        </p>
      </div>
    </section>
  );
}
