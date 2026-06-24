import { expect, test } from "@playwright/test";
import { HomePagePO } from "../pages/HomePagePO";

test.describe("Accessibility smoke", () => {
  test("landmarks headings and keyboard reachability", async ({ page }) => {
    const home = new HomePagePO(page);

    await home.gotoHome();
    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");

    await home.header.waitThemeToggleReady();
    await expect(home.header.themeToggle).toBeVisible();
  });

  test("scroll-to-top appears and reachable", async ({ page }) => {
    const home = new HomePagePO(page);

    await home.gotoHome();
    await home.expectScrollToTopVisibleAfterScroll();

    await page.getByTestId("scroll-to-top").focus();
    await expect(page.getByTestId("scroll-to-top")).toBeFocused();
  });
});
