const controllers = require('./../controllers/favoritos.js');
const router = require('express').Router();

router.get('/salvar/:id_bairro/:id_usuario', function (req, res) {
	controllers.salvar(req, res);
});
router.get('/', function (req, res) {
	controllers.favoritos(req, res);
});

module.exports = router;