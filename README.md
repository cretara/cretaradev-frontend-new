# Cretara.dev

Frontend for <https://cretara.dev> with [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`].

## Scripts

- `npm run dev`: start development server.
- `npm run build`: create production build.
- `npm run start`: run production server.
- `npm run lint`: run Next.js lint checks.
- `npm run e2e`: run Playwright E2E suite.
- `npm run e2e:headed`: run Playwright in headed mode.
- `npm run e2e:ui`: open Playwright UI mode.
- `npm run e2e:report`: open last Playwright HTML report.

## E2E Testing

- Framework: Playwright (`@playwright/test`).
- Pattern: Page Object Model under `tests/e2e/pages` and `tests/e2e/components`.
- Scope: routes `/` and `/about`, including desktop and mobile Chromium projects.
- Coverage target: >= 80% critical-flow completion per page (scenario-based).

Coverage checklist: see `docs/e2e-coverage-checklist.md`.

## GitHub Actions

Workflow: `.github/workflows/e2e-pr.yml`

- Triggers: `pull_request`, `workflow_dispatch`.
- Steps: install dependencies, install Chromium, lint, build, run E2E.
- Artifacts: `playwright-report` always, `test-results` on failure.
