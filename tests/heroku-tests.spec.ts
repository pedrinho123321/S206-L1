import { test, expect } from '@playwright/test';
import path from 'path';


// 1. Teste de login com credenciais válidas (positivo)
test('Login com sucesso', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.fill('input[name="username"]', 'tomsmith');
  await page.fill('input[name="password"]', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');
  await expect(page.locator('.flash')).toHaveText(/You logged into a secure area!/);
});

// 2. Teste de login com credenciais inválidas (negativo)
test('Falha ao fazer login com credenciais inválidas', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.fill('input[name="username"]', 'usuario_invalido');
  await page.fill('input[name="password"]', 'senha_invalida');
  await page.click('button[type="submit"]');
  await expect(page.locator('.flash')).toHaveText(/Your username is invalid!/);
});

// 3. Teste de upload de arquivo (positivo)
test('Upload de arquivo com sucesso', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/upload');
  
    // Caminho absoluto para o arquivo de upload
    const filePath = path.resolve(__dirname, 'example.txt');
    
    // Verifique se o arquivo existe
    console.log('Caminho do arquivo:', filePath);
  
    // Realiza o upload do arquivo
    await page.setInputFiles('input[type="file"]', filePath);
    await page.click('#file-submit');
  
    // Valida se o arquivo foi carregado corretamente
    await expect(page.locator('#uploaded-files')).toHaveText('example.txt');
  });

// 4. Teste de acesso a página protegida sem autenticação (negativo)
test('Redirecionar ao tentar acessar página protegida sem login', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/secure');
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/login');
});

// 5. Teste de uso de checkboxes (positivo)
test('Selecionar checkbox com sucesso', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');
  await page.check('input[type="checkbox"]');
  expect(await page.isChecked('input[type="checkbox"]')).toBeTruthy();
});

// 6. Teste de redirecionamento após logout (positivo)
test('Logout com sucesso', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.fill('input[name="username"]', 'tomsmith');
  await page.fill('input[name="password"]', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');
  await page.click('a[href="/logout"]');
  await expect(page.locator('.flash')).toHaveText(/You logged out of the secure area!/);
});
