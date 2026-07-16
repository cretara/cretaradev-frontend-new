import { test } from "../fixtures/test";
import { HomePagePO } from "../pages/HomePagePO";
import { AboutPagePO } from "../pages/AboutPagePO";

test.describe("Route smoke", () => {
  test("homepage render with global shell", async ({ page }) => {
    const home = new HomePagePO(page);

    await home.gotoHome();
    await home.expectHeroVisible();
    await home.expectMainSectionsVisible();
    await home.footer.expectSocialLinksVisible();
  });

  test("about route render", async ({ page }) => {
    const about = new AboutPagePO(page);

    await about.gotoAbout();
    await about.expectAboutContentVisible();
  });
});
