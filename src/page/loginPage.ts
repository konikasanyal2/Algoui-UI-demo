import { Locator, Page } from "@playwright/test";

export class loginPage {
  page: Page;

  readonly loginBtn: Locator;
  readonly loginHeader: Locator;
  readonly sighinBtn: Locator;
  readonly betaLogo: Locator;
  readonly user: Locator;
  readonly loginerror: Locator;
  readonly wrongUserError: Locator;


  constructor(page) {
    this.page = page;

    //locators
    this.loginBtn = this.page.locator(
      '//a[@class="landingButton secondary"]',
    );
    this.loginHeader = this.page.locator('//h1[@class="logInHeader"]');
    this.sighinBtn = this.page.locator('//button[text()="sign in"]');
    this.betaLogo = this.page.locator('//span[@class="betaTest"]');
    this.user= this.page.locator('//p[@class="hiUserColor"]');
    this.loginerror = this.page.locator('//div[text()="Please provide email and password!"]');
    this.wrongUserError = this.page.locator('//div[text()="Incorrect email or password"]');
  }
}
