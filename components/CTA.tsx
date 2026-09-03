export default function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="rounded-3xl bg-indigo-600 px-8 py-16 text-center sm:px-16">
        <h2 className="mx-auto max-w-xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl">
          Ready to organize your book of business?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-balance text-xl leading-8 text-indigo-100">
          Import your leads in minutes and see your whole pipeline in one
          place.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#"
            className="w-full rounded-lg bg-white px-6 py-3 text-base font-semibold text-indigo-600 transition-colors hover:bg-indigo-50 sm:w-auto"
          >
            Start free trial
          </a>
          <a
            href="#"
            className="w-full rounded-lg border border-indigo-300 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-indigo-500 sm:w-auto"
          >
            Talk to sales
          </a>
        </div>
      </div>
    </section>
  );
}
