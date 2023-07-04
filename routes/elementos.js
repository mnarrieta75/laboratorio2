const express = require("express");
const elementosController = require("./../controllers/elementos");

const router = express.Router();

router.get('/listaElementos', elementosController.listaElementos);
router.get('/listaElemento/:id', elementosController.listaElemento);
router.post('/creaElemento', elementosController.creaElemento);
router.put('/actualizaElemento/:id', elementosController.actualizaElemento);
router.delete('/eliminaElemento/:id', elementosController.eliminaElemento);
router.get('/compruebaElemento/:id', elementosController.compruebaElemento);
router.post('/creaElementoForm', elementosController.creaElemento);



router.get("/api/elementos", (req, res) => {
  elementosController.findAllElementos(req, res);
});

router.get("/api/elemento/:id", (req, res) => {
  elementosController.findElemento(req, res)
});

router.get("/posts/:id", async (req, res) => {
  const post = await elementosController.findElemento({ _id: req.params.id })
  res.send(post)
})



module.exports = router;