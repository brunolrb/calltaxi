var Negocio = require("../negocio/negocio.js");
var UsuarioModel = require("../model/usuario.js");

function UsuarioController(){
    this.negocio = new Negocio();
};

UsuarioController.prototype.add = async function(usuario){
      return this.negocio.add(usuario);
};

UsuarioController.prototype.findByEmail = async function(email){
    return this.negocio.findByEmail(email);
};

UsuarioController.prototype.findByNome = async function(nome){
    return this.negocio.findByNome(nome);
};

UsuarioController.prototype.update = async function(usuario){
    return this.negocio.update(usuario);
};

UsuarioController.prototype.remove = async function(email){
    return this.negocio.remove(email);
};

module.exports = UsuarioController;