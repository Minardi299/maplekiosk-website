# MapleKiosk website

Marketing site for MapleKiosk — the Quebec redesign of maplekiosk.ca.

## Stack

- React Router 7, SPA mode with prerender (same setup as boba-website)
- Tailwind CSS 4. All design tokens live in `src/index.css`
- Fonts: Bricolage Grotesque (headings), DM Sans (body), DM Mono (numbers)
- pnpm

## Languages

English is the default, at `/`. Mirrors are at `/fr`, `/vi`, and `/ru`.
All copy lives in `src/lib/strings/en.ts`, `fr.ts`, `vi.ts`, `ru.ts`.
`en.ts` defines the shape. The other files must keep the same keys.

## Commands

- `pnpm dev` — dev server
- `pnpm build` — type-check, build, prerender all 36 pages
- `pnpm lint` — oxlint
- `pnpm preview` — serve the build on port 4173

## Before launch

1. Replace every bracketed placeholder: [PRICE], [TÉLÉPHONE], [COURRIEL], [BUSINESS NAME — BROSSARD], [PHOTO], [SCREENSHOT], and the legal blocks. Search the string files for `[`.
2. Set real contact info in `src/lib/site.ts`. The demo form sends mail to `SITE.email`.
3. Have a Quebec lawyer review `/confidentialite` (Law 25) and `/conditions`.
4. English is the default language on request. Confirm this against Bill 96 advice before launch — the earlier plan had French first.
5. The Bricolage/DM fonts have no Cyrillic subset. Russian pages fall back to the system font. Vietnamese body text uses Be Vietnam Pro.
6. `/salons` is drafted and linked only from the footer. The handoff asks for a Law 25 review before this page goes live — remove the footer link if you want it fully unlinked until then.
7. hreflang alternate links are in place and point to `https://maplekiosk.ca`. Update `SITE.url` in `src/lib/site.ts` if the domain changes.

## Deploy

`wrangler.jsonc` is set up for Cloudflare (`maplekiosk-website`), serving `build/client`.
