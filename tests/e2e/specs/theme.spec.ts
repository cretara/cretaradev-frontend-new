import { expect, test } from "@playwright/test";
import { HomePagePO } from "../pages/HomePagePO";

test.describe("Theme toggle", () => {
  test("switches between light and dark", async ({ page }) => {
    const home = new HomePagePO(page);

    await home.gotoHome();
    await home.header.waitThemeToggleReady();

    const html = page.locator("html");
    const initialClass = (await html.getAttribute("class")) ?? "";

    await home.header.toggleTheme();

    await expect
      .poll(async () => {
        return (await html.getAttribute("class")) ?? "";
      })
      .not.toBe(initialClass);
  });
});
