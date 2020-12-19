const express = require('express');
const router = express.Router();
const empregadoController = require('../controllers/empregado.controller');

// Busca todos os empregados
router.get('/', empregadoController.findAll);

// Busca um empregado pelo ID 
router.get('/:id', empregadoController.findById);

// Cria um novo empregado
router.post('/', empregadoController.create);

// Atualiza um empregado pelo ID
router.put('/:id', empregadoController.update);

// Delete um empregado pelo ID
router.delete('/:id', empregadoController.delete);

module.exports = router;


