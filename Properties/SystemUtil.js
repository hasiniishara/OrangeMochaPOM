var webdriver = require('selenium-webdriver');

//Creat SystemUtil Class
class SystemUtil{
    //call constructor
    constructor(){
       //Initialize driver as null.
        this.driver = null;
    }

    // System open function
    async openSystem() {  
        //Checking driver is null.
        if (!this.driver) {
            //If driver is null, then create new driver
            this.driver = await new webdriver.Builder().forBrowser('chrome').build();
            //Open System url.
            await this.driver.get('https://devminitest-trials711.orangehrmlive.com/auth/seamlessLogin');
            //Maximize the driver window.
            await this.driver.manage().window().maximize();
            //Set time out.
            await this.driver.manage().setTimeouts({ implicit: 100000 });
        }
        
    };

    //Close the system
    async closeSystem() {
        if (this.driver) {
            // Close the driver if it exists
            await this.driver.quit();
            // Reset driver to null after quitting
            this.driver = null; 
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
