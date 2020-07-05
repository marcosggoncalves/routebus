const controllers = require('./../controllers/reclamação.js');
const router = require('express').Router();

router.get('/:busca', function (req, res) {
	controllers.todas_reclamações(req, res);
})
router.get('/admin/:busca', function (req, res) {
	controllers.todas_reclamações_adminstrador_status(req, res);
})
router.get('/todos', function (req, res) {
	controllers.todas_reclamações_adminstrador(req, res);
})
router.get('/comentarios/:busca/:id', function (req, res) {
	controllers.todos_comentarios(req, res);
})
router.post('/comentar/:busca/:id', function (req, res) {
	controllers.new_comentar(req, res);
})
router.get('/status/:id/:status', function (req, res) {
	controllers.status_update(req, res);
})
router.get('/usuario/:id_usuario', function (req, res) {
	controllers.buscar_usuario_reclamacao(req, res);
})

module.exports = router;

