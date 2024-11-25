import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export default class LoginPage {
    private readonly page: Page;
    private readonly username_field: Locator;
    private readonly password_field: Locator;
    private readonly btn_login: Locator;
    private readonly btn_cart: Locator;


    constructor(page: Page) {
        this.page = page;

        this.username_field = page.locator('[data-test="username"]');
        this.password_field = page.locator('[data-test="password"]');
        this.btn_login = page.locator('[data-test="login-button"]');
        this.btn_cart = page.locator('[data-test="shopping-cart-link"]');
    }

    async fillLoginInfos(username: string, password: string) {
        await this.username_field.fill(username);
        await this.password_field.fill(password);
    }

    async submitLogin() {
        await this.btn_login.click();
    }

    async expectSuccessfullLogin(title: string) {
        await expect(this.page.locator('[data-test="title"]')).toContainText(title);
    }

    async expectErrorLogin(message: string) {
        await expect(this.page.locator('[data-test="error"]')).toContainText(message);

    }

    async visit(url: string) {
        await this.page.goto(url);
    }

    async gotoCartPage() {
      await this.btn_cart.click();
    }

    async addProcuct(){
        await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await this.page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
        await this.page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        await this.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        await this.page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
        await this.page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();
    }

    async expectViewCart(){
        await this.page.getByText('1Sauce Labs Backpackcarry.').click();
        await this.page.getByText('1Sauce Labs Bike LightA red').click();
        await this.page.getByText('1Sauce Labs Bolt T-ShirtGet').click();
        await this.page.getByText('1Sauce Labs Fleece JacketIt\'s').click();
        await this.page.getByText('1Test.allTheThings() T-Shirt').click();
        await this.page.getByText('1Sauce Labs OnesieRib snap').click();
    }
}


