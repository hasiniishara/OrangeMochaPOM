const { By } = require('selenium-webdriver');


//Create Admin Page Class
class AdminPage {

    //Call constructor
    constructor(driver){
        this.driver = driver;
       // const wait = new WebDriverWait(driver, 10000);
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

    //Add New Job title to the system.
    async addNewJobTitle(){

       // const wait = this.wait;
        
        //Find Main Job Section
        const jobMain = await this.driver.findElement(By.xpath('//*[@id="top_level_menu_item_menu_item_102"]/a'));
        //Click Main Job Section.
        await jobMain.click();

        //Find Manage Job Title Item.
        const manageJobTitle = await this.driver.findElement(By.xpath('//*[@id="top_level_menu_item_menu_item_102"]/sub-menu-container/div/div[2]/a'));
        //Click manageJobTitle
        await manageJobTitle.click();

        //Find job title Add button
        const addJobTitleBtn = await this.driver.findElement(By.xpath('//*[@id="jobTitlesDiv"]/div/a/i'));
        //Click Job title add button
        await addJobTitleBtn.click();

        //Find Job Title text field.
        const jobTitleTxt = await this.driver.findElement(By.id('jobTitleName'));
        //Enter Value
        await jobTitleTxt.sendKeys('HasQA1');

        //Find Job Description text field.
        const jobDescTxt = await this.driver.findElement(By.id('jobDescription'));
        //Enter Value
        await jobDescTxt.sendKeys('Test Job Title');

        //Find Save button
        const jobSaveBtn = await this.driver.findElement(By.id('modal-save-button'));
        //Click save button
        await jobSaveBtn.click();

        // try {
        //     const successMessageDisplayed = await wait.until(async (driver) => {
        //         const toastMessage = await this.driver.findElement(By.css('.toast-message'));
        //         return await toastMessage.isDisplayed();
        //     });
        //     console.log(successMessageDisplayed);
        //     assert.strictEqual(successMessageDisplayed, true, "Job Title is not added successfully");
        //     console.log("Successfully added new job title");
        // } catch (error) {
        //     // If adding fails, then validation should appear & toast message should not
        //     const errorMessageDisplayed = await driver.findElements(By.xpath("//*[@id='modal-holder']/div/div/div/div[2]/form/oxd-decorator/div/div[1]/div[2]/span"));
        //     assert.strictEqual(errorMessageDisplayed.length > 0, true, "Validation error message not displayed");
        //     console.log("Duplicate Data Entry");
        // }
    }
}

//Export AdminPage class
module.exports = AdminPage;