const app = require("./app");
const dotenv = require("dotenv");
const connectedToDatabase = require("./database/connection");
const port = process.env.PORT | 8080;

dotenv.config();
connectedToDatabase();

app.listen(port, () =>
  console.log("server running at url http://localhost:8080")
);
