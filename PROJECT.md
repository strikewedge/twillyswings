# twillyswings

## Purpose
Personal linktree for IG bio, hosted at twillyswings.com.

## Stack
Next.js 16 (App Router, static export), React 19, Tailwind CSS 4, TypeScript, deployed to Vercel.

## Data model
Bio + array of links in `lib/links.ts`. Add/edit/remove cards by editing that file. Order in the array = display order on the page.

## Current cards
1. **Strike Wedge — 20% off** — https://strikewedge.com/discount/TWILLYSWINGS (discount code TWILLYSWINGS, auto-applied via URL) — `/icons/strikewedge.png`
2. **Mirror Vision** — https://apps.apple.com/us/app/mirror-vision-golf-coaching/id1381051713 — `/icons/mirror-vision.png`
3. **Lowpoint** — https://lowpoint.strikewedge.com — `/icons/lowpoint.png`
4. **Strike Wedge Wind** — https://apps.apple.com/au/app/strike-wedge-wind/id6767115548 — `/icons/strikewedge-wind.png`

## Icon sources
- `strikewedge.png` — Shopify CDN: `https://strikewedge.com/cdn/shop/files/SW-mark-BLK_copy.png?width=512` (the `apple-touch-icon.png` and `favicon.ico` paths on strikewedge.com both 404; this CDN PNG is the SW black mark at 512×512).
- `mirror-vision.png` — iTunes Lookup API (`id=1381051713`), `artworkUrl512`.
- `strikewedge-wind.png` — iTunes Lookup API (`id=6767115548`), `artworkUrl512`.
- `lowpoint.png` — manual upload. **Not yet in repo.** `LinkCard` falls back to a `bg-neutral-800` square if the image fails to load, so the layout doesn't break in the meantime.

## TODO
- [ ] Drop final `lowpoint.png` into `public/icons/` (the AoA/low-point screenshot already exists; just save it at that path, 512×512 ideal)
- [x] Verify Strike Wedge icon fetch worked (got the SW black mark from Shopify CDN — confirm it looks right on dark bg; if not, swap for a white-mark variant)
- [ ] Connect domain in Vercel (twillyswings.com + www → redirect www → apex)

## Future ideas
_(jot down here: "maybe add the shape memory game when it ships", new tools, etc.)_
