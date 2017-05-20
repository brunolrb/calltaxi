var Negocio = require('../negocio/negocio.js');
var ViagemModel = require('../model/viagem.js');

function ViagemController(){
    this.negocio = new Negocio();
};

ViagemController.prototype.add = async function(viagem){
      return this.negocio.add(viagem);
};

ViagemController.prototype.alterarStatusViagem = async function(idViagem, status){
      console.log(idViagem);
      return this.negocio.alterarStatusViagem(idViagem, status);
};

ViagemController.prototype.findByUsuario = async function(email){
      return this.negocio.findByUsuario(email);
};

ViagemController.prototype.findByMotorista = async function(email){
      return this.negocio.findByMotorista(email);
};

module.exports = ViagemController;