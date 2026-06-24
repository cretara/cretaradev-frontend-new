import { expect, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { HeaderPO } from "../components/HeaderPO";
import { FooterPO } from "../components/FooterPO";
import { SkillsPO } from "../components/SkillsPO";
import { CredentialsPO } from "../components/CredentialsPO";

export class HomePagePO extends BasePage {
  readonly header: HeaderPO;
  readonly footer: FooterPO;
  readonly skills: SkillsPO;
  readonly credentials: CredentialsPO;

  constructor(page: Page) {
    super(page);
    this.header = new HeaderPO(page);
    this.footer = new FooterPO(page);
    this.skills = new SkillsPO(page);
    this.credentials = new CredentialsPO(page);
  }

  async gotoHome() {
    await this.goto("/");
    await this.waitForAppReady();
  }

  async expectHeroVisible() {
    await expect(this.page.locator("#home")).toBeVisible();
    await expect(this.page.getByRole("heading", { level: 1 })).toContainText("Senior Full-Stack Developer");
  }

  async expectMainSectionsVisible() {
    await this.expectSectionVisible("about");
    await this.expectSectionVisible("skills");
    await this.expectSectionVisible("experience");
    await this.expectSectionVisible("credentials");
  }

  async expectScrollToTopVisibleAfterScroll() {
    await this.page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    await expect(this.page.getByTestId("scroll-to-top")).toBeVisible();
  }
}
