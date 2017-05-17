var UsuarioController = require("./controllers/usuarioController.js");
var controller = new UsuarioController();
var express     = require('express');
var app         = express(); 
var bodyParser  = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8000; 
var router  = express.Router(); 

router.get('/', function(req, res) {
    res.json({ message: 'YEAH! Seja Bem-Vindo a nossa API' });
});

router.route('/usuarios')
 
    .post(function(req, res) {
             controller.add(req.body).then(function(inserted) {
        if (inserted) {
            res.json({mensagem: 'Usuário inserido com sucesso.'});
        } else {
            res.json({mensagem: 'Erro ao inserir usuário.'});
        }
    });
});

router.route('/usuarioPorEmail/:email')
.get(function(req, res){
    console.log('chamou');
    console.log(req.params.email);
    controller.findByEmail(req.params.email).then(function(listaRetorno){
        res.json(listaRetorno);
    })
});

router.route('/usuarioUpdate')
.put(function(req, res){

    controller.findByEmail(req.body.email).then(function(usuarioRetorno){
            usuarioRetorno.nome = req.body.nome;
            usuarioRetorno.cpf = req.body.cpf;
            usuarioRetorno.email = req.body.email;
            usuarioRetorno.senha = req.body.senha;

            controller.update(usuarioRetorno).then(function(sucesso){
                if(sucesso)
                {
                    res.json({mensagem: 'Usuário Atualizado com sucesso'})`;`
                }
                else
                {
                    res.json({mensagem: 'Falha ao atualizar o usuário.'});
                }
            })
    })
});

router.route('/usuarioPorNome/:nome')
.get(function(req, res){
    controller.findByNome(req.params.nome).then(function(listaRetorno){
        res.json(listaRetorno);
    })
});

router.route('/removeUsuario/:email')
.delete(function(req, res){
    controller.remove(req.params.email).then(function(sucesso){
        if(sucesso){
            res.json({mensagem: 'Usuário Excluído com Sucesso.'})
        }
        else{
            res.json({mensagem: 'Não foi possível Excluir o Usuário.'});
        }
    })
});


app.use('/api', router);
app.listen(port);
console.log('Server running at http://127.0.0.1:8000/');