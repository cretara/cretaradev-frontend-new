import { expect, Page } from "@playwright/test";

export class CredentialsPO {
  constructor(private readonly page: Page) {}

  async expectCredentialsSectionVisible() {
    await expect(this.page.getByTestId("credentials-section")).toBeVisible();
  }

  async expectAtLeastOneCard() {
    await expect(this.page.getByTestId(/^credential-card-/).first()).toBeVisible();
    expect(await this.page.getByTestId(/^credential-card-/).count()).toBeGreaterThan(0);
  }

  /**
   * Every outbound credential link must open in a new tab with rel=noopener
   * to prevent reverse-tabnabbing. Checks all links, not a sample.
   */
  async expectAllExternalLinksSafe() {
    const links = this.page.getByTestId(/^credential-link-/);
    const count = await links.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const link = links.nth(i);
      await expect(link).toHaveAttribute("target", "_blank");
      await expect(link).toHaveAttribute("rel", /noopener/);
    }
  }
}
