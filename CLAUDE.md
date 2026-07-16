# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # start dev server (port 3000)
npm run build        # production build
npm run start        # run production server
npm run lint         # eslint .
npm run e2e          # run Playwright E2E suite
npm run e2e:headed   # Playwright headed
npm run e2e:ui       # Playwright UI mode
npm run e2e:report   # open last HTML report
```

Run a single E2E spec / test:

```bash
npx playwright test tests/e2e/specs/smoke.spec.ts
npx playwright test tests/e2e/specs/smoke.spec.ts -g "test name"
npx playwright test --project=chromium-desktop   # one project only
```

**CRITICAL — terminal**: Never run `npm` via PowerShell. Use the native Windows terminal (cmd/bash) for npm commands — required for compatibility/performance in this project.

## Architecture

Next.js App Router portfolio site for `cretara.dev`. React 19, TypeScript, `next-themes`, Vercel Analytics, Tailwind CSS v4.

- `app/layout.tsx` is the global shell: wraps every route with `Providers`, `Header`, `Footer`, `ScrollToTop`.
- `app/page.tsx` renders the homepage through `components/Body`, which assembles landing sections in order: hero, `About`, `Skills`, `Experience`, `Credentials`.
- Navigation is single-page anchor-based. `components/Header/menuData.tsx` defines menu entries — they must stay aligned with the section `id` values in the rendered components.
- Content is local/static:
  - `app/constants/skill-categories.ts` — structured skills data (levels in 0–100 range).
  - `components/Experience/index.tsx` and `components/Credentials/index.tsx` keep their typed data arrays inline (no `data/` or API layer). Reshape entries → update matching interfaces in `types/`.
- `app/about/page.tsx` is a separate route and is NOT the source of the homepage About section (homepage uses `components/About/index.tsx`).
- `dictionaries/en.json` / `dictionaries/it.json` exist but the UI is not currently wired to load them.
- `components/Portfolio` and `components/Contact` exist but are NOT mounted by `components/Body` — changes there don't affect the homepage unless `Body` is updated.
- Vercel Analytics mounted in both `app/layout.tsx` and `app/page.tsx` — check for duplication before adding more.

## Conventions

- Import via the `@/` alias from repo root (`tsconfig.json` maps `@/*` → `./*`). Use it instead of long relative paths.
- Server/client boundaries: interactive pieces (`Header`, `ThemeToggler`, `Skills`, `ScrollToTop`, `Contact`) are `"use client"`; content sections stay server components.
- Dark mode is class-based and centralized: `app/providers.tsx` configures `next-themes` with `attribute="class"` and storage key `cretaradev-theme`. Components use `dark:` variants + shared CSS vars.
- `app/globals.css` is part of the design system, not just resets — defines shared color vars and utility classes (`bg-gray-light`, `bg-bg-color-dark`, `text-body-color`, `shadow-one/two/three`). Check it before replacing those classes.
- `components/Skills/index.tsx` is data-driven + animation-driven: reads percentages from `skill-categories.ts`, animates with `requestAnimationFrame` after an `IntersectionObserver` trigger.
- `next.config.js` allows remote HTTPS images broadly — required for external Credly badge images in the credentials section.

## E2E Testing

- Playwright (`@playwright/test`). Specs in `tests/e2e/specs/`, Page Object Model under `tests/e2e/pages/` and `tests/e2e/components/`.
- Two projects: `chromium-desktop` (Desktop Chrome) and `chromium-mobile` (Pixel 7). Scope: routes `/` and `/about`.
- `playwright.config.ts` auto-starts the dev server (`webServer`) on `127.0.0.1:3000`; override base URL with `PLAYWRIGHT_BASE_URL`.
- Coverage checklist: `docs/e2e-coverage-checklist.md`.
- CI workflow `.github/workflows/e2e-pr.yml` (on `pull_request` + `workflow_dispatch`): install → install Chromium → lint → build → e2e. Artifacts: `playwright-report` always, `test-results` on failure.
/pl