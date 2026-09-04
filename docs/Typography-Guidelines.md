# Typography Guidelines

Rules for text sizing on this site.

## The rules

1. Bigger text needs tighter line spacing and letter spacing — don't scale them up along with the font size.
2. Keep line length between 45 and 75 characters. Headlines get the narrow end, body text the wide end.
3. Use `text-balance` on headlines and short intros so lines break evenly instead of leaving one word dangling.

## The scale

| Tier | Use for | Classes |
|---|---|---|
| Display | Hero headline | `text-6xl sm:text-7xl font-semibold leading-[1.05] tracking-tight text-balance`, `max-w-4xl` |
| H2 | Section headings | `text-4xl sm:text-5xl font-semibold leading-[1.1] tracking-tight text-balance`, `max-w-2xl` |
| H3 | Card, step, and pricing tier titles | `text-lg font-semibold tracking-tight` |
| Body-lg | Subheads and section intros | `text-xl leading-8 text-balance`, `max-w-xl` |
| Body-sm | Card and step descriptions | `text-sm leading-6` |
| Caption | Fine print, footer links, meta text | `text-sm` or `text-xs` |

Big numbers (like pricing) follow the heading rule: `text-4xl font-semibold tracking-tight`.

## Nav height

The navbar isn't sized in isolation — it has to carry the same visual weight as the page it sits on. Three constraints, in order:

1. Touch targets need to be at least 44px tall (Apple HIG) or 48px (Material) — the floor for anything interactive.
2. Height should land on an 8px grid stop (56 / 64 / 72 / 80px), not an arbitrary value.
3. It should feel like it belongs to the rest of the page. A page with a bold 72px display headline needs a taller, bigger-type nav than a page with small body-sized text — otherwise the nav reads as a thin strip bolted onto a bolder page.

Current: `h-20` (80px) bar, `text-xl` logo, `px-5 py-2.5` primary button. If the type scale above changes significantly, revisit this.

## How to use it

- Reuse a tier from the table. Don't invent a new size for a new section.
- Give every section intro its own `max-w-xl`, even inside a wider container — that's what keeps the line short.
- Card and step text stays at Body-sm. The card width already keeps lines short enough.
- Nav and footer text are UI, not content — skip `tracking-tight` and `text-balance` there.
- If a heading wraps awkwardly, adjust `max-w-*` before you touch the font size.

## Related documentation

- [Color-Guidelines.md](./Color-Guidelines.md)
