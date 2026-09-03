import { FEATURES } from "@/lib/constants/landing";

export default function Features() {
  return (
    <section id="features" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            Everything your pipeline needs
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-balance text-xl leading-8 text-muted-foreground">
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
                className="rounded-2xl border border-border bg-white p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-subtle">
                  <Icon className="h-5 w-5 text-brand" />
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
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
