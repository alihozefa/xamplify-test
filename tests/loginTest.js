const { startBrowser, quitBrowser } = require('../helper/browserHelper');
const LoginPage = require('../pages/LoginPage');

(async function mandatoryFieldErrorTest() {
    const driver = await startBrowser();
    const loginPage = new LoginPage(driver);

    try {
        // Navigate to the site
        await driver.get('https://www.advantageonlineshopping.com/');

        // Open the login popup
        await loginPage.waitForLoader();
        await loginPage.openLoginPopup();

        // Click 'Create New Account'
        await loginPage.clickCreateNewAccount();

        // Define fields and expected errors
        const fields = [
            { field: loginPage.usernameField, error: 'Username field is required' },
            { field: loginPage.emailField, error: 'Email field is required' },
            { field: loginPage.passwordField, error: 'Password field is required' },
            { field: loginPage.confirmPasswordField, error: 'Confirm password field is required' }
        ];

        // Verify error messages
        for (const { field, error } of fields) {
            await loginPage.focusAndBlurField(field);
            const errorMessage = await loginPage.getErrorMessage();
            console.assert(errorMessage.includes(error), `${error} not found`);
        }

        // Enter valid data
        await loginPage.enterField(loginPage.usernameField, 'TestUser');
        await loginPage.enterField(loginPage.emailField, 'testuser@example.com');
        await loginPage.enterField(loginPage.passwordField, 'Password123!');
        await loginPage.enterField(loginPage.confirmPasswordField, 'Password123!');

        // Ensure errors are cleared
        const errorsCleared = await loginPage.isErrorMessageCleared();
        console.assert(errorsCleared, 'Errors were not cleared!');

        console.log('Test passed!');
    } catch (err) {
        console.error('Test failed:', err);
    } finally {
        // Quit the driver
        await quitBrowser(driver);
    }
})();