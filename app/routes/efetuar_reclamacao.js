module.exports = function(app) {

	var upload = require('../../scripts_base/upload');

	app.get('/efetuar_reclamacao', function(req,res) {
		app.app.controllers.reclamação.efetuar_reclamacao(app,req,res);
	})
	app.post('/registrar_reclamacao',upload.single('anexo_arquivo'),function(req,res) {
		app.app.controllers.reclamação.salvar_reclamacao(app,req,res);
	})
}