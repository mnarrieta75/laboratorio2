// Conexion a BBDD Mongo
const mongoose = require('mongoose')
// Conexion a BBDD Mongo
const conn = "mongodb://127.0.0.1:27017/laboratorio"
mongoose.connect(conn, {
    directConnection:true,
    useNewUrlParser:true,
    //useUnifiedTopology: true
}).then(() => {
    console.log('Conexion correcta, ' + conn)
}).catch((error) => {
    console.log('Error en la conexión, error')
}) 