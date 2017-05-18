var RepositorioMotoristas = require('../persistencia/repositorio-mongo.js');
var Motorista = require('../model/motorista.js')

function NegocioMotoristas() {
    this.persistencia = new RepositorioMotoristas();
}

NegocioMotoristas.prototype.validarMotorista = function(motorista) {

    if (motorista.cpf.length != 11) {
        return false;
    }
    if (motorista.senha.length < 8) {
        return false;
    }
    return true;
}; 

NegocioMotoristas.prototype.add = async function(motorista) {
    return this.persistencia.add(motorista);
};

NegocioMotoristas.prototype.findByEmail = async function(email){
   return this.persistencia.findByEmail(email);
};

NegocioMotoristas.prototype.findByNome = async function(nome){
    return this.persistencia.findByNome(nome);
}; 

NegocioMotoristas.prototype.update = async function(motorista) {
    if (!this.validarMotorista(motorista)) {
        return false;
    }
    return this.persistencia.update(motorista);
};

NegocioMotoristas.prototype.remove = async function(email){
   return this.persistencia.remove(email);
}; 

module.exports = NegocioMotoristas;