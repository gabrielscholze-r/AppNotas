const mongoose = require("mongoose")

const Usuario = mongoose.Schema({
    id: {type: String},
    email: {type: String, required: true, unique: true},
    nome: {type: String, required: true},
    senha: {type: String, required: true}
},
    {
        versionKey: false
    }
)

module.exports = mongoose.model('usuario', Usuario)