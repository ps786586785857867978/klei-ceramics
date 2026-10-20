# AGENTS.md

## Project

The landing page of Klei, a ceramics studio in Mechelen, for people who want to book a pottery workshop.
The design is in `design/frames/`, the illustrations in `design/assets/`. Look at both before every task.

## Stack

- Vite + vanilla HTML, CSS and JavaScript
- Fonts: Fraunces (400, 600) and Inter (400, 500, 600) from Google Fonts
- No new dependencies without asking first

## Commands

- `npm run dev` — dev server on http://localhost:5173
- `npm run build` — production build
- `npm test` — Playwright: screenshots, horizontal scroll, accessibility, meta tags

## Rules

- Colours, font sizes, spacing and radii come **only** from `src/styles/tokens.css`. A value is missing? Ask, do not invent one.
- Semantic HTML: `header`, `nav`, `main`, `section`, `footer`. One `h1`, headings in order.
- Mobile first. Flexbox and grid. Never absolute positioning to imitate the design.
- Every interactive element is a real `button` or `a`, with a visible `:focus-visible` state.
- Images are the SVGs from `design/assets/`, with `width`, `height` and a meaningful `alt`.
- Work in small slices: one section per task. Show a plan before you change more than three files.
- Never change a test to make it pass.

## Decisions

What the design does not show. Fill this in yourself — "to be decided" is not a decision.

- Tablet (768px): Use the desktop header; workshops form a balanced two-column grid, with the final card spanning both columns.
- Between 375 and 1440: Containers use the supplied gutter and a 1200px maximum; grids collapse only when their content needs more breathing room.
- Mobile menu (open, close, Escape, clicking a link): The menu opens as a full-width panel, and closes from its toggle, Escape, or any navigation link.
- FAQ (one open at a time? keyboard?): One item remains open at a time; native details/summary keeps keyboard support and visible focus.
- Motion (what moves, how fast, which easing): Cards lift subtly on hover; entries reveal with opacity/transform over 500ms ease and the menu over 200ms ease. Reduced motion disables these transitions.
- Email signup (what happens after a valid submit): Invalid input shows an inline example; a valid address clears the field and confirms subscription locally (there is no mailing-list backend).

## Definition of done

A task is done when:

1. `npm run build` passes
2. `npm test` is green
3. You list what you did **not** check, and which items of `CHECKLIST.md` are still open
