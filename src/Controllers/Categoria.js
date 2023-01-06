const categoriaModel = require("../Models/Categoria");

const recuperarTodos = (req, res) => {
  categoriaModel.find({}, (err, result) => {
    res.status(200);
    res.send(result);
  });
};

const registrarCategoria = (req, res) => {
  const { nome, usuario, senha } = req.body;
  categoriaModel.create({ nome }, (err, result) => {
    res.status(201);
    res.send(result);
  });
};

module.exports = { recuperarTodos, registrarCategoria };
