const express = require("express");
const routeshistorias = require("./routes/historias.routes");
const login = require("./routes/login.routes");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use(routeshistorias);
app.use(login);

module.exports = app;
