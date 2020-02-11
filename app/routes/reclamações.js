module.exports = function (app) {
	app.get('/Reclamacoes/:busca', function (req, res) {
		app.controllers.reclamação.todas_reclamações(app, req, res);
	})
	app.get('/Reclamacoes/administracao/:busca', function (req, res) {
		app.controllers.reclamação.todas_reclamações_adminstrador_status(app, req, res);
	})
	app.get('/Todas/reclamacao', function (req, res) {
		app.controllers.reclamação.todas_reclamações_adminstrador(app, req, res);
	})
	app.get('/comentarios/:busca/:id', function (req, res) {
		app.controllers.reclamação.todos_comentarios(app, req, res);
	})
	app.post('/comentar/:busca/:id', function (req, res) {
		app.controllers.reclamação.new_comentar(app, req, res);
	})
	app.get('/Reclamacao/status/:id/:status', function (req, res) {
		app.controllers.reclamação.status_update(app, req, res);
	})
	app.get('/reclamacao/usuario/:id_usuario', function (req, res) {
		app.controllers.reclamação.buscar_usuario_reclamacao(app, req, res);
	})
}