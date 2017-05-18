var Negocio = require("../negocio/negocio.js");
var MotoristaModel = require("../model/motorista.js");

function MotoristaController(){
    this.negocio = new Negocio();
}

MotoristaController.prototype.add = async function(usuario){
      return this.negocio.add(usuario);
};

MotoristaController.prototype.findByEmail = async function(email){
    return this.negocio.findByEmail(email);
};

MotoristaController.prototype.findByNome = async function(nome){
    return this.negocio.findByNome(nome);
};

MotoristaController.prototype.update = async function(usuario){
    return this.negocio.update(usuario);
};

MotoristaController.prototype.remove = async function(email){
    return this.negocio.remove(email);
};

module.exports = MotoristaController;