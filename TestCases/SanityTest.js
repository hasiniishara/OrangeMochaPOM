const { Builder } = require('selenium-webdriver');
const { By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const SystemUtil = require('../Properties/SystemUtil');
const LoginPage = require('../PageObjects/LoginPage');
const webdriver = require('selenium-webdriver');
const users = require('../UserData/Config');
const DashboardPage = require('../PageObjects/DashboardPage');
const assert = require('assert');



let systemUtil
let loginPage;
let dashboardPage;

describe('Login Test', () => {
    
    beforeEach(async () =>{
        systemUtil = new SystemUtil();
        await systemUtil.openSystem();
        loginPage = new LoginPage(systemUtil.driver);
        dashboardPage = new DashboardPage(systemUtil.driver);
        await loginPage.successLogin(users.uName, users.uPassword);
    });

    afterEach(async () =>{
        await SystemUtil.closeSystem();
    });

    it('should log in successfully with valid credentials', async () => {
        
        const dashHeader = await dashboardPage.verifyDashboardHeader();
        assert.equal(dashHeader, 'Employee Management', 'Header text does not match the expected value.');
        
    });
});