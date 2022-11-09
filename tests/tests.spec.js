const { test, expect } = require('@playwright/test');
const { Dashboard } = require('../src/pages/Dashboard');
const { HomePage } = require('../src/pages/HomePage');
const { SantanderPage } = require('../src/pages/SantanderPage');

function getRandom() {
    return Math.floor(Math.random() * 1000)
}
let email = 'roast' + getRandom() + '@hotmail.com';

test.describe('There is two cases with different paramethers', () => {

    test('For fashion value', async({ page }) => {
        let fashionpage = new HomePage(page);

        //1. Visit
        await fashionpage.open('fashion');
        //2. Fill out the user information
        await fashionpage.fillInfo('Olya', 'Bizarre', email, 'Test1234!Valid');
        //3. Click ‘next’
        await fashionpage.clickNext();
        //4. Fill out the business information
        await fashionpage.businessInfo('AQA Test', '123456')
            //5. Register the account
        await fashionpage.clickStart();
        //6. Click on get started
        await fashionpage.clickPopup();

        //Dashboard
        let dashboard = new Dashboard(page);
        let arrayDash = await dashboard.getAllApps();
        const DashboardFashion = ['Transactions', 'Checkout', 'Products', 'Connect', 'Shop', 'Message', 'Settings'];
        await expect(DashboardFashion.every(el => arrayDash.includes(el)), `value is not in expected list`).toBeTruthy();


    })

    test.only('For santander value', async({ page }) => {
        let santanderpage = new SantanderPage(page);

        //1. Visit
        await santanderpage.open('santander');
        //2. Fill out the user information
        await santanderpage.fillInfo('Olya', 'Bizarre', email, 'Test1234!Valid');
        //3. Click ‘next’
        await santanderpage.clickNext();
        //4. Fill out the business information
        await santanderpage.businessInfo('AQA Test', '123456')
            //5. Register the account
        await santanderpage.clickStart();
        //6. Click on get started
        await santanderpage.clickPopup();

        //Dashboard
        let dashboard = new Dashboard(page);
        let arrayDash = await dashboard.getAllApps();
        const DashboardFashion = ['Transactions', 'Checkout', 'Connect', 'Point of Sale', 'Settings'];
        await expect(DashboardFashion.every(el => arrayDash.includes(el))).toBeTruthy();

    })
})