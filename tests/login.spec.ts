import { Browserstack, expect, test } from "../src/base/fixture";
import { isBstack } from "../src/utils/env";
import { constant } from "../src/data/constant";

test.describe.configure({ mode: "parallel" });

test.describe("Algoui Dashboard > Login Functionality :", () => {
  test.beforeEach(async ({ commonfunctions, page, }) => {
    //Navigate to  algoui page
    await commonfunctions.navigateTo(
      constant.algouiUrl,
      page,
    );
    if (isBstack) Browserstack.logSessionDetails(page);
  });

  test.afterEach(async ({ page, }) => {

    await page.close();
  });

  test(" Positive Scenario : Perform login functionality in algoui page @login", async ({
    loginPage,
    commonLoc,
    page,
  }) => {
    await page.waitForLoadState();
    //waiting for algoui page to load successfully
    await expect(loginPage.betaLogo).toBeVisible();
    //checked for login button 
    await expect(loginPage.loginBtn).toBeVisible();
    await expect(loginPage.loginBtn).toBeEnabled();
    await loginPage.loginBtn.click();
    //Waiting for login header to be visible before performing login
    await loginPage.loginHeader.waitFor({state: 'visible'});
    //Entering email address in email input field
    await expect(commonLoc.email).toBeVisible();
    await commonLoc.email.fill(constant.email);
    //Entering password
    await expect(commonLoc.password).toBeVisible();
    await commonLoc.password.fill(constant.password);
    //Clicking on login btn
    await expect(loginPage.sighinBtn).toBeEnabled();
    await loginPage.sighinBtn.click();
    //Validating if user successfully logs in or not
    await expect(loginPage.user).toBeVisible();
    
  });
  test(" Negative Scenario : Perform login functionality in algoui page with wrong credentials @loginerror", async ({
    loginPage,
    commonLoc,
    page,
  }) => {
    await page.waitForLoadState();
    //waiting for algoui page to load successfully
    await expect(loginPage.betaLogo).toBeVisible();
    //checked for login button 
    await expect(loginPage.loginBtn).toBeVisible();
    await expect(loginPage.loginBtn).toBeEnabled();
    await loginPage.loginBtn.click();
    //Waiting for login header to be visible before performing login
    await loginPage.loginHeader.waitFor({state: 'visible'});
    //Clicking on login page without providing email and password
    await expect(loginPage.sighinBtn).toBeEnabled();
    await loginPage.sighinBtn.click();
    //validate error message is displayed
    await expect(loginPage.loginerror).toBeVisible();
    //Entering email address in email input field
    await expect(commonLoc.email).toBeVisible();
    await commonLoc.email.fill(constant.email1);
    //Entering password
    await expect(commonLoc.password).toBeVisible();
    await commonLoc.password.fill(constant.password1);
    //Clicking on login btn
    await expect(loginPage.sighinBtn).toBeEnabled();
    await loginPage.sighinBtn.click();
    //Validating invalid email and password error
    await expect(loginPage.wrongUserError).toBeVisible();
    
  });
});
