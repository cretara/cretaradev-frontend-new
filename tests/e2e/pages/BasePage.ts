import { expect, Page } from "@playwright/test";

export class BasePage {
  constructor(protected readonly page: Page) {}

  async goto(path = "/") {
    await this.page.goto(path);
  }

  async waitForAppReady() {
    await expect(this.page.locator("#mainCretaraDev")).toBeVisible();
    await expect(this.page.locator("header")).toBeVisible();
  }

  async expectSectionVisible(sectionId: string) {
    await expect(this.page.locator(`#${sectionId}`)).toBeVisible();
  }

  async scrollToSection(sectionId: string) {
    await this.page.locator(`#${sectionId}`).scrollIntoViewIfNeeded();
  }
}
