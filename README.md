# MapleKiosk website

Marketing site for MapleKiosk — the Quebec redesign of maplekiosk.ca.
Repo: https://github.com/Minardi299/maplekiosk-website

## Stack

- React Router 7, SPA mode with prerender (same setup as aloha-website and culac)
- Tailwind CSS 4. All design tokens live in `src/index.css`. The palette is the maplekiosk.ca palette: cream `#faf7f2`, sand `#f3ede4`, line `#e8e1d7`, ink `#1d1a17`, muted `#6b645c`, maple red `#c0392b` (hover `#a8291b`), amber `#e07b4a`
- Recharts 3.8.0 (pinned) through the shadcn `chart` component, for the calculator fee chart
- Fonts: Bricolage Grotesque (headings), DM Sans (body), DM Mono (labels and numbers), Caveat (the reservation-pad handwriting only)
- pnpm, pinned by the `packageManager` field in `package.json`
- Brand assets (`public/favicon.ico`, `public/MapleKiosk_rectangle.png`) come from maplekiosk.ca

## Design language

The site reads like a set of technical drawings of a shop: panels with an ink border, numbered red markers, ruled rows, and isometric line-art models. The spec is `docs/superpowers/specs/2026-09-28-site-redesign-design.md`.

Do not use gradients, gradient text, glows, glass, bento grids, feature cards, rounded floating boxes, particles, heavy blur, fade-up reveals, pill buttons, or decorative grid backgrounds. Motion must carry meaning (a tile drops into its slot, a money line flows, a selected module turns red) and needs a `prefers-reduced-motion` fallback.

Keep copy short. No eyebrows or small labels above headings, no explanatory lines under headings, no decorative captions, no drawing head rows or title blocks.

Shared pieces: `src/components/ui-kit.tsx` (section heading, arrow link) and `src/components/cta-link.tsx` (button variants `primary`, `ink`, `line`, `inverted`).

## Isometric drawings

The drawings are generated. Do not edit the SVG output by hand.

- `tools/iso/iso_lib.py`: projection, boxes, cylinders, decals on faces, draw order
- `tools/iso/models.py`: every object (kiosk, kitchen screen, register, furniture, salon stations, and more)
- `tools/iso/scenes.py`: the home board, the restaurant plan, the salon plan, and the list of static figures
- `tools/iso/export.py`: writes `public/iso/<name>.svg` (static figures, used with `IsoFigure`) and `src/components/iso/scenes/*.ts` (interactive scenes: SVG plus marker and label positions in percent)

After you change a model or a scene, run `python3 tools/iso/export.py` (Python 3, no dependencies). `python3 tools/iso/preview.py out.html` renders every scene and figure on one page for a visual check.

Text inside the SVGs stays language-neutral (numbers, prices, symbols). Words that visitors read (plan labels, marker names, detail screens) come from the string files and sit on top of the drawing as HTML.

## Pages

| Path | Job |
|---|---|
| `/` | Neutral home for restaurants and salons: hero with the module board (tiles drop into slots around your POS) → parts list of modules → the three industry doors (`#services`) → where your money goes → the 0%* band → payments calculator → terms → final CTA |
| `/apps` | Product components as numbered rows with figures, for the already-interested owner |
| `/tarifs` | Price table per app, buy-outright option, terms, FAQ |
| `/restaurants` | Cafés, boba, restaurants & fast food: the interactive isometric restaurant plan (9 modules), the groups band, the three story vignettes, insights, the day timeline |
| `/salons` | Hair, nail and beauty salons: the interactive isometric salon plan (8 modules), the three salon scenes, the recording and the call button |
| `/booking` | The AI phone assistant for restaurants and salons. Structure from the ElevenLabs conversational AI page, rewritten with our facts only |
| `/demo` | The flat in-page demo: café & restaurant mode and salon mode (see below) |
| `/groupes` | Multi-location groups (3–25 locations): multiplication pains, insights, Quebec proof, the design-partner offer, mailto CTA (footer link + the band under the `/restaurants` plan, not in the nav) |
| `/a-propos` | Founder trust page |
| `/confidentialite`, `/conditions` | Legal, imported verbatim from maplekiosk.ca (see below) |

Removed on purpose: `/calculateur` (the payments calculator lives on the home page), `/fonctionnalites` (renamed to `/apps`), `/coffee` (merged into `/restaurants`), `/assistant` (renamed to `/booking`), and the 3D demo `/shop-demo/index.html` (replaced by `/demo`). Old links hit the 404 page; no redirects.

## The demo

`/demo` (`src/pages/demo.tsx`, `src/components/demo/*`, strings under `demo`) runs in the page, in all four languages. Nothing is saved.

- Café & restaurant: take an order at the kiosk or the counter, send it to the kitchen screen, bump it (the customer screen shows it ready), 86 an item (the kiosk and the TV board follow), add a customer (stamps).
- Salon: play a scripted assistant call that books into the day calendar, check out a client with a tip (payroll updates), add and seat walk-ins.

**Every "See how it works" button goes to `/demo`** (`SITE.demoUrl`). The nav button is different: "See our services" goes to `/#services`. The "Apps" nav item is a menu that lists the three service pages (`nav.menu` in the string files).

The assistant's phone number lives once, in `SITE.assistantPhone`. The call buttons link to it with `tel:`.

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
- The AI phone assistant (life-like voice; answers inquiries, takes bookings) is a real feature — claim it for restaurants and salons. Say "assistant" in headlines and disclose the automation. Forecasting and coursing are not built — do not claim them.
- Staff payroll for salons, inventory management, reservations, and waitlists are real modules. Do not write a fixed module count. Name a few modules, then write "and more".
- The 0% claim is for in-person sales only. Online orders go through Stripe, which charges its own fees. Put an asterisk on every "0%" claim, and show the `zeroNote` footnote ("*Applicable to in-person sales.") near it.
- No invented numbers, testimonials, or customer names. No placeholders on the site either: if a fact is unknown, leave the claim out.
- Brand names (Square, Clover) appear only next to published rates. Criticize the nameless pricing model, never a brand.
- When porting content from maplekiosk.ca, take structure and translations only — rewrite to this site's voice and positioning.

## Languages

English is the default, at `/`. Mirrors are at `/fr`, `/vi`, and `/ru`.
All copy lives in `src/lib/strings/en.ts`, `fr.ts`, `vi.ts`, `ru.ts`.
`en.ts` defines the shape. The other files must keep the same keys, so every string change touches all four files.

## Commands

- `pnpm dev` — dev server
- `pnpm build` — type-check, build, prerender all 44 pages (11 pages × 4 languages)
- `pnpm lint` — oxlint
- `pnpm preview` — serve the build on port 4173

## CI

Every push to `main` and every pull request runs `.github/workflows/ci.yml`. The workflow lints the code, builds the static site, and uploads `build/client/` as the `static-site` artifact.

To run CI by hand, open Actions → CI → "Run workflow", or run `gh workflow run CI`.

## Releases

`.github/workflows/release.yml` packages `build/client/` as a zip and publishes it on the Releases page:

- Every push to `main` replaces the rolling `latest` release (`maplekiosk-website-latest.zip`).
- A `v*` tag creates a versioned release: `git tag v0.1.0 && git push origin v0.1.0`.
- To release by hand, open Actions → Release → "Run workflow" and enter a tag.

## Docker image

`.github/workflows/docker.yml` builds the nginx image (`Dockerfile` + `docker/nginx.conf`) for `linux/amd64` and pushes it to `ghcr.io/minardi299/maplekiosk-website`. Every push to `main` publishes the `latest` tag and a commit-SHA tag. A `v*` tag also publishes semver tags (for example `0.1.0`).

## Before launch

1. Legal: `/conditions` (EULA) and `/confidentialite` (privacy policy) are imported from maplekiosk.ca, dated July 22, 2026, in `src/lib/legal.ts`. The unfilled mailing-address, phone and toll-free lines were removed. Flags for a lawyer: New York governing law for a Quebec market, no mention of Quebec's Law 25, English-only text (Bill 96 expects French-first), and no toll-free number in the privacy policy's contact methods.
2. English is the default language on request. Confirm this against Bill 96 advice before launch — the handoff's original rule was French first.
3. The Bricolage/DM fonts have no Cyrillic subset. Russian pages fall back to the system font. Vietnamese body text uses Be Vietnam Pro.
4. `/salons` and `/booking`: the handoff requires a Law 25 review of call handling before these pages go live.
5. hreflang alternate links point to `https://maplekiosk.ca`. Update `SITE.url` in `src/lib/site.ts` if the domain changes.
6. The line-cost calculator (`src/components/sections/line-cost.tsx`) is used nowhere. Re-add it to `/restaurants` or delete the file.
7. Insights gate: confirm that each insights metric is live in the product (rush hours, most popular items, average ticket times). Cut the copy for each metric that is not live. The metrics appear on the home page, `/restaurants` and `/groupes`.
8. Confirm the Clover integration claim on `/apps` and `/tarifs` ("Clover integration today").

## Deploy

The site is static: plain HTML, CSS, JS, and images in `build/client/`. It needs no Node at runtime. Pick one of these three ways.

Two host settings matter for every option:

1. Map the host's 404 page to `404.html`, so unknown URLs show the site's own 404 page.
2. Serve the site from the domain root (`example.com`), not a subfolder. Asset URLs start with `/`, so a subfolder breaks them.

### Option 1: Docker

```sh
docker run -d -p 8080:8080 --name maplekiosk ghcr.io/minardi299/maplekiosk-website:latest
```

Then open http://localhost:8080. nginx in the image listens on port 8080 and already maps 404s to `404.html` and caches `/assets/` for a year.

If the package is private, log in first: `echo $TOKEN | docker login ghcr.io -u <user> --password-stdin` (a token with `read:packages`). To update, pull and restart: `docker pull ghcr.io/minardi299/maplekiosk-website:latest && docker rm -f maplekiosk`, then run the command above again.

To build the image yourself:

```sh
docker build -t maplekiosk-website .
docker run -p 8080:8080 maplekiosk-website
```

### Option 2: The release zip

Download `maplekiosk-website-latest.zip` (or a versioned zip) from the Releases page. Serve the files over HTTP. Do not open `index.html` from the file system: asset paths and ES modules do not work on `file://` URLs.

To run it on your own machine:

```sh
unzip maplekiosk-website-latest.zip -d maplekiosk-site
cd maplekiosk-site
python3 -m http.server 8000
```

Then open http://localhost:8000. `npx serve` works too.

To deploy it, upload the folder contents (with `index.html` at the web root) to any static host:

- **Netlify**: drag the folder onto [app.netlify.com/drop](https://app.netlify.com/drop).
- **Vercel**: run `npx vercel --prod` inside the folder.
- **nginx, Apache, S3, or cPanel**: copy the folder contents into the server root (for example `public_html`).

### Option 3: Cloudflare Workers

`wrangler.jsonc` serves `build/client` as static assets, with `404.html` as the not-found page. From the repo:

```sh
pnpm build
npx wrangler deploy
```

