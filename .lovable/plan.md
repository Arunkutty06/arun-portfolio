## Portfolio Build Plan

A single-page React + Tailwind portfolio matching the Figma/screenshot, dark-mode only, mobile responsive, with an orbiting logo hero.

### Sections (top → bottom)
1. **Sticky nav** — centered pill containing: About · What I do · Things worth sharing · Contact · `Download Resume` button. Mobile: hamburger → slide-down menu.
2. **Hero** — circular orbit of ~15 tech/brand logos (Figma, Framer, OpenAI, Webflow, Midjourney, Jira, Adobe XD, Pinterest, HTML5, CSS3, Notion, Unsplash, Cursor, etc.) surrounding centered text:
   - H1 "Human insights. Product results."
   - Subtext "Cross-functional collaboration: clear design systems. Rapid research, iterative testing, stakeholder alignment."
   - "Get in touch →" pill button
3. **About me** — two-column: paragraph (left) + portrait photo (right). Stacks on mobile.
4. **What I do** — 2×3 grid of services with numbered labels (01–06): Product design, Design systems, Interface direction, Web design, Brand identity, Advisory & audits. Single column on mobile.
5. **CTA strip** — "Have a thoughts in mind? Let's talk." + Get in touch button.
6. **Things worth sharing** — case study cards (image left, title + description right). Stacks on mobile.
7. **Footer** — "LET'S WORK TOGETHER" eyebrow + huge underlined email `arunrajaram6@gmail.com`, credit line, social links (LinkedIn, Behance, Dribbble).

### Orbit animation
- Container is a `relative` square. Logos absolutely positioned on a circle via trig (`cos/sin` of evenly distributed angles).
- Outer wrapper spins with `animation: spin 60s linear infinite`.
- Each logo counter-rotates with same duration reverse, so icons stay upright.
- `group hover:[animation-play-state:paused]` on outer + inner to pause on hover.
- Radius scales down on mobile; center text stays fixed inside the orbit.

### Tech & styling
- Stack: existing TanStack Start + Tailwind v4. All routes already supported; single `/` route file.
- Colors via `@theme` tokens in `src/styles.css`: `--background: #1b1b1b`, `--foreground: #ededed`, muted `#9a9a9a`, border `#2a2a2a`, accent white.
- Typography: serif display (Instrument Serif) for big headings ("About me", "What I do", email); sans (Inter) for body. Loaded via `<link>` in `__root.tsx`.
- Scroll fade-ins: small `useInView` hook applying `opacity-0 translate-y-4` → `opacity-100 translate-y-0` with `transition-all duration-700`. Reused across sections.
- Logos: inline SVG icons from `simple-icons` style paths (no Figma localhost URLs); fallback to react-icons (`react-icons/si`) which is already friendly to install.
- Portrait + case-study images: placeholders generated via `imagegen` (dark-suit portrait, red F1 race car on stage, F1 model car / Japan tee) saved to `src/assets/`.

### Files
- `src/routes/__root.tsx` — add font `<link>` tags, meta.
- `src/routes/index.tsx` — assemble sections, set `head()` meta.
- `src/components/Nav.tsx` — sticky nav + mobile menu.
- `src/components/Hero.tsx` — orbit + center copy.
- `src/components/OrbitLogos.tsx` — circular logo ring with counter-rotation.
- `src/components/About.tsx`, `WhatIDo.tsx`, `CtaStrip.tsx`, `ThingsWorthSharing.tsx`, `Footer.tsx`.
- `src/hooks/use-in-view.ts` — IntersectionObserver-based reveal hook.
- `src/styles.css` — theme tokens, `@keyframes spin-slow` / `spin-reverse`, utility for paused hover.
- `src/assets/` — generated portrait + 2 case study images.

### Out of scope
- No light mode toggle.
- No backend / form submission (Contact links open `mailto:`).
- Resume button links to `#` placeholder until a PDF is provided.
