# Color Guidelines

Before this pass, color was picked ad hoc per component: `indigo-600`/`indigo-700` scattered around for anything brand-colored, and five different slate shades (900/600/500/400/300) used interchangeably for text and borders of similar weight. That inconsistency is what made the page feel like a template. The fix is the same discipline as [Typography-Guidelines.md](./Typography-Guidelines.md): a small set of semantic tokens, reused everywhere, instead of choosing a shade case-by-case.

## Why navy instead of indigo

`indigo-600` is probably the single most common accent color in SaaS right now — it reads as "generic AI startup template," not "insurance/financial trust." DPA is a CRM built specifically for insurance brokers, so the brand color moved to a deep navy (`#1d3557`), which is closer to how real insurance and financial brands read: stable, established, low-saturation.

## The tokens

Defined once in [`app/globals.css`](../app/globals.css) as CSS custom properties, exposed to Tailwind via `@theme inline` so every component uses a utility class (`bg-brand`, `text-muted-foreground`, etc.) instead of a raw color value.

| Token | Value | Tailwind classes | Used for |
|---|---|---|---|
| `background` | `#ffffff` | `bg-background` | Page background |
| `foreground` | `#0f172a` | `text-foreground` | Headings, primary text, logo |
| `muted-foreground` | `#475569` | `text-muted-foreground` | Body copy, descriptions, secondary links |
| `subtle-foreground` | `#94a3b8` | `text-subtle-foreground` | Fine print, meta text, copyright, disclaimers |
| `border` | `#e2e8f0` | `border-border` | Dividers, card borders, outline buttons |
| `surface` | `#f8fafc` | `bg-surface` | Alternating section backgrounds, subtle hovers |
| `brand` | `#1d3557` | `bg-brand`, `text-brand`, `border-brand`, `ring-brand` | Primary buttons, links/icons that need emphasis, highlighted pricing tier |
| `brand-hover` | `#14263f` | `hover:bg-brand-hover` | Hover state for anything using `bg-brand` |
| `brand-subtle` | `#eef3f8` | `bg-brand-subtle` | Icon chip backgrounds, badge/eyebrow backgrounds |

Three text roles, not five: **foreground** (full emphasis), **muted-foreground** (secondary/body), **subtle-foreground** (least emphasis). Before reaching for a new gray, use one of these three.

## On a colored surface (e.g. the CTA banner)

Don't add more brand shades (`brand-100`, `brand-300`, etc.) just to get contrast on top of `bg-brand`. Use opacity modifiers on white instead — it's one token doing more work:
- Secondary text on brand background: `text-white/80`
- Outline button border on brand background: `border-white/30`
- Ghost hover on brand background: `hover:bg-white/10`

## Applying it

- Never use a raw Tailwind color class (`slate-600`, `indigo-500`, etc.) directly in a component — always go through a token.
- If an existing gray doesn't cleanly map to one of the three text roles, pick based on function, not the closest hex: is this the main point (foreground), supporting detail (muted-foreground), or an afterthought (subtle-foreground)?
- `border-slate-200` and `border-slate-300` both collapsed into the single `border` token — one border weight everywhere is more consistent than picking a shade per element.
- Check this file before introducing a new color anywhere on the site.
