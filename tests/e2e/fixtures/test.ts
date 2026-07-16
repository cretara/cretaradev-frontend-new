import { test as base, expect } from "@playwright/test";

/**
 * Substrings of console.error / pageerror messages that are known-benign in
 * this app and must NOT fail a test. Keep this list tight — every entry is a
 * blind spot. Main source of noise is the external Credly badge CDN.
 */
const ERROR_ALLOWLIST = [
  // External Credly badge images (next/image without width/height + remote CDN)
  "images.credly.com",
  "Failed to load resource",
  // Next.js dev-mode hydration warnings
  "hydrat",
  "Warning:",
  // Favicon / misc dev 404s
  "favicon",
];

const isAllowed = (message: string) =>
  ERROR_ALLOWLIST.some((needle) =>
    message.toLowerCase().includes(needle.toLowerCase()),
  );

/**
 * Extends the base test with a console.error / pageerror trap. Any uncaught
 * page error or console error not on the allowlist fails the test at teardown,
 * so silent JS errors can no longer pass.
 */
export const test = base.extend<{ errorGuard: void }>({
  errorGuard: [
    async ({ page }, use) => {
      const errors: string[] = [];

      page.on("pageerror", (error) => {
        const message = error.message ?? String(error);
        if (!isAllowed(message)) errors.push(`pageerror: ${message}`);
      });

      page.on("console", (msg) => {
        if (msg.type() !== "error") return;
        const message = msg.text();
        if (!isAllowed(message)) errors.push(`console.error: ${message}`);
      });

      await use();

      expect(errors, "unexpected page/console errors").toEqual([]);
    },
    { auto: true },
  ],
});

export { expect };
