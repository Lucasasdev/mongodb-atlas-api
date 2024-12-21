# Mongodb api
API REST node e express integrada ao banco de dados não relacional do tipo document Mongodb que utiliza o [Object-Document Mapper(ODM)](https://www.dctacademy.com/blog/what-is-object-document-mapper-odm) mongoose para modelagem e manipulação de dados.

## Sobre
Salva dados do usuários e permite a manipulação por meio dos principais métodos (get, create, put, delete).

## Requisitos
- Node.js;
- npm;
- mongodb.

## Instalação

Siga os passos abaixo para instalar e rodar o projeto:

1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/nome-do-projeto.git

```

2. Acesse a pasta do projeto

```bash
cd nome-do-projeto

```

3. Instale as dependências

```bash
npm install

```
4. Execute a aplicação

```bash
npm run dev
```
## Endpoints
- POST: ```http://localhost/users```
- GET:  ```http://localhost/users```
- GET: ```http://localhost/users/{id}```
- PATCH: ```http://localhost/users/{id}```
- PUT: ```http://localhost/users/{id}```
- DELETE ```http://localhost/user/{id}```
  
## Tecnologias:
Node.js, express.js, JavaScript, Mongodb, Mongoose (ODM), Postman.
