import { test, expect } from '@playwright/test';

test.describe('Testes para o site Saucedemo', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
  });

  test('Caso de teste positivo: Login com credenciais válidas', async ({ page }) => {
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    
    // Verifica se o login foi bem-sucedido
    await expect(page).toHaveURL(/.*inventory.html/);
  });

  test('Caso de teste negativo: Login com senha incorreta', async ({ page }) => {
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'wrong_password');
    await page.click('#login-button');

    // Verifica se aparece uma mensagem de erro
    const errorMessage = await page.locator('.error-message-container');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Epic sadface: Username and password do not match');
  });

  test('Adicionar item ao carrinho', async ({ page }) => {
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Adiciona o primeiro item ao carrinho
    await page.locator('.inventory_item').first().locator('.btn_inventory').click();

    // Verifica se o carrinho mostra o item adicionado
    const cartBadge = await page.locator('.shopping_cart_badge');
    await expect(cartBadge).toHaveText('1');
  });
});
