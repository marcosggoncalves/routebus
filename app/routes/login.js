const controllers = require('./../controllers/login.js');
const router = require('express').Router();
var upload = require('../../scripts_base/upload');

router.get('/',(req, res) => {
	controllers.login(req, res);
})
router.get('/finalizar/session',(req, res) => {
	controllers.finalizar_session(req, res);
})
router.get('/cadastrar/conta/usuario',(req, res) => {
	controllers.cadastrar_usuario(req, res);
})
router.post('/cadastrar/conta/usuario/salvar', upload.single('anexo_arquivo'),(req, res) => {
	controllers.cadastrar_usuario_salvar(req, res);
})
router.post('/logar',(req, res) => {
	controllers.autenticar(req, res);
})

module.exports = router;