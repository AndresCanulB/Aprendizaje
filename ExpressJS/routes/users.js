const { Router } = require("express");
const router = Router();

router.get("/users", (req, res) => {
  res.render("users");
});

router.get("/profile/:id", (req, res) => {
  res.send("Perfil de usuario");
});

module.exports = router;
