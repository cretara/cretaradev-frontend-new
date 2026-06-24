import { expect, Locator, Page } from "@playwright/test";

export class HeaderPO {
  readonly desktopLinkHome: Locator;
  readonly desktopLinkAbout: Locator;
  readonly desktopLinkSkills: Locator;
  readonly desktopLinkExperience: Locator;
  readonly desktopLinkCredentials: Locator;
  readonly navbarToggle: Locator;
  readonly mobileMenu: Locator;
  readonly themeToggle: Locator;

  constructor(private readonly page: Page) {
    this.desktopLinkHome = page.getByTestId("nav-link-home");
    this.desktopLinkAbout = page.getByTestId("nav-link-about");
    this.desktopLinkSkills = page.getByTestId("nav-link-skills");
    this.desktopLinkExperience = page.getByTestId("nav-link-experience");
    this.desktopLinkCredentials = page.getByTestId("nav-link-credentials");
    this.navbarToggle = page.getByTestId("navbar-toggle");
    this.mobileMenu = page.getByTestId("navbar-menu");
    this.themeToggle = page.getByTestId("theme-toggle");
  }

  async navigateDesktopTo(section: "home" | "about" | "skills" | "experience" | "credentials") {
    const map: Record<string, Locator> = {
      home: this.desktopLinkHome,
      about: this.desktopLinkAbout,
      skills: this.desktopLinkSkills,
      experience: this.desktopLinkExperience,
      credentials: this.desktopLinkCredentials,
    };

    await map[section].click();
  }

  async openMobileMenu() {
    await this.navbarToggle.click();
    await expect(this.mobileMenu).toHaveClass(/visible/);
  }

  async navigateMobileTo(section: "home" | "about" | "skills" | "experience" | "credentials") {
    await this.openMobileMenu();
    await this.page.getByTestId(`mobile-nav-link-${section}`).click();
  }

  async waitThemeToggleReady() {
    await expect(this.themeToggle).toBeVisible();
  }

  async toggleTheme() {
    await this.waitThemeToggleReady();
    await this.themeToggle.click();
  }
}
