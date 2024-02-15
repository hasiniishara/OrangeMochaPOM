const { Builder } = require('selenium-webdriver');
const { By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const SystemUtil = require('../Properties/SystemUtil');
const LoginPage = require('../PageObjects/LoginPage');
const webdriver = require('selenium-webdriver');
const users = require('../UserData/Config');

let systemUtil
let loginPage;

describe('Login Test', () => {
    
    beforeEach(async () =>{
        systemUtil = new SystemUtil();
        await systemUtil.openSystem();
        loginPage = new LoginPage(systemUtil.driver);
    });

    afterEach(async () =>{
        await SystemUtil.closeSystem();
    });

    it('should log in successfully with valid credentials', async () => {
        
        await loginPage.successLogin(users.uName, users.uPassword);
        
    });
});