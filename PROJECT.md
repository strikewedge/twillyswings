# twillyswings

## Purpose
Personal linktree for IG bio, hosted at twillyswings.com.

## Stack
Next.js 16 (App Router, static export), React 19, Tailwind CSS 4, TypeScript, deployed to Vercel.

## Data model
Bio + array of links in `lib/links.ts`. Add/edit/remove cards by editing that file. Order in the array = display order on the page.

## Current cards
0. **Strike Wedge Launch** (FEATURED, 8 Sep 2026: bigger orange card, kicker "New · App Store 13 October") — https://app.strikewedge.com — `/icons/strikewedge-launch.png` (the app icon, `launch-monitor/appstore-screens/assets/app-icon-1024.png` resized to 512). `featured: true` in `lib/links.ts` switches `LinkCard` to the highlighted layout; only one card should carry it.
1. **Strike Wedge** — https://strikewedge.com/discount/TWILLYSWINGS (discount code TWILLYSWINGS, auto-applied via URL) — `/icons/strikewedge.png`
2. **Mirror Vision** — https://apps.apple.com/us/app/mirror-vision-golf-coaching/id1381051713 — `/icons/mirror-vision.png`
3. **Lowpoint** — https://lowpoint.strikewedge.com — `/icons/lowpoint.png`
4. **Strike Wedge Wind** — https://apps.apple.com/au/app/strike-wedge-wind/id6767115548 — `/icons/strikewedge-wind.png`

## Icon sources
- `strikewedge.png` — Shopify CDN: `https://strikewedge.com/cdn/shop/files/SW-mark-BLK_copy.png?width=512` (the `apple-touch-icon.png` and `favicon.ico` paths on strikewedge.com both 404; this CDN PNG is the SW black mark at 512×512).
- `mirror-vision.png` — iTunes Lookup API (`id=1381051713`), `artworkUrl512`.
- `strikewedge-wind.png` — iTunes Lookup API (`id=6767115548`), `artworkUrl512`.
- `lowpoint.png` — manual upload, screenshot of the Lowpoint AoA visualization (296×258, not square). `LinkCard` uses `object-cover` on a 64×64 box, so the sides get cropped slightly — the "AoA BALL" / "LOW POINT" text may clip. Swap for a square crop if it doesn't read well at small size.

## Favicon
`app/icon.png` is the @twillyswings IG avatar (100×100 PNG). Pulled from the og:image meta on the public IG profile and converted from JPEG to PNG via `sips`. Next.js's file-based icon convention auto-routes it as the favicon. To swap: drop a new PNG at `app/icon.png` and rebuild. IG's public CDN only exposes the 100×100 size to anonymous fetches — if a sharper favicon is wanted, save a higher-res copy manually and overwrite the file.

## TODO
- [x] Drop final `lowpoint.png` into `public/icons/` — done (296×258 AoA screenshot)
- [x] Verify Strike Wedge icon fetch worked (got the SW black mark from Shopify CDN — confirm it looks right on dark bg; if not, swap for a white-mark variant)
- [ ] Connect domain in Vercel (twillyswings.com + www → redirect www → apex)

## Future ideas
_(jot down here: "maybe add the shape memory game when it ships", new tools, etc.)_
