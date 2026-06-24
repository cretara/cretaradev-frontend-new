import { test } from "@playwright/test";
import { HomePagePO } from "../pages/HomePagePO";

test.describe("Credentials section", () => {
  test("credentials cards and outbound links", async ({ page }) => {
    const home = new HomePagePO(page);

    await home.gotoHome();
    await home.scrollToSection("credentials");

    await home.credentials.expectCredentialsSectionVisible();
    await home.credentials.expectCardCount(11);
    await home.credentials.expectCredentialLinkExternal("aws-certified-cloud-practitioner");
  });
});
