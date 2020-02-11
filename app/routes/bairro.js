module.exports = function (app) {
	app.get('/bairros', function (req, res) {
		app.controllers.bairros.bairros(app, req, res);
	})
}