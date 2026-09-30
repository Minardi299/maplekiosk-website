# MapleKiosk site redesign — implementation plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the approved "drawing set" redesign on every page, with isometric models, interactive plans, a flat `/demo` and the `/booking` page.

**Architecture:** Python generators in `tools/iso/` export language-neutral SVG (static figures to `public/iso/`, interactive scenes to `src/components/iso/scenes/*.ts`). React components read the scene data and draw HTML markers and labels from the string files. Design tokens live in `src/index.css`; shared primitives live in `src/components/ui-kit.tsx`.

**Tech Stack:** React Router 7 (SPA + prerender), Tailwind 4, TypeScript, Python 3 (generators only), Playwright (screenshots only).

**Spec:** `docs/superpowers/specs/2026-09-28-site-redesign-design.md`

## Global Constraints

- Colors: only cream `#faf7f2`, sand `#f3ede4`, line `#e8e1d7`, ink `#1d1a17`, muted `#6b645c`, red `#c0392b`, red-2 `#a8291b`, amber `#e07b4a`, white.
- Never: gradients, gradient text, glows, glass, bento grids, feature cards, rounded floating containers, particles, heavy blur, fade-up reveals, pill buttons, decorative grid backgrounds.
- Buttons: 6px radius. Markers: 28px circles.
- Every string in all four files `src/lib/strings/{en,fr,vi,ru}.ts`, same keys.
- Every "0%" gets an asterisk and `zeroNote`. No invented facts; unknowns stay `[BRACKETED]`.
- No commits unless the user asks.
- Code comments: default none; one-line only for facts the code cannot show.

## Review Focus

- Phone width (390px): board, plans, demo and tables must not scroll sideways; the plan's detail column stacks under the drawing.
- Keyboard: markers, board chips, demo buttons reachable by Tab, visible focus, plans respond to ← → Esc 1–9 only while focused.
- Long translations (Russian, Vietnamese) in chips, markers' detail titles, demo buttons: wrap, never clip.
- Prerender: every page renders without `window` access at module load (SPA prerender runs the render once on the server).
- Reduced motion: tile drop, money flow and crossfades degrade to instant or opacity-only.

---

### Task 1: Housekeeping and routes

**Files:** `.gitignore`, `src/routes.ts`, `react-router.config.ts`, `src/lib/site.ts`, `src/pages/assistant.tsx` → `src/pages/booking.tsx`, `src/pages/demo.tsx` (new, placeholder body), delete `public/shop-demo/`.

- [x] Add `.superpowers/` to `.gitignore`.
- [x] Rename the route `assistant` → `booking`, add `demo`; update the prerender list.
- [x] `SITE.demoUrl = "/demo"`, add `SITE.assistantPhone = "[ASSISTANT PHONE]"`; remove every `reloadDocument`.
- [x] Rename string keys `meta.assistant` → `meta.booking`, `assistant` → `booking` in all four files; nav menu `to: "/booking"`.
- [x] Check: `pnpm build` passes; `build/client/booking/index.html` and `build/client/demo/index.html` exist.

### Task 2: Tokens and primitives

**Files:** `src/index.css`, `src/components/ui/button.tsx`, `src/components/cta-link.tsx`, `src/components/ui-kit.tsx` (new).

**Produces:** `Kicker({ children, muted? })`, `SectionHead({ kicker, kickerMuted?, title, sub?, className? })`, `TitleBlock({ cells })`, `ArrowLink({ to, children })`, `headingClass`, `pad2(n)`; CtaLink variants `primary | ink | line | inverted`, size `md | lg`.

- [x] Replace the `:root` tokens with the palette; add `--amber`, `--primary-hover`; radius 6px.
- [x] Remove CSS for removed reveals (`money-flow`, `kds-rail` slide-ins, `flow-arrows`).
- [x] Build the primitives.
- [x] Check: `pnpm build`; screenshot `/` shows the new colors.

### Task 3: Isometric pipeline

**Files:** `tools/iso/iso_lib.py`, `tools/iso/models.py`, `tools/iso/scenes.py` (new), `tools/iso/export.py` (new), `public/iso/*.svg`, `src/components/iso/scenes/{board,restaurant,salon}.ts`, `src/components/iso/iso-figure.tsx`, `src/components/iso/iso-plan.tsx`, `src/components/iso/module-board.tsx`.

**Produces:**
- Scene module shape: `{ viewBox: string; svg: string; markers: { id: number; x: number; y: number }[]; labels: { key: string; x: number; y: number }[] }` (x, y in percent).
- `IsoFigure({ name, className })` → `<img src="/iso/{name}.svg" alt="">`.
- `IsoPlan({ scene, modules, strings })` where `modules: { id: number; name: string; where: string; body: string; screen: ReactNode }[]`.
- `ModuleBoard()` for the home hero.

- [x] Detailed models for every object (spec list), same detail level as the approved three.
- [x] Scenes: board (3×3 with POS), restaurant (9 markers), salon (8 markers); labels as anchors only.
- [x] `python3 tools/iso/export.py` writes all outputs; running it twice gives identical files.
- [x] Highlight CSS: `.iso-plan[data-active="n"] .o{n}` for n = 1…12; board `[data-on~=id] [data-tile=id]`.
- [x] Check: screenshot of each scene; marker positions sit on their objects.

### Task 4: Nav and footer

**Files:** `src/components/sections/navbar.tsx`, `src/components/sections/footer.tsx`, strings (footer industries heading).

- [x] Nav per spec, mobile menu kept (sheet-style panel under the bar, no floating rounded box).
- [x] Footer per spec.
- [x] Check: 1440px and 390px screenshots; Apps menu and language menu open and close with Esc.

### Task 5: Home

**Files:** `src/pages/home.tsx`, `src/components/sections/{hero,modules,services,money-diagram,teach-band,calculator,fee-chart,terms-chips,final-cta}.tsx` (the Recharts fee chart stays, restyled), strings.

- [x] Sections per spec, matching `landing-v1.html`.
- [x] Calculator keeps `src/lib/fees.ts` math and the honest message.
- [x] Check: board toggles, calculator reacts, `pnpm build`, screenshots 1440 / 390.

### Task 6: `/restaurants`

**Files:** `src/pages/restaurants.tsx`, `src/components/sections/{insights,day-timeline}.tsx`, `src/components/plan-screens/restaurant.tsx` (new, the nine mini screens), strings `restaurants.plan`.

- [x] Hero + plan + groups band + story rows + insights + timeline + final CTA.
- [x] Check: click and keyboard on the plan; 390px layout.

### Task 7: `/salons`

**Files:** `src/pages/salons.tsx`, `src/components/plan-screens/salon.tsx` (new), strings `salons.plan`.

- [x] Hero + salon plan + scenes + recording + disclosure + CTA.
- [x] Check as Task 6.

### Task 8: `/booking`

**Files:** `src/pages/booking.tsx`, `src/components/call-button.tsx` (new), strings `booking`.

- [x] Sections per spec; bracket unknown facts.
- [x] Check: placeholder number renders as text, a digits-only number renders a `tel:` link.

### Task 9: `/demo`

**Files:** `src/pages/demo.tsx`, `src/components/demo/{cafe,salon,state}.ts(x)`, strings `demo`.

- [x] Café flow: order → charge → ticket → bump → ready; 86 → TV and kiosk; customer → stamps.
- [x] Salon flow: play call → booking in calendar; checkout with tip → payroll row.
- [x] Event log; mode switch; screens stack in one column under 1024px.
- [x] Check: both flows by mouse and keyboard; `pnpm build`.

### Task 10: Remaining pages

**Files:** `src/pages/{features,pricing,groups,about,privacy,terms,not-found}.tsx`, `src/components/placeholder.tsx`.

- [x] Restyle per spec with the primitives; remove card grids.
- [x] Check: screenshots.

### Task 11: Translations

**Files:** `src/lib/strings/{fr,vi,ru}.ts`.

- [x] Translate every new key; keep brand names, numbers and brackets.
- [x] Check: `pnpm build` (types enforce the shape); screenshots of `/fr/demo`, `/vi/restaurants`, `/ru/booking` for overflow.

### Task 12: Docs and final checks

**Files:** `README.md`, memory notes.

- [x] README: pages table, demo section, isometric pipeline, palette.
- [x] `pnpm lint`, `pnpm build`, full screenshot pass.
