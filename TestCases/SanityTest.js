const SystemUtil = require('../Properties/SystemUtil');
const LoginPage = require('../PageObjects/LoginPage');
const users = require('../UserData/Config');
const DashboardPage = require('../PageObjects/DashboardPage');
const AdminPage = require('../PageObjects/AdminPage');
const assert = require('assert');

//This descrive block describes the sanity level tetsing.
describe('Sanity Test', () => {
    // Create varibales
    let systemUtil;
    let loginPage;
    let dashboardPage;
    let adminPage;

    //This beforeEach runs before each every test cases.
    beforeEach(async () => {
        //create systemUtil object
        systemUtil = new SystemUtil();
        //Call openSystem() function define in the SystemUtill.js file. Open the system.
        await systemUtil.openSystem();
        //Create page objects.
        loginPage = new LoginPage(systemUtil.driver);
        dashboardPage = new DashboardPage(systemUtil.driver);
        adminPage = new AdminPage(systemUtil.driver);
        //Call successLogin() function define in the LoginPage.js file. Log in to the system. Geeting user name & password from Config.js file. 
        await loginPage.successLogin(users.uName, users.uPassword);
    });

    //This afterEach runs after every test cases.
    afterEach(async () => {
        //Call resetImplicitWait() function define in the SystemUtil.js file.
        await systemUtil.resetImplicitWait(10000);
        //Call closeSystem() function define in the SystemUtil,js file. Close the system.
        await systemUtil.closeSystem();
    });

    //First describe block. This is the Login Functionality.
    describe('Login to the System', () => {
        //First Test Case inside this describe block.
        it('Should log in successfully with valid credentials', async () => {
            //Getting Dashboard Header title from DashboardPage.js file.
            const dashHeader = await dashboardPage.verifyDashboardHeader();
            //Compare the title with Actual value.
            assert.equal(dashHeader, 'Employee Management', 'Header text does not match the expected value.');
        });
    });

    //Second describe block. This is for Admin Module Test Cases.
    describe('Login to the Admin Module', () => {
        it('Should log in successfully to Admin Module', async () => {
            //Click Side Bar Admin Module
            await dashboardPage.clickAdminModule();
            //Getting Admin Module Bpard Header title from AdminPage.js file.
            const adminModhHeader = await adminPage.verifyingAdminModuleHeader();
            //Compare the title with Actual value.
            assert.equal(adminModhHeader, 'HR Administration', 'Header text does not match the expected value.');
        });
    });
});
