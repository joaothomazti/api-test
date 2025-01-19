
<h3 align="center">
    <h1> Testes de API de Usuário - Projeto</h1>
<h3 >

# Indice

- [Sobre](#-sobre)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Como baixar o projeto](#-como-baixar-o-projeto)
- [Casos de Teste Implementados](#-casos-de-teste-implementados)
- [Integração Contínua](#-integração-contínua)

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

## 🚀 Integração Contínua

Este projeto está configurado para rodar testes automatizados em um pipeline de integração contínua. O arquivo de configuração do CI é o `.github/workflows/ci.yml`, que define o processo automatizado para executar os testes a cada push ou pull request para o repositório.

### O que acontece no pipeline de CI:

1. **Execução de Testes**:  
   O CI executa o Cypress para rodar todos os testes definidos no projeto sempre que houver um push ou pull request. Ele verifica se todos os testes estão passando para garantir que a qualidade do código seja mantida.

2. **Ambiente de Execução**:  
   O pipeline é executado em um ambiente controlado onde as dependências são instaladas automaticamente e os testes são executados em modo headless.

3. **Notificações e Resultados**:  
   O status da execução dos testes (sucesso ou falha) é notificado no GitHub, e o log completo dos testes pode ser acessado através da interface do GitHub Actions.
---
