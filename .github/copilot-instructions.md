# Copilot instructions for `cretaradev-frontend-new`

## Build, lint, and test commands

- Install dependencies with `npm install`.
- Start the local dev server with `npm run dev`.
- Create a production build with `npm run build`.
- Run the configured linter with `npm run lint` (`package.json` maps this to `next lint`).
- There is currently no `test` script and no test runner configured in `package.json`, so there is no full-test or single-test command yet.

## High-level architecture

- This is a `Next.js` App Router portfolio site for `cretara.dev`, using `React 19`, `TypeScript`, `next-themes`, Vercel Analytics, and Tailwind CSS.
- `app/layout.tsx` is the global shell. It wraps every route with `Providers`, `Header`, `Footer`, and `ScrollToTop`.
- `app/page.tsx` renders the homepage through `components/Body`, which assembles the actual landing-page sections in order: hero, `About`, `Skills`, `Experience`, and `Credentials`.
- Navigation is single-page and anchor-based. `components/Header/menuData.tsx` defines the menu entries, and they must stay aligned with the section `id` values in the rendered components.
- Content is mostly local and static:
  - `app/constants/skill-categories.ts` holds the structured skills data.
  - `components/Experience/index.tsx` keeps the experience timeline data inline.
  - `components/Credentials/index.tsx` keeps the credential card data inline.
  - `types/*.ts` defines the interfaces used by those data structures.
- `app/about/page.tsx` is a separate route, but it is not the source of the homepage About section; the homepage uses `components/About/index.tsx`.
- `dictionaries/en.json` and `dictionaries/it.json` exist, but the current UI is not wired to load them.

## Key repository conventions

- Use the `@/` import alias from the repo root. The codebase consistently imports components, constants, and types through `@/*` rather than long relative paths.
- Keep server/client boundaries intact. Interactive UI pieces such as `Header`, `ThemeToggler`, `Skills`, `ScrollToTop`, and `Contact` are client components with `"use client"`, while most content sections stay as server components.
- Dark mode is class-based and centralized:
  - `app/providers.tsx` configures `next-themes` with `attribute="class"` and the storage key `cretaradev-theme`.
  - Components rely on `dark:` variants plus shared CSS variables from `app/globals.css`.
- `app/globals.css` is part of the design system, not just resets. It defines shared custom color variables and utility classes such as `bg-gray-light`, `bg-bg-color-dark`, `text-body-color`, `shadow-one`, `shadow-two`, and `shadow-three`. Check it before replacing those classes or moving styling into isolated components.
- The `Skills` section is data-driven and animation-driven at the same time: `app/constants/skill-categories.ts` provides percentage values, and `components/Skills/index.tsx` animates them with `requestAnimationFrame` after an `IntersectionObserver` trigger. Keep skill levels in the `0-100` range.
- `Experience` and `Credentials` use typed arrays that live directly inside their components instead of a separate `data/` folder or API layer. If you add or reshape entries, update the matching interfaces in `types/`.
- `next.config.js` allows remote HTTPS images broadly, which is required because the credentials section renders external badge images from Credly.
- `components/Portfolio` and `components/Contact` exist, but they are not mounted by `components/Body/index.tsx`. Changes there will not affect the homepage unless `Body` is updated too.
- Vercel Analytics is already present in `app/layout.tsx`, and `app/page.tsx` also mounts it. Avoid adding more analytics mounts without checking for duplication first.
