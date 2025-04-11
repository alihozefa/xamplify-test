const { By, Key, until} = require('selenium-webdriver');

class LoginPage{
    constructor(driver) {
        this.driver = driver;
        this.userIcon = By.id('menuUserLink');
        this.createAccountButton = By.className('create-new-account ng-scope');
        this.usernameField = By.css("[name='usernameRegisterPage']")
        this.emailField = By.css("[name='emailRegisterPage']");
        this.passwordField = By.css("[name='passwordRegisterPage']");
        this.confirmPasswordField = By.css("[name='confirm_passwordRegisterPage']");
        //the explanation of [last()] in the xpath can be found in isErrorMessageCleared() method
        this.errorMessage = By.xpath("(//label[@class='invalid'])[last()]");
    }

    async openLoginPopup() {
        // await this.driver.findElement(this.userIcon).click();
        await this.clickElement(this.userIcon);
    }

    async clickCreateNewAccount() {
        await this.driver.findElement(this.createAccountButton).click();
    }

    async focusAndBlurField(field) {
        const element = await this.driver.findElement(field);
        await element.click(); // Focus
        await element.sendKeys(Key.TAB); // Blur
    }

    async getErrorMessage() {
        return await this.driver.findElement(this.errorMessage).getText();
    }

    async enterField(field, value) {
        const element = await this.driver.findElement(field);
        await element.clear();
        await element.sendKeys(value);
    }

    async isErrorMessageCleared() {
        const elements = await this.driver.findElements(this.errorMessage);

        //ideally elements.length should have been zero but the DOM has hidden error message on 0th position so just to take that into account we are checking if length is 1, which mean no errors displayed
        return elements.length === 1;
    }

    async clickElement(field) {
        const element = await this.driver.findElement(field);
        await this.driver.wait(until.elementIsVisible(element), 10000);
        await this.driver.wait(until.elementIsEnabled(element), 10000);
        await this.driver.executeScript('arguments[0].scrollIntoView(true);', element);
        await element.click();
    }
}

module.exports = LoginPage;