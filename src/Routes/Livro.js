const route = require("express").Router();
const livroController = require("../Controllers/Livro");
const auth = require("../Middlewares/auth");

route.get("/:id", livroController.recuperarPorId);
route.get("/", auth.verificarToken, livroController.recuperarTodos);
route.post("/", livroController.registrarLivro);
route.put("/:id", livroController.atualizarLivro);
route.delete("/:id", livroController.excluirLivro);

module.exports = route;
