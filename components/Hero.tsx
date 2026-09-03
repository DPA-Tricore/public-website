export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[calc(90svh-4rem)] max-w-6xl flex-col items-center justify-center px-6 text-center">
      <h1 className="mx-auto max-w-4xl text-balance text-6xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-7xl">
        Never let a lead go cold again
      </h1>

      <p className="mx-auto mt-8 max-w-xl text-balance text-xl leading-8 text-muted-foreground">
        DPA keeps your pipeline, tasks, reminders, and documents in one place —
        so you spend less time chasing spreadsheets and more time closing
        policies.
      </p>
    </section>
  );
}
