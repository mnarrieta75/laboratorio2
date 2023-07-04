const mongoose = require('mongoose')
//require('./../db/mongo')


// Definimos el esquema de datos
const elementoSchema = new mongoose.Schema({
    "nombre": "String",
    "cantidad": "Number"
})

// Definimos el modelo
const Elemento = mongoose.model('elemento', elementoSchema)

// Exportamos el modulo
module.exports = Elemento

/*
// Mostrar todos los documents
Elemento.find({})
    .then(result => {
    console.log(result)
    //mongoose.connection.close()
})

*/