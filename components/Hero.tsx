import Image from "next/image";

// public/hero-background.jpg — free-license photo (Pexels, photographer Ron Lach)
export default function Hero() {
  return (
    <section className="relative flex min-h-[90svh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      <Image
        src="/hero-background.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-zoom object-cover object-bottom"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/55 to-black/0" />

      <div className="relative">
        <h1 className="mx-auto max-w-4xl text-balance text-6xl font-semibold leading-[1.05] tracking-tight text-white sm:text-7xl">
          Never let leads go cold
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-balance text-xl leading-8 text-white/80">
          DPA keeps your pipeline, tasks, and documents in one place — so you
          close more policies, not spreadsheets.
        </p>
      </div>
    </section>
  );
}
