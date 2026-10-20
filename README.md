# Klei — ceramics workshops in Mechelen

Live URL: **pending GitHub authentication and deployment**

## Run locally

```bash
npm install
npx playwright install chromium
npm run dev
```

## Analytics choice

Google Analytics 4 provides a generous free tier, familiar reporting and direct Google Ads integration, but it is complex and sends visitor data to Google. Plausible is a privacy-first alternative with a much simpler dashboard and no cookie banner in its default configuration, but it is paid and offers less granular reporting. This project uses GA4 with Consent Mode v2: every storage category is denied by default, the analytics script is only added after acceptance, and a refusal is remembered in local storage.

Set `measurementId` in `src/main.js` to the studio's real `G-...` ID before launch; the placeholder deliberately prevents accidental tracking during development.

## Three things AI got wrong — and the fixes

1. The first draft would have used a generic desktop layout on tablet; the final 768px decision uses two workshop columns with a full-width third card.
2. It initially treated visual motion as decoration; the final implementation limits it to opacity and transform and fully respects `prefers-reduced-motion`.
3. It first assumed an email endpoint existed; the finished form instead makes its local-only confirmation explicit, avoiding a misleading promise.

## Verification

`npm run build` passes. Playwright installation and browser launch are documented in `CHECKLIST.md`; run `npm test` and `npx playwright test --update-snapshots` after Chromium is available in the local desktop session.
