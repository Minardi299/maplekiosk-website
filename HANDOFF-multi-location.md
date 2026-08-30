# Handoff — multi-location layer for the MapleKiosk site

For the agent working in this repo. Date: 2026-08-30. Read `README.md` first — the content rules and launch checklist there still apply. The sales research behind this work lives in `~/mess-around/sale` (playbook skill + `prospects/prospect-list.md`, Tier 0 section).

## Why this work exists

The site speaks to one person who is owner, cashier, and manager at once. Minh now also targets multi-location groups (3–25 locations: Vua Sandwichs, Presotea Québec, Dic Ann's, Mandy's, Topla!). A group owner who visits this site today concludes "this is for tiny shops." The goal is a multi-location layer on top of the current site — not a rewrite. The mom-and-pop funnel stays as it is.

Competitor lessons that drive the specs below:

- MYR segments its funnel by business size and gives multi-location buyers KPI/reporting language.
- Tacit sells centralization ("one platform") and trust badges. We cannot copy its logos or stats. Our equivalent badges: WEB-SRM certification and a French-first UI.
- The whole category sells "one pane of glass for N stores." Centralization is the product at this tier.

## Facts you can rely on

- **WEB-SRM certification is obtained** (per Minh, 2026-08-29). The site may claim it. Bracket the certificate/SRS number: `[NUMÉRO]`.
- **The product is live in US locations** (salons, boba, restaurants; some multi-location). All counts and volumes are unknown to this repo — use bracketed placeholders.
- **The insights dashboard is PARTIAL.** Minh named: average ticket times, rush hours, most popular items. Which of these are live is unconfirmed. Write the copy, then add a launch-checklist item: "Confirm each insights metric is live in the product. Cut any that are not." Do not add metrics beyond those three.

## Hard rules (from the standing content rules — do not break)

1. No invented numbers, clients, or testimonials. Unknown facts stay bracketed `[LIKE THIS]`.
2. Never say we "handle" or "process" the customer's money. The core pitch is "we never touch your money, 0%." Traction is phrased as **orders through the software**: "[$X]M in orders placed through MapleKiosk."
3. Growth stats must be cumulative ("from [A] to [B] locations in [N] months"), never a monthly rate. Count **locations**, not clients.
4. US proof gets the Quebec frame: "Built in Montreal. Proven in [N] locations across the United States."
5. Criticize the nameless pricing model, never a brand. Square/Clover appear only next to published rates.
6. Design: no gradients, glassmorphism, glowing orbs, bento grids, floating containers, particles, blurs, fade-up-on-scroll clichés, pill buttons, grid backgrounds. Match the existing playful-but-plain style (bordered cards, mono tags, the ink-navy band).
7. All global CSS stays in `src/index.css`. Components use Tailwind utilities only.
8. Every string ships in all four packs: `src/lib/strings/en.ts` (defines the `Strings` type), `fr.ts`, `vi.ts`, `ru.ts` — same keys everywhere. French is Quebec French, vous form, matching the existing voice (« Gardez votre caisse »).
9. Links to the 3D demo (`SITE.demoUrl`) must carry `reloadDocument` (see README).
10. Few or no code comments.
11. Do not touch `navbar.tsx` link count — the xl breakpoint overflows easily (verified painfully at 1024–1280px). The new page gets its doors in the footer and on the homepage, not in the nav.

## Work items

### 1. `/groupes` page (new)

- Add `route("groupes", "pages/groups.tsx")` in `src/routes.ts`, add `"/groupes"` to `react-router.config.ts` pages, add a footer link (Product column, `footer.tsx`), add `meta.groups` strings.
- Audience: the owner of 3–25 locations. Voice stays the site's voice — plain, honest, playful — not corporate.
- Sections, top to bottom:
  1. **Hero.** Pain: what works at one counter breaks at five. Subline: one system, every location, and you keep your acquirer at every one of them.
  2. **The multiplication pains** (3–4 short blocks, same pattern as the router band cards): one menu change pushed to every store at once; one consolidated view of sales instead of N logins; the extra cashier at rush × N locations; opening a new location in days, not weeks.
  3. **Insights.** One paragraph tying the dashboard (see work item 4) to running stores you are not standing in.
  4. **Proof.** "Built in Montreal. Proven in [N] locations across the United States — [salons, boba shops, and restaurants]. [$X]M in orders placed through MapleKiosk. From [A] to [B] locations in [N] months." Plus the certification line (work item 3).
  5. **The design partner offer.** This replaces a logo wall we do not have. State the deal plainly: pilot 1–2 locations for 90 days, success metrics agreed before the start (kiosk share of orders, average ticket), a pre-agreed rollout price for the remaining locations if the pilot hits them, and if it does not, we leave. One design partner per segment.
  6. **CTA.** "Talk to the founder" — `mailto:` to `SITE.email` with a subject line, styled like the pricing page's contact link. NOT the 3D demo button; group buyers book a conversation.

### 2. Homepage groups band

- One slim strip between `RouterBand` and `MoneyDiagram` in `pages/home.tsx`: "Running more than one counter?" + one sentence + link to `/groupes`. Keep it under ~10 lines of JSX; it is a door, not a section.

### 3. Certification line

- Add a 6th chip to `chips.items` (component `terms-chips.tsx` numbers them automatically): EN "Certified by Revenu Québec (WEB-SRM)", FR « Système d'enregistrement des ventes certifié Revenu Québec (SRV-WEB) ». Verify the exact official French term against revenuquebec.ca before writing it — do not guess the acronym.
- Repeat the line in the `/groupes` proof section.

### 4. Insights section on `/restaurants`

- New section component, placed before `<DayTimeline />` in `pages/restaurants.tsx`.
- Layout: text column + one dashboard mock card, same pattern as the hero (text left, artifact right). The mock is obviously illustrative, like the hero's order ticket: a small bars-by-hour chart (plain divs or inline SVG, colored with the existing tokens), a top-3 items list, one big average-ticket-time number.
- Copy covers only: rush hours, most popular items, average ticket times. Angle: price the decisions, not the data — "schedule the second cashier for the hour that needs it," "cut the item nobody orders."
- Add the launch-checklist gate to README (see Facts above).

### 5. Calculator location multiplier

- `calculator.tsx`: add a locations input (stepper or slider, 1–20, default 1) after the ticket slider.
- Math: compute per-location exactly as today; total = per-location × N. When N > 1, show both: per-location fees and the total line ("across N locations"). The honest branch (Square recommendation) stays computed per location — the multiplier must never flip it.
- New string keys under `calc`: label for the input, a "per location" tag, a total-line template.

### 5b. Calculator chart (decided 2026-08-30)

The calculator gains a chart. NOT three bars that re-scale — a fee-vs-volume chart:

- x-axis: monthly card volume (the slider's $5k–$80k domain). y-axis: monthly fees.
- Square and Clover as lines. "Your own acquirer" as a flat translucent band (the area between the acqLow and acqHigh curves).
- The volume slider drives a vertical marker along the x-axis — moving it must NOT re-render the curves (cheap 60fps marker). Only the debit% and ticket sliders morph the curves; that morph is where the smooth transition belongs.
- The crossover where the Square line dips under the band stays visible at all times — it is the honesty rule drawn as geometry ("below this volume, Square wins").
- Stack: shadcn charts / Recharts (first chart dependency in the repo — pin it). shadcn area examples use gradient fills, which are BANNED here: flat translucent fills from the existing tokens (primary red for our band, ink/secondary for the competitor lines). Respect `prefers-reduced-motion` like every other animation in `index.css`.
- The numeric result rows, the savings line, and the honest/save branch all STAY. The chart argues; the numbers close.
- The calculator does not move to the hero. Decided against: the fee math only reads correctly after the money diagram's setup (otherwise MapleKiosk looks like a payment processor, which it is not), and the honest branch must not be a cold visitor's first touch. Optional instead: a one-line teaser band under the hero — "A 'free' POS doesn't exist. See what yours really costs ↓" — anchoring to `#calculateur`.
- At 390px the chart must stay legible (thin the lines, drop axis clutter) or collapse to the numeric rows only.

### 6. README updates

- Pages table: add `/groupes`. Page count in Commands becomes 36 (9 × 4).
- Launch checklist: add the insights-metrics gate, the proof-stat placeholders ([N] locations, [$X]M orders, growth window, certification number), and "get written permission from 2–3 US clients for reference calls before publishing traction stats."

## Verification (run all before claiming done)

1. `pnpm lint` — clean.
2. `pnpm build` — type-check + prerender must pass; confirm `build/client/groupes/index.html` and the `/fr`, `/vi`, `/ru` mirrors exist.
3. Playwright MCP is broken in this environment (no chrome at /opt/google/chrome). Use the CLI: `npx -y playwright@1.58 screenshot --viewport-size=1280,900 <url> out.png` against `pnpm preview` (port 4173). Screenshot: home (the new band), `/groupes`, `/restaurants` (insights section), each at 1280 and 390 wide, EN + FR at minimum.
4. Check the calculator: set locations to 5, confirm the total is 5× the per-location figure and the low-volume honest branch still recommends Square per location.
5. `grep -rn '\[' src/lib/strings/` — every bracket that remains must be an intentional placeholder listed in the README checklist.

## Design references (reviewed 2026-08-30: Coinbase CA, Wealthsimple, Shopify home + POS page)

Patterns to adopt where they fit the work items above:

- **"Built for Quebec" block** (Coinbase's "Built for Canada" pattern): a checkmark list of local proof — WEB-SRM certified by Revenu Québec, French-first interface, Interac debit in the calculator math, "we install it ourselves," built in Montreal. If this block is built (homepage and/or `/groupes`), it absorbs work item 3's certification line; keep the cert chip too only if it reads naturally.
- **Homepage groups band headline** (Shopify POS: "from first sale to full scale"): use the shape "From one counter to your whole group" — one line that invites the multi-unit owner without scaring the single owner.
- **Typographic 0%** (Wealthsimple's giant $0): in the money diagram, the "0%" can be the biggest number on the page. Small CSS-scale change, big argument.
- **Outcome stats over growth stats** (Shopify: "15% higher conversions", "99.9% uptime"): the placeholder list should prefer "[X]% larger average ticket on kiosk orders", "[UPTIME]% uptime", "[$X]M in orders" over client counts. Add these to the README stat-gathering checklist.
- **01/02/03 install strip** (Shopify's numbered onboarding): 01 we install it ourselves — 02 two weeks live in your shop — 03 keep it, or we unplug and you owe nothing. The copy exists in the hero wedge; the numbered strip makes it scannable. Optional; fits the home page or `/tarifs`.

Do NOT adopt: aspirational-scale voice ("global empire"), logo walls or user counts we cannot back, urgency gimmicks, animated rotating headlines.

## Already done (2026-08-30, do not redo)

- `/coffee` removed from the prerender list (the route was merged into `/restaurants` on purpose; the doors all pointing to `/restaurants` are intentional).
- README page table, merge note, and page count fixed.
- Open decision recorded in README item 8: `src/components/sections/line-cost.tsx` is orphaned since the merge — re-add it to `/restaurants` (it would pair well with the insights section, and could take the location multiplier too) or delete it. Ask Minh if unclear.
- Optional cleanup while in the string files: the stale `meta.coffee` key can go (update the `Strings` type usage in all four packs together).
