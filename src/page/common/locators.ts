import { Locator, Page } from "@playwright/test";

export class CommonLocators {
  page: Page;

  readonly email : Locator;
  readonly password: Locator;
  readonly name: Locator;
  readonly confirmPass: Locator;

  constructor(page) {
    this.page = page;

    //locators
    this.email = this.page.locator('//input[@id="email"]');
    this.password = this.page.locator('//input[@id="password"]');
    this.name = this.page.locator('//input[@id="name"]');
    this.confirmPass = this.page.locator('//input[@id="confirmPass"]');
  }
}
