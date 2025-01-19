
<h3 align="center">
    <h1> Testes de API de Usuário - Projeto</h1>
<h3 >

# Indice

- [Sobre](#-sobre)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Como baixar o projeto](#-como-baixar-o-projeto)
- [Casos de Teste Implementados](#-casos-de-teste-implementados)

## 🔖&nbsp; Sobre

Este projeto contém uma suíte de testes automatizados para a API de Usuários. Os testes são realizados usando o Cypress, e as operações testadas incluem a criação, atualização, exclusão e busca de usuários, além de validações de campos obrigatórios e valores válidos.

---

## 🚀 Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias

- [Node.js](https://nodejs.org/pt)
- [Cypress](https://www.cypress.io/)

---

## 🗂 Como baixar o projeto

```bash

    # Clonar o repositório
    $ git clone https://github.com/joaothomazti/api-test.git

    # Entrar no diretório
    $ cd api-test

    # Instalar as dependências
    $ npm install

    # Rodar Testes em Modo Interativo (Com Interface Gráfica)
    $ npm test

    # Rodar Testes em Modo Headless (Sem Interface Gráfica)
    $ npm run test:headless
```

## 🔖 Casos de Teste Implementados

A seguir, uma explicação dos casos de teste implementados:

### Casos de Sucesso

- **Criar um Usuário com Sucesso**:  
  Cria um usuário válido e espera que a resposta tenha status 201 e a mensagem de sucesso "Cadastro realizado com sucesso".

- **Listar Todos os Usuários**:  
  Realiza uma requisição GET para listar todos os usuários e verifica se o retorno contém as propriedades `usuarios` e `quantidade`.

- **Listar um Usuário**:  
  Cria um novo usuário e verifica se a resposta da requisição GET contém as informações corretas do usuário criado.

- **Atualizar um Usuário**:  
  Cria um novo usuário, depois faz uma atualização (modifica o nome) e verifica se a resposta contém a mensagem "Registro alterado com sucesso".

- **Excluir um Usuário**:  
  Cria um novo usuário, depois realiza uma requisição DELETE e verifica se a resposta contém a mensagem "Registro excluído com sucesso".

### Casos de Erro

- **Email Duplicado**:  
  Tenta criar um usuário com o mesmo email de outro já existente e verifica se a resposta contém a mensagem de erro "Este email já está sendo usado".

- **Email Inválido**:  
  Tenta criar um usuário com um email inválido e verifica se a resposta contém a mensagem de erro "email deve ser um email válido".

- **Campo Administrador Inválido**:  
  Tenta criar um usuário com o valor inválido no campo administrador e verifica se a resposta contém a mensagem de erro "administrador deve ser 'true' ou 'false'".

- **Campos Obrigatórios Ausentes**:  
  Tenta criar um usuário sem fornecer campos obrigatórios, como nome, email ou senha, e verifica se a resposta contém a mensagem de erro apropriada.

- **Usuário Não Encontrado**:  
  Tenta buscar um usuário que não existe e verifica se a resposta contém a mensagem de erro "Usuário não encontrado".

- **Excluir Usuário Inexistente**:  
  Tenta excluir um usuário que não existe e verifica se a resposta contém a mensagem de erro "Nenhum registro excluído".

---
