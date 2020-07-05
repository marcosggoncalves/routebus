const controllers = require('./../controllers/index.js');
const router = require('express').Router();

router.get('/',(req, res) => {
	controllers.index(req, res);
})
router.get('/dados/pessoais',(req, res) => {
	controllers.dados_pessoais(req, res);
});
router.get('/esquece/senha',(req, res) => {
	controllers.esqueceu_senha(req, res);
})
router.post('/alterar/dados/pessoais',(req, res) => {
	controllers.update_dados_pessoais(req, res);
});
router.post('/senha',(req, res) => {
	controllers.senha_mudar(req, res);
});

module.exports = router;