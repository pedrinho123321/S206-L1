import { test as base } from "@playwright/test"
import LoginPage from "../page_objects/login_page";



type MyFixtures = {
    loginPage: LoginPage
}

export const test = base.extend<MyFixtures> ({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page)
        await use(loginPage)
    }
});