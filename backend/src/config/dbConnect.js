require("dotenv").config()
const mongoose = require("mongoose")

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rbzm5.mongodb.net/Notas?retryWrites=true&w=majority`, {useNewUrlParser: true,
    useUnifiedTopology: true})

module.exports = mongoose.connection