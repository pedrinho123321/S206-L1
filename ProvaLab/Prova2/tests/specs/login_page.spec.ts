import { test } from "../fixtures/fixtures.ts";

test.beforeEach(async ({ loginPage }) => {
    await loginPage.visit("https://www.saucedemo.com");
});

test("Tem que fazer o login", async ({ loginPage }) => {
    await loginPage.fillLoginInfos("standard_user", "secret_sauce");
    await loginPage.submitLogin();
    await loginPage.expectSuccessfullLogin("Products");
});

test("Não deve fazer o login", async ({ loginPage }) => {
    await loginPage.fillLoginInfos("standard_user", "secret_sauc");
    await loginPage.submitLogin();
    await loginPage.expectErrorLogin(
        "Epic sadface: Username and password do not match any user in this service"
    );
});

test("Tem que adicionar item ao carrinho", async ({ loginPage }) => {
    await loginPage.fillLoginInfos("standard_user", "secret_sauce");
    await loginPage.submitLogin();
    await loginPage.addProcuct();
    await loginPage.gotoCartPage();
    await loginPage.expectViewCart();
});

test("Tem que ver as imagens todas erradas", async ({ loginPage }) => {
    await loginPage.fillLoginInfos("standard_user", "secret_sauce");
    await loginPage.submitLogin();
    await loginPage.expectViewImg();
});
