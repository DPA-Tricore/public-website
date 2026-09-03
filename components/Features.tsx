import { FEATURES } from "@/lib/constants/landing";

export default function Features() {
  return (
    <section id="features" className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Everything your pipeline needs
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Purpose-built for how brokers actually work — not a generic CRM
            stretched to fit.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50">
                  <Icon className="h-5 w-5 text-indigo-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
