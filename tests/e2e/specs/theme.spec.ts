import { expect, test } from "../fixtures/test";
import { HomePagePO } from "../pages/HomePagePO";

const htmlClass = async (page: import("@playwright/test").Page) =>
  (await page.locator("html").getAttribute("class")) ?? "";

test.describe("Theme toggle", () => {
  test("switches between light and dark", async ({ page }) => {
    const home = new HomePagePO(page);
    await home.gotoHome();
    await home.header.waitThemeToggleReady();

    const initialClass = await htmlClass(page);
    await home.header.toggleTheme();

    await expect.poll(() => htmlClass(page)).not.toBe(initialClass);
  });

  test("persists chosen theme across reload", async ({ page }) => {
    const home = new HomePagePO(page);
    await home.gotoHome();
    await home.header.waitThemeToggleReady();

    await home.header.toggleTheme();

    // next-themes writes the resolved choice to storageKey "cretaradev-theme"
    const stored = await page.evaluate(() =>
      localStorage.getItem("cretaradev-theme"),
    );
    expect(stored === "dark" || stored === "light").toBe(true);
    const isDark = stored === "dark";

    await page.reload();
    await home.waitForAppReady();

    await expect
      .poll(() => htmlClass(page))
      .toContain(isDark ? "dark" : "light");
  });
});
