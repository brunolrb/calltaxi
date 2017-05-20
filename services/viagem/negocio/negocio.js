var RepositorioViagens  = require('../persistencia/repositorio-mongo.js');
var Viagem = require('../model/Viagem.js')

function NegocioViagens() {
    this.persistencia = new RepositorioViagens();
}

NegocioViagens.prototype.add = function(viagem){
    viagem.Data = new Date();
    return this.persistencia.add(viagem);
};

NegocioViagens.prototype.alterarStatusViagem = function(idViagem, status){
    console.log(idViagem);
    return this.persistencia.alterarStatusViagem(idViagem, status);
};

NegocioViagens.prototype.findById = function(id){
    return this.persistencia.findById(id);
};

NegocioViagens.prototype.findByUsuario = function(email){
    return this.persistencia.findByUsuario(email);
};

NegocioViagens.prototype.findByMotorista = function(email){
    return this.persistencia.findByMotorista(email);
};

module.exports = NegocioViagens;