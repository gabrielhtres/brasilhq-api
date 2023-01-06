const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
  nome: String,
  usuario: String,
  senha: String,
});

const Usuario = mongoose.model("Usuario", usuarioSchema, "Usuarios");

module.exports = Usuario;
