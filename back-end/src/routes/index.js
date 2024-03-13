import { Router } from "express";
const router = Router();

<<<<<<< HEAD
let contexto = 'Olá, '
let nome = 'josé!!'

/* GET home page. */
router.get("/", function (req, res) {
  res.send(`${contexto + nome}`.toUpperCase());
=======
/* GET home page. */
router.get("/", function (req, res) {
  res.send("Hello World!");
>>>>>>> 1107b3af2b5a6d593470007f77b7593689da196f
});

export default router;
