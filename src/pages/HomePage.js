const { expect } = require('@playwright/test');

exports.HomePage = class HomePage {

    constructor(page) {
        this.page = page;
        this.fNameField = page.locator('[formcontrolname="firstName"]');
        this.lNameField = page.locator('[formcontrolname="lastName"]');
        this.emailField = page.locator('[formcontrolname="email"]');
        this.passField = page.locator('[formcontrolname="password"]');
        this.confirmPassField = page.locator('[formcontrolname="confirmPass"]');
        this.signupBtn = page.locator('.signup-button .mat-progress-spinner-light div').locator('span', { hasText: "Sign up for free" });
        this.companyName = page.locator('[formcontrolname="name"]');
        this.dropdown = page.locator('div.label-container >> nth=4');
        this.beauty = page.locator('.autocomplete-option-item__label', { hasText: ' Beauty & Personal Care ' });
        this.number = page.locator('[formcontrolname="phoneNumber"]');
        this.startBtn = page.locator('.signup-button');
        this.getStart = page.locator('.welcome-screen-content-button');
        this.popup = page.locator('#cdk-overlay-2');
    }

    async open(path) {
        await this.page.goto('https://commerceos.staging.devpayever.com/registration/' + path);
    }

    async pause() {
        await this.page.pause();
    }

    async fillInfo(fName, lName, email, password) {
        await this.fNameField.click({ force: true });
        await this.fNameField.fill(fName);
        await this.lNameField.click({ force: true });
        await this.lNameField.fill(lName);
        await this.emailField.click({ force: true });
        await this.emailField.fill(email);
        await this.passField.click({ force: true });
        await this.passField.fill(password);
        await this.confirmPassField.click({ force: true });
        await this.confirmPassField.fill(password);
    }

    async clickNext() {
        await this.signupBtn.click();
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