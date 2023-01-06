const express = require("express");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const connectDB = require("./dbConnection");
const usuarioRoute = require("./Routes/Usuario");

connectDB();
const app = express();
const porta = 3001;
app.use(express.json());
app.use("/usuario", usuarioRoute);

app.listen(porta || 3001, () => {
  console.log(`Server is running on port ${porta}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;
