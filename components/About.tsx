"use client";

import Image from "next/image";
import { ABOUT } from "@/lib/constants/landing";
import { revealClass, useInView, useReveal } from "@/lib/useReveal";

export default function About() {
  const { ref, revealed } = useReveal<HTMLElement>(0.6);
  // The Ken Burns zoom is an infinite transform on a full-screen image; left
  // running it costs frames across the whole page, not just this section.
  const { ref: photoRef, inView } = useInView<HTMLDivElement>(0.05);

  return (
    <section
      ref={ref}
      id="about"
      className="snap-start relative flex min-h-[100svh] min-h-[100dvh] flex-col justify-end overflow-hidden border-t border-border"
    >
      <div ref={photoRef} className="absolute inset-0">
        <Image
          src={ABOUT.photo}
          alt={ABOUT.photoAlt}
          fill
          sizes="100vw"
          className={`object-cover ${inView ? "hero-zoom" : ""}`}
        />
      </div>
      {/* Weighted to the bottom-left so the copy sits on the floor/rug rather
          than across the whiteboard, which is the busiest part of the frame. */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 sm:pb-24">
        <h2
          className={`max-w-xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl ${revealClass(revealed)}`}
        >
          {ABOUT.headline}
        </h2>
        <p
          className={`mt-6 max-w-xl text-balance text-xl leading-8 text-white/80 ${revealClass(revealed, "delay-100")}`}
        >
          {ABOUT.intro}
        </p>
        <p
          className={`mt-8 text-sm text-white/40 ${revealClass(revealed, "delay-200")}`}
        >
          Placeholder team photo — for layout only, replace before launch.
        </p>
      </div>
    </section>
  );
}
