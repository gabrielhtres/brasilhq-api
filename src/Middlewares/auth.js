const jwt = require("jsonwebtoken");
const SECRET = "teste";

const verificarToken = (req, res, next) => {
  const token = req.headers["x-access-token"];

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) return res.status(401).end();

    next();
  });
};

const gerarToken = (id) => {
  const token = jwt.sign({ id }, SECRET, { expiresIn: "120s" });

  return { auth: true, token };
};

module.exports = { gerarToken, verificarToken };
