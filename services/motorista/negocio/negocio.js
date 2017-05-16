var RepositorioMotoristas = require('../persistencia/repositorio-mongo.js');
var Motorista = require('../model/motorista.js')

function NegocioMotoristas() {
    this.persistencia = new RepositorioMotoristas();
}

NegocioMotoristas.prototype.validarMotorista = function(motorista) {
    if (motorista.email.search("/[a-z][A-Z]_[0-9]\.]+\@[a-z][A-Z]_[0-9]\.]+/i") < 0) {
        return false;
    }
    if (motorista.cpf.length != 11) {
        return false;
    }
    if (motorista.senha.length < 8) {
        return false;
    }
    return true;
}; 

NegocioMotoristas.prototype.add = async function(motorista) {
   
    console.log("Chamou add motorista...");
    return this.persistencia.add(motorista);
};

NegocioMotoristas.prototype.findByEmail = async function(email){
   return RepositorioMotoristas.prototype.findByEmail(email);
};

NegocioMotoristas.prototype.findByNome = async function(nome){
    return RepositorioMotoristas.prototype.findByNome(nome);
}; 

NegocioMotoristas.prototype.update = async function(motorista) {
    if (!this.validarMotorista(motorista)) {
        return false;
    }
    return this.persistencia.update(motorista);
};

NegocioMotoristas.prototype.remove = async function(email){
   return RepositorioMotoristas.prototype.remove(email);
}; 

module.exports = NegocioMotoristas;