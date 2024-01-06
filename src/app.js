const express = require("express");
const app = express();

const router = require("./routes");

//data transfer JSON were defined as standart.
app.use(express.json());

//with that configuration is possible use the routers in another file without call modules in the same place.
app.use(router);

module.exports = app;
