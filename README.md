# Projeto de Testes de UI com Playwright

Este projeto contém testes de interface de usuário (UI) usando Playwright. Os testes foram realizados no site "The Internet - HerokuApp".

## Requisitos

- Node.js (https://nodejs.org/)
- Playwright (instale com `npm install @playwright/test`)

## Instalação

1. Clone este repositório:
   ```
   git clone [URL do Repositório]
   ```
2. Acesse o diretório do projeto:
   ```
   cd [Nome do Diretório]
   ```
3. Instale as dependências:
   ```
   npm install
   ```

## Executando os Testes

Para rodar todos os testes, use o comando:
```
npx playwright test
```

## Relatório de Testes

Para gerar um relatório visual dos testes, use:
```
npx playwright show-report
```

## Casos de Teste Implementados

1. **Login com credenciais válidas** - Verifica se o login com credenciais corretas é realizado com sucesso.
2. **Login com credenciais inválidas** - Verifica o comportamento ao inserir credenciais inválidas.
3. **Upload de arquivo** - Testa a funcionalidade de upload de arquivos.
4. **Acesso a página protegida sem autenticação** - Tenta acessar uma página sem estar logado.
5. **Interação com checkboxes** - Verifica a seleção de checkboxes.
6. **Logout** - Testa o processo de logout e redirecionamento.

## Observações

Certifique-se de ajustar o caminho do arquivo a ser enviado no teste de upload.
