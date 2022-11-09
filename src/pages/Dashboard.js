const { expect } = require('@playwright/test');
const { HomePage } = require('./HomePage');


exports.Dashboard = class Dashboard extends HomePage {
    constructor(page) {
        super(page);
        this.dashPage = page;
    }

    async getAllApps() {
        const arrayApps = await this.dashPage.evaluate(() => Array.from(document.querySelectorAll('.icons .icons__title')).map(el => el.textContent));
        console.log(arrayApps);
        console.log(arrayApps.length);
        return arrayApps;
    }


}