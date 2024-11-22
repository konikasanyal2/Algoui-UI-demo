import { Browserstack, expect, test } from "../src/base/fixture";
import { isBstack } from "../src/utils/env";
import { constant } from "../src/data/constant";

test.describe.configure({ mode: "parallel" });

test.describe("Algoui Dashboard > SignUp Functionality :", () => {
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

  test(" Positive Scenario : Perform signup functionality in algoui page @signup", async ({
    loginPage,
    signup,
    commonLoc,
    page,
  }) => {
    await page.waitForLoadState();
    //waiting for algoui page to load successfully
    await expect(loginPage.betaLogo).toBeVisible();
    //checked for join us button 
    await expect(signup.joinUs).toBeVisible();
    await expect(signup.joinUs).toBeEnabled();
    await signup.joinUs.click(); 
    //Waiting for login header to be visible before performing login
    await signup.signUpHeader.waitFor({state: 'visible'});
    //Entering username
    await expect(commonLoc.name).toBeVisible();
    await expect(commonLoc.name).toBeEnabled();
    await commonLoc.name.fill(constant.username);
    //Entering email address in email input field
    await expect(commonLoc.email).toBeVisible();
    await commonLoc.email.fill(constant.newEmail);
    //Entering password
    await expect(commonLoc.password).toBeVisible();
    await commonLoc.password.fill(constant.newPass);
    //Enter same passowrd in confirm password input field
    await expect(commonLoc.confirmPass).toBeVisible();
    await commonLoc.confirmPass.fill(constant.newPass);
    //Clicking on SignUp btn
    await expect(signup.signUpBtn).toBeEnabled();
    await signup.signUpBtn.click();
    //Validating if user successfully logs in or not
    await loginPage.user.waitFor({state: 'visible'});
    await expect(loginPage.user).toBeVisible();
    
  });
  test(" Negative Scenario : validating invalid input and password limit error in signup page @signUpError", async ({
    loginPage,
    commonLoc,
    signup,
    page,
  }) => {
    await page.waitForLoadState();
    //waiting for algoui page to load successfully
    await expect(loginPage.betaLogo).toBeVisible();
    //checked for join us button 
    await expect(signup.joinUs).toBeVisible();
    await expect(signup.joinUs).toBeEnabled();
    await signup.joinUs.click(); 
    //Waiting for login header to be visible before performing login
    await signup.signUpHeader.waitFor({state: 'visible'});
    //Without entering any details clicking on signup CTA
    await expect(signup.signUpBtn).toBeEnabled();
    await signup.signUpBtn.click();
    //Validate the error msg is received
    await expect(signup.noDataSignUpError).toBeVisible();
    //Entering email adress
    await expect(commonLoc.email).toBeVisible();
    await commonLoc.email.fill(constant.newEmail);
    //Entering short password
    await expect(commonLoc.password).toBeVisible();
    await commonLoc.password.fill(constant.shortPass);
    await expect(commonLoc.confirmPass).toBeVisible();
    await commonLoc.confirmPass.fill(constant.shortPass);
    //Clicking on signUp btn
    await expect(signup.signUpBtn).toBeEnabled();
    await signup.signUpBtn.click();
    //validate password limit error
    await expect(signup.passLimitEror).toBeVisible();
    
  });
});
