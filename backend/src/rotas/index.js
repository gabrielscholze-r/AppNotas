const express = require("express")
const Nota = require('./NotaRota.js')
const Usuario = require('./UsuarioRota.js')
const routes = (app) => {
    app.route('/').get((req,res)=> {
        res.status(200).send("Rota funcionando")
    })
    app.use(express.json(), Usuario,Nota)
}
module.exports = routes