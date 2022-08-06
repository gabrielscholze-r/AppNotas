const mongoose = require("mongoose")

const Nota = new mongoose.Schema({
    id: {type: String},
    title: {type: String, require: true},
    content: {type: String, require: true},
    numCaracteres: {type: Number},
    dataCriacao: {type: Date},
    autor: {type: mongoose.Schema.Types.ObjectId, ref:"usuario", required: true}
},
{
    versionKey: false
}
)

module.exports = mongoose.model('nota', Nota)