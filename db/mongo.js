// Conexion a BBDD Mongo
const mongoose = require('mongoose')
// Conexion a BBDD Mongo
//const conn = "mongodb://127.0.0.1:27017/laboratorio"
const conn = "mongodb+srv://mnarrieta75:fF0CcggGY43MfS2P@mongodb.r1umurl.mongodb.net/laboratorio"

mongoose.connect(conn, {
    serverSelectionTimeoutMS: 5000
  }).catch(err => console.log(err.reason));

/*
mongoose.connect(conn, {
    directConnection:true,
    useNewUrlParser:true,
    //useUnifiedTopology: true
}).then(() => {
    console.log('Conexion correcta, ' + conn)
}).catch((error) => {
    console.log('Error en la conexión, error')
})
*/ 