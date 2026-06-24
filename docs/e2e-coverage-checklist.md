# E2E Coverage Checklist

Target: >= 80% critical user-flow coverage per page for current routes (`/`, `/about`).

## Route /

- [x] Smoke render with header, footer, hero, and all primary sections.
- [x] Desktop anchor navigation for Home, About, Skills, Experience, Credentials.
- [x] Mobile anchor navigation for key sections (Skills, Credentials).
- [x] Theme toggle changes root theme state.
- [x] Skills section categories visible and progress animation starts.
- [x] Credentials section visible, cards rendered, external link attributes validated.
- [x] Accessibility smoke: landmarks, heading visibility, keyboard focus sanity.
- [x] Scroll-to-top appears after scroll and is keyboard focusable.

## Route /about

- [x] Route loads and heading/content visible.

## Completion

- Estimated completion for critical flows: 9/10 (90%).
- Excluded in this phase: unmounted `Contact` and `Portfolio` components.
