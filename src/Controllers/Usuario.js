const usuarioModel = require("../Models/Usuario");

const getAll = (req, res) => {
  usuarioModel.find({}, (err, result) => {
    res.status(200);
    res.send(result);
  });
};

const registrarUsuario = (req, res) => {
  const { nome, usuario, senha } = req.body;
  usuarioModel.create({ nome, usuario, senha }, (err, result) => {
    res.status(201);
    res.send(result);
  });
};

module.exports = { getAll, registrarUsuario };
