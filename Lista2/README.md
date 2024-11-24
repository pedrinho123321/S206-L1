# **Testes da API Cat Fact**

Este projeto contém testes automatizados para a API [Cat Fact](https://catfact.ninja), criada para fornecer fatos aleatórios sobre gatos. Os testes foram configurados utilizando o **Postman**, abordando cenários positivos e negativos.

## **Cenários de Teste**
Abaixo estão os cenários configurados:

1. **Obter um fato aleatório (GET /fact)**  
   - **Descrição:** Verifica se a API retorna um fato aleatório sobre gatos.  
   - **Validação:** Código HTTP 200 e os campos `fact` e `length` na resposta.

2. **Requisição com método inválido (POST /fact)**  
   - **Descrição:** Tenta fazer uma requisição POST em vez de GET.  
   - **Validação:** Código HTTP 405 (Método Não Permitido).  

3. **Listar múltiplos fatos (GET /facts)**  
   - **Descrição:** Retorna uma lista de fatos paginados.  
   - **Validação:** Código HTTP 200 e os campos `data` (array de fatos) e `total`.

4. **Enviar página inválida (GET /facts?page=-1)**  
   - **Descrição:** Tenta acessar uma página inválida.  
   - **Validação:** Código HTTP 200, e o campo `data` ainda deve ser um array (mesmo vazio).  

5. **Verificar paginação correta (GET /facts?page=1&limit=5)**  
   - **Descrição:** Retorna até 5 fatos da página 1.  
   - **Validação:** Código HTTP 200 e no máximo 5 itens no array `data`.

6. **Endpoint inexistente (GET /invalid-endpoint)**  
   - **Descrição:** Acessa um endpoint que não existe.  
   - **Validação:** Código HTTP 404 (Não Encontrado).

---

## **Como Usar**
Siga as etapas abaixo para importar os testes no Postman e executá-los.

### **1. Pré-requisitos**
- Ter o [Postman](https://www.postman.com/downloads/) instalado.

### **2. Importar os Arquivos**
1. Baixe o arquivo JSON da collection do Postman (fornecido no projeto).  
2. No Postman, clique em **Import** no canto superior esquerdo.  
3. Selecione o arquivo JSON baixado para carregar os testes.

### **3. Executar os Testes**
1. Após importar a collection, clique nela na barra lateral do Postman.  
2. Escolha um dos requests e clique em **Send** para executar o teste.  
3. Verifique os resultados na aba **Tests**.

---

## **Estrutura do Projeto**
- `CatFactCollection.json`: Arquivo da collection com os testes configurados.
- `README.md`: Instruções para executar os testes.
- `newman`: Arquivo html onde você pode ver os resultados dos testes.

---


# **Respostas da segunda Questão**

1. Os testes desenvolvidos são manuais ou automatizados?
Resposta:
Os testes desenvolvidos são automatizados.
Justificativa:
Foram configurados no Postman utilizando scripts na aba "Tests", permitindo que as validações sejam feitas automaticamente após cada requisição. Assim, não é necessário verificar manualmente as respostas, já que os resultados dos testes são exibidos automaticamente.

2. Alguns dos testes desenvolvidos são testes Fim-a-Fim (End-To-End)?
Resposta:
Não.
Justificativa:
Os testes desenvolvidos verificam endpoints individuais e suas respostas (testes de API), sem validar o fluxo completo de uma aplicação. Testes End-To-End normalmente envolvem múltiplos sistemas interagindo, como frontend, backend e banco de dados, para simular cenários reais de uso.

3. O que se deve fazer para que os testes desenvolvidos funcionem em modo regressão?
Resposta:
Para que os testes funcionem em modo regressão, eles devem ser incluídos em uma suite de testes automatizada que possa ser executada regularmente (como parte de um pipeline de CI/CD).
Justificativa:
Isso garante que os testes sejam repetidos automaticamente sempre que houver alterações no código ou na API, permitindo identificar regressões (bugs introduzidos por novas mudanças). É importante também manter os testes atualizados conforme a API evolui.
