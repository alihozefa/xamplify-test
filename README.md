# Selenium WebDriver Test Framework (JavaScript)

This is a simple Selenium WebDriver test framework implemented in JavaScript. It uses the Page Object Model (POM) design pattern and is configured to run tests on the Chrome browser by default.

The test validates mandatory field error messages and clears them upon entering valid data during user registration.

---

## Prerequisites

Ensure the following prerequisites are met before running the tests:

1. **Node.js**:
    - Install the latest version of Node.js, which includes npm.
    - [Download Node.js](https://nodejs.org/).

2. **Google Chrome**:
    - Install the latest version of Google Chrome.
    - [Download Chrome](https://www.google.com/chrome/).

3. **ChromeDriver**:
    - The project uses `chromedriver` to interact with Chrome. It is automatically installed via npm during setup.

---

## Setup Instructions

Follow these steps to set up and run the tests:

1. **Clone the Repository**:
   Clone the project repository to your local machine:
   ```bash
   git clone git@github.com:alihozefa/xamplify-test.git

2. **Navigate to the directory**:
   ```bash
   cd xamplify-test

3. **Install Dependencies:**:
   Install all required Node.js packages, including selenium-webdriver and chromedriver:
   ```bash
   npm install

4. **Run Test:**:
   Install all required Node.js packages, including selenium-webdriver and chromedriver:
   ```bash
   node tests/loginTest.js
   
### Notes
   Ensure the chromedriver version matches your installed Chrome version. If you encounter version mismatch issues, update chromedriver with:
    
```bash
  npm install chromedriver --save