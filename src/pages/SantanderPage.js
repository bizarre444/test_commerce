const { expect } = require('@playwright/test');
const { HomePage } = require('./HomePage');

exports.SantanderPage = class SantanderPage extends HomePage {

    constructor(page) {
        super(page)
        this.sant = page;
        this.companyName = page.locator('input.ng-tns-c134-8');
        this.dropdown = page.locator('div.label-container >> nth=4');
        this.beauty = page.locator('.autocomplete-option-item__label', { hasText: ' Beauty & Personal Care ' });
        this.number = page.locator('input.ng-pristine').first();
        this.vat = page.locator('input.ng-tns-c134-14');
        this.startBtn = page.locator('.signup-button');
        this.popup = page.locator('#cdk-overlay-2');
    }

    async businessInfo(name, number, vat) {
        await this.companyName.click({ force: true });
        await this.companyName.fill(name);
        await this.dropdown.click();
        await this.beauty.click();
        await this.number.click({ force: true });
        await this.number.fill(number);
        await this.vat.click({ force: true });
        await this.vat.fill(vat);
    }

    async clickStart() {
        await this.startBtn.click();
        await this.page.waitForTimeout(15000);
    }
}