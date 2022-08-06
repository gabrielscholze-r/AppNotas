const routes = require("./src/rotas/index.js")
const express = require("express")
// const bodyParser = require('body-parser');


const dbConnect = require("./src/config/dbConnect.js")


dbConnect.on("error", console.log.bind(console, 'Erro de conexão'))
dbConnect.once("open", ()=> {
    console.log("Conectado ao banco de dados")
})

const app = express()
app.use(express.json())

routes(app)


module.exports = app