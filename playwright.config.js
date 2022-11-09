// @ts-check
const { devices } = require('@playwright/test');

const config = {
    testDir: './tests',
    timeout: 30 * 1000,
    expect: {
        timeout: 15000
    },
    fullyParallel: true,
    reporter: 'html',

    use: {
        headless: false,
        actionTimeout: 0,
        trace: 'on-first-retry',
    },

    projects: [{
        name: 'chromium',
        use: {
            ...devices['Desktop Chrome'],
        },
    }],

};

module.exports = config;