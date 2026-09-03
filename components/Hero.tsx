export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[calc(90svh-4rem)] max-w-6xl flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 inline-block rounded-full bg-brand-subtle px-4 py-1.5 text-sm font-medium text-brand">
        Built for insurance brokers
      </p>

      <h1 className="mx-auto max-w-4xl text-balance text-6xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-7xl">
        Never let a lead go cold again
      </h1>

      <p className="mx-auto mt-8 max-w-xl text-balance text-xl leading-8 text-muted-foreground">
        DPA keeps your pipeline, tasks, reminders, and documents in one place —
        so you spend less time chasing spreadsheets and more time closing
        policies.
      </p>

      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href="#"
          className="w-full rounded-lg bg-brand px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-hover sm:w-auto"
        >
          Start free trial
        </a>
        <a
          href="#how-it-works"
          className="w-full rounded-lg border border-border px-6 py-3 text-base font-semibold text-foreground transition-colors hover:bg-surface sm:w-auto"
        >
          See how it works
        </a>
      </div>

      <p className="mt-4 text-sm text-subtle-foreground">
        No credit card required
      </p>
    </section>
  );
}
