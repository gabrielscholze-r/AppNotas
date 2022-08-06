const Nota = require("../models/Nota.js")

module.exports = {
    adicionar: async (req, res) => {
        let note = new Nota(req.body)
        
        note.save((err) => {
            if(err){
                res.status(500).send({message: `${err} - falha ao cadastrar o livro!`})
            }else{
                res.status(201).send(note.toJSON())
            }
        })
    },
    read: async (req, res) => {
        Nota.find().populate("autor", "email nome").exec((err, livros) => {
            if (err) {
                res.status(500).json({ message: err.message })
            }
            res.status(200).json(livros)
        })
    },
    findByUser: async (req,res) => {
        const {id} = req.params
        const lista = await Nota.find({autor: id})
        if(!lista){
            return res.status(404).json({message: "Nenhuma nota no usuario"})
        }
        return res.status(200).send(lista)
    },
    deleta: async (req, res) => {
        const {id} = req.params
        try {
            await Nota.findByIdAndDelete(id);
            return res.status(200)
        } catch (error) {
            return res.status(500).json({error: error.message})
        }
        

    }
}