var Negocio = require("../negocio/negocio.js");
var MotoristaModel = require("../model/motorista.js");

function MotoristaController(){
    this.negocio = new Negocio();
}

MotoristaController.prototype.add = async function(motorista){
    console.log("Chamou add controller motorista...");
    return this.negocio.add(motorista);
};


module.exports = MotoristaController;