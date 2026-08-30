# MapleKiosk website

Marketing site for MapleKiosk — the Quebec redesign of maplekiosk.ca.
Repo: https://github.com/Minardi299/maplekiosk-website

## Stack

- React Router 7, SPA mode with prerender (same setup as aloha-website and culac)
- Tailwind CSS 4. All design tokens live in `src/index.css`. The colors are the default shadcn neutral palette; `--ink` is the dark band color, remapped to neutral near-black
- Recharts 3.8.0 (pinned) through the shadcn `chart` component, for the calculator fee chart
- Fonts: Bricolage Grotesque (headings), DM Sans (body), DM Mono (numbers)
- pnpm, pinned by the `packageManager` field in `package.json`
- Brand assets (`public/favicon.ico`, `public/MapleKiosk_rectangle.png`) come from maplekiosk.ca

## Pages

| Path | Job |
|---|---|
| `/` | The funnel: hero (problem) → industry router → money diagram → teach band → payments calculator → terms chips → final CTA |
| `/apps` | Product components, framed as answers for the already-interested owner |
| `/tarifs` | One price, buy-outright option, FAQ |
| `/restaurants` | Cafés, boba, restaurants & fast food in one page (merged on purpose — they use the same apps): counter pain, ticket vignettes, the day timeline |
| `/salons` | Nail salons, spas & beauty shops: the AI phone assistant (MapleSPA door, footer link only) |
| `/groupes` | Multi-location groups (3–25 locations): multiplication pains, insights, Quebec proof, the design-partner offer, mailto CTA (footer link + homepage band, not in the nav) |
| `/a-propos` | Founder trust page |
| `/confidentialite`, `/conditions` | Legal, imported verbatim from maplekiosk.ca (see below) |

Removed on purpose: `/calculateur` (the payments calculator lives on the home page), `/fonctionnalites` (renamed to `/apps`), `/demo` (the 3D demo replaced the booking form), and `/coffee` (merged into `/restaurants` — cafés and restaurants use the same apps). Old links hit the 404 page; no redirects.

`/shop-demo/index.html` is a standalone interactive 3D coffee-shop demo (static files in `public/shop-demo/`, imported from the Claude Design project "Interactive Coffee Shop Demo"). It is English-only, and loads React, three.js, and a Google font from CDNs at runtime — it needs internet. Its 22 GLB props are KayKit "Restaurant Bits" (CC0). To update it, re-import the `.dc.html` from the design project; for the salon variant, copy the folder and edit.

**Every "See how it works" button goes to this demo.** It is the site's one call to action. The demo is a static file outside the SPA, so links to it must carry react-router's `reloadDocument` prop — a plain `<Link>` is caught by the `*` route and renders the 404 page. The URL lives once, in `SITE.demoUrl` (`src/lib/site.ts`). The salon pages point at the coffee-shop demo until a salon variant exists.

## The day timeline

`src/components/sections/day-timeline.tsx` (strings under `day`) merges what used to be two sections: the feature grid and the morning timeline. Each beat carries a time, a named moment, the stakes, and the feature tags that answer it — so the section reads as a story top to bottom and scans as a feature list down the tag column.

Rules for editing it:

- Every beat states what goes wrong before it states what handles it. A beat with no stakes is a spec line, not a story beat.
- Only tag features that exist. Features with no natural time of day (register integration, hosting) go in the `also` strip, not forced onto the clock.
- It closes on a need-payoff question, not a statement. The question is the setup for the CTA below it.

The `/apps` grid stays as it is — it serves the reader who is checking a list, not the one being persuaded.

## Content rules

The sales research in `~/mess-around/sale` (SPIN selling, the landing handoff) drives the copy. The short version:

- Problem first, product second. Each page states the owner's pain before it shows a feature.
- The calculators price the owner's own problem, and each one must be able to say "don't buy" (at low volume the payments calculator recommends Square).
- Never promise a POS replacement. The wedge is "keep your register, add the kiosk."
- The AI phone assistant (life-like voice; answers inquiries, takes bookings) is a real feature — claim it for restaurants and salons. Say "assistant" in headlines and disclose the automation. Forecasting, inventory, and coursing are not built — do not claim them.
- No invented numbers, testimonials, or customer names. Unknown facts stay bracketed: [LIKE THIS].
- Brand names (Square, Clover) appear only next to published rates. Criticize the nameless pricing model, never a brand.
- When porting content from maplekiosk.ca, take structure and translations only — rewrite to this site's voice and positioning.

## Languages

English is the default, at `/`. Mirrors are at `/fr`, `/vi`, and `/ru`.
All copy lives in `src/lib/strings/en.ts`, `fr.ts`, `vi.ts`, `ru.ts`.
`en.ts` defines the shape. The other files must keep the same keys, so every string change touches all four files.

## Commands

- `pnpm dev` — dev server
- `pnpm build` — type-check, build, prerender all 36 pages (9 pages × 4 languages)
- `pnpm lint` — oxlint
- `pnpm preview` — serve the build on port 4173

## CI, packages, and releases

Same workflow setup as aloha-website and culac:

- `ci.yml` — lint + build on every push and PR; uploads `build/client` as the `static-site` artifact.
- `release.yml` — every push to main refreshes the rolling `latest` release with `maplekiosk-website-latest.zip` (the static build). A `v*` tag (or manual dispatch) creates a versioned release.
- `docker.yml` — builds the nginx image (`Dockerfile` + `docker/nginx.conf`) and pushes `ghcr.io/minardi299/maplekiosk-website` tagged `latest` + commit SHA, with semver tags on `v*`.

## Before launch

1. Replace every bracketed placeholder: [TÉLÉPHONE], [COURRIEL], [BUSINESS NAME — BROSSARD], [PHOTO], [SCREENSHOT], the salons call recording. Search the string files for `[`. Pricing is now real, imported from maplekiosk.ca: MapleCoffee $39, MapleRES $49, MapleSPA $44 — USD, per app, monthly SaaS.
2. Set real contact info in `src/lib/site.ts`. The only contact link left is "Contact us" on `/tarifs`, a `mailto:` to `SITE.email`. The footer also shows `SITE.phone` and `SITE.email`. Both are still `[COURRIEL]` and `[TÉLÉPHONE]`.
3. Legal: `/conditions` (EULA) and `/confidentialite` (privacy policy) are imported verbatim from maplekiosk.ca, dated July 22, 2026, in `src/lib/legal.ts`. Flags for a lawyer: New York governing law for a Quebec market, no mention of Quebec's Law 25, English-only text (Bill 96 expects French-first), and the original's own "[Mailing address and phone number to be added]" bracket.
4. English is the default language on request. Confirm this against Bill 96 advice before launch — the handoff's original rule was French first.
5. The Bricolage/DM fonts have no Cyrillic subset. Russian pages fall back to the system font. Vietnamese body text uses Be Vietnam Pro.
6. `/salons` is built out and linked from the footer Industries column. The handoff still requires a Law 25 review of call handling and a real 30-second call recording before this page goes live.
7. hreflang alternate links point to `https://maplekiosk.ca`. Update `SITE.url` in `src/lib/site.ts` if the domain changes.
8. The line-cost calculator (`src/components/sections/line-cost.tsx`) lost its page in the `/coffee` merge and is now used nowhere. Re-add it to `/restaurants` or delete the file. It also has no "don't buy" threshold yet; prices are known now ($39–49/mo).
9. Insights gate: confirm that each insights metric is live in the product (rush hours, most popular items, average ticket times). Cut the copy for each metric that is not live. The metrics appear on `/restaurants` (insights section) and `/groupes`.
10. Replace the proof-stat placeholders on `/groupes` and in the string files: [N] US locations, [$X]M in orders through the software, the growth window (from [A] to [B] locations in [N] months), and the WEB-SRM certificate number [NUMÉRO]. Growth stats stay cumulative, and count locations, not clients. Prefer outcome stats when real numbers exist: [X]% larger average ticket on kiosk orders, [UPTIME]% uptime, [$X]M in orders.
11. Get written permission from 2–3 US clients for reference calls before you publish traction stats.

## Deploy

- `wrangler.jsonc` is set up for Cloudflare (`maplekiosk-website`), serving `build/client`.
- Or use the release zip / the ghcr.io nginx image — both contain the same static build.
