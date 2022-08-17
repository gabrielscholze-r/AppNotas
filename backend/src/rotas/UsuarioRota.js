const express = require("express")
const UsuarioController = require('../controllers/UsuarioController.js')
const router = express.Router()

router.get('/Usuario',UsuarioController.listar)
.post('/Usuario', UsuarioController.adicionar)
.get('/Usuario/find', UsuarioController.findByEmail)
.delete('/Usuario', UsuarioController.delete)
.post('/Usuario/login', UsuarioController.login)

module.exports = router