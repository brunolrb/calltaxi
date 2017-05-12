var Negocio = require("../negocio/negocio.js");
var UsuarioModel = require("../model/usuario.js");

function UsuarioController(){
    this.negocio = new Negocio();
}

UsuarioController.prototype.add = async function(usuario){
    console.log("Chamou 2...");
    return this.negocio.add(usuario);
};


module.exports = UsuarioController;