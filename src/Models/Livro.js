const mongoose = require("mongoose");

const livroSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  autor: { type: String, required: true },
  categorias: { type: Array, required: true },
  ano: { type: Number, required: true },
  paginas: { type: Number, required: true },
  editora: { type: String, required: true },
  idioma: { type: String, required: true },
});

const Livro = mongoose.model("Livro", livroSchema, "Livros");

module.exports = Livro;
