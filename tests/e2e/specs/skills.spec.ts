import { test } from "../fixtures/test";
import { HomePagePO } from "../pages/HomePagePO";

test.describe("Skills section", () => {
  test("skills categories render and animation starts", async ({ page }) => {
    const home = new HomePagePO(page);

    await home.gotoHome();
    await home.scrollToSection("skills");

    await home.skills.expectAnyCategoryVisible();
    await home.skills.expectProgressAnimated("skill-progress-java");
  });
});
