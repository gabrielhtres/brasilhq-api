const bcrypt = require("bcrypt");

const usuarioModel = require("../Models/Usuario");
const auth = require("../Middlewares/auth");

const fazerLogin = async (req, res) => {
  const { usuario, senha } = req.body;

  const usuarioRecuperado = await usuarioModel.findOne({ usuario });
  console.log(usuarioRecuperado);

  const loginValido = await bcrypt.compare(senha, usuarioRecuperado.senha);

  if (loginValido) {
    res.status(200).send(auth.gerarToken(usuarioRecuperado._id));
  }
};

// const retorno = await usuarioModel.findOne({ usuario, senha });

const recuperarTodos = (req, res) => {
  usuarioModel.find({}, (err, result) => {
    res.status(200);
    res.send(result);
  });
};

const registrarUsuario = (req, res) => {
  const { nome, usuario, senha } = req.body;

  bcrypt.genSalt(10, (err, salt) => {
    if (err) console.log(err);

    bcrypt.hash(senha, salt, (err, hash) => {
      if (err) console.log(err);

      usuarioModel.create({ nome, usuario, senha: hash }, (err, result) => {
        res.status(201);
        res.send(result);
      });
    });
  });
};

module.exports = { fazerLogin, recuperarTodos, registrarUsuario };
