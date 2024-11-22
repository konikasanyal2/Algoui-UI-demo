import { Locator, Page } from "@playwright/test";

export class loginPage {
  page: Page;

  readonly login: Locator;
  readonly loginHeader: Locator;
  readonly email : Locator;
  readonly password: Locator;
  readonly sighinBtn: Locator;
  readonly article: Locator;
  readonly noResult: Locator;
  readonly serchResultheading: Locator;

  constructor(page) {
    this.page = page;

    //locators
    this.login = this.page.locator(
      '//a[@class="landingButton secondary"]',
    );
    this.loginHeader = this.page.locator('//h1[@class="logInHeader"]');
    this.email = this.page.locator('//input[@id="email"]');
    this.password = this.page.locator('//input[@id="password"]');
    this.sighinBtn = this.page.locator('//button[text()="sign in"]');
    
  }
}
