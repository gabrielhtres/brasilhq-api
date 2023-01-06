const mongoose = require("mongoose");

const categoriaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  popularidade: { type: Number, default: 0, required: false },
});

const Categoria = mongoose.model("Categoria", categoriaSchema, "Categorias");

module.exports = Categoria;
