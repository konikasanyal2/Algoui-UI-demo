import { Locator, Page } from "@playwright/test";

export class signUpPage {
  page: Page;

  readonly joinUs: Locator;
  readonly signUpHeader: Locator;
  readonly signUpBtn: Locator;
  readonly noDataSignUpError: Locator;
  readonly passLimitEror: Locator;

  constructor(page) {
    this.page = page;

    //locators
    this.joinUs = this.page.locator(
      '//a[@class="landingButton primary"]',
    );
    this.signUpHeader = this.page.locator('//h1[@class="signInHeader"]');
    this.signUpBtn = this.page.locator('//button[text()="Sign Up"]');
    this.noDataSignUpError = this.page.locator('//div[contains(text(),"Invalid input data")]');
    this.passLimitEror = this.page.locator('//div[contains(text(),"Path `password`  is shorter than the minimum allowed length (10)")]');
  }
}
