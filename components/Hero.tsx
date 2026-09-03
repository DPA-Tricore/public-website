export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[calc(80svh-4rem)] max-w-6xl flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700">
        Built for insurance brokers
      </p>

      <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
        Never let a lead go cold again
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
        DPA keeps your pipeline, tasks, reminders, and documents in one place —
        so you spend less time chasing spreadsheets and more time closing
        policies.
      </p>

      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href="#"
          className="w-full rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-indigo-700 sm:w-auto"
        >
          Start free trial
        </a>
        <a
          href="#how-it-works"
          className="w-full rounded-lg border border-slate-300 px-6 py-3 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50 sm:w-auto"
        >
          See how it works
        </a>
      </div>

      <p className="mt-4 text-sm text-slate-500">
        No credit card required
      </p>
    </section>
  );
}
