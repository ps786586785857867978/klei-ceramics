---
name: polish
description: Audit the Klei site against CHECKLIST.md and the frames in design/frames/, and report what is not finished yet. Use when asked to check, audit, QA or polish the site, or one category of the checklist (detail, responsive, sizing, animation, loading, meta, analytics, usability). Do not use for building new sections.
---

# Polish

Find what is not finished. Report first, fix only what the user approves.

## Steps

1. Make sure the dev server runs (`npm run dev`).
2. Run `npm test`. It writes screenshots to `screenshots/` and checks horizontal scroll, accessibility and meta tags.
3. Take the category the user asked for from `CHECKLIST.md` (or all of them). For every unticked item, check it:
   - compare `screenshots/` with `design/frames/`, section by section
   - with the Playwright MCP, if available: hover, focus, the mobile menu, the FAQ, resizing
4. Report a table and stop:

   | Checklist item | Status (ok / not ok / not checked) | What is wrong | Proposed fix |
   |---|---|---|---|

5. Wait for the user to say which rows to fix.

## When fixing

- Only values from `src/styles/tokens.css`. Missing value? Ask.
- No absolute positioning, no `!important`.
- Never change a test to make it pass.
- Run `npm test` again and say what is still open.
- Never call it "perfect" or "pixel perfect". Say what you checked and what you did not.
