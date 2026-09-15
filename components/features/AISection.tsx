import { AI_SECTION } from "@/lib/constants/landing";
import ScreenshotFrame from "./ScreenshotFrame";

export default function AISection() {
  const { headline, description, imageAlt, image, points } = AI_SECTION;

  return (
    <div className="snap-start flex min-h-[100svh] min-h-[100dvh] flex-col border-t border-white/10 bg-brand text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-6 py-10 sm:py-12">
        <div className="max-w-xl shrink-0">
          <h2 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            {headline}
          </h2>
          <p className="mt-4 max-w-lg text-balance text-xl leading-8 text-white/70">
            {description}
          </p>
        </div>

        <ScreenshotFrame imageAlt={imageAlt} image={image} dark />

        <div className="grid shrink-0 grid-cols-1 gap-8 sm:grid-cols-3">
          {points.map((point) => (
            <div key={point.title} className="border-t border-white/20 pt-4">
              <h3 className="font-semibold tracking-tight">{point.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-white/60">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
