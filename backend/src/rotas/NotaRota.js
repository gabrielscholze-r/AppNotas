const express = require('express')
const NotaController = require('../controllers/NotaController.js')
const Nota = require('../models/Nota.js')
const router = express.Router()

router
.get('/Nota', NotaController.read)
.post('/Nota', NotaController.adicionar)
.get('/Nota/find/:id', NotaController.findByUser)
.delete('/Nota/:id', NotaController.deleta)

module.exports = router