const route = require("express").Router();
const usuarioControler = require("../Controllers/Usuario");

route.get("/", usuarioControler.getAll);
route.post("/registrar", usuarioControler.registrarUsuario);

module.exports = route;
