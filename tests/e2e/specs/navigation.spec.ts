import { expect, test } from "../fixtures/test";
import { HomePagePO } from "../pages/HomePagePO";

const sectionIds = ["home", "about", "skills", "experience", "credentials"] as const;

test.describe("Navigation", () => {
  test("desktop anchor navigation reaches all sections", async ({ page, isMobile }) => {
    test.skip(isMobile, "Desktop nav links are hidden (lg:flex) on mobile viewport");

    const home = new HomePagePO(page);

    await home.gotoHome();

    for (const section of sectionIds) {
      await home.header.navigateDesktopTo(section);
      // Hash is set synchronously on anchor click — assert it first (deterministic)
      await expect.poll(() => new URL(page.url()).hash).toBe(`#${section}`);
      await expect(page.locator(`#${section}`)).toBeInViewport();
    }
  });

  test("mobile anchor navigation works", async ({ page, isMobile }) => {
    test.skip(!isMobile, "Only for mobile project");

    const home = new HomePagePO(page);
    await home.gotoHome();

    await home.header.navigateMobileTo("skills");
    await expect.poll(() => new URL(page.url()).hash).toBe("#skills");
    await expect(page.locator("#skills")).toBeInViewport();

    await home.header.navigateMobileTo("credentials");
    await expect.poll(() => new URL(page.url()).hash).toBe("#credentials");
    await expect(page.locator("#credentials")).toBeInViewport();
  });
});
