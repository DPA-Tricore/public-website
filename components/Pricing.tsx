import { Check } from "lucide-react";
import { PRICING_TIERS } from "@/lib/constants/landing";

export default function Pricing() {
  return (
    <section id="pricing" className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Start free. Upgrade as your team grows.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl border p-8 ${
                tier.highlighted
                  ? "border-indigo-600 bg-white shadow-lg ring-1 ring-indigo-600"
                  : "border-slate-200 bg-white"
              }`}
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {tier.name}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{tier.description}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold text-slate-900">
                  {tier.price}
                </span>
                <span className="text-sm text-slate-500">
                  {tier.billingNote}
                </span>
              </div>

              <a
                href="#"
                className={`mt-6 block w-full rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition-colors ${
                  tier.highlighted
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "border border-slate-300 text-slate-700 hover:bg-slate-50"
                }`}
              >
                {tier.ctaLabel}
              </a>

              <ul className="mt-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-indigo-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-slate-400">
          Placeholder pricing — figures above are for layout purposes only.
        </p>
      </div>
    </section>
  );
}
