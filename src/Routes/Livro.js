const route = require("express").Router();
const livroController = require("../Controllers/Livro");

route.get("/", livroController.recuperarTodos);
route.post("/", livroController.registrarLivro);
route.put("/:id", livroController.atualizarLivro);

module.exports = route;
