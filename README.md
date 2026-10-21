# Klei — ceramics workshops in Mechelen

Live URL: **https://ps786586785857867978.github.io/klei-ceramics/**

## Run locally

```bash
npm install
npm run dev
```

## Deploy

GitHub Pages serves the built site from the `docs` folder on `main`. After any change:

```bash
npx vite build --outDir docs --emptyOutDir
git add -A && git commit -m "Update site" && git push
```

## Analytics choice: GA4 vs Plausible

GA4 is free, has deep reporting and integrates with Google Ads, but it is complex to configure and sends visitor data to Google, which makes a consent banner necessary. Plausible is lightweight, privacy-first and needs no cookie banner by default, but it is paid and offers less detailed reporting. This project uses GA4 with Consent Mode v2: everything is denied by default, the Google script is only loaded after the visitor accepts, and their choice is remembered in local storage.

## Three things AI got wrong — and the fixes

1. **GA4 loaded but sent no data.** The generated loader defined `gtag` as an arrow function pushing an array into `dataLayer`. Google's script only understands the `arguments` object, so the tag was detected but Realtime stayed at zero. I fixed it by defining `gtag` as a normal function that pushes `arguments`, and confirmed a `collect` request returning 204 plus my visit in Realtime.
2. **Broken share preview.** The Open Graph tags pointed to a made-up domain (`klei-ceramics.github.io/klei-starter`) and used an SVG image, which social platforms do not render. opengraph.xyz showed a broken image. I fixed the URLs, added a 1200×630 PNG, and added `twitter:card`, `og:site_name` and the Twitter tags.
3. **Deployment left half-finished.** `vite.config.js` was never committed, nothing was built for GitHub Pages, and the README still said the live URL was pending. I committed the config, published the build from `docs`, and set Pages to serve `main` / `docs`.

## Proof

Screenshots, Lighthouse scores and the share preview are in [`proof/`](proof/) and linked from `CHECKLIST.md`.
