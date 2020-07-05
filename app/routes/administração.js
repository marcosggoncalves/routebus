const controllers = require('./../controllers/administração.js');
const controllersCadastros = require('./../controllers/administração_cadastro.js');

const router = require('express').Router();

router.get('/bairros', function (req, res) {
	controllers.bairros(req, res);
})
router.get('/bairros/horarios/:id_bairro', function (req, res) {
	controllers.horario_bairros(req, res);
})
router.get('/bairros/linhas', function (req, res) {
	controllers.linhas(req, res);
})
router.get('/bairros/ruas', function (req, res) {
	controllers.Ruas(req, res);
})
router.get('/bairros/pontos', function (req, res) {
	controllers.pontos(req, res);
})
router.get('/bairros/usuarios', function (req, res) {
	controllers.usuarios(req, res);
})
router.get('/bairros/linhas/cadastros', function (req, res) {
	controllers.linhas_cadastros(req, res);
})
router.get('/cadastros/via', function (req, res) {
	controllersCadastros.vias(req, res);
})
router.get('/cadastros/horario', function (req, res) {
	controllersCadastros.cadastros_horario(req, res);
})
router.post('/cadastrar-via', function (req, res) {
	controllersCadastros.salvar_via(req, res);
})
router.post('/cadastrar-classificacao-horario', function (req, res) {
	controllersCadastros.salvar_horario_classificacao(req, res);
})
router.post('/cadastrar-horario', function (req, res) {
	controllersCadastros.cadastros_horario_salvar(req, res);
})
router.post('/cadastrar-horario-classificacao', function (req, res) {
	controllersCadastros.classificacao_horario(req, res);
})
router.get('/bairros/pontos/cadastros', function (req, res) {
	controllers.pontos_cadastros(req, res);
})
router.get('/bairros/bairros/cadastros', function (req, res) {
	controllers.bairros_cadastros(req, res);
})
router.post('/cadastrar-bairro', function (req, res) {
	controllers.salvar_bairro(req, res);
})
router.post('/cadastrar-linha', function (req, res) {
	controllers.salvar_linha(req, res);
})
router.post('/cadastrar-rua', function (req, res) {
	controllers.salvar_rua(req, res);
})
router.post('/cadastrar-ponto', function (req, res) {
	controllers.salvar_ponto(req, res);
})

module.exports = router;