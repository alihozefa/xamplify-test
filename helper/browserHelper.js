const chromedriver = require('chromedriver');
const { Builder } = require('selenium-webdriver');

async function startBrowser() {
    // Ensure ChromeDriver path is used
    process.env.PATH += `:${chromedriver.path}`;
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize();

    // Set implicit wait for 60 seconds
    await driver.manage().setTimeouts({ implicit: 60000 });
    return driver;
}

async function quitBrowser(driver) {
    if (driver) {
        await driver.quit();
    }
}

module.exports = { startBrowser, quitBrowser };