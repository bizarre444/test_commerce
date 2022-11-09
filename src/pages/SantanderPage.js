const { expect } = require('@playwright/test');
const { HomePage } = require('./HomePage');

exports.SantanderPage = class SantanderPage extends HomePage {

    constructor(page) {
        super(page)
        this.sant = page;
        this.companyName = page.locator('.label-container >> nth=1');

        this.dropdown = page.locator('div.label-container >> nth=4');
        this.beauty = page.locator('.autocomplete-option-item__label', { hasText: ' Beauty & Personal Care ' });
        this.number = page.locator('[formcontrolname="phoneNumber"]');
        this.startBtn = page.locator('.signup-button');
        this.getStart = page.locator('.welcome-screen-content-button');
        this.popup = page.locator('#cdk-overlay-2');
    }

    async businessInfo(name, number) {
        await this.companyName.click({ force: true });
        await this.companyName.fill(name);
        await this.dropdown.click();
        await this.beauty.click();
        await this.number.click({ force: true });
        await this.number.fill(number);
    }

    async clickStart() {
        await this.startBtn.click();
        await this.page.waitForTimeout(15000);
    }

    async clickPopup() {
        await this.getStart.click();
    }
}