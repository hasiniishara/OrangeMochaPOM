const { Builder, By } = require('selenium-webdriver');
const SystemUtil = require('../Properties/SystemUtil');

class DashboardPage {

    constructor(driver){
        this.driver = driver;       
    }

    async verifyDashboardHeader(){
        const dashboardHeader = await driver.findElement(By.xpath('//*[@id="topbar"]/ul[1]/li/div'));
        return dashboardHeader.getText();
    }
}

module.exports = DashboardPage;