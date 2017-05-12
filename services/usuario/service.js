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
        console.log("Chamou...");
             controller.add(req.body).then(function(inserted) {
        if (inserted) {
            res.json({mensagem: 'Usuário inserido com sucesso.'});
        } else {
            res.json({mensagem: 'Erro ao inserir usuário.'});
        }
    });
    });

app.use('/api', router);
app.listen(port);
console.log('Server running at http://127.0.0.1:8000/');