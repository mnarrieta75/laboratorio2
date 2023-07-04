// Conexion a DDBB
const mongoose = require('mongoose')
require('./db/mongo')





const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Modulo EJS
app.set('view engine','ejs')



// Incluimos los Modelos de Datos
const experimentoModel = require("./models/experimento")
const elementoModel = require("./models/elemento")

// Incluyo las funciones del controlador
const ElementoController = require('./controllers/elementos');

// Ruta pruebas
//require('./routes/pruebas.js')(app);

// Definimos las rutas básicas basada en modelos
app.get("/elementos", async (request, response) => {
    const elements = await elementoModel.find({});
    try {
      response.send(elements);
    } catch (error) {
      response.status(500).send(error);
    }
  });

// Trabajamos con las rutas
const elementosRoutes = require("./routes/elementos");
app.use(elementosRoutes);

const experimentosRoutes = require("./routes/experimentos");
app.use(experimentosRoutes);

//const pruebasRoutes = require("./routes/pruebas");
//app.use(pruebasRoutes);

app.get("/pages/",(req,res) => {
  const data = { username: 'Pepe'}
  res.render('pages/index',data)
})


app.get("/experimentos", async (request, response) => {
    const experiments = await experimentoModel.find({});
    try {
      response.send(experiments);
    } catch (error) {
      response.status(500).send(error);
    }
  });

// simple route
/*
app.get("/", (req, res) => {
  res.json({ "nombre": "APP Laboratorio" })
  console.log("GET /")
});
*/

const path = require("path");
app.get("/altaelemento.html", (req,res) => {
    res.sendFile(path.join(__dirname + "/views/altaelemento.html"))
    console.log("GET /views/altaelemento.html")
})

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname + "/views/index.html"))
    console.log("GET /views/index.html")
})



const PORT = process.env.PORT
app.listen(PORT, (err) => {
    if (err) {console.log("Error al iniciar el servidor")}
    else { console.log("Servidor corriendo en el puerto ", PORT)}
})


