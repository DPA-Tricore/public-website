"use client";

import type { FeatureCarouselItem } from "@/lib/types/landing";
import { STAGGER, revealClass, useReveal } from "@/lib/useReveal";
import ScreenshotFrame from "./ScreenshotFrame";

interface FeatureCarouselProps {
  items: FeatureCarouselItem[];
  dark?: boolean;
}

export default function FeatureCarousel({ items, dark }: FeatureCarouselProps) {
  const { ref, revealed } = useReveal<HTMLDivElement>(0.4);

  return (
    <div
      ref={ref}
      className="flex snap-x snap-mandatory gap-6 overflow-x-auto overflow-y-hidden overscroll-x-contain pb-2 pl-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] pr-6 scroll-pl-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]"
    >
      {items.map((item, i) => (
        <div
          key={item.title}
          className={`flex shrink-0 snap-start flex-col ${revealClass(
            revealed,
            STAGGER[i % STAGGER.length],
          )}`}
        >
          <div className="flex aspect-[16/10] w-[85vw] sm:h-[clamp(320px,64vh,880px)] sm:w-auto">
            <ScreenshotFrame
              imageAlt={item.imageAlt}
              image={item.image}
              video={item.video}
              poster={item.poster}
              dark={dark}
            />
          </div>
          <div className="mt-4 w-0 min-w-full shrink-0">
            <h3 className="font-semibold tracking-tight">{item.title}</h3>
            <p
              className={`mt-1.5 text-sm leading-6 ${
                dark ? "text-white/60" : "text-muted-foreground"
              }`}
            >
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
