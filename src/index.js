const express = require("express");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connectDB = require("./dbConnection");
const server = require("./server");

const indexRoute = require("./Routes");
const usuarioRoute = require("./Routes/Usuario");
const categoriaRoute = require("./Routes/Categoria");
const livroRoute = require("./Routes/Livro");

const app = express();
app.use(express.json());
app.use("/", indexRoute);
app.use("/usuario", usuarioRoute);
app.use("/categoria", categoriaRoute);
app.use("/livro", livroRoute);

connectDB();
server(app);

module.exports = app;
