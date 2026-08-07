const { Router } = require("express");
const router = Router();
const axios = require("axios");

router.get("/", (req, res) => {
  const title = "Mi pagina creada desde express";
  let isActive = false;

  const users = [
    {
      name: "Juan",
      age: 25,
      email: "juan@gmail.com",
    },
    {
      name: "Pedro",
      age: 30,
      email: "pedro@gmail.com",
    },
    {
      name: "Maria",
      age: 28,
      email: "maria@gmail.com",
    },
  ];

  res.render("index", { title, isActive, users });
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

router.get("/posts", (req, res) => {
  axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
    res.render("posts", { posts: response.data });
  });
});

module.exports = router;

// Axios es un modulo que permite hacer peticiones a APIs

// npm i axios
