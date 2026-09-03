import Image from "next/image";

// public/hero-background.jpg — free-license photo (Pexels, photographer Mikhail Nilov):
// https://www.pexels.com/photo/a-couple-talking-to-an-insurance-agent-7731318/
export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(90svh-4rem)] flex-col items-center justify-center overflow-hidden px-6 text-center">
      <Image
        src="/hero-background.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center saturate-[.35]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand/90 via-brand/75 to-brand/90" />

      <div className="relative">
        <h1 className="mx-auto max-w-4xl text-balance text-6xl font-semibold leading-[1.05] tracking-tight text-white sm:text-7xl">
          Never let a lead go cold again
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-balance text-xl leading-8 text-white/80">
          DPA keeps your pipeline, tasks, reminders, and documents in one place —
          so you spend less time chasing spreadsheets and more time closing
          policies.
        </p>
      </div>
    </section>
  );
}
