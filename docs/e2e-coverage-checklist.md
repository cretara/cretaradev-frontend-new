# E2E Coverage Checklist

Target: >= 80% critical user-flow coverage per page for current routes (`/`, `/about`).

## Route /

- [x] Smoke render with header, footer, hero, and all primary sections.
- [x] Desktop anchor navigation for Home, About, Skills, Experience, Credentials.
- [x] Mobile anchor navigation for key sections (Skills, Credentials).
- [x] Desktop/mobile anchor navigation also asserts URL hash (`#section`).
- [x] Theme toggle changes root theme state.
- [x] Theme choice persists across page reload (storageKey `cretaradev-theme`).
- [x] Skills section categories visible and progress animation starts.
- [x] Credentials section visible, cards rendered (>= 1), ALL external links validated (`target=_blank` + `rel=noopener`).
- [x] Accessibility: full axe WCAG 2 A/AA scan (zero violations) on `/`.
- [x] Theme toggle and scroll-to-top keyboard focusable (explicit focus assertion).
- [x] Scroll-to-top appears after scroll.
- [x] Console/pageerror trap (allowlisted) fails any spec on silent JS errors.

## Route /about

- [x] Route loads and heading/content visible.
- [x] Full axe WCAG 2 A/AA scan (zero violations).

## Completion

- All critical flows covered. Real a11y audit (axe) + error trap added.
- Excluded in this phase: unmounted `Contact` and `Portfolio` components.
