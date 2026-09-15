"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { smoothScrollTo } from "@/lib/scroll";
import { HERO_SLIDES } from "@/lib/constants/landing";

const DEFAULT_SLIDE_DURATION = 6000;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goToSlide = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveIndex(index);
  };

  useEffect(() => {
    const duration = HERO_SLIDES[activeIndex].duration ?? DEFAULT_SLIDE_DURATION;
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, duration);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeIndex]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === activeIndex) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [activeIndex]);

  const slide = HERO_SLIDES[activeIndex];

  return (
    <section className="snap-start relative flex min-h-[100svh] min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      {HERO_SLIDES.map((s, index) => (
        <video
          key={s.video}
          ref={(el) => {
            videoRefs.current[index] = el;
          }}
          loop
          muted
          playsInline
          preload={index === activeIndex ? "auto" : "none"}
          poster={s.poster}
          className={`absolute inset-0 h-full w-full object-cover object-bottom transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={s.video} type="video/mp4" />
        </video>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/55 to-black/0" />

      <div className="relative">
        <h1
          key={`headline-${activeIndex}`}
          className="animate-fade-up mx-auto max-w-4xl text-balance text-6xl font-semibold leading-[1.05] tracking-tight text-white sm:text-7xl"
        >
          {slide.headline}
        </h1>

        <p
          key={`description-${activeIndex}`}
          className="animate-fade-up mx-auto mt-4 max-w-xl text-balance text-xl leading-8 text-white/80 [animation-delay:150ms]"
        >
          {slide.description}
        </p>

        <div className="mt-8 flex items-center justify-center gap-2">
          {HERO_SLIDES.map((s, index) => (
            <button
              key={s.video}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Show slide ${index + 1}`}
              aria-current={index === activeIndex}
              className={`h-1.5 rounded-full transition-all ${
                index === activeIndex
                  ? "w-6 bg-white"
                  : "w-1.5 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      <a
        href="#features"
        onClick={(e) => {
          e.preventDefault();
          smoothScrollTo("features");
        }}
        aria-label="Scroll to see more"
        className="animate-bounce-arrow absolute inset-x-0 bottom-8 mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white/10"
      >
        <ChevronDown className="h-5 w-5" />
      </a>
    </section>
  );
}
