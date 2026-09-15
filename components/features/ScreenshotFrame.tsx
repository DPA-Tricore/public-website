"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface ScreenshotFrameProps {
  imageAlt: string;
  image?: string;
  video?: string;
  poster?: string;
  dark?: boolean;
}

export default function ScreenshotFrame({
  imageAlt,
  image,
  video,
  poster,
  dark,
}: ScreenshotFrameProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Autoplay would decode this while it's still far off screen, which stacks
  // on top of the hero's videos and makes scrolling stutter.
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.25 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [video]);

  return (
    <div
      className={`flex min-h-[220px] flex-1 flex-col overflow-hidden rounded-2xl border ${
        dark ? "border-white/10 bg-white/5" : "border-border bg-surface"
      }`}
    >
      <div
        className={`flex shrink-0 items-center gap-1.5 border-b px-4 py-3 ${
          dark ? "border-white/10" : "border-border"
        }`}
      >
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
      </div>
      <div
        className={`relative min-h-0 w-full flex-1 ${
          dark ? "bg-white/5" : "bg-white"
        }`}
      >
        {video ? (
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            preload="none"
            poster={poster}
            aria-label={imageAlt}
            className="absolute inset-0 h-full w-full object-contain"
          >
            <source src={video} type="video/mp4" />
          </video>
        ) : image ? (
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 640px) 1024px, 85vw"
            className="object-contain"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center p-4">
            <div
              className={`flex h-full w-full items-center justify-center rounded-lg border-2 border-dashed text-sm ${
                dark
                  ? "border-white/15 text-white/40"
                  : "border-border text-subtle-foreground"
              }`}
            >
              {imageAlt}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
