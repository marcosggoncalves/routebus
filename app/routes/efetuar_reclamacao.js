const controllers = require('./../controllers/reclamacao.js');
const router = require('express').Router();
var upload = require('../../utils/upload');

router.get('/', function (req, res) {
	controllers.efetuar_reclamacao(req, res);
});

router.post('/salvar', upload.single('anexo_arquivo'), function (req, res) {
	controllers.salvar_reclamacao(req, res);
});

module.exports = router;