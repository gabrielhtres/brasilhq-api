const mongoose = require("mongoose");
const livroModel = require("../Models/Livro");

const recuperarTodos = (req, res) => {
  livroModel.find({}, (err, result) => {
    res.status(200);
    res.send(result);
  });
};

const registrarLivro = (req, res) => {
  const { nome, descricao, autor, categorias, ano, paginas, editora, idioma } =
    req.body;
  livroModel.create(
    { nome, descricao, autor, categorias, ano, paginas, editora, idioma },
    (err, result) => {
      res.status(201);
      res.send(result);
    }
  );
};

const atualizarLivro = async (req, res) => {
  console.log(req.params);
  console.log(req.body);
  console.log(mongoose.Types.ObjectId(req.params.id));
  livroModel.findByIdAndUpdate(
    mongoose.Types.ObjectId(req.params.id),
    req.body,
    { new: true, rawResult: true },
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.status(201);
      res.send(result);
    }
  );
};

module.exports = { recuperarTodos, registrarLivro, atualizarLivro };
