var webdriver = require('selenium-webdriver');
const { Duration } = require('selenium-webdriver');

// creating web driver as a global variable object
//var driver = new webdriver.Builder().forBrowser('chrome').build();

//Creat SystemUtil Class
class SystemUtil{

    //call constructor
    constructor(){
        //global.driver = driver;
        this.driver = null;
    }

    // System open function
    async openSystem() {  
        
        // await driver.get('https://devminitest-trials711.orangehrmlive.com/auth/seamlessLogin');
        // await driver.manage().window().maximize();
        // await driver.manage().setTimeouts({ implicit: 100000 });
        if (!this.driver) {
            this.driver = await new webdriver.Builder().forBrowser('chrome').build();
            await this.driver.get('https://devminitest-trials711.orangehrmlive.com/auth/seamlessLogin');
            await this.driver.manage().window().maximize();
            await this.driver.manage().setTimeouts({ implicit: 100000 });
        }
        
    };

    //Close the system
    async closeSystem() {
        // if (driver == null) {
        // driver.close();
        // }
    
        //driver.quit();

        if (this.driver) {
            // Close the driver if it exists
            await this.driver.quit();
            this.driver = null; // Reset driver to null after quitting
        }
        
    };

     // Reset implicit wait timeout
      async resetImplicitWait(timeout) {
        if (this.driver) {
            // Set implicit wait timeout if the driver exists
            await this.driver.manage().setTimeouts({ implicit: timeout });
        }
    }
}

//Export SystemUtil class
module.exports = SystemUtil;
