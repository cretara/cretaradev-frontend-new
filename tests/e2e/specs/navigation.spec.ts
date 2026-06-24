import { expect, test } from "@playwright/test";
import { HomePagePO } from "../pages/HomePagePO";

const sectionIds = ["home", "about", "skills", "experience", "credentials"] as const;

test.describe("Navigation", () => {
  test("desktop anchor navigation reaches all sections", async ({ page }) => {
    const home = new HomePagePO(page);

    await home.gotoHome();

    for (const section of sectionIds) {
      await home.header.navigateDesktopTo(section);
      await expect(page.locator(`#${section}`)).toBeInViewport();
    }
  });

  test("mobile anchor navigation works", async ({ page, isMobile }) => {
    test.skip(!isMobile, "Only for mobile project");

    const home = new HomePagePO(page);
    await home.gotoHome();

    await home.header.navigateMobileTo("skills");
    await expect(page.locator("#skills")).toBeInViewport();

    await home.header.navigateMobileTo("credentials");
    await expect(page.locator("#credentials")).toBeInViewport();
  });
});
