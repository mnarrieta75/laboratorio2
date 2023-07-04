const Experimento = require('./../models/experimento')

module.exports = {
    findAllExperimentos(req, res) {
        Experimento.find()
        .then(function (experimento) {
            //.then(function (req,res) {
          console.log(experimento);
          res.jsonp(experimento);
            //return cliente
          })
        .catch(function (err) {
            console.log(err);
        });  
    },
  };