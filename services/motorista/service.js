var MotoristaController = require("./controllers/motoristaController.js");
var controller = new MotoristaController();
var express     = require('express');
var app         = express(); 
var bodyParser  = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8001; 
var router  = express.Router(); 

router.route('/motoristas')
 
    .post(function(req, res) {
             controller.add(req.body).then(function(inserted) {
        if (inserted) {
            res.json({mensagem: 'Motorista inserido com sucesso.'});
        } else {
            res.json({mensagem: 'Motorista ao inserir usuário.'});
        }
    });
});

router.route('/motoristaPorEmail/:email')
.get(function(req, res){
    controller.findByEmail(req.params.email).then(function(listaRetorno){
        res.json(listaRetorno);
    })
});

router.route('/motoristaUpdate')
.put(function(req, res){

    controller.findByEmail(req.body.email).then(function(motoristaRetorno){
            motoristaRetorno.nome = req.body.nome;
            motoristaRetorno.cpf = req.body.cpf;
            motoristaRetorno.email = req.body.email;
            motoristaRetorno.senha = req.body.senha;

            controller.update(motoristaRetorno).then(function(sucesso){
                if(sucesso)
                {
                    res.json({mensagem: 'Motorista Atualizado com sucesso'})`;`
                }
                else
                {
                    res.json({mensagem: 'Falha ao atualizar o Motorista.'});
                }
            })
    })
});

router.route('/motoristaPorNome/:nome')
.get(function(req, res){
    controller.findByNome(req.params.nome).then(function(listaRetorno){
        res.json(listaRetorno);
    })
});

router.route('/removeMotorista/:email')
.delete(function(req, res){
    controller.remove(req.params.email).then(function(sucesso){
        if(sucesso){
            res.json({mensagem: 'Motorista Excluído com Sucesso.'})
        }
        else{
            res.json({mensagem: 'Não foi possível Excluir o Motorista.'});
        }
    })
});

app.use('/api', router);
app.listen(port);
console.log('Server running at http://127.0.0.1:8001/');