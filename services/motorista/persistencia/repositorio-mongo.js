/**
 * async add(motorista) : boolean;
 * async remove(email) : boolean
 * async update(motorista) : boolean
 * async findByEmail(email) : Motorista
 * async findByNome(nome) : [Motorista]
 */

var mongoose = require('mongoose');
var User = require('../model/motorista.js');

function RepositorioMotoristas() {
    this.schema = new mongoose.Schema({
        nome: String,
        cpf: String,
        email: String,
        senha: String
    });
    this.conn = mongoose.connect("mongodb://localhost/motoristadb");
    mongoose.model('Motorista', this.schema);
}

RepositorioMotoristas.prototype.add = async function(motorista) {
    var MotoristaMongo = mongoose.model('Motorista');
    var result = true;
    await MotoristaMongo.create(motorista, function(err, motoristaMongo) {
        if (err) {
            result = false;
            return;
        }
        console.log(motoristaMongo._id);
    });
    return result;
};

RepositorioMotoristas.prototype.remove = async function(valorEmail) {
    var MotoristaMongo = mongoose.model('Motorista');
    var result = true;
    await MotoristaMongo.remove({email: valorEmail}, function(err) {
        if (err) {
            result = false;
        }
    });
    return result;
};

RepositorioMotoristas.prototype.update = async function(motorista) {
    var MotoristaMongo = mongoose.model('Motorista');
    var result = true;
    await MotoristaMongo.findOneAndUpdate({email: motorista.email}, motorista, function(err, motoristaMongo) {
        if (err) {
            result = false;
        }
    });
    return result;
};

RepositorioMotoristas.prototype.findByEmail = async function(valorEmail) {
    var MotoristaMongo = mongoose.model('Motorista');
    var result = null;
    await MotoristaMongo.findOne({email: valorEmail}, function(err, motoristaMongo) {
        if (err) {
            return;
        }
        result = motoristaMongo;
    });
    return result;
};

RepositorioMotoristas.prototype.findByNome = async function(valorNome) {
    var MotoristaMongo = mongoose.model('Motorista');
    var result = [];
    await MotoristaMongo.find({nome: valorNome}, function(err, motoristas) {
        if (err) {
            return;
        }
        result = motoristas;
    });
    return result;
};

module.exports = RepositorioMotoristas;