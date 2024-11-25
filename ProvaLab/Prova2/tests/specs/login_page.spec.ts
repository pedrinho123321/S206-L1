import { test } from "../fixtures/fixtures.ts"

test.beforeEach(async ({loginPage}) => {
    await loginPage.visit('https://www.saucedemo.com');
});

// Teste de login bem-sucedido
test('Tem que fazer o login', async ({ loginPage }) => {
    await loginPage.fillLoginInfos("standard_user","secret_sauce");
    await loginPage.submitLogin();
    await loginPage.expectSuccessfullLogin("Products");
  });

// Teste de login falho
test('Tem que fazer o login', async ({ loginPage }) => {
    await loginPage.fillLoginInfos("standard_user","secret_sauc");
    await loginPage.submitLogin();
    await loginPage.expectErrorLogin("Epic sadface: Username and password do not match any user in this service");
  });

// Teste de adicionar ao carrinho
test('Adicionar item ao carrinho', async ({ loginPage }) => {
    await loginPage.fillLoginInfos("standard_user","secret_sauce");
    await loginPage.submitLogin();
    await loginPage.addProcuct();
    await loginPage.expectViewCart();
});
