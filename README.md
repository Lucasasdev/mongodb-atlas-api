# MongoDB Atlas API
Neste projeto é possível salvar dados básicos dos usuários como nome, sobrenome, email e uma senha no bando de dados e realizar as interações de CRUD com esses dados.

### Objetivo do desenvolvimento do projeto
Solidificar os conhecimentos com API's, melhorar a compreensão do protocolo HTTP, estruturar e modular um projeto API com fácil estrutura de código para ampliar a legibilidade do código e matunenabilidade posterior.

### Tecnologias
**Node.JS, JavaScript, Express.js, Mongodb Atlas, Mongoose(ODM), Postman**

### Requisitos para funcionar
|MongoDB|Node.JS|
|-------|-------|
|V7.0.3+|V18.16.0+|

### Como clonar a API
1. Clone o projeto para uma pasta da sua escolha: `git clone https://github.com/Lucasasdev/user-api.git`
2. Abra o projeto e instale todas as dependências necessárias `npm install or yarn`
3. Configure o arquivo **.env** para se conectar com o mongodb usando como base o arquivo **.env.example**
4. Utilize alguma interface de testes para API's, como **Postman** ou **Insominia**.
5. Exemplo post JSON :
`
{
  "firstname": "example",
  "lastname": "example",
  "email": "example@example.com,
  "password": "********"
  }
`
