var mongoose = require('mongoose');
var Viagem = require('../model/viagem.js');

function RepositorioViagens(){
    this.schema = new mongoose.Schema({
        usuario: String,
        motorista: String,
        data: Date,
        origem: String,
        destino: String,
        status: String
    });
    this.conn = mongoose.connect("mongodb://localhost/viagem");
    mongoose.model('Viagem', this.schema);
}

RepositorioViagens.prototype.add = async function(viagem){
    var ViagemMongo = mongoose.model('Viagem');
    var result = true;
    await ViagemMongo.create(viagem, function(err, ViagemMongo){
        if(err){
                result = false;
                return;
        }
    });

    return result;
};

RepositorioViagens.prototype.alterarStatusViagem = async function(idViagem, status){
    console.log(idViagem);
   var ViagemMongo = mongoose.model('Viagem');
    var result = true;
    await ViagemMongo.findOneAndUpdate({_id: idViagem}, {$set : { status : status }}, function(err, ViagemMongo) {
        if (err) {
            result = false;
        }
    });
    return result;
};

RepositorioViagens.prototype.findById = async function(id) {
    var ViagemMongo = mongoose.model('Viagem');
    var result = null;
    await ViagemMongo.findOne({_id: id}, function(err, viagemMongo) {
        if (err) {
            return;
        }
        result = viagemMongo;
    });
    return result;
};

RepositorioViagens.prototype.findByUsuario = async function(email){
    var ViagemMongo = mongoose.model('Viagem');
    var result = null;

    await ViagemMongo.findOne({usuario: email}, function(err, viagemMongo){
        if(err){
            return;
        }

        result = viagemMongo;
    })

    return result;
};

RepositorioViagens.prototype.findByMotorista = async function(email){
    var ViagemMongo = mongoose.model('Viagem');
    var result = null;

    await ViagemMongo.findOne({motorista: email}, function(err, viagemMongo){
        if(err){
            return;
        }

        result = viagemMongo;
    })

    return result;
};

module.exports = RepositorioViagens;