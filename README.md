# twillyswings

Personal linktree at [twillyswings.com](https://twillyswings.com). Static Next.js site, deployed to Vercel.

## Add a new link

Edit `lib/links.ts` and add an object to the `links` array:

```ts
{
  title: "Thing",
  description: "What it is.",
  href: "https://example.com",
  icon: "/icons/thing.png",
}
```

Order in the array = order on the page.

## Swap an icon

Drop a PNG (512×512 ideal, square, transparent or solid bg) into `public/icons/` and update the `icon` path in `lib/links.ts`.

## Local dev

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy

Push to GitHub. Vercel auto-deploys on every push to `main`.

First-time setup: import the repo at [vercel.com/new](https://vercel.com/new), accept the Next.js defaults, then connect `twillyswings.com` in **Project → Settings → Domains**.
