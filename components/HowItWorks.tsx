import { HOW_IT_WORKS_STEPS } from "@/lib/constants/landing";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Up and running in a day, not a quarter
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          No lengthy onboarding. Bring your leads in and start working your
          pipeline the same day.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
        {HOW_IT_WORKS_STEPS.map((step) => (
          <div key={step.number}>
            <span className="text-sm font-semibold text-indigo-600">
              {step.number}
            </span>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
