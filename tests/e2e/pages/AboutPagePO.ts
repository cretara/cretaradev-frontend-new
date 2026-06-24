import { expect, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class AboutPagePO extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async gotoAbout() {
    await this.goto("/about");
  }

  async expectAboutContentVisible() {
    await expect(this.page.locator("#about")).toBeVisible();
    await expect(this.page.getByRole("heading", { level: 1 })).toContainText("Cretara Pier Daniele");
  }
}
