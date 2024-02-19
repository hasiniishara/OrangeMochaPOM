const SystemUtil = require('../Properties/SystemUtil');
const LoginPage = require('../PageObjects/LoginPage');
const users = require('../UserData/Config');
const DashboardPage = require('../PageObjects/DashboardPage');
const assert = require('assert');


//Define variables for pages
let systemUtil
let loginPage;
let dashboardPage;

//This describe block is for Sanity Test.
describe('Sanity Test', () => {
    //This context block for Login Test
    describe('Login to the System', () => {
        //This beforeEach is run before every test cases.
        beforeEach(async () =>{
            // create page objects
            systemUtil = new SystemUtil();
            loginPage = new LoginPage(systemUtil.driver);
            dashboardPage = new DashboardPage(systemUtil.driver);

            //Open System
            await systemUtil.openSystem();
            //Login to the System
            await loginPage.successLogin(users.uName, users.uPassword);
        });

        //This function is run after every test cases.
        afterEach(async () =>{
            //Close the system.
            await SystemUtil.closeSystem();
        });

        // This it block is represnt success login
        it('Should log in successfully with valid credentials', async () => {
            
            // Getting Dahsboard header text & store it to dashHeader variable.
            const dashHeader = await dashboardPage.verifyDashboardHeader();
            //Check it's equal 'Employee Management'.
            assert.equal(dashHeader, 'Employee Management', 'Header text does not match the expected value.');     
        });

    })


     //This context block for Admin Module Test
     describe('Login to the Admin Module', () => {
        //This beforeEach is run before every test cases.
        beforeEach(async () =>{
            // create page objects
            systemUtil = new SystemUtil();
            loginPage = new LoginPage(systemUtil.driver);
            dashboardPage = new DashboardPage(systemUtil.driver);

            //Open System
            await systemUtil.openSystem();
            //Login to the System
            await loginPage.successLogin(users.uName, users.uPassword);
        });

        //This function is run after every test cases.
        afterEach(async () =>{
            //Close the system.
            await SystemUtil.closeSystem();
        });

        // This it block is represnt success login
        it('Should log in successfully with valid credentials', async () => {
            
            // Getting Dahsboard header text & store it to dashHeader variable.
            const dashHeader = await dashboardPage.verifyDashboardHeader();
            //Check it's equal 'Employee Management'.
            assert.equal(dashHeader, 'Employee Management', 'Header text does not match the expected value.');     
        });

    })
});


//To run this  npm run TestCases. command is define in package.json file.