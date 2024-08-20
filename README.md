# MongoDB API
API REST integrada com MongoDB Atlas.

# Conteúdos:

- [Sobre](#Sobre)
- [Requisitos](#Requisitos)
- [Instalação](#Instalação)
- [Tecnologias](#Tecnologias)

## Sobre:

Essa API possibilita persistir os dados de usuários em cloud e manipular esses dados por meio dos principais métodos de manipulação (get, create, put, delete).

## Requisitos:
- Node.js;
- npm;
- MongoDB Atlas Account.

## Instalação:

Siga os passos abaixo para instalar e rodar o projeto:

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/nome-do-projeto.git

```

2. Acesse a pasta do projeto:

```bash
cd nome-do-projeto

```

3. Instale as dependências:

```bash
npm install

```

## Endpoints
- POST: ```http://localhost/users```
- GET:  ```http://localhost/users```
- GET: ```http://localhost/users/{id}```
- PATCH: ```http://localhost/users/{id}```
- PUT: ```http://localhost/users/{id}```
- DELETE ```http://localhost/user/{id}```

4. Execute a aplicação:

```bash
npm run dev
```

## Tecnologias:
- Node.js;
- JavaScript
- Mongodb Atlas;
- Mongoose (ODM)
- Postman.
