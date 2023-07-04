const mongoose = require('mongoose')
//require('./../db/mongo')
// Importmos el Schema y el model de Mongoose
//const { model, Schema } = mongoose

// Definimos el esquema de datos
const experimentoSchema = new mongoose.Schema({
    nombre: String,
    fechaini: Date,
    descripcion: String,
    composicion: {
        type: Object,
        properties: 
        {
            elemento: String,
            cantidad: Number
        }

    }
})

// Definimos el modelo
const Experimento = mongoose.model('experimento', experimentoSchema)

// Exportamos el modulo
module.exports = Experimento



/*
// Mostrar todos los documents
Experimento.find({})
    .then(result => {
    console.log(result)
    //mongoose,mongoose.connection.close()
})
*/
