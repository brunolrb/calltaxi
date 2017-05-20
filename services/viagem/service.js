var ViagemController = require("./controllers/viagemController.js");
var controller = new ViagemController();
var express     = require('express');
var app         = express(); 
var bodyParser  = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8002; 
var router  = express.Router(); 

router.route('/viagens')
 
    .post(function(req, res) {
             controller.add(req.body).then(function(inserted) {
        if (inserted) {
            res.json({mensagem: 'Viagem criada com sucesso.'});
        } else {
            res.json({mensagem: 'Erro ao criar Viagem.'});
        }
    });
});

router.route('/viagensMotorista/:email')
.get(function(req, res){
    controller.findByMotorista(req.params.email).then(function(listaRetorno){
        res.json(listaRetorno);
    })
});

router.route('/viagensUsuario/:email')
.get(function(req, res){
    controller.findByUsuario(req.params.email).then(function(listaRetorno){
        res.json(listaRetorno);
    })
});

router.route('/iniciarViagem/:id')
.put(function(req, res){
console.log(req.params.id);
            controller.alterarStatusViagem(req.params.id, 'I').then(function(sucesso){
                if(sucesso)
                {
                    res.json({mensagem: 'Viagem Iniciada com Sucesso.'});
                }
                else
                {
                    res.json({mensagem: 'Falha ao iniciar Viagem.'});
                }
            })
        });

router.route('/encerrarViagem/:id')
.put(function(req, res){
            controller.alterarStatusViagem(req.params.id, 'E').then(function(sucesso){
                if(sucesso)
                {
                    res.json({mensagem: 'Viagem encerrada com Sucesso.'});
                }
                else
                {
                    res.json({mensagem: 'Falha ao iniciar Viagem.'});
                }
            })
        });

app.use('/api', router);
app.listen(port);
console.log('Server running at http://127.0.0.1:8001/');