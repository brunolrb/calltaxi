var RepositorioUsuarios = require('../persistencia/repositorio-mongo.js');
var Usuario = require('../model/usuario.js')

function NegocioUsuarios() {
    this.persistencia = new RepositorioUsuarios();
}

NegocioUsuarios.prototype.validarUsuario = function(usuario) {
    if (usuario.email.search("/[a-z][A-Z]_[0-9]\.]+\@[a-z][A-Z]_[0-9]\.]+/i") < 0) {
        return false;
    }
    if (usuario.cpf.length != 11) {
        return false;
    }
    if (usuario.senha.length < 8) {
        return false;
    }
    return true;
}; 

NegocioUsuarios.prototype.add = async function(usuario) {
   
    console.log("Chamou 3...");
    return this.persistencia.add(usuario);
};

NegocioUsuarios.prototype.findByEmail = async function(email){
   return RepositorioUsuarios.prototype.findByEmail(email);
};

NegocioUsuarios.prototype.findByNome = async function(nome){
    return RepositorioUsuarios.prototype.findByNome(nome);
}; 

NegocioUsuarios.prototype.update = async function(usuario) {
    if (!this.validarUsuario(usuario)) {
        return false;
    }
    return this.persistencia.update(usuario);
};

NegocioUsuarios.prototype.remove = async function(email){
   return RepositorioUsuarios.prototype.remove(email);
}; 

module.exports = NegocioUsuarios;