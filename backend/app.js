const routes = require("./src/rotas/index.js")
const express = require("express")
// const bodyParser = require('body-parser');
const cors = require('cors');

const dbConnect = require("./src/config/dbConnect.js")


dbConnect.on("error", console.log.bind(console, 'Erro de conexão'))
dbConnect.once("open", ()=> {
    console.log("Conectado ao banco de dados")
})

const app = express()
app.use(express.json())
app.use(cors())
var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSucessStatus: '200'
}
app.use(cors(corsOptions))
routes(app)


module.exports = app