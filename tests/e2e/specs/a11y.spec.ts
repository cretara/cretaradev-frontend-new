import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "../fixtures/test";
import { HomePagePO } from "../pages/HomePagePO";
import { AboutPagePO } from "../pages/AboutPagePO";

const scan = (page: import("@playwright/test").Page) =>
  new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze();

test.describe("Accessibility", () => {
  test("homepage has no WCAG A/AA violations", async ({ page }) => {
    const home = new HomePagePO(page);
    await home.gotoHome();
    await home.header.waitThemeToggleReady(); // wait placeholder -> button swap

    const results = await scan(page);
    expect(results.violations).toEqual([]);
  });

  test("about route has no WCAG A/AA violations", async ({ page }) => {
    const about = new AboutPagePO(page);
    await about.gotoAbout();
    await about.expectAboutContentVisible();

    const results = await scan(page);
    expect(results.violations).toEqual([]);
  });

  test("landmarks and headings present", async ({ page }) => {
    const home = new HomePagePO(page);
    await home.gotoHome();

    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("theme toggle is keyboard focusable", async ({ page }) => {
    const home = new HomePagePO(page);
    await home.gotoHome();
    await home.header.waitThemeToggleReady();

    await home.header.themeToggle.focus();
    await expect(home.header.themeToggle).toBeFocused();
  });

  test("scroll-to-top appears and is focusable", async ({ page }) => {
    const home = new HomePagePO(page);
    await home.gotoHome();
    await home.expectScrollToTopVisibleAfterScroll();

    await page.getByTestId("scroll-to-top").focus();
    await expect(page.getByTestId("scroll-to-top")).toBeFocused();
  });
});
