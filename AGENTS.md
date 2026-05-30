# Cretara.dev Frontend — AGENTS.md

## Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Dev server on `http://localhost:3000` |
| `npm run build` | Production build (runs TS typecheck implicitly) |
| `npm run lint` | ESLint via Next.js |
| `npx tsc --noEmit` | Standalone typecheck (no dedicated script) |

## Stack oddities

- **Tailwind v4** — uses `@import "tailwindcss"` in CSS, not `@tailwind` directives.
  Dark variant declared as `@custom-variant dark (&:where(.dark, .dark *));`.
- **Dark mode** — `next-themes` with `attribute="class"`, `storageKey="cretaradev-theme"`.
  Theme toggler shows a skeleton placeholder (`animate-pulse`) before mount to avoid hydration mismatch.
- **i18n** — manual JSON in `dictionaries/en.json`, `it.json`. No i18n library.
- **No testing framework** configured. No CI workflows. No pre-commit hooks.
- **ESLint** extends only `"next"` (not `"next/core-web-vitals"`). Rule `react/no-unescaped-entities: off`.
- **Prettier** installed but has no config file or npm script.
- **TypeScript 6**, `strict: true`, `moduleResolution: "bundler"`, `target: es2017`.
- **`@types/*` packages** in `dependencies`, not `devDependencies`.

## Routes

- `/` — home page. Renders `<Body>` which composes `About`, `Skills`, `Experience`, `Credentials`.
- `/about` — static about page.

## Structure

- `app/` — App Router pages/layout
- `components/<Feature>/index.tsx` — feature-based barrel-export pattern
- `types/` — shared TS interfaces
- `dictionaries/` — i18n JSON files
