# Typography Guidelines

Why the landing page type looked amateur at first: a 48px headline at normal (1.5) line-height just reads as body text scaled up. Display type needs to be treated differently from body text — bigger, tighter, and narrower. These rules come from classic typographic practice (the same discipline behind Swiss/International Typographic Style — Müller-Brockmann's grid systems, Bringhurst's *Elements of Typographic Style*), adapted to Tailwind utility classes.

## The three rules

1. **Scale headings up, then tighten.** As text gets bigger, line-height and letter-spacing should get *tighter*, not stay proportional. A 72px headline needs `leading-[1.05]`–`leading-[1.1]` and `tracking-tight` — at that size, default leading (`1.5`) leaves huge gaps between lines and reads as unstyled.
2. **Constrain the measure.** Line length matters more than most other typographic choices. Body copy should sit at **45–75 characters per line** (66 is the classic optimum). Headlines get an even narrower column so they wrap into 2 balanced lines instead of running long on one line.
3. **Let headings wrap on their own terms.** Use Tailwind's `text-balance` (`text-wrap: balance`) on headlines and short intro paragraphs so the browser balances the line breaks instead of leaving an orphaned word on its own line.

## The scale

| Tier | Used for | Classes | Measure |
|---|---|---|---|
| Display (H1) | Hero headline | `text-6xl sm:text-7xl font-semibold leading-[1.05] tracking-tight text-balance` | `max-w-4xl` |
| H2 | Section headings (Features, How it Works, Pricing, CTA) | `text-4xl sm:text-5xl font-semibold leading-[1.1] tracking-tight text-balance` | `max-w-2xl` |
| H3 | Card / step / tier titles | `text-lg font-semibold tracking-tight` | — (card width) |
| Body-lg | Hero subhead, section intros | `text-xl leading-8 text-balance` | `max-w-xl` (~57 characters/line) |
| Body-sm | Card and step descriptions | `text-sm leading-6` | — (card width) |
| Caption | Meta text, footer links, fine print | `text-sm` / `text-xs` | — |
| Eyebrow | Small label above a headline | `text-sm font-medium` in a pill (see Hero) | — |

Large numeric display (e.g. pricing figures) follows the same rule as headings: `text-4xl font-semibold tracking-tight`.

## Applying it

- Every `<h2>` section heading uses the same H2 classes above — don't introduce a one-off size for a new section.
- Every section intro paragraph (the sentence under an H2) uses Body-lg, wrapped in its own `mx-auto max-w-xl` even when the parent container is wider — this is what keeps the measure narrow regardless of the outer grid width.
- Card and step body copy stays at Body-sm; it doesn't need Body-lg treatment because the card width itself already constrains the measure.
- Nav and footer text (logo, links) are UI chrome, not editorial content — they sit outside this scale and don't need `tracking-tight` or `text-balance`.
- When a heading or intro paragraph looks too tight or breaks awkwardly at a given viewport, adjust the `max-w-*` value before reaching for a different font size — measure is usually the actual problem.

## Reference implementation

See [`components/Hero.tsx`](../components/Hero.tsx) for the Display tier, and [`components/Features.tsx`](../components/Features.tsx), [`components/HowItWorks.tsx`](../components/HowItWorks.tsx), [`components/Pricing.tsx`](../components/Pricing.tsx), [`components/CTA.tsx`](../components/CTA.tsx) for the H2/Body-lg pattern applied consistently across sections.
