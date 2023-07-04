const express = require("express");



const router = express.Router();
const pruebasController = require("./../controllers/pruebas");

router.get('/listaElementos', pruebasController.listaElementos);
router.get('/listaElemento/:id', pruebasController.listaElemento);
router.get('/compruebaElemento/:id', pruebasController.compruebaElemento);
router.post('/creaElemento', pruebasController.creaElemento);
router.put('/actualizaElemento/:id', pruebasController.actualizaElemento);
router.delete('/eliminaElemento/:id', pruebasController.eliminaElemento);


module.exports = router;
