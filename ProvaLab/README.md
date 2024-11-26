# Testes de API com Fake Store API usando Postman

Este projeto utiliza a **Fake Store API** para realizar testes em endpoints RESTful. O objetivo é validar diferentes operações de GET e DELETE, cobrindo cenários de sucesso e falha.

---

## 🎯 Objetivo do Projeto
Realizar testes automatizados utilizando o Postman para verificar a integridade de endpoints da Fake Store API, simulando comportamentos reais e erros esperados.

---

## 📋 Funcionalidades Testadas
Os testes estão organizados em categorias com diferentes operações e cenários.

### **1. GET**
- **GetProducts**: Obtém a lista completa de produtos.  
  **Exemplo:** `GET /products`  
  **Resultado esperado:** Código de status 200 e retorno de uma lista de produtos.

- **NoGetProductsCategories**: Simula um erro ao tentar acessar a categoria de produtos.  
  **Exemplo:** `GET /products/categories`  
  **Resultado esperado:** Código de status 200, mas com uma falha controlada para simular comportamento específico.

### **2. DELETE**
- **NoDelete**: Simula um erro ao tentar deletar um recurso inexistente.  
  **Exemplo:** `DELETE /products/srvitinho`  
  **Resultado esperado:** Código de status 400 para validar falha esperada.

---

## ✅ Resultados dos Testes
Os testes foram executados no **Postman**, e os resultados foram validados conforme os seguintes critérios:

| Teste                   | Endpoint                  | Status Esperado | Resultado   |
|-------------------------|---------------------------|-----------------|-------------|
| GetProducts             | `/products`              | 200 OK          | ✅ Sucesso   |
| NoGetProductsCategories | `/products/categories`   | 200 OK          | ✅ Sucesso*  |
| NoDelete                | `/products/srvitinho`    | 400 Bad Request | ✅ Sucesso*  |

> *Os testes marcados como "Sucesso" mesmo com falha foram projetados para validar cenários de erro esperados.

---

## 🚀 Como Executar
1. Clone este repositório.
2. Importe o arquivo de coleção do Postman disponível no projeto.
3. Configure o ambiente no Postman com o URL base `https://fakestoreapi.com`.
4. Execute os testes individualmente ou em lote para validar os resultados.

---

## 📚 Referências
- [Fake Store API Documentation](https://fakestoreapi.com/)
- [Postman Documentation](https://learning.postman.com/)

---