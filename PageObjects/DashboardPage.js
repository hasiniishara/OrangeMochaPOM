const { By } = require('selenium-webdriver');

//Create Dashboard Pahge class
class DashboardPage {

    //Call constructor
    constructor(driver){
        this.driver = driver;       
    }

    // Verifying Dashboard Header Text
    async verifyDashboardHeader(){

        //Find dashboard page header text
        const dashboardHeader = await driver.findElement(By.xpath('//*[@id="topbar"]/ul[1]/li/div'));
        //Get Header Title item text
        return dashboardHeader.getText();
    }
}

//Export DashboardPage class
module.exports = DashboardPage;