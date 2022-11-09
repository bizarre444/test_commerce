const { expect } = require('@playwright/test');
const { HomePage } = require('./HomePage');

exports.FashionPage = class FashionPage extends HomePage {

    constructor(page) {
        super(page);
        this.fashpage = page;
        this.companyName = page.locator('[formcontrolname="name"]');
        this.dropdown = page.locator('div.label-container >> nth=4');
        this.beauty = page.locator('.autocomplete-option-item__label', { hasText: ' Beauty & Personal Care ' });
        this.number = page.locator('[formcontrolname="phoneNumber"]');
        this.startBtn = page.locator('.signup-button');
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

}