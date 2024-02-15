const { Builder, By } = require('selenium-webdriver');
const SystemUtil = require('../Properties/SystemUtil');

class LoginPage {
    constructor(driver){
        this.driver = driver;
    }
   

  async successLogin(username, password) {
    
        const usernameField = await driver.findElement(By.id('txtUsername'));
        await usernameField.sendKeys(username);

        // Enter password
        const passwordField = await driver.findElement(By.id('txtPassword'));
        await passwordField.sendKeys(password);

        // Click on the login button
        const loginButton = await driver.findElement(By.xpath('//*[@id="frmLogin"]/div[4]/button'));
        await loginButton.click();
    
    }
}

module.exports = LoginPage;