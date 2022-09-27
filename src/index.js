const express = require("express");

const server = express();

server.use(express.json());

const filmes = ["A queda", "A Orfã", "Don't see", "Homem aranha"];

// retornar um curso;
server.get("/filmes?/:index", (req, res) => {
  const { index } = req.params;

  return res.json(filmes[index]);
});

// retornar todos os filmes;
server.get("/filmes", (req, res) => {
  return res.json(filmes);
});

//criar um novo curso
server.post("/filmes", (req, res) => {
  const { name } = req.body;
  filmes.push(name);

  return res.json(filmes);
});

//Atualizar um filme
server.put("/filmes/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  filmes[index] = name;

  return res.json(filmes);
});

//delete
server.delete("filmes/:index", (req, res) => {
  const { index } = req.params;
  filmes.splice(index, 1);

  return res.json({ message: "O filme foi deletado" });
});

server.listen(3000);
