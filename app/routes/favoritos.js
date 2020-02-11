module.exports = function (app) {
	app.get('/Salvar/favorito/:id_bairro/:id_usuario', function (req, res) {
		app.controllers.favoritos.salvar(app, req, res);
	});
	app.get('/favoritos', function (req, res) {
		app.controllers.favoritos.favoritos(app, req, res);
	});
}