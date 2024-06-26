const { test, expect, page } = require('@playwright/test');

const loginData = require(`../../fixtures/fixture.json`);
const emailError = require(`../../errorMessages/emailErrors.json`);
const passError = require(`../../errorMessages/passErrors.json`);
const otpError = require(`../../errorMessages/otpErrors.json`);
const { loginPage } = require('../../pom/login.po.js');
const { forgotPassPage } = require('../../pom/forgotPass.po.js');
const { registerPage } = require('../../pom/register.po.js');
const { dashboardPage } = require('../../pom/dashboard.po.js');
const { employeeDashboardPage } = require('../../pom/employeeDashboard.po.js');
const { adminDashboardPage } = require('../../pom/adminDashboard.po.js');

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.goto('/');
});

test.describe('Verify View All Button of the Latest Timesheets Submodule within General Page', () => {
    test('dashboard_092 Approver', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.approver.email, loginData.valid.approver.password);
        await login.select("Welcome");
        const employeeDashboard = new employeeDashboardPage(page);
        await employeeDashboard.clickViewAll;
    })
})