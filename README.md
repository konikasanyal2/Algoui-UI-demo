# ALGOUI-UI-demo
**URL Used :** https://algoui.com/

**Objective**
Create automated test scripts capable of driving UI validation using Playwright with TypeScript.
Link to Application for Testing : Algoui UI demo

**Framework Setup**
Implement a BDD automation framework using TypeScript and Playwright.
Utilized Page Object Model (POM) design pattern having page fixtures for better organisation of code.
Utilize playwright methods to validate UI result.

**Positive Test Case**

**Scenario 1:** Validate Login Functionality  :-

1. Given the application is loaded successfully  
2. User clicks on "Login" Button  
3. User navigates to login page 
4. User provides email address and password and click on SignIn buton
5. Then user navigates to dashboard

**Scenario 2 :** Validate SignUp functionality :-

1. Given the application is loaded successfully  
2. User clicks on "JoinUs" Button  
3. User navigates to SignUp page 
4. User provides Name, email address, password, Confirm password and click on SignUp buton
5. Then user navigates to dashboard


**Negative Test Case**

**Scenario 1:** Invalid input in Login page

1. Given the application is loaded successfully 
2. Now without providing any data user directly clicks on SignIn button.
3. User is displayed error message.
4. Now user provides wrong credentials and tries to login again.
5. User is again displayed with error message.


**Scenario 2 :** Validating signup page error

1. Given the application loads successfully and user clicks on SignUp cta.
2. Now without providing any data user clicks on SignUp CTa.
3. User is displayed with error message.
4. Now User provides all details but wrong password format.
5. User is displayed with error message.

**FrameWork Description :**

**Base > Fixture.ts File :** defined setup and teardown logic, which is executed before and after each test or test suite. This is crucial for ensuring that the test environment is properly prepared and cleaned up, which makes your tests more reliable.

**BrowserStack folder:** It has two files i.e bstack caps which holds all browserstack capabilities configuration and bstack services which holds all browserstack services required to integrate.

**Data Folder :** For now it contains only one file i.e constant.ts in which all the test data is added which can be used across the framework for BDD framework.

**Global Folder :** It contains folder i.e global setup and global teardown files 

**Page Folder :**
It contains **common folder** for now having two page class i.e locators.ts and functions.ts containing common functions and locators in it.
For other pages we have created different page class i.e loginPage and SignUpPage.

**Tests Folder :** Folder where all playwright spec.ts test files are available. 

**Playwright.config.ts :** It contains all the configurations related to global setup, global teardown, projects etc. 

**How to Execute Playwright Test :**

npx playwright test --project=chrome --debug
npx playwright test --project chrome --reporter=html --workers=1 --debug;     ---For debuging

npx playwright test --project chrome --reporter=html --workers=1 --for execution
