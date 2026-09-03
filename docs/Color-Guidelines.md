# Color Guidelines

Rules for color on this site.

## The rule

Never use a raw Tailwind color like `slate-600` or `indigo-500` in a component. Use one of the tokens below.

## The tokens

Defined once in `app/globals.css`, exposed to Tailwind through `@theme inline`.

| Token | Value | Class | Use for |
|---|---|---|---|
| `foreground` | `#0f172a` | `text-foreground` | Headings, primary text |
| `muted-foreground` | `#475569` | `text-muted-foreground` | Body copy, descriptions |
| `subtle-foreground` | `#94a3b8` | `text-subtle-foreground` | Fine print, disclaimers |
| `border` | `#e2e8f0` | `border-border` | Dividers, card borders |
| `surface` | `#f8fafc` | `bg-surface` | Alternate section backgrounds |
| `brand` | `#1d3557` | `bg-brand`, `text-brand` | Primary buttons, links, highlights |
| `brand-hover` | `#14263f` | `hover:bg-brand-hover` | Hover state for anything using `bg-brand` |
| `brand-subtle` | `#eef3f8` | `bg-brand-subtle` | Icon chips, badges |

Brand color is navy, not the usual SaaS indigo — it reads more like an insurance or finance brand.

## Text on a colored background

Don't add more brand shades just to get contrast on `bg-brand`. Use white with opacity instead:

- Secondary text: `text-white/80`
- Outline border: `border-white/30`
- Hover fill: `hover:bg-white/10`

## How to use it

- Pick a text token by role, not by matching the closest gray: is this the main point, a supporting detail, or an afterthought?
- Stick to one border color and one alt background. Don't add more without a real reason.
- Check this file before adding a new color anywhere on the site.

## Related documentation

- [Typography-Guidelines.md](./Typography-Guidelines.md)
