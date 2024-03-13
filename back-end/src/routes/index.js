import { Router } from "express";
const router = Router();

let contexto = 'Olá, '
let nome = 'josé!!'

/* GET home page. */
router.get("/", function (req, res) {
  res.send(`${contexto + nome}`.toUpperCase());
});

export default router;
