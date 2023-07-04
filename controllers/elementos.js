const Elemento = require('./../models/elemento')
exports.listaElementos = (req, res) => {
    Elemento.find()
    .then(elementos => {
        //res.send(elementos);
        res.render("../views/pages/elementos", elementos)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

exports.creaElemento = (req, res) => {
  const { nombre, cantidad } = req.body;

  // Create a new User instance
  const elemento = new Elemento({
    nombre,
    cantidad,
  });

  // Save the user to the database
  elemento.save()
    .then(() => {
      res.status(201).json({ message: 'element created successfully' });
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error creating element', error });
    });
};

exports.listaElemento = (req, res, next) => {
  Elemento.findById(req.params.id)
    .then((elemento) => {
      if (!elemento) {
        // Handle resource not found error
        const error = new Error('element not found');
        error.statusCode = 404;
        throw error;
      }
      //res.json(elemento);
      res.render("../views/pages/elemento", elemento)
    })
    .catch((error) => {
      // Pass the error to the error handling middleware
      next(error);
    });
};

exports.verElementos = (req, res, next) => {
  Elemento.find()
    .then((elementos) => {
      if (!elementos) {
        // Handle resource not found error
        const error = new Error('elements not found');
        error.statusCode = 404;
        throw error;
      }
      //res.json(elemento);
      res.render("../views/pages/elementos", elementos)
    })
    .catch((error) => {
      // Pass the error to the error handling middleware
      next(error);
    });
};



exports.actualizaElemento = (req, res, next) => {
  Elemento.findOneAndUpdate({_id: req.params.id},req.body)
    .then((elemento) => {
      if (!elemento) {
        // Handle resource not found error
        const error = new Error('element not found');
        error.statusCode = 404;
        throw error;
      }
      res.json(elemento);
    })
    .catch((error) => {
      // Pass the error to the error handling middleware
      next(error);
    });
};

exports.eliminaElemento = (req, res, next) => {
  Elemento.findByIdAndDelete(req.params.id)
    .then((elemento) => {
      if (!elemento) {
        // Handle resource not found error
        const error = new Error('element not found');
        error.statusCode = 404;
        throw error;
      }
      res.json(elemento);
    })
    .catch((error) => {
      // Pass the error to the error handling middleware
      next(error);
    });
};

exports.compruebaElemento = (req, res, next) => {
  Elemento.findById(req.params.id)
    .then((elemento) => {
      if (!elemento) {
        // Handle resource not found error
        const error = new Error('element not found');
        error.statusCode = 404;
        throw error;
      }
      var cantidad = elemento.cantidad
      if (cantidad < 1)
        res.send('No hay stock suficiente, solo quedan ' + elemento.cantidad)
      else
          res.send('Hay stock suficiente, quedan ' + elemento.cantidad)
      //res.json(elemento.cantidad);
    })
    .catch((error) => {
      // Pass the error to the error handling middleware
      next(error);
    });
};

exports.creaElementoForm = (req, res) => {
  const { nombre, cantidad } = req.body;

  // Create a new User instance
  const elemento = new Elemento({
    nombre,
    cantidad,
  });

  // Save the user to the database
  elemento.save()
    .then(() => {
      res.status(201).json({ message: 'element created successfully' });
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error creating element', error });
    });
};

/*
module.exports = {
    findAllElementos(req, res) {
        Elemento.find()
        .then(function (elemento) {
            //.then(function (req,res) {
          console.log(elemento);
          res.jsonp(elemento);
            //return cliente
          })
        .catch(function (err) {
            console.log(err);
        });  
    },
    findElemento(req,res) {
    //app.get('/clientesList/:id',(req,res) => {
        //console.log(req.param.id)
    Elemento.findById({_id: req.param.id})
    .then(function(elemento) {
        if (!elemento) {
         res.jsonp(elemento)
        }
    })
    .catch(function (err) {
            console.log(err);
    });  
    },
    
};
*/

/*
module.exports = {
    findElemento(req, res) {
//app.get('/clientesList/:id',(req,res) => {
    Elemento.findById(req.params.id)
    .then(function(elemento) {
        if (!elemento) {
         res.jsonp(elemento)
        }
    })
    .catch(function (err) {
            console.log(err);
    });  
    },
};
*/