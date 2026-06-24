import { expect, Page } from "@playwright/test";

export class FooterPO {
  constructor(private readonly page: Page) {}

  async expectSocialLinksVisible() {
    await expect(this.page.getByTestId("social-link-github")).toBeVisible();
    await expect(this.page.getByTestId("social-link-linkedin")).toBeVisible();
    await expect(this.page.getByTestId("social-link-x")).toBeVisible();
  }
}
