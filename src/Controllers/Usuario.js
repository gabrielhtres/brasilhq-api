const usuarioModel = require("../Models/Usuario");

const auth = require("../Middlewares/auth");

const fazerLogin = async (req, res) => {
  const { usuario, senha } = req.body;

  const retorno = await usuarioModel.findOne({ usuario, senha });

  res.status(200).send(auth.gerarToken(retorno._id));
};

const recuperarTodos = (req, res) => {
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

module.exports = { fazerLogin, recuperarTodos, registrarUsuario };
