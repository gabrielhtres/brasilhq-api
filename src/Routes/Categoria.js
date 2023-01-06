const route = require("express").Router();
const categoriaController = require("../Controllers/Categoria");

route.get("/", categoriaController.recuperarTodos);
route.post("/", categoriaController.registrarCategoria);

module.exports = route;
