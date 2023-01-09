const route = require("express").Router();
const usuarioControler = require("../Controllers/Usuario");

route.get("/", usuarioControler.recuperarTodos);
route.post("/", usuarioControler.registrarUsuario);
route.post("/login", usuarioControler.fazerLogin);

module.exports = route;
