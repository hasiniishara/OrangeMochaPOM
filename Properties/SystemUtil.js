var webdriver = require('selenium-webdriver');

// creating web driver as a global variable object
var driver = new webdriver.Builder().forBrowser('chrome').build();

//Creat SystemUtil Class
class SystemUtil{

    //call constructor
    constructor(){
        global.driver = driver;
    }

    // System open function
    async openSystem() {      
        await driver.get('https://devminitest-trials711.orangehrmlive.com/auth/seamlessLogin');
        await driver.manage().window().maximize();
    };

    //Close the system
    static closeSystem() {
        driver.quit();
    };
}

//Export SystemUtil class
module.exports = SystemUtil;
