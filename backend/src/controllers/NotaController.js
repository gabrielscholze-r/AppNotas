const Nota = require("../models/Nota.js")
const mongoose = require("mongoose")
module.exports = {
    adicionar: async (req, res) => {
        const { title, subject, body, autor } = req.body

        const note = await Nota.create({
            title: title,
            subject: subject,
            body: body,
            autor: mongoose.Types.ObjectId(autor),
            dataCriacao: new Date()
        })
        if (!note) {
            res.status(500).send({ message: `${err} - falha ao cadastrar a nota!` })
        }
        else {
            res.status(201).send(note.toJSON())
        }

    },
    read: async (req, res) => {
        Nota.find().populate("autor", "email nome").exec((err, livros) => {
            if (err) {
                res.status(500).json({ message: err.message })
            }
            res.status(200).json(livros)
        })
    },
    findByUser: async (req, res) => {
        const { id } = req.params
        const lista = await Nota.find({ autor: id })
        if (!lista) {
            return res.status(404).json({ message: "Nenhuma nota no usuario" })
        }
        return res.status(200).send(lista)
    },
    deleta: async (req, res) => {
        const { id } = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(401).json({error: "Regitro não encontrado"});
        }
        const del = await Nota.findOneAndDelete({_id:id});
        return res.json(del);
    },
    atualiza: async (req, res) => {
        const {id, title, subject, body} = req.body
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(401).json({error: "informação inválida"});
        }
        await Nota.updateOne({_id:id}, {
            title: title,
            subject: subject,
            
        })
    }
}