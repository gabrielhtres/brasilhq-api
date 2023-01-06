const route = require("express").Router();
const usuarioControler = require("../Controllers/Usuario");

route.get("/", usuarioControler.recuperarTodos);
route.post("/", usuarioControler.registrarUsuario);

module.exports = route;
