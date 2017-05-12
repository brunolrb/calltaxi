/**
 * async add(usuario) : boolean;
 * async remove(email) : boolean
 * async update(usuario) : boolean
 * async findByEmail(email) : Usuario
 * async findByNome(nome) : [Usuario]
 */

var mongoose = require('mongoose');
var User = require('../model/usuario.js');

function RepositorioUsuarios() {
    this.schema = new mongoose.Schema({
        nome: String,
        cpf: String,
        email: String,
        senha: String
    });
    this.conn = mongoose.connect("mongodb://localhost/usuariodb");
    mongoose.model('Usuario', this.schema);
}

RepositorioUsuarios.prototype.add = async function(usuario) {
    var UsuarioMongo = mongoose.model('Usuario');
    var result = true;
    await UsuarioMongo.create(usuario, function(err, usuarioMongo) {
        if (err) {
            result = false;
            return;
        }
        console.log(usuarioMongo._id);
    });
    return result;
};

RepositorioUsuarios.prototype.remove = async function(valorEmail) {
    var UsuarioMongo = mongoose.model('Usuario');
    var result = true;
    await UsuarioMongo.remove({email: valorEmail}, function(err) {
        if (err) {
            result = false;
        }
    });
    return result;
};

RepositorioUsuarios.prototype.update = async function(usuario) {
    var UsuarioMongo = mongoose.model('Usuario');
    var result = true;
    await UsuarioMongo.findOneAndUpdate({email: usuario.email}, usuario, function(err, usuarioMongo) {
        if (err) {
            result = false;
        }
    });
    return result;
};

RepositorioUsuarios.prototype.findByEmail = async function(valorEmail) {
    var UsuarioMongo = mongoose.model('Usuario');
    var result = null;
    await UsuarioMongo.findOne({email: valorEmail}, function(err, usuarioMongo) {
        if (err) {
            return;
        }
        result = usuarioMongo;
    });
    return result;
};

RepositorioUsuarios.prototype.findByNome = async function(valorNome) {
    var UsuarioMongo = mongoose.model('Usuario');
    var result = [];
    await UsuarioMongo.find({nome: valorNome}, function(err, usuarios) {
        if (err) {
            return;
        }
        result = usuarios;
    });
    return result;
};

module.exports = RepositorioUsuarios;