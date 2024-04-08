const { Router } = require("express");
const {
  getHistorias,
  createHistorias,
  deleteHistorias,
  updateHistoria,
} = require("../controllers/historias.controller");
const router = Router();

router.get("/historia", getHistorias);
router.post("/historia", createHistorias);
router.delete("/historia/:id", deleteHistorias);
router.put("/historia/:id", updateHistoria);

module.exports = router;
