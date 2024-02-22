const SystemUtil = require('../Properties/SystemUtil');
const LoginPage = require('../PageObjects/LoginPage');
const users = require('../UserData/Config');
const DashboardPage = require('../PageObjects/DashboardPage');
const AdminPage = require('../PageObjects/AdminPage');
const assert = require('assert');

describe('Sanity Test', () => {
    let systemUtil;
    let loginPage;
    let dashboardPage;
    let adminPage;

    before(async () => {
        
    });

    after(async () => {
        
    });

    beforeEach(async () => {
        systemUtil = new SystemUtil();
        await systemUtil.openSystem();
        loginPage = new LoginPage(systemUtil.driver);
        dashboardPage = new DashboardPage(systemUtil.driver);
        adminPage = new AdminPage(systemUtil.driver);
        await loginPage.successLogin(users.uName, users.uPassword);
    });

    afterEach(async () => {
        await systemUtil.resetImplicitWait(10000);
        await systemUtil.closeSystem();
    });

    describe('Login to the System', () => {
        it('Should log in successfully with valid credentials', async () => {
            const dashHeader = await dashboardPage.verifyDashboardHeader();
            assert.equal(dashHeader, 'Employee Management', 'Header text does not match the expected value.');
        });
    });

    describe('Login to the Admin Module', () => {
        it('Should log in successfully to Admin Module', async () => {
            await dashboardPage.clickAdminModule();
            const adminModhHeader = await adminPage.verifyingAdminModuleHeader();
            assert.equal(adminModhHeader, 'HR Administration', 'Header text does not match the expected value.');
        });
    });
});
