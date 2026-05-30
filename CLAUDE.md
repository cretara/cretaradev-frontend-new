# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands
- `npm run dev` – Starts the Next.js development server with hot reloading.
- `npm run build` – Builds the production bundle (`next build`).
- `npm start` – Runs the compiled app (`next start`) after a successful build.
- `npm run lint` – Executes `next lint` to check for ESLint issues.
- To run a single test file (if tests are added): `npm test -- <path>` (no test script currently).

## Project Overview
- **Framework**: Next.js 16 (app router) with TypeScript.
- **Styling**: Tailwind CSS, dark‑mode support via `next-themes`.
- **Structure**
  - `app/` – Contains the root layout, global metadata, and page components (`page.tsx`, `about/page.tsx`, etc.). Uses the new App Router.
  - `components/` – Reusable UI pieces (Header, Footer, ScrollToTop, ThemeToggler, About, Skills, Experience, Portfolio, etc.).
  - `components/Header/menuData.tsx` – Defines the navigation menu used by the header.
  - `app/providers.tsx` – Wraps the app with context providers (e.g., ThemeProvider from `next-themes`).
  - `next.config.js` – Enables remote image patterns and React strict mode.
  - `tsconfig.json` – Standard Next.js TypeScript configuration with path alias `@/*`.
- **State / Theme**: Theme toggling is handled by `next-themes`. `components/Header/ThemeToggler.tsx` reads the system preference and toggles between dark/light.
- **Routing**: Client‑side navigation is anchored (`/#section`) via the menu data; the app is a single‑page portfolio site.
- **Internationalisation**: No i18n framework present; strings are hard‑coded.
- **Assets**: Images are served from the `public/` folder and can be loaded from any remote host thanks to the `remotePatterns` config.

## Notable Conventions
- All components are functional React components written in TypeScript.
- UI layout follows a dark‑mode aware Tailwind colour palette.
- The `Menu` type lives in `types/menu.ts` (imported via `@/types/menu`), providing a simple shape for navigation items.
- The project relies on absolute imports using `@/` (configured in `tsconfig.json`).

## Development Tips
- Run the dev server and inspect the rendered HTML in the browser to understand component hierarchy; the `RootLayout` injects `Header`, `Footer`, and `ScrollToTop`.
- The `ThemeToggler` component uses `useEffect` to defer rendering until after mount to avoid hydration mismatches.
- When adding new pages, create a folder under `app/` with a `page.tsx` and update `menuData.tsx` if you want it in the navigation.
- For new Tailwind utilities, extend the configuration in `tailwind.config.js` (not present yet) or add custom classes directly.

## Build Pipeline
- CI (if configured) typically runs `npm ci`, `npm run lint`, `npm run build`, and `npm start` for smoke checks. No test suite is defined at the moment.

## Other Project‑Specific Files
- `.gitignore` – Standard Next.js ignores.
- `README.md` – Brief description and live site link.
- No `.cursor` or Copilot instruction files are present.
