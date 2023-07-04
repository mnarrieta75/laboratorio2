const Elemento = require('./../models/elemento')

exports.listaElementos = (req, res) => {
    Elemento.find()
    .then(elementos => {
        res.send(elementos);
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
      res.json(elemento);
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

/*
findByIdAndDelete(req.params.id)
*/