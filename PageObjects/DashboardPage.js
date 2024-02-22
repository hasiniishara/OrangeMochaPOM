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
        const dashboardHeader = await this.driver.findElement(By.xpath('//*[@id="topbar"]/ul[1]/li/div'));
        //Get Header Title item text
        const headText = await dashboardHeader.getText();
        console.log(headText);
        return headText;
    }

    //Click Admin Module
    async clickAdminModule(){
        //Find Admin Module Button
        const adminModuleButton = await this.driver.findElement(By.id('left_menu_item_10'));
        await adminModuleButton.click();
        //const adminText = await adminModuleButton.getText();
    }
}

//Export DashboardPage class
module.exports = DashboardPage;