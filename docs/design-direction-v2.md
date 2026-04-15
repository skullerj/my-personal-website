# Design Direction V2: Systems/Dashboard Aesthetic

> "I Build Products" — a portfolio that looks like a product, not a personal website.

## Concept

Rebuild the portfolio to look less like a personal website and more like a product — a dashboard, a design system, an internal tool. The visual language communicates "I build products" rather than "I build pages." This maps directly to the Squad Lead + AI/data products identity and sets the site apart from every other two-column resume portfolio.

The design language references Linear, Raycast, and Vercel's own dashboard — tools that colleagues and collaborators use daily.

---

## Layout

**12-column CSS Grid (Bento Layout)**

Deliberate asymmetric grid where card sizes communicate importance — not a uniform tile wall.

```
grid-template-columns: repeat(12, 1fr)
grid-template-rows: auto
```

| Card | Column Span | Notes |
|---|---|---|
| Intro / About | 8 cols | Primary card, most important |
| Currently Building | 4 cols | Secondary, right of intro |
| Experience entries | 6 cols each | Two per row |
| Skills module | 12 cols | Full width |
| Contact / Footer | 12 cols | Full width |

Add a "What I'm thinking about" card linking to writing on RAG, data pipelines, or LLM tooling.

---

## Color Palette

**Dark mode first.**

| Role | Value | Usage |
|---|---|---|
| Background | `#0A0F1C` | Near-black navy base |
| Surface | `bg-white/5` | Card backgrounds |
| Border | `border-white/10` | Card borders |
| Accent | `#10B981` (emerald) ✓ | Active/current states, open-to-work tag, active projects only |
| Text primary | `#F1F5F9` | Headings, important labels |
| Text secondary | `#94A3B8` | Body, descriptions |
| Monospace labels | `#64748B` | Dates, metadata, tags |

One accent color. No secondary accents, no gradient pops. Confirmed: emerald `#10B981`.

---

## Typography

| Element | Font | Weight | Size |
|---|---|---|---|
| Section headers | Geist Sans or Space Grotesk | 700 | `text-2xl` |
| Body / descriptions | Geist Sans | 400 | `text-sm` / `text-base` |
| Dates, labels, metadata | Geist Mono or JetBrains Mono | 400 | `text-xs` |
| Technology names in experience | Geist Mono | 400 | `text-xs` |
| Card titles | Geist Sans | 600 | `text-lg` |

**Rule:** Monospace is used semantically — only for data fields (dates, durations, tech stack labels, version-like strings). Not for body text, not for decoration.

---

## Background Texture

A nearly invisible dot-grid pattern as the page background. Zero performance cost — pure CSS.

```css
background-image: radial-gradient(circle, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
background-size: 24px 24px;
```

This replaces the mountain hero image. Signals data/systems/coordinates domain without any decorative clichés (no circuit boards, no neural networks, no binary code).

---

## Glassmorphism (Refined)

Current glassmorphism reads as 2022. Lighten it:

| Property | Current (approximate) | Target |
|---|---|---|
| `backdrop-blur` | `backdrop-blur-md` or higher | `backdrop-blur-sm` (4px) |
| Card background | `bg-white/10` or higher | `bg-white/5` |
| Border | `border-white/20` | `border-white/10` |

Effect: still present, but subtle — reads as 2025, not a glassmorphism tutorial.

---

## Ambient Data Modules

Small semi-live or static data elements that make the page feel like it has state:

- **GitHub contribution heatmap strip** — small SVG strip in the footer or sidebar, rendered via GitHub's public contribution API
- **"Last deployed" timestamp** — displayed in footer in `font-mono`, muted color
- **"What I'm building" card** — short text module, manually updated, describes current active project or focus
- **"What I'm thinking about"** — links to recent writing on RAG, data pipelines, LLM tooling; signals genuine domain depth

These should be visually de-emphasized (small, muted) but present. They communicate "this is a maintained system, not a static brochure."

---

## Key Interactions

- Subtle `scale(1.02)` lift on bento cards on hover, using `will-change: transform`
- GSAP `ScrollTrigger` stagger-fade on card entry: `gsap.from('.bento-card', { y: 16, opacity: 0, stagger: 0.08 })`
- Emerald accent `#10B981` pulses or glows on the "currently active" tag (CSS `@keyframes` pulse, no JS)
- No cursor overrides, no autoplay audio, no terminal gimmicks

---

## What to Replace / Remove

| Current element | Replace with |
|---|---|
| Mountain hero image | Dot-grid CSS background |
| Two-column layout | 12-column bento grid |
| Heavy glassmorphism cards | Lighter `bg-white/5` + `backdrop-blur-sm` cards |
| Icon grid / skill badges | Skills module as small SVG node graph or simple labeled list |
| Skill bar percentages (if any) | Remove entirely — replace with prose in "What I'm building" card |
| Multiple accent colors | Single emerald `#10B981` |

---

## Implementation Order (Suggested)

1. **CSS variables + background** — Set palette, add dot-grid background. One hour.
2. **Bento grid layout** — Rebuild homepage as 12-col CSS Grid, rough card placement. Half day.
3. **Card component** — Single `BentoCard.astro` with size prop (`sm`, `md`, `lg`, `full`). Two hours.
4. **Typography update** — Apply Geist Sans + Geist Mono, set monospace semantic rule. One hour.
5. **Glassmorphism refinement** — Reduce blur and opacity on all card surfaces. Thirty minutes.
6. **Ambient data modules** — Add "last deployed" footer timestamp, "what I'm building" card. Two hours.
7. **GSAP scroll entry animations** — Wire `ScrollTrigger` stagger to `.bento-card` elements. One hour.
8. **Polish** — Hover states, accent usage audit, mobile breakpoints. Half day.

---

## Reference Sites

- [bentogrids.com](https://bentogrids.com) — Layout pattern examples
- [brittanychiang.com](https://brittanychiang.com) — Quality bar for senior dev portfolios, dark navy + careful information hierarchy
- [linear.app](https://linear.app) — Dashboard visual language reference
- [vercel.com/design](https://vercel.com/design) — Geist type system and dashboard component aesthetics
- [Joffrey Spitzer via Codrops](https://tympanus.net/codrops/2026/02/18/joffrey-spitzer-portfolio-a-minimalist-astro-gsap-build-with-reveals-flip-transitions-and-subtle-motion/) — Direct Astro + GSAP technique reference
