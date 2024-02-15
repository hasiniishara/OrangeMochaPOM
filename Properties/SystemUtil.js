var webdriver = require('selenium-webdriver');
const {By} = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();

class SystemUtil{
    constructor(){
        global.driver = driver;
    }

    async openSystem() {
        
        await driver.get('https://devmini-trials711.orangehrmlive.com/auth/seamlessLogin');
        await driver.manage().window().maximize();
    };

       static closeSystem() {
        driver.quit();
    };
}
    module.exports = SystemUtil;
