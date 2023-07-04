const express = require("express");
const experimentosController = require("./../controllers/experimentos");

const router = express.Router();

router.get("/api/experimentos", (req, res) => {
  experimentosController.findAllExperimentos(req, res);
});

module.exports = router;