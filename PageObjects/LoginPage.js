const { By } = require('selenium-webdriver');

//Creat LoginPage Class
class LoginPage {

    //Call constructor
    constructor(driver){
        this.driver = driver;       
    }

    //Create Successfull Login function
    async successLogin(username, password) {
    
       //Find user name field web element
       const usernameField = await driver.findElement(By.id('txtUsername'));
       //Pass user name
       await usernameField.sendKeys(username);
     
       //Find password field web element
       const passwordField = await driver.findElement(By.id('txtPassword'));
       //Pass user password
       await passwordField.sendKeys(password);

       //Find Login button
       const loginButton = await driver.findElement(By.xpath('//*[@id="frmLogin"]/div[4]/button'));
       //Click on the login button
       await loginButton.click();
    }
}

//Export LoginPage class
module.exports = LoginPage;