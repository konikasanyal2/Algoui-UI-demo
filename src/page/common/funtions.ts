import { type Page, type Locator, expect } from "@playwright/test";
import { CommonLocators } from "./locators";

export class CommonFunctions {
    private page: Page;
  
    public locators: CommonLocators;
  
    constructor(page: Page) {
      this.page = page;
      this.locators = new CommonLocators(page);
    }
  
   //function to navigate to a url
    async navigateTo(pageURL: string, page: Page) {
      await page.goto(pageURL);
    }
   
    }