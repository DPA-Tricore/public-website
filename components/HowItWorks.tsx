import { HOW_IT_WORKS_STEPS } from "@/lib/constants/landing";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
          Up and running in a day, not a quarter
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-balance text-xl leading-8 text-muted-foreground">
          No lengthy onboarding. Bring your leads in and start working your
          pipeline the same day.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
        {HOW_IT_WORKS_STEPS.map((step) => (
          <div key={step.number}>
            <span className="text-sm font-semibold text-brand">
              {step.number}
            </span>
            <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
