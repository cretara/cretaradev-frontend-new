import { expect, Page } from "@playwright/test";

export class CredentialsPO {
  constructor(private readonly page: Page) {}

  async expectCredentialsSectionVisible() {
    await expect(this.page.getByTestId("credentials-section")).toBeVisible();
  }

  async expectCardCount(count: number) {
    await expect(this.page.getByTestId(/^credential-card-/)).toHaveCount(count);
  }

  async expectCredentialLinkExternal(slug: string) {
    const link = this.page.getByTestId(`credential-link-${slug}`);
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAttribute("rel", /noopener/);
  }
}
