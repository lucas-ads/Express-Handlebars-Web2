const express = require("express");
const app = express();

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

var usuarios = [
  {
    id: 1,
    nome: "Ana Gonçalves da Silva",
    nickname: "ana.silva",
    password: "",
  },
  {
    id: 2,
    nome: "Pedro Bittencurt",
    nickname: "pedro_bitt",
    password: "",
  },
  {
    id: 3,
    nome: "Alex Bastos de Souza",
    nickname: "alex.bsouza",
    password: "",
  },
];

var proximoId = 4;

app.get("/usuarios", (req, res) => {
  res.render("usuarios", { usuarios });
});

app.listen(3000, () => {
  console.log("Server rodando");
});
