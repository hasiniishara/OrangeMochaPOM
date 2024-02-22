const { By } = require('selenium-webdriver');

//Create Admin Page Class
class AdminPage {

    //Call constructor
    constructor(driver){
        this.driver = driver;
    }

    //Verifying Admin Module Header
    async verifyingAdminModuleHeader(){
        //Find Admin Module Header Text
        const adminHeader = await this.driver.findElement(By.xpath('//*[@id="topbar"]/ul[1]/li/div'));
        //Get Admin Header text
        const adminHeadText = await adminHeader.getText();
        console.log(adminHeadText);
        return adminHeadText;    
    }
}

//Export AdminPage class
module.exports = AdminPage;