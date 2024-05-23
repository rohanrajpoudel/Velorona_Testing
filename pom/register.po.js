const requirement = require('playwright/test');

exports.registerPage = class loginPage {
    constructor(page) {
        this.page = page;
        this.header1 = `//a[normalize-space()='Company Register']`;
        this.companyNameInput = `//input[@id=':r3:']`;
        this.companyEmailInput = `//input[@id=':r4:']`;
        this.companyPhoneInput = `//input[@id=':r5:']`;
        this.companyStreetInput = `//input[@id=':r6:']`;
        this.companySuiteInput = `//input[@id=':r7:']`;
        this.companyCityInput = `//input[@id=':r8:']`;
        this.companyStateInput = `//input[@id=':r9:']`;
        this.companyZipcodeInput = `//input[@id=':ra:']`;
        this.companyCountrySelect = `//input[@id=':rb:']`;
        this.companyTimezoneSelect = `//input[@id=':rd:']`;
        this.submitButton = `//button[@id=':rf:']`;
        this.nextButton = `//button[normalize-space()='Next']`;
        this.country = `//li[contains(., 'United States')]`;
    }

  async countrySelect() {
    await this.page.click(this.companyCountrySelect);
    await this.page.fill(this.companyCountrySelect, 'United States'); 
    await this.page.waitForSelector(this.country);
    await this.page.click(this.country);
    // await this.page.waitForSelector("this.country");
  }
}