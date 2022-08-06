const Usuario = require('../models/Usuario.js')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

module.exports = {
    listar: async (req, res) => {
        const lista = await Usuario.find();
        return res.json(lista);
    },
    adicionar: async (req, res) => {
        const {email,nome,senha} = req.body;
        if(!email || !nome || !senha) {
            return res.status(400).json({error: "missing information"})
        }
        let passwordHash = bcrypt.hashSync(senha,5)
        const NotaCriada = await Usuario.create({
            email,
            nome,
            senha: passwordHash
        }) 
        return res.status(201).json(NotaCriada)
    },
    findByEmail: async (req, res) => {
        const {email} = req.body
        if(!email){
            return res.status(400).json({error: "Faltam informações"})
        }
        const user = await Usuario.findOne({email:email})
        if(!user){
            return res.status(404).json({error: "Usuário não encontrado"})
        }
        return res.json(user)
    },
    delete: async (req,res)=>{
        const {email, id} = req.body
        if(!email && !id) {
            return res.status(400).json({error: "Faltam informações"})
        }
        if(email){
           await Usuario.findOneAndDelete({email: email})
        }
        else{
           await Usuario.findOneAndDelete({_id: id})
        }
        res.status(200).json({message: "Usuario deletado!"})
    },
    login: async (req,res) => {
        const {email, senha} = req.body
        const User = Usuario.findOne({email: email})
        if(!User){
            return res.status(404).json({error: "User not Found"})
        }
        if(bcrypt.compareSync(senha, User.senha)){
            return res.status(200).json({isLogged: true})
        }
        return res.status(400).json({isLogged: false})
    }
}