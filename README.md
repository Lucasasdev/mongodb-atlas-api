# Node mongodb API

## Proposta do projeto

## Objetivo da API

Neste projeto é possível salvar dados básicos dos usuários como nome, sobrenome, email e uma senha no bando de dados e realizar as interações de CRUD com esses dados.

**Modelo json exemplo**
``
{
  "firstname": "example",
  "lastname": "example",
  "email": "email@example.com
  "password": "********"
  }
``

## Objetivo do desenvolvimento do projeto

Solidificar os conhecimentos com API's, melhorar a compreensão do protocolo HTTP, estruturar e modular um projeto API com fácil estrutura de código para ampliar a legibilidade do código e matunenabilidade posterior.

## Tecnologias

- Nodejs
- JavaScript
- Express.js
- Mongodb Atlas
- ODM Mongoose
- Postman (usado externamente para testar as rotas e suas funcionalidades)

## Estrutura utilizada

Arquitetura MVC

## Requisitos

Mongodb Atlas ou Mongodb: v7.0.3
Node.js: v18.16.0

## Como clonar a API

1. Clone o projeto para uma pasta da sua escolha: `git clone https://github.com/Lucasasdev/user-api.git`

2. Abra o projeto e instale todas as dependências necessárias `npm intall`

3. Configure um arquivo **.env** para se conectar com o mongodb usando como base o arquivo **.env.example**

4. Utilize alguma interface de testes para API's, como **Postman** ou **Insominia**.

**Deploy na plataforma Vercel**
