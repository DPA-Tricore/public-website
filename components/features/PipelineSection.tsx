import {
  PIPELINE_HEADLINE,
  PIPELINE_CAROUSEL_ITEMS,
} from "@/lib/constants/landing";
import FeatureCarousel from "./FeatureCarousel";

export default function PipelineSection() {
  return (
    <div className="snap-start flex min-h-[100svh] min-h-[100dvh] flex-col justify-center border-t border-border bg-white py-10 text-foreground sm:py-12">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="max-w-xl text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
          {PIPELINE_HEADLINE}
        </h2>
      </div>

      <div className="mt-8">
        <FeatureCarousel items={PIPELINE_CAROUSEL_ITEMS} />
      </div>
    </div>
  );
}
