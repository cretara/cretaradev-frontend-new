import { expect, Page } from "@playwright/test";

export class SkillsPO {
  constructor(private readonly page: Page) {}

  async expectAnyCategoryVisible() {
    await expect(this.page.getByTestId("skill-category-programming-languages-frameworks")).toBeVisible();
  }

  async expectProgressAnimated(skillTestId: string) {
    const progress = this.page.getByTestId(skillTestId);
    await expect(progress).toHaveAttribute("max", "100");
    await expect
      .poll(async () => {
        const value = await progress.getAttribute("value");
        return Number(value ?? 0);
      })
      .toBeGreaterThan(0);
  }
}
