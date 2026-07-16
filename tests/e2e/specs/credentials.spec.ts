import { test } from "../fixtures/test";
import { HomePagePO } from "../pages/HomePagePO";

test.describe("Credentials section", () => {
  test("credentials cards render and outbound links are safe", async ({ page }) => {
    const home = new HomePagePO(page);

    await home.gotoHome();
    await home.scrollToSection("credentials");

    await home.credentials.expectCredentialsSectionVisible();
    await home.credentials.expectAtLeastOneCard();
    await home.credentials.expectAllExternalLinksSafe();
  });
});
