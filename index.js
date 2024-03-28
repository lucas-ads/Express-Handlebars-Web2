const express = require("express");
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

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
    nickname: "pedro_bittencurt",
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

//Home
app.get("/", (req, res) => {
  res.redirect("/usuarios");
});

//Cadastro de usuário (GET)
app.get("/usuarios/novo", (req, res) => {
  res.render("formCadastro");
});

//Ver usuário específico
app.get("/usuarios/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const usuario = usuarios.find((user) => user.id === id);

  res.render("usuario", { usuario });
});

//Cadastro de usuário (POST)
app.post("/usuarios/novo", (req, res) => {
  const nome = req.body.nome;
  const nickname = req.body.nickname;
  const password = req.body.password;

  usuarios.push({
    id: proximoId++,
    nome: nome,
    nickname: nickname,
    password: password,
  });

  res.redirect("/");
});

//Listagem de usuários
app.get("/usuarios", (req, res) => {
  res.render("usuarios", { usuarios });
});

app.listen(3000, () => {
  console.log("Server rodando");
});
